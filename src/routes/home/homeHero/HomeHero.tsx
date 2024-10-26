import { useState, useEffect } from "react";
import Logo from "@/components/Logo";
import Container from "@/components/ui/container";
import "./HomeHero.css";
import heroImg from "../../../../public/images/desktop/hero-img.jpg";
import FloatingMenu from "@/components/floatingMenu/FloatingMenu";
const HomeHero = () => {
  const [backgroundSize, setBackgroundSize] = useState(100);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const newSize = 100 + scrollTop * 0.1; // Adjust scaling sensitivity
      setBackgroundSize(newSize);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      style={{
        backgroundImage: `url(${heroImg})`,
        backgroundSize: `${backgroundSize}%`,
        transition: "background-size 0.1s ease-out",
      }}
      className="relative h-[90vh] bg-cover bg-center flex flex-col justify-between py-4"
    >
      <div className="absolute inset-0 hero-overlay"></div>
      <FloatingMenu />
      <Container className="z-10">
        <div className="pt-3  md:pt-0 flex justify-between align-middle items-center">
          <Logo />
        </div>
      </Container>
      <Container className="relative z-10 flex flex-col items-left justify-end text-center">
        <h1 className="text-2xl montserrat-medium text-light text-start">
          Always aiming to deliver <br />
          the highest <span className="text-call-to-action">quality</span>{" "}
          service
        </h1>
      </Container>
    </section>
  );
};

export default HomeHero;
