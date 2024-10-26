import Logo from "@/components/Logo";
import Container from "@/components/ui/container";
import "./HomeHero.css";
import heroImg from "../../../../public/images/desktop/hero-img.jpg";
import FloatingMenu from "@/components/floatingMenu/FloatingMenu";
const HomeHero = () => {
  return (
    <section
      style={{ backgroundImage: `url(${heroImg})` }}
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
