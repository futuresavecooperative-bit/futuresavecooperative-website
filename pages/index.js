export default function Home() {
  const whatsappMessage = encodeURIComponent(
    "Hello Future Save Cooperative,\n\n" +
      "I would like to apply for membership.\n\n" +
      "Full Name:\n" +
      "Phone Number:\n" +
      "Location:\n" +
      "Preferred Savings Plan:\n\n" +
      "Thank you."
  );

  // ✅ MUST use backticks here
  const whatsappLink = {https://wa.me/2347068967636?text=${whatsappMessage}};
  return (
    <main style={{ padding: 40, fontFamily: "Arial" }}>
      {/* HERO SECTION */}
      <section style={{ textAlign: "center", padding: "64px 16px" }}>
        <h1
          style={{
            fontSize: "2.8rem",
            fontWeight: "700",
            color: "#0f172a",
          }}
        >
          Future Save Cooperative
        </h1>

        <p
          style={{
            marginTop: "12px",
            fontSize: "1.1rem",
            color: "#475569",
          }}
        >
          Structured savings. Cooperative growth. Sustainable future.
        </p>

        <p
          style={{
            marginTop: "8px",
            fontSize: "0.85rem",
            color: "#64748b",
          }}
        >
          Operated by{" "}
          <strong>Future Save Multi-purpose Co-operative Society Limited</strong>
        </p>

        <a
          href={whatsappLink}
          style={{
            display: "inline-block",
            marginTop: "18px",
            padding: "12px 18px",
            backgroundColor: "#16a34a",
            color: "white",
            borderRadius: "8px",
            textDecoration: "none",
            fontWeight: "600",
          }}
        >
        Apply for Membership (via WhatsApp)
      </a>

      {/* TRUST POINTS */}
      <ul style={{ marginTop: 30, lineHeight: "1.8" }}>
        <li>✔ Registered Cooperative Society (Reg. No: 47061)</li>
        <li>✔ Governed by Members & Elected Trustees</li>
        <li>✔ Manual onboarding for safety & transparency</li>
        <li>✔ No instant returns promised</li>
      </ul>

      {/* HOW REGISTRATION WORKS */}
      <section style={{ marginTop: 50 }}>
        <h2>How Registration Works</h2>
        <ol style={{ lineHeight: "1.8" }}>
          <li>Click <strong>Register via WhatsApp</strong></li>
          <li>Submit your basic details</li>
          <li>Admin verification & approval</li>
          <li>Member ID issued</li>
          <li>Savings activation instructions sent</li>
        </ol>

        <p style={{ fontStyle: "italic" }}>
          Registration is confirmed only after admin verification.
        </p>
      </section>
          {/* WHAT HAPPENS AFTER APPROVAL */}
<section style={{ marginTop: 50 }}>
  <h2>What Happens After Approval</h2>

  <ol style={{ lineHeight: "1.8", maxWidth: 700 }}>
    <li>You receive your official <strong>Member ID</strong></li>
    <li>You are added to the members’ communication channel</li>
    <li>Savings plans and contribution instructions are shared</li>
    <li>Your savings wallet is activated after first contribution</li>
    <li>You gain access to cooperative updates and reports</li>
  </ol>

  <p style={{ fontStyle: "italic", marginTop: 15 }}>
    All activities follow cooperative rules and are transparently recorded.
  </p>
</section>
{/* SAVINGS PLANS OVERVIEW */}
<section style={{ marginTop: 50 }}>
  <h2>Savings Plans (Overview)</h2>

  <ul style={{ lineHeight: "1.8", maxWidth: 700 }}>
    <li>
      <strong>Thrift Savings:</strong> Regular member contributions for disciplined savings.
    </li>
    <li>
      <strong>Premium Savings:</strong> Pooled contributions for cooperative trading and asset-backed activities.
    </li>
    <li>
      <strong>Asset Savings:</strong> Long-term contributions toward cooperative-owned income assets.
    </li>
  </ul>

  <p style={{ fontStyle: "italic", marginTop: 15 }}>
    Participation details, timelines, and contribution terms are shared after membership approval.
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
            
<section style={{ marginTop: 50 }}>
  <h2>What We Do (and What We Don’t)</h2>

  <ul style={{ lineHeight: "1.8", maxWidth: 700 }}>
    <li>✔ We operate as a registered cooperative society</li>
    <li>✔ Members save collectively and invest responsibly</li>
    <li>✔ Returns are based on real cooperative activities</li>
    <li>✔ All funds are managed with transparency and verification</li>

    <li style={{ marginTop: 15 }}>✖ We are not a bank</li>
    <li>✖ We do not promise fixed or instant returns</li>
    <li>✖ We do not operate Ponzi or high-yield schemes</li>
    <li>✖ Withdrawals follow cooperative rules</li>
  </ul>

  <p style={{ fontStyle: "italic", marginTop: 15 }}>
    Future Save Cooperative prioritizes long-term financial stability over speculation.
  </p>
</section>
<section style={{ marginTop: 50 }}>
  <h2>Frequently Asked Questions</h2>

  <p><strong>Is my money safe?</strong><br />
  Funds are managed collectively and recorded transparently. No funds are accepted without verification.</p>

  <p><strong>Can I withdraw anytime?</strong><br />
  Withdrawals follow cooperative rules and timelines.</p>

  <p><strong>Is this open to everyone?</strong><br />
  Membership is approved after verification.</p>
</section>
      <footer style={{
  backgroundColor: "#0f172a",
  color: "#ffffff",
  padding: "24px 16px",
  marginTop: "40px",
  textAlign: "center"
}}>
  <h3 style={{ fontWeight: "600", marginBottom: "8px" }}>
    Future Save Multi-purpose Co-operative Society Limited
  </h3>

  <p style={{ fontSize: "14px", lineHeight: "1.6" }}>
    Registered Cooperative Society <br />
    RC No: 47061 <br />
    49 Shell Road, by Salubi Junction, Sapele, Delta State
  </p>

  <p style={{ fontSize: "12px", marginTop: "12px", opacity: "0.8" }}>
    © {new Date().getFullYear()} Future Save Multi-purpose Co-operative Society Limited. All rights reserved.
  </p>
</footer>
</main>
  );
}
