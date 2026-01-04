import { Link } from "react-router-dom";

const CallToAction = () => {
  return (
    <section className="py-24 bg-primary text-white">
      <div className="container-main text-center">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Get Started?
        </h2>
        <p className="mb-8 text-gray-100">
          Join today and help reduce food waste.
        </p>

        <Link to="/register" className="btn btn-secondary px-10">
          Create Free Account
        </Link>
      </div>
    </section>
  );
};

export default CallToAction;
