import Image from "next/image";

const Banner = () => {
  return (
    <div className="bg-gray-50 text-gray-900">
      <section className="relative flex items-center justify-center h-screen">
        <div className="absolute inset-0">
          <Image
            src="/assets/image/hero.webp"
            alt="Healthy Meal Banner"
            width={1200} 
            height={800} 
            style={{
              width: "100%",
              height: "100vh",
            }}
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center p-4 md:p-8 rounded-lg max-w-[90%] md:max-w-[60%] animate-fadeIn">
          <h1 className="text-4xl md:text-6xl font-bold text-white">
            Personalized Meal Plans, Delivered to Your Doorstep
          </h1>

          <button className="mt-6 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-lg transition">
            Get Started
          </button>
        </div>
      </section>
    </div>
  );
};

export default Banner;
