import React from "react";
import Header from "./Header";
import Footer from "./Footer";

export default function Premium({ footer }) {
  const benefits = [
    { icon: "🛡️", title: "Nikmati Konten", subtitle: "Pilihan" },
    { icon: "✓", title: "Tidak Ada Iklan", subtitle: "" },
    { icon: "🌐", title: "Konten Tanpa", subtitle: "Koneksi" },
    { icon: "📺", title: "Subtitle untuk Konten", subtitle: "Pilihan" },
    { icon: "😊", title: "Berhenti Mutakhir", subtitle: "Sampai Diunduh 5K" },
    {
      icon: "📱",
      title: "Tontonan di TV, Tablet,",
      subtitle: "Mobile, dan Laptop",
    },
    { icon: "👤", title: "Subtitle untuk Konten", subtitle: "Pilihan" },
  ];

  const plans = [
    {
      name: "Individual",
      description: "Hanya buat kamu yang suka nonton sendirian",
      features: [
        "Tidak ada iklan",
        "Kualitas 720px",
        "Download konten pilihan",
      ],
      gradient: "from-blue-600 to-blue-800",
    },
    {
      name: "Berdua",
      description: "Berbagi keceriaan dengan orang di sekitarmu",
      features: [
        "Tidak ada iklan",
        "Kualitas 1080px",
        "Download konten pilihan",
      ],
      gradient: "from-blue-700 to-blue-900",
    },
    {
      name: "Keluarga",
      description: "Untuk kamu yang ingin sharing akun sampai 5 Device",
      features: ["Tidak ada iklan", "Kualitas 4K", "Download konten pilihan"],
      gradient: "from-blue-800 to-blue-950",
    },
  ];

  return (
    <div className="bg-[#181A1C] text-white min-h-screen">
      <Header />
      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-8 py-16">
        {/* Benefits Section */}
        <section className="text-center mb-16">
          <h1 className="text-3xl font-bold m-7">Kenapa Harus Berlangganan?</h1>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
            {benefits.slice(0, 4).map((benefit, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center mb-3 text-2xl">
                  {benefit.icon}
                </div>
                <p className="text-sm">
                  {benefit.title}
                  {benefit.subtitle && (
                    <>
                      <br />
                      {benefit.subtitle}
                    </>
                  )}
                </p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 max-w-3xl mx-auto">
            {benefits.slice(4).map((benefit, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center mb-3 text-2xl">
                  {benefit.icon}
                </div>
                <p className="text-sm">
                  {benefit.title}
                  {benefit.subtitle && (
                    <>
                      <br />
                      {benefit.subtitle}
                    </>
                  )}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing Section */}
      </main>
      <section className="p-5 bg-[#25282a] text-center w-full">
        <h2 className="text-3xl font-bold mb-2">Pilih Paketmu</h2>
        <p className="text-gray-400 mb-12">
          Temukan paket terbaik untuk hiburanmu!
        </p>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`bg-gradient-to-b ${plan.gradient} rounded-2xl p-6`}
            >
              <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
              <p className="text-sm text-blue-200 mb-6 min-h-[40px]">
                {plan.description}
              </p>

              <ul className="space-y-3 mb-6 text-left">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <svg
                      className="w-5 h-5 mt-0.5 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <button className="w-full bg-white text-blue-600 font-semibold py-3 rounded-full hover:bg-gray-100 transition">
                Langganan
              </button>
            </div>
          ))}
        </div>
      </section>
      <Footer footers={footer} />
    </div>
  );
}
