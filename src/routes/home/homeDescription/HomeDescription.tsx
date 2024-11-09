import Container from "@/components/ui/container";
import "./HomeDescription.css";
import globeImg from "../../../../public/images/desktop/globe.webp";
import AnimatedDiv from "@/components/animations/AnimatedDiv";
const HomeDescription = () => {
  return (
    <section
      style={{ backgroundImage: `url(${globeImg})` }}
      className="min-h-[60vh]  bg-cover bg-center relative"
    >
      <div className="absolute inset-0 globe-overlay"></div>
      <Container className=" flex flex-col items-left justify-end text-center px-4 pt-28 relative z-10">
        <h2 className="max-w-xs md:max-w-md text-2xl text-light text-start playfair-display-medium mb-6">
          We manage your transport needs. Book a chauffeur anywhere in{" "}
          <span className="text-call-to-action">UK</span> , we TAKE CARE OF THE
          REST.
        </h2>
        <p className="text-lg montserrat-medium text-light text-start max-w-lg">
          We endeavour to provide a seamless journey wherever you might be
          going. From the moment you arrive to the second you depart, you can
          relax knowing you’re in the safest of hands with{" "}
          <span className="text-call-to-action">Executive Journeys.</span>
        </p>
        <AnimatedDiv animationName="animate-fade-in-bottom-fast">
          <h3
            id="services"
            className="text-2xl playfair-display-medium text-call-to-action py-20 text-start"
          >
            Your journey begins here…
          </h3>
        </AnimatedDiv>
      </Container>
    </section>
  );
};

export default HomeDescription;
