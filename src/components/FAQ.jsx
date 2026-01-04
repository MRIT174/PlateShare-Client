const FAQ = () => {
  return (
    <section className="py-20 bg-base-100">
      <div className="container-main max-w-4xl">
        <h2 className="text-3xl font-bold text-center mb-10">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {[
            {
              q: "Is registration free?",
              a: "Yes, creating an account is completely free.",
            },
            {
              q: "How do I add a listing?",
              a: "Login → Dashboard → Add Food.",
            },
            {
              q: "Is my data secure?",
              a: "Yes, we use secure authentication.",
            },
          ].map((item, i) => (
            <details
              key={i}
              className="p-4 rounded-xl bg-base-200"
            >
              <summary className="font-semibold cursor-pointer">
                {item.q}
              </summary>
              <p className="mt-2 text-gray-600">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
