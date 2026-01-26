import { useState } from "react";

const SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbyE25UMKDyUDlmwYP6WJxde8H7yxyTgExh7kaU2IiQeJRX98-urF9zQxa40bcaTQmn3/exec";

export default function Register() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setResult(null);

    const form = new FormData(e.target);

    const payload = {
      fullName: form.get("fullName")?.toString().trim(),
      phone: form.get("phone")?.toString().trim(),
      email: form.get("email")?.toString().trim(),
      address: form.get("address")?.toString().trim(),
      plan: form.get("plan")?.toString().trim(),
      occupation: form.get("occupation")?.toString().trim(),
      agreed: form.get("agreed") === "on",
      source: "website",
      createdAt: new Date().toISOString(),
    };

    try {
      const res = await fetch(SCRIPT_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const text = await res.text();
      let json;
      try {
        json = JSON.parse(text);
      } catch {
        json = { ok: false, error: "Non-JSON response", raw: text };
      }

      if (!res.ok || !json.ok) {
        throw new Error(json.error || "Submission failed");
      }

      setResult({ ok: true, message: "✅ Application submitted successfully." });
      e.target.reset();
    } catch (err) {
      setResult({ ok: false, message: "❌ " + err.message });
    } finally {
      setLoading(false);
    }
  }

  return (
    <main style={{ maxWidth: 720, margin: "0 auto", padding: 30, fontFamily: "Arial" }}>
      <h1>Membership Subscription Form</h1>
      <p style={{ color: "#475569" }}>
        Apply to become a member of Future Save Cooperative. All applications are reviewed
        before approval.
      </p>

      {result && (
        <div
          style={{
            marginTop: 16,
            padding: 14,
            borderRadius: 10,
            border: "1px solid " + (result.ok ? "#86efac" : "#fca5a5"),
            background: result.ok ? "#ecfdf5" : "#fef2f2",
          }}
        >
          {result.message}
        </div>
      )}

      <form onSubmit={handleSubmit} style={{ marginTop: 25 }}>
        <Field label="Full Name" name="fullName" required />
        <Field label="Phone Number" name="phone" required />
        <Field label="Email Address" name="email" />
        <Field label="Residential Address" name="address" required />

        <div style={{ marginBottom: 15 }}>
          <label>Preferred Savings Plan</label>
          <select name="plan" required style={inputStyle}>
            <option value="">-- Select Plan --</option>
            <option>Thrift Savings</option>
            <option>Premium Savings</option>
            <option>Asset Savings</option>
          </select>
        </div>

        <Field label="Occupation" name="occupation" />

        <div style={{ marginBottom: 15 }}>
          <label>
            <input type="checkbox" name="agreed" required /> I agree to the{" "}
            <a href="/agreement" target="_blank" rel="noreferrer">
              Membership Agreement
            </a>
          </label>
        </div>

        <button disabled={loading} style={{ ...btnPrimary, opacity: loading ? 0.7 : 1 }}>
          {loading ? "Submitting..." : "Submit Application"}
        </button>
      </form>
    </main>
  );
}

function Field({ label, name, required }) {
  return (
    <div style={{ marginBottom: 15 }}>
      <label>{label}</label>
      <input name={name} required={required} style={inputStyle} />
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: 12,
  marginTop: 6,
  borderRadius: 8,
  border: "1px solid #cbd5e1",
};

const btnPrimary = {
  background: "#0f172a",
  color: "white",
  padding: "12px 18px",
  border: "none",
  borderRadius: 8,
  fontWeight: 600,
  cursor: "pointer",
};
