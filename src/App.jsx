export default function QCoinWebsite() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-transparent to-purple-600/20 blur-3xl"></div>

      {/* Navbar */}
      <header className="relative z-10 flex items-center justify-between px-8 py-6 border-b border-white/10">
        <div className="flex items-center gap-3">
          <img
            src="https://raw.githubusercontent.com/qxbenke/QCoin/main/assets/qx-logo.png"
            alt="Q Coin"
            className="w-12 h-12 rounded-full"
          />
          <div>
            <h1 className="text-2xl font-bold">Q Coin</h1>
            <p className="text-sm text-gray-400">QX Token</p>
          </div>
        </div>

        <nav className="hidden md:flex gap-8 text-sm text-gray-300">
          <a href="#features" className="hover:text-white transition">Features</a>
          <a href="#tokenomics" className="hover:text-white transition">Tokenomics</a>
          <a href="#roadmap" className="hover:text-white transition">Roadmap</a>
          <a href="#community" className="hover:text-white transition">Community</a>
        </nav>

        <button className="bg-gradient-to-r from-blue-500 to-purple-500 px-5 py-2 rounded-xl font-semibold hover:scale-105 transition">
          Buy QX
        </button>
      </header>

      {/* Hero */}
      <section className="relative z-10 flex flex-col items-center justify-center text-center px-6 py-28">
        <img
          src="https://raw.githubusercontent.com/qxbenke/QCoin/main/assets/qx-logo.png"
          alt="Q Coin"
          className="w-40 h-40 mb-10 drop-shadow-2xl"
        />

        <h1 className="text-6xl md:text-7xl font-black leading-tight max-w-5xl">
          AI + Web3 +
          <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            {' '}Instant Payments
          </span>
        </h1>

        <p className="mt-8 text-xl text-gray-300 max-w-3xl leading-relaxed">
          Q Coin (QX) is building the next-generation decentralized payment ecosystem
          focused on AI services, global transfers, Web3 identity and gaming payments.
        </p>

        <div className="mt-12 flex flex-wrap justify-center gap-5">
          <button className="bg-gradient-to-r from-blue-500 to-purple-500 px-8 py-4 rounded-2xl text-lg font-bold hover:scale-105 transition">
            Launch App
          </button>

          <button className="border border-white/20 px-8 py-4 rounded-2xl text-lg hover:bg-white/10 transition">
            View Contract
          </button>
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl w-full">
          <div className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur">
            <h3 className="text-3xl font-bold">560K</h3>
            <p className="text-gray-400 mt-2">Total Supply</p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur">
            <h3 className="text-3xl font-bold">TON</h3>
            <p className="text-gray-400 mt-2">Blockchain</p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur">
            <h3 className="text-3xl font-bold">9</h3>
            <p className="text-gray-400 mt-2">Decimals</p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur">
            <h3 className="text-3xl font-bold">QX</h3>
            <p className="text-gray-400 mt-2">Token Symbol</p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="relative z-10 px-6 py-24 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold">Core Ecosystem</h2>
          <p className="text-gray-400 mt-5 text-lg">
            Q Coin powers the future of decentralized AI payments.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              title: 'AI Payments',
              desc: 'Fast decentralized payment system for AI services and automation platforms.'
            },
            {
              title: 'Web3 Identity',
              desc: 'Next-generation decentralized identity integration for users and applications.'
            },
            {
              title: 'Global Transfers',
              desc: 'Low-fee instant transactions powered by the TON blockchain.'
            },
            {
              title: 'Gaming & Social',
              desc: 'Web3 social platforms and game payment infrastructure.'
            }
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-blue-500/40 hover:scale-105 transition"
            >
              <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
              <p className="text-gray-400 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Tokenomics */}
      <section id="tokenomics" className="relative z-10 px-6 py-24 bg-white/5 border-y border-white/10">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-12">Tokenomics</h2>

          <div className="grid md:grid-cols-2 gap-10 text-left">
            <div className="bg-black/40 border border-white/10 rounded-3xl p-10">
              <h3 className="text-3xl font-bold mb-8">Token Info</h3>

              <div className="space-y-5 text-lg">
                <div className="flex justify-between border-b border-white/10 pb-3">
                  <span className="text-gray-400">Token Name</span>
                  <span>Q Coin</span>
                </div>

                <div className="flex justify-between border-b border-white/10 pb-3">
                  <span className="text-gray-400">Symbol</span>
                  <span>QX</span>
                </div>

                <div className="flex justify-between border-b border-white/10 pb-3">
                  <span className="text-gray-400">Supply</span>
                  <span>560,000 QX</span>
                </div>

                <div className="flex justify-between border-b border-white/10 pb-3">
                  <span className="text-gray-400">Decimals</span>
                  <span>9</span>
                </div>

                <div className="flex justify-between border-b border-white/10 pb-3">
                  <span className="text-gray-400">Blockchain</span>
                  <span>TON</span>
                </div>
              </div>
            </div>

            <div className="bg-black/40 border border-white/10 rounded-3xl p-10">
              <h3 className="text-3xl font-bold mb-8">Contract Address</h3>

              <div className="bg-white/5 rounded-2xl p-5 break-all text-sm text-gray-300 leading-relaxed border border-white/10">
                EQC-0juuPuAL3wt7jeXXnRQ9Fk_1Lge75bc12TcgImRTOkAE
              </div>

              <button className="mt-8 w-full bg-gradient-to-r from-blue-500 to-purple-500 py-4 rounded-2xl font-bold hover:scale-[1.02] transition">
                Copy Contract
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section id="roadmap" className="relative z-10 px-6 py-24 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold">Roadmap</h2>
          <p className="text-gray-400 mt-5 text-lg">
            Building the next generation AI-powered Web3 ecosystem.
          </p>
        </div>

        <div className="space-y-8">
          {[
            'Q Coin Launch on TON Blockchain',
            'STON.fi Liquidity Integration',
            'TON Wallet Asset Verification',
            'AI Payment Platform Development',
            'Web3 Identity Integration',
            'Global Community Expansion'
          ].map((step, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-3xl p-8 flex items-center gap-6"
            >
              <div className="w-14 h-14 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-2xl font-bold">
                {index + 1}
              </div>
              <h3 className="text-2xl font-semibold">{step}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Community */}
      <section id="community" className="relative z-10 px-6 py-24 text-center border-t border-white/10">
        <h2 className="text-5xl font-bold">Join The Community</h2>
        <p className="text-gray-400 mt-6 text-lg max-w-2xl mx-auto">
          Follow Q Coin and become part of the future AI + Web3 payment ecosystem.
        </p>

        <div className="mt-12 flex flex-wrap justify-center gap-6">
          <button className="bg-white/10 border border-white/10 px-8 py-4 rounded-2xl hover:bg-white/20 transition">
            Telegram
          </button>

          <button className="bg-white/10 border border-white/10 px-8 py-4 rounded-2xl hover:bg-white/20 transition">
            X / Twitter
          </button>

          <button className="bg-white/10 border border-white/10 px-8 py-4 rounded-2xl hover:bg-white/20 transition">
            GitHub
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/10 py-10 text-center text-gray-500 text-sm">
        © 2026 Q Coin (QX). Built on TON Blockchain.
      </footer>
    </div>
  )
}
