const HowItWorks = () => {
  return (
    <section className="py-20">
      <div className="container-main text-center">
        <h2 className="text-3xl font-bold mb-6">How It Works</h2>
        <p className="text-gray-600 mb-12">
          PlateShare makes food sharing simple and meaningful.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Post Food",
              desc: "Upload extra food details for people in need.",
            },
            {
              title: "Find Food",
              desc: "Browse available food shared by the community.",
            },
            {
              title: "Collect Food",
              desc: "Safely collect food once your request is accepted.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="p-6 bg-base-100 rounded-2xl shadow-sm hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold mb-2">
                {i + 1}. {item.title}
              </h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
