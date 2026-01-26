import { useMemo, useState } from "react";

export default function Dashboard() {
  // 🔧 Replace with your Apps Script Web App URL
  const API_BASE = "PASTE_YOUR_APPS_SCRIPT_WEB_APP_URL_HERE";

  const [memberId, setMemberId] = useState("");
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
      `Balance: ₦${Number(data.balance).toLocaleString()}`,
      "",
      "Transactions:",
      "DATE | TYPE | AMOUNT | DESCRIPTION",
      ...data.transactions.map(t =>
        `${t.date} | ${t.type} | ₦${Number(t.amount).toLocaleString()} | ${t.description}`
      ),
    ];
    return lines.join("\n");
  }, [data]);

  async function fetchMember() {
    setLoading(true);
    setError("");
    setData(null);

    try {
      const url = `${API_BASE}?member_id=${encodeURIComponent(memberId.trim())}`;
      const res = await fetch(url);
      const json = await res.json();

      if (json.error) {
        setError(json.error);
      } else {
        setData(json);
      }
    } catch (e) {
      setError("Network error. Please try again.");
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

    const headers = ["date", "type", "amount", "description", "status"];
    const rows = data.transactions.map(t =>
      headers.map(h => `"${String(t[h] ?? "").replace(/"/g, '""')}"`).join(",")
    );
    const csv = [headers.join(","), ...rows].join("\n");

    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `${data.member.member_id}_statement.csv`;
    link.click();
  }

  return (
    <main style={{ padding: 28, fontFamily: "Arial", maxWidth: 980, margin: "0 auto" }}>
      <h1 style={{ marginBottom: 6 }}>Member Dashboard</h1>
      <p style={{ color: "#475569", marginTop: 0 }}>
        Enter your Member ID to view your approved contributions and statement.
      </p>

      <div style={{
        display: "flex",
        gap: 10,
        alignItems: "center",
        flexWrap: "wrap",
        marginTop: 18,
        padding: 14,
        border: "1px solid #e2e8f0",
        borderRadius: 10
      }}>
        <input
          value={memberId}
          onChange={(e) => setMemberId(e.target.value)}
          placeholder="e.g. FSC/2026/014"
          style={{
            flex: "1 1 240px",
            padding: 12,
            borderRadius: 8,
            border: "1px solid #cbd5e1"
          }}
        />
        <button
          onClick={fetchMember}
          disabled={!memberId.trim() || loading}
          style={{
            padding: "12px 16px",
            borderRadius: 8,
            border: "none",
            backgroundColor: "#0f172a",
            color: "white",
            cursor: "pointer",
            opacity: (!memberId.trim() || loading) ? 0.6 : 1
          }}
        >
          {loading ? "Loading..." : "View Dashboard"}
        </button>
      </div>

      {error && (
        <div style={{ marginTop: 14, padding: 12, background: "#fff7ed", border: "1px solid #fed7aa", borderRadius: 10 }}>
          <strong>Error:</strong> {error}
        </div>
      )}

      {data && (
        <>
          <section style={{ marginTop: 18, display: "grid", gap: 12, gridTemplateColumns: "1fr 1fr" }}>
            <div style={{ padding: 14, border: "1px solid #e2e8f0", borderRadius: 10 }}>
              <h3 style={{ marginTop: 0 }}>Member Profile</h3>
              <div><strong>Name:</strong> {data.member.full_name}</div>
              <div><strong>Member ID:</strong> {data.member.member_id}</div>
              <div><strong>Plan:</strong> {data.member.plan}</div>
              <div><strong>Status:</strong> {data.member.status}</div>
            </div>

            <div style={{ padding: 14, border: "1px solid #e2e8f0", borderRadius: 10 }}>
              <h3 style={{ marginTop: 0 }}>Wallet</h3>
              <div style={{ fontSize: 28, fontWeight: 700 }}>
                ₦{Number(data.balance).toLocaleString()}
              </div>
              <div style={{ color: "#475569", marginTop: 6 }}>
                Balance is calculated from approved transactions only.
              </div>
            </div>
          </section>

          <section style={{ marginTop: 18, padding: 14, border: "1px solid #e2e8f0", borderRadius: 10 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 10, flexWrap: "wrap" }}>
              <h3 style={{ margin: 0 }}>Recent Transactions</h3>
              <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                <button onClick={copyStatement} style={btnLight}>Copy Statement</button>
                <button onClick={exportCSV} style={btnDark}>Export CSV</button>
              </div>
            </div>

            <div style={{ overflowX: "auto", marginTop: 12 }}>
              <table style={{ width: "100%", borderCollapse: "collapse" }}>
                <thead>
                  <tr>
                    {["Date", "Type", "Amount", "Description"].map(h => (
                      <th key={h} style={th}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {data.transactions.length === 0 ? (
                    <tr><td colSpan="4" style={td}>No approved transactions yet.</td></tr>
                  ) : data.transactions.map((t, i) => (
                    <tr key={i}>
                      <td style={td}>{t.date}</td>
                      <td style={td}>{t.type}</td>
                      <td style={td}>₦{Number(t.amount).toLocaleString()}</td>
                      <td style={td}>{t.description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section style={{ marginTop: 18 }}>
            <h3>Statement Preview</h3>
            <textarea
              readOnly
              value={statementText}
              style={{
                width: "100%",
                minHeight: 220,
                padding: 12,
                border: "1px solid #cbd5e1",
                borderRadius: 10,
                fontFamily: "monospace"
              }}
            />
          </section>
        </>
      )}
    </main>
  );
}

const th = { textAlign: "left", padding: 10, borderBottom: "1px solid #e2e8f0", color: "#0f172a" };
const td = { padding: 10, borderBottom: "1px solid #f1f5f9", color: "#0f172a" };

const btnLight = {
  padding: "10px 12px",
  borderRadius: 8,
  border: "1px solid #cbd5e1",
  background: "white",
  cursor: "pointer"
};

const btnDark = {
  padding: "10px 12px",
  borderRadius: 8,
  border: "none",
  background: "#0f172a",
  color: "white",
  cursor: "pointer"
};
