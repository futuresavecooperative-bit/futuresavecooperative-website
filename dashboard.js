export default function Dashboard() {
  const copyText = (text) => {
    navigator.clipboard.writeText(text);
    alert("Copied to clipboard");
  };

  const exportStatement = () => {
    alert("Statement export coming soon (PDF/CSV)");
  };

  return (
    <main style={{ padding: 40, fontFamily: "Arial" }}>
      <h1>Member Dashboard</h1>

      <p>
        Welcome to your Future Save Cooperative member area.
      </p>

      {/* BALANCE CARD */}
      <section
        style={{
          marginTop: 30,
          padding: 20,
          border: "1px solid #e2e8f0",
          borderRadius: 10,
          background: "#f9fafb",
        }}
      >
        <h2>Total Savings</h2>
        <p style={{ fontSize: "1.8rem", fontWeight: "700" }}>
          ₦0.00
        </p>
      </section>

      {/* DETAILS */}
      <section style={{ marginTop: 40 }}>
        <h2>Account Details</h2>

        <p>
          <strong>Member ID:</strong> FSC/2026/001
        </p>

        <p>
          <strong>Plan:</strong> Thrift Savings
        </p>

        <p>
          <strong>Status:</strong> Active
        </p>

        <button
          onClick={() => copyText("FSC/2026/001")}
          style={{
            marginTop: 10,
            padding: "8px 14px",
            borderRadius: 6,
            border: "1px solid #0f172a",
            cursor: "pointer",
          }}
        >
          Copy Member ID
        </button>
      </section>

      {/* TRANSACTIONS */}
      <section style={{ marginTop: 40 }}>
        <h2>Recent Transactions</h2>

        <table
          border="1"
          cellPadding="10"
          style={{ borderCollapse: "collapse", width: "100%" }}
        >
          <thead>
            <tr>
              <th>Date</th>
              <th>Description</th>
              <th>Amount</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>22 Jan 2026</td>
              <td>January Thrift</td>
              <td>₦5,000</td>
              <td>Approved</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* EXPORT */}
      <section style={{ marginTop: 40 }}>
        <h2>Statements</h2>

        <button
          onClick={exportStatement}
          style={{
            marginTop: 10,
            padding: "10px 18px",
            background: "#0f172a",
            color: "white",
            borderRadius: 8,
            border: "none",
            cursor: "pointer",
          }}
        >
          Export Statement
        </button>
      </section>
    </main>
  );
            }
