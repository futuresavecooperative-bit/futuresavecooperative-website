export default function Home() {
  return (
    <main style={{ padding: 40, fontFamily: "Arial" }}>

      {/* HERO SECTION */}
      <section style={{ marginBottom: 50 }}>
        <h1 style={{ fontSize: 36, marginBottom: 10 }}>
          Future Save Cooperative Society
        </h1>

        <p style={{ fontSize: 18, fontWeight: "bold", marginBottom: 10 }}>
          Secure savings. Cooperative growth. Sustainable wealth.
        </p>

        <p style={{ fontSize: 16, maxWidth: 700 }}>
          A member-owned cooperative registered in Delta State, focused on
          disciplined savings, asset-backed investments, and long-term
          financial empowerment.
        </p>

        {/* CTA BUTTON */}
        <a
          href="https://wa.me/2347068967636"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-block",
            marginTop: 25,
            padding: "14px 22px",
            backgroundColor: "#25D366",
            color: "#fff",
            textDecoration: "none",
            borderRadius: 6,
            fontWeight: "bold",
          }}
        >
          Register via WhatsApp (Soft Launch)
        </a>
      </section>

      {/* TRUST STRIP */}
      <section style={{ marginBottom: 40 }}>
        <ul style={{ lineHeight: "1.8", fontSize: 15 }}>
          <li>✔ Registered Cooperative Society (Reg. No: 47061)</li>
          <li>✔ Governed by Members & Elected Trustees</li>
          <li>✔ Manual onboarding for safety & transparency</li>
          <li>✔ No instant returns promised</li>
        </ul>
      </section>

      {/* HOW REGISTRATION WORKS */}
      <section>
        <h2>How Registration Works</h2>
        <ol style={{ fontSize: 16, lineHeight: "1.8" }}>
          <li>Click <strong>Register via WhatsApp</strong></li>
          <li>Submit your basic details</li>
          <li>Admin verification & approval</li>
          <li>Member ID issued</li>
          <li>Savings activation instructions sent</li>
        </ol>

        <p style={{ fontStyle: "italic", marginTop: 15 }}>
          Registration is confirmed only after admin verification.
        </p>
      </section>

    {/* WHO THIS IS FOR */}
<section style={{ marginTop: 50 }}>
  <h2>Who This Is For</h2>

  <ul style={{ fontSize: 16, lineHeight: "1.8", maxWidth: 700 }}>
    <li>Individuals who want disciplined and structured savings</li>
    <li>Business owners seeking cooperative-based financial growth</li>
    <li>Professionals interested in asset-backed cooperative investments</li>
    <li>Long-term thinkers (not quick-profit seekers)</li>
  </ul>

  <p style={{ marginTop: 15, fontStyle: "italic" }}>
    Membership is open to eligible individuals upon verification.
  </p>
</section>
  );
        }
