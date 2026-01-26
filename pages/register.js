import { useState } from "react";

export default function Register() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <main style={{ maxWidth: 720, margin: "0 auto", padding: 30, fontFamily: "Arial" }}>
      <h1>Membership Subscription Form</h1>
      <p style={{ color: "#475569" }}>
        Apply to become a member of Future Save Cooperative. All applications are reviewed
        before approval.
      </p>

      {submitted ? (
        <div style={{
          background: "#ecfdf5",
          border: "1px solid #86efac",
          padding: 16,
          borderRadius: 10,
          marginTop: 20
        }}>
          ✅ Application submitted successfully.  
          Our admin team will contact you after verification.
        </div>
      ) : (
        <form onSubmit={handleSubmit} style={{ marginTop: 25 }}>

          <Field label="Full Name" required />
          <Field label="Phone Number" required />
          <Field label="Email Address" />
          <Field label="Residential Address" required />

          <div style={{ marginBottom: 15 }}>
            <label>Preferred Savings Plan</label>
            <select required style={inputStyle}>
              <option value="">-- Select Plan --</option>
              <option>Thrift Savings</option>
              <option>Premium Savings</option>
              <option>Asset Savings</option>
            </select>
          </div>

          <Field label="Occupation" />

          <div style={{ marginBottom: 15 }}>
            <label>
              <input type="checkbox" required /> I agree to the{" "}
              <a href="/agreement" target="_blank">Membership Agreement</a>
            </label>
          </div>

          <button style={btnPrimary}>
            Submit Application
          </button>
        </form>
      )}
    </main>
  );
}

function Field({ label, required }) {
  return (
    <div style={{ marginBottom: 15 }}>
      <label>{label}</label>
      <input required={required} style={inputStyle} />
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: 12,
  marginTop: 6,
  borderRadius: 8,
  border: "1px solid #cbd5e1"
};

const btnPrimary = {
  background: "#0f172a",
  color: "white",
  padding: "12px 18px",
  border: "none",
  borderRadius: 8,
  fontWeight: 600,
  cursor: "pointer"
};
