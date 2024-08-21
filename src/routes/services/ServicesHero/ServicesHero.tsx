import Logo from "@/components/Logo";
import Container from "@/components/ui/container";
import "./ServicesHero.css";

const ServicesHero = () => {
  return (
    <section className="relative h-[60vh] bg-cover bg-center services-hero-image flex flex-col justify-between py-4">
      <div className="absolute inset-0 hero-overlay"></div>
      <Container className="relative z-10 ">
        <div className="flex justify-between align-middle items-center">
          <Logo />
        </div>
      </Container>
      <Container className="relative z-10 flex flex-col items-left justify-end text-center">
        <h1 className="text-2xl montserrat-medium text-light text-start">
          Quick Quote
        </h1>
      </Container>
    </section>
  );
};

export default ServicesHero;
