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

  const whatsappLink = `https://wa.me/2347068967636?text=${whatsappMessage}`;

  return (
    <main style={{ padding: 40, fontFamily: "Arial" }}>

      {/* HERO SECTION */}
      <h1>Future Save Cooperative Society</h1>
      <p><strong>Secure savings. Cooperative growth. Sustainable wealth.</strong></p>

      <p style={{ maxWidth: 700 }}>
        A member-owned cooperative registered in Delta State, focused on disciplined
        savings, asset-backed investments, and long-term financial empowerment.
      </p>

      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: "inline-block",
          marginTop: 20,
          padding: "12px 24px",
          backgroundColor: "#25D366",
          color: "#fff",
          textDecoration: "none",
          borderRadius: 6,
          fontWeight: "bold"
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
</main>
  );
}
