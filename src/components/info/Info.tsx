import home from "../../assets/home.webp";
import about from "../../assets/about.webp";
import contact from "../../assets/contact.webp";
import { Link } from "react-router";

function Info({title, description,page}: {title: string; description: string; page: string}) {
  return (
    <section className="relative w-full min-h-screen">
      {/* Background Image */}
      <img
        src={page === "home" ? home : page === "about" ? about : contact}
        alt={title}
        loading="lazy"
        className="w-full h-full object-cover absolute inset-0"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 gap-4 sm:gap-6">
        
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white">
          {title}
        </h1>

        <p className="text-sm sm:text-base md:text-lg text-white max-w-xl md:max-w-2xl">
          {description}
        </p>

        <Link to="/contact" className="px-5 sm:px-6 py-2.5 sm:py-3 bg-[#2952E3] text-white rounded-md text-sm sm:text-base md:text-lg font-medium hover:bg-[#2952E3]/90 transition duration-150">
          Get Started
        </Link>
      </div>
    </section>
  );
}

export default Info;