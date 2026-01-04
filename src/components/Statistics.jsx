const Statistics = () => {
  const stats = [
    { count: "1,200+", label: "Active Listings" },
    { count: "850+", label: "Happy Users" },
    { count: "120+", label: "Verified Partners" },
    { count: "98%", label: "Success Rate" },
  ];

  return (
    <section className="py-20 bg-base-100">
      <div className="container-main">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((item, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-base-100 shadow-sm"
            >
              <h3 className="text-3xl font-bold text-primary">
                {item.count}
              </h3>
              <p className="text-gray-500 mt-1">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;
