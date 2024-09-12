import Button from "@/components/button/Button";
import Logo from "@/components/Logo";
import Container from "@/components/ui/container";
import "./HomeHero.css";
import heroImg from "../../../../public/images/desktop/hero-img.jpg";
const HomeHero = () => {
  return (
    <section
      style={{ backgroundImage: `url(${heroImg})` }}
      className="relative h-[90vh] bg-cover bg-center flex flex-col justify-between py-4"
    >
      <div className="absolute inset-0 hero-overlay"></div>
      <Container className="relative z-10 ">
        <div className="flex justify-between align-middle items-center">
          <Logo />
          <Button children="Quick Quote" href="/quote" />
        </div>
      </Container>
      <Container className="relative z-10 flex flex-col items-left justify-end text-center">
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
