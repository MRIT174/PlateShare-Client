const OurMission = () => {
  return (
    <section className="py-20">
      <div className="container-main text-center">
        <h2 className="text-3xl font-bold mb-6">Our Mission</h2>

        <p className="text-gray-600 max-w-3xl mx-auto mb-12">
          Reduce food waste and ensure no one sleeps hungry by connecting
          donors with those in need.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "10,000+ Meals Shared", color: "green" },
            { title: "1,500+ Donors", color: "blue" },
            { title: "Zero Food Wasted", color: "purple" },
          ].map((item, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl bg-base-100 shadow-sm"
            >
              <h3 className="text-xl font-semibold mb-2 text-primary">
                {item.title}
              </h3>
              <p className="text-gray-600">
                Building a sustainable community.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurMission;
