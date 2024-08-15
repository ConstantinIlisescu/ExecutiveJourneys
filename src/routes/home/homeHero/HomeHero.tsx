import Button from "@/components/button/Button";
import "./HomeHero.css";
const HomeHero = () => {
  return (
    <section className="relative h-[80vh] bg-cover bg-center home-hero-image">
      <div className="absolute inset-0 hero-overlay"></div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="text-6xl md:text-8xl great-vibes-regular mb-4 text-white">
          Sweets that make you <br /> Feel Happy
        </h1>
        <p className="text-lg md:text-xl mb-8 montserrat-regular text-white">
          With Our Hand Crafted Chocolate
        </p>
        <Button href="/products">PRODUCTS</Button>
      </div>
    </section>
  );
};

export default HomeHero;
