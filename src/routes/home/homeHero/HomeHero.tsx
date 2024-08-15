import Button from "@/components/button/Button";
import Logo from "@/components/Logo";
import Container from "@/components/ui/container";
import "./HomeHero.css";
const HomeHero = () => {
  return (
    <section className="relative h-[90vh] bg-cover bg-center home-hero-image">
      <div className="absolute inset-0 hero-overlay"></div>
      <Container className="sticky pt-4">
        <div className="flex justify-between align-middle items-center">
          <Logo />
          <Button children="Quick Quote" href="/quote" />
        </div>
      </Container>
      <Container className="relative z-10 flex flex-col items-left justify-end h-full text-center px-4 pb-[100px]">
        <h1 className="text-2xl montserrat-medium text-light text-start">
          Always delivering <br />
          the highest <span className="text-call-to-action">quality</span>{" "}
          service
        </h1>
      </Container>
    </section>
  );
};

export default HomeHero;
