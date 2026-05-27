export default function App() {
  return (
    <div
      style={{
        background:
          "radial-gradient(circle at top, #0f172a 0%, #020617 60%, #000 100%)",
        minHeight: "100vh",
        color: "white",
        fontFamily: "Arial",
        overflow: "hidden",
      }}
    >
      {/* 顶部导航 */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "25px 60px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "15px",
          }}
        >
          <img
            src="https://raw.githubusercontent.com/qxbenke/QCoin/main/assets/qx-logo.png"
            alt="Q Coin"
            style={{
              width: "50px",
              height: "50px",
            }}
          />

          <h2>Q Coin</h2>
        </div>

        <div
          style={{
            display: "flex",
            gap: "25px",
            color: "#aaa",
          }}
        >
          <span>Home</span>
          <span>Tokenomics</span>
          <span>Roadmap</span>
          <span>Community</span>
        </div>
      </div>

      {/* Hero */}
      <div
        style={{
          textAlign: "center",
          padding: "80px 20px",
        }}
      >
        <img
          src="https://raw.githubusercontent.com/qxbenke/QCoin/main/assets/qx-logo.png"
          alt="Q Coin"
          style={{
            width: "220px",
            marginBottom: "30px",
            filter: "drop-shadow(0 0 40px #3b82f6)",
          }}
        />

        <h1
          style={{
            fontSize: "72px",
            marginBottom: "20px",
            fontWeight: "bold",
          }}
        >
          Q Coin (QX)
        </h1>

        <p
          style={{
            fontSize: "24px",
            color: "#94a3b8",
            maxWidth: "900px",
            margin: "0 auto",
            lineHeight: "1.7",
          }}
        >
          AI + Web3 + 极速支付生态系统
          <br />
          打造全球低手续费支付与去中心化 AI 服务网络
        </p>

        <div
          style={{
            marginTop: "50px",
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            flexWrap: "wrap",
          }}
        >
<button
  onClick={() =>
    window.open("https://app.ston.fi/swap?chartVisible=false&ft=TON&tt=EQC-0juuPuAL3wt7jeXXnRQ9Fk_1Lge75bc12TcgImRTOkAE", "_blank")
  }
  style={{
    padding: "18px 40px",
    borderRadius: "14px",
    border: "none",
    background: "#2563eb",
    color: "white",
    fontSize: "18px",
    cursor: "pointer",
    boxShadow: "0 0 25px rgba(37,99,235,0.6)",
  }}
>
  Buy QX
</button>

          <button
            style={{
              padding: "18px 40px",
              borderRadius: "14px",
              border: "1px solid #334155",
              background: "transparent",
              color: "white",
              fontSize: "18px",
              cursor: "pointer",
            }}
          >
            Whitepaper
          </button>
        </div>
      </div>

      {/* 数据卡片 */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "25px",
          flexWrap: "wrap",
          padding: "40px",
        }}
      >
        {[
          ["总供应量", "560,000 QX"],
          ["精度", "9"],
          ["网络", "TON Blockchain"],
          ["状态", "LIVE"],
        ].map((item, index) => (
          <div
            key={index}
            style={{
              background: "rgba(15,23,42,0.8)",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(255,255,255,0.08)",
              padding: "35px",
              borderRadius: "24px",
              width: "260px",
              textAlign: "center",
              boxShadow: "0 0 30px rgba(0,0,0,0.3)",
            }}
          >
            <h2
              style={{
                fontSize: "28px",
                marginBottom: "20px",
              }}
            >
              {item[0]}
            </h2>

            <p
              style={{
                color: "#cbd5e1",
                fontSize: "20px",
              }}
            >
              {item[1]}
            </p>
          </div>
        ))}
      </div>

      {/* About */}
      <div
        style={{
          maxWidth: "1100px",
          margin: "100px auto",
          padding: "0 30px",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontSize: "52px",
            marginBottom: "30px",
          }}
        >
          About Q Coin
        </h2>

        <p
          style={{
            color: "#94a3b8",
            lineHeight: "2",
            fontSize: "20px",
          }}
        >
          Q Coin 是一种专注于 AI + Web3 + 极速支付 的新型加密货币，
          致力于打造全球低手续费支付、Web3 社交、
          去中心化身份系统以及 AI 服务生态。
          Q 代表 Quantum（量子速度）、Quick（极速交易）、
          Quest（探索未来）。
        </p>
      </div>

      {/* Roadmap */}
      <div
        style={{
          padding: "80px 20px",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontSize: "50px",
            marginBottom: "50px",
          }}
        >
          Roadmap
        </h2>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "25px",
            flexWrap: "wrap",
          }}
        >
          {[
            "Q Coin Launch",
            "Add Liquidity",
            "TON Wallet Listing",
            "DEX Expansion",
          ].map((step, index) => (
            <div
              key={index}
              style={{
                background: "#0f172a",
                padding: "30px",
                borderRadius: "20px",
                width: "220px",
                border: "1px solid #1e293b",
              }}
            >
              <h3>Phase {index + 1}</h3>
              <p style={{ color: "#94a3b8" }}>{step}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div
        style={{
          padding: "60px 20px",
          textAlign: "center",
          color: "#64748b",
          borderTop: "1px solid #1e293b",
        }}
      >
        © 2026 Q Coin (QX) · Powered by TON Blockchain
      </div>
    </div>
  )
}
