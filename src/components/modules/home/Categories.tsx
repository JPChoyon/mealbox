import React from 'react';

const Categories = () => {
  return (
    <div>
      <section className="py-16 px-6 text-center bg-gray-100">
        <h2 className="text-3xl font-semibold">Meal Categories</h2>
        <div className="flex flex-wrap justify-center gap-6 mt-8">
          {[
            "Vegetarian 🌱",
            "Keto 🥩",
            "Vegan 🥑",
            "High-Protein 💪",
            "Gluten-Free 🌾🚫",
          ].map((category, index) => (
            <div
              key={index}
              className="bg-white px-4 py-3 rounded-lg shadow-md"
            >
              {category}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Categories;