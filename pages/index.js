export default function Home() {
  return (
    <main style={{ padding: 40, fontFamily: "Arial" }}>
      <h1>Future Save Cooperative</h1>

      <p>Secure savings. Cooperative growth. Sustainable wealth.</p>
      <p>Website deployment successful.</p>

      <a
        href="https://wa.me/2347068967636?text=Hello%20I%20want%20to%20register%20with%20Future%20Save%20Cooperative"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: "inline-block",
          marginTop: 20,
          padding: "14px 24px",
          backgroundColor: "#25D366",
          color: "#ffffff",
          textDecoration: "none",
          borderRadius: 6,
          fontSize: 16,
          fontWeight: "bold"
        }}
      >
        Register via WhatsApp button to homepage
      </a>
    <div style={{ marginTop: 40 }}>
        <h2>How Registration Works</h2>

        <ol style={{ fontSize: 16, lineHeight: "1.8" }}>
          <li>
            Click <strong>Register via WhatsApp</strong> to start a chat with our
            official admin.
          </li>
          <li>
            Send your full name, phone number, and preferred savings plan.
          </li>
          <li>
            Receive your <strong>Member ID</strong> and onboarding instructions.
          </li>
        </ol>

        <p style={{ marginTop: 20, fontStyle: "italic" }}>
          Registration is confirmed only after admin verification.
        </p>
    </div>
</main>
);
} 
