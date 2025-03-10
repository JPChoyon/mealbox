

const ItsWorks = () => {
  return (
    <div>
      <section className="py-16 px-6 text-center">
        <h2 className="text-3xl font-semibold">How It Works</h2>
        <div className="flex flex-col md:flex-row justify-center gap-8 mt-8">
          {[
            {
              title: "Choose Your Plan",
              desc: "Select meal options & customize preferences.",
              icon: "📋",
            },
            {
              title: "Schedule Your Delivery",
              desc: "Pick days & times that work best for you.",
              icon: "🚚",
            },
            {
              title: "Enjoy Healthy Meals",
              desc: "Fresh, chef-prepared meals delivered to your doorstep.",
              icon: "🍽️",
            },
          ].map((step, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md max-w-sm mx-auto"
            >
              <p className="text-4xl">{step.icon}</p>
              <h3 className="text-xl font-semibold mt-4">{step.title}</h3>
              <p className="text-gray-600 mt-2">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ItsWorks;