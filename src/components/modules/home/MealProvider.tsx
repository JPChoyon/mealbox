import Image from "next/image";
import React from "react";

const MealProvider = () => {
  return (
    <>
      <section className="py-16 px-6 text-center">
        <h2 className="text-3xl font-semibold">Featured Meal Providers</h2>
        <div className="flex flex-wrap justify-center gap-6 mt-8">
          {["Chef John", "Healthy Bites", "NutriMeals"].map(
            (provider, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-lg shadow-md text-center max-w-xs"
              >
                <Image
                  src={`/assets/provider/provider${index + 1}.jpg`}
                  alt={provider}
                  width={150}
                  height={150}
                  className="rounded-full mx-auto"
                />
                <h3 className="text-lg font-semibold mt-4">{provider}</h3>
                <p className="text-gray-500">4.8⭐ Rating</p>
              </div>
            )
          )}
        </div>
        <button className="mt-6 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-lg transition">
          Become a Meal Provider
        </button>
      </section>
      {/* 🌟 Customer Testimonials */}
      <section className="py-16 px-6 bg-gray-100 text-center">
        <h2 className="text-3xl font-semibold">What Our Customers Say</h2>
        <div className="flex flex-col md:flex-row justify-center gap-8 mt-8">
          {[
            {
              name: "Sarah M.",
              review: "Best meal service! Fresh & delicious.",
              image: "/assets/provider/provider1.jpg",
            },
            {
              name: "James T.",
              review: "Saves me so much time & effort!",
              image: "/assets/provider/provider2.jpg",
            },
            {
              name: "James T.",
              review: "Much Better services in the store",
              image: "/assets/provider/provider3.jpg",
            },
          ].map((user, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md max-w-sm mx-auto"
            >
              <Image
                src={user.image}
                alt={user.name}
                width={80}
                height={80}
                className="rounded-full mx-auto"
              />
              <h3 className="text-lg font-semibold mt-4">{user.name}</h3>
              <p className="text-gray-600 mt-2 italic">&quot;{user.review}&quot;</p>
            </div>
          ))}
        </div>
      </section>
      {/* 🎁 Pricing Plans */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-3xl font-semibold">Choose Your Plan</h2>
        <div className="flex flex-col md:flex-row justify-center gap-8 mt-8">
          {[
            { title: "Basic", price: "$49/mo", meals: "2 meals/day" },
            { title: "Standard", price: "$79/mo", meals: "3 meals/day" },
            { title: "Premium", price: "Custom", meals: "Tailored for you" },
          ].map((plan, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md max-w-sm mx-auto"
            >
              <h3 className="text-xl font-semibold">{plan.title}</h3>
              <p className="text-2xl font-bold mt-2">{plan.price}</p>
              <p className="text-gray-600 mt-2">{plan.meals}</p>
              <button className="mt-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-4 py-2 rounded-lg transition">
                Choose Plan
              </button>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default MealProvider;
