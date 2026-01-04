const Features = () => {
  const features = [
    {
      title: "Verified Listings",
      desc: "All listings are manually verified to ensure authenticity and trust.",
      icon: "✅",
    },
    {
      title: "Smart Search & Filter",
      desc: "Find exactly what you need using advanced search and filter options.",
      icon: "🔍",
    },
    {
      title: "Secure Dashboard",
      desc: "Manage your listings and profile securely from your dashboard.",
      icon: "🔐",
    },
  ];

  return (
    <section className="py-20 bg-base-100">
      <div className="container-main">
        <h2 className="text-3xl font-bold text-center mb-4">
          Why Choose Our Platform
        </h2>
        <p className="text-center text-gray-500 mb-12">
          Powerful features designed to give you the best experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((item, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-base-100 shadow-sm hover:shadow-lg transition"
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-500">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
