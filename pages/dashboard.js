import { useMemo, useState } from "react";

const SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbyE25UMKDyUDlmwYP6WJxde8H7yxyTgExh7kaU2IiQeJRX98-urF9zQxa40bcaTQmn3/exec";

export default function Dashboard() {
  const [memberId, setMemberId] = useState("");
  const [pin, setPin] = useState("");
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState("");

  const statementText = useMemo(() => {
    if (!data) return "";
    const lines = [
      `Future Save Cooperative - Member Statement`,
      `Member ID: ${data.member.member_id}`,
      `Name: ${data.member.full_name}`,
      `Plan: ${data.member.plan}`,
      `Status: ${data.member.status}`,
      `Balance: ₦${Number(data.balance).toLocaleString("en-NG")}`,
      "",
      "Transactions:",
      "DATE | TYPE | AMOUNT | DESCRIPTION",
      ...(data.transactions || []).map(
        (t) =>
          `${t.date} | ${t.type} | ₦${Number(t.amount).toLocaleString("en-NG")} | ${t.description}`
      ),
    ];
    return lines.join("\n");
  }, [data]);

  async function loginAndLoad() {
    setLoading(true);
    setError("");
    setData(null);

    try {
      const res = await fetch(SCRIPT_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          action: "dashboard",
          member_id: memberId.trim(),
          pin: pin.trim(),
        }),
      });

      const text = await res.text();
      let json;
      try {
        json = JSON.parse(text);
      } catch {
        json = { ok: false, error: "Non-JSON response", raw: text };
      }

      if (!res.ok || !json.ok) throw new Error(json.error || "Login failed");
      setData(json);
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  }

  function copyStatement() {
    navigator.clipboard.writeText(statementText);
    alert("Statement copied!");
  }

  function exportCSV() {
    if (!data) return;
    const headers = ["date", "type", "amount", "description", "status", "reference"];
    const rows = (data.transactions || []).map((t) =>
      headers.map((h) => `"${String(t[h] ?? "").replace(/"/g, '""')}"`).join(",")
    );
    const csv = [headers.join(","), ...rows].join("\n");

    const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = `${data.member.member_id}_statement_${new Date().toISOString().slice(0, 10)}.csv`;
    a.click();
  }

  return (
    <main style={{ padding: 28, fontFamily: "Arial", maxWidth: 980, margin: "0 auto" }}>
      <h1 style={{ marginBottom: 6 }}>Member Dashboard</h1>
      <p style={{ color: "#475569", marginTop: 0 }}>
        Login with your Member ID and PIN to view your approved contributions.
      </p>

      {!data && (
        <div
          style={{
            display: "grid",
            gap: 10,
            maxWidth: 520,
            marginTop: 18,
            padding: 14,
            border: "1px solid #e2e8f0",
            borderRadius: 10,
          }}
        >
          <input
            value={memberId}
            onChange={(e) => setMemberId(e.target.value)}
            placeholder="Member ID (e.g. FSC/2026/014)"
            style={inputStyle}
          />
          <input
            value={pin}
            onChange={(e) => setPin(e.target.value)}
            placeholder="PIN (4 digits)"
            type="password"
            inputMode="numeric"
            style={inputStyle}
          />
          <button
            onClick={loginAndLoad}
            disabled={!memberId.trim() || !pin.trim() || loading}
            style={{
              ...btnDark,
              opacity: !memberId.trim() || !pin.trim() || loading ? 0.6 : 1,
            }}
          >
            {loading ? "Logging in..." : "Login"}
          </button>

          {error && (
            <div style={{ padding: 12, background: "#fef2f2", border: "1px solid #fca5a5", borderRadius: 10 }}>
              <strong>Error:</strong> {error}
            </div>
          )}
        </div>
      )}

      {data && (
        <>
          <section style={{ marginTop: 18, display: "grid", gap: 12, gridTemplateColumns: "1fr 1fr" }}>
            <div style={card}>
              <h3 style={{ marginTop: 0 }}>Member Profile</h3>
              <div><strong>Name:</strong> {data.member.full_name}</div>
              <div><strong>Member ID:</strong> {data.member.member_id}</div>
              <div><strong>Plan:</strong> {data.member.plan}</div>
              <div><strong>Status:</strong> {data.member.status}</div>
            </div>

            <div style={card}>
              <h3 style={{ marginTop: 0 }}>Wallet Balance</h3>
              <div style={{ fontSize: 28, fontWeight: 700 }}>
                ₦{Number(data.balance).toLocaleString("en-NG")}
              </div>
              <div style={{ color: "#475569", marginTop: 6 }}>
                Balance is calculated from approved transactions only.
              </div>
            </div>
          </section>

          <section style={{ marginTop: 18, ...card }}>
            <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 10 }}>
              <h3 style={{ margin: 0 }}>Recent Transactions</h3>
              <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                <button onClick={copyStatement} style={btnLight}>Copy Statement</button>
                <button onClick={exportCSV} style={btnDark}>Export CSV</button>
                <button onClick={() => setData(null)} style={btnLight}>Logout</button>
              </div>
            </div>

            <div style={{ overflowX: "auto", marginTop: 12 }}>
              <table style={{ width: "100%", borderCollapse: "collapse" }}>
                <thead>
                  <tr>
                    {["Date", "Type", "Amount", "Description"].map((h) => (
                      <th key={h} style={th}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {(data.transactions || []).length === 0 ? (
                    <tr><td colSpan="4" style={td}>No approved transactions yet.</td></tr>
                  ) : (
                    data.transactions.map((t, i) => (
                      <tr key={i}>
                        <td style={td}>{t.date}</td>
                        <td style={td}>{t.type}</td>
                        <td style={td}>₦{Number(t.amount).toLocaleString("en-NG")}</td>
                        <td style={td}>{t.description}</td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </section>

          <section style={{ marginTop: 18 }}>
            <h3>Statement Preview</h3>
            <textarea readOnly value={statementText} style={textareaStyle} />
          </section>
        </>
      )}
    </main>
  );
}

const inputStyle = {
  width: "100%",
  padding: 12,
  borderRadius: 8,
  border: "1px solid #cbd5e1",
};

const card = {
  padding: 14,
  border: "1px solid #e2e8f0",
  borderRadius: 10,
};

const th = { textAlign: "left", padding: 10, borderBottom: "1px solid #e2e8f0", color: "#0f172a" };
const td = { padding: 10, borderBottom: "1px solid #f1f5f9", color: "#0f172a" };

const textareaStyle = {
  width: "100%",
  minHeight: 220,
  padding: 12,
  border: "1px solid #cbd5e1",
  borderRadius: 10,
  fontFamily: "monospace",
};

const btnLight = {
  padding: "10px 12px",
  borderRadius: 8,
  border: "1px solid #cbd5e1",
  background: "white",
  cursor: "pointer",
};

const btnDark = {
  padding: "10px 12px",
  borderRadius: 8,
  border: "none",
  background: "#0f172a",
  color: "white",
  cursor: "pointer",
};
