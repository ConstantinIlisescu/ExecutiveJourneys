import Container from "@/components/ui/container";
import "./HomeDescription.css";
const HomeDescription = () => {
  return (
    <section className="min-h-[60vh] bg-cover bg-center home-description-image">
      <Container className=" flex flex-col items-left justify-end text-center px-4 pb-[100px] pt-28">
        <h2 className="text-2xl montserrat-medium text-dark text-start max-w-lg playfair-display-medium mb-6">
          We manage your transport needs. <br />
          Book a chauffeur anywhere in{" "}
          <span className="text-call-to-action">UK</span>, <br />
          we’ll manage the rest.
        </h2>
        <p className="text-lg montserrat-medium text-dark text-start max-w-lg">
          We endeavour to provide a seamless journey wherever you might be
          going. From the moment you arrive to the second you depart, you can
          relax knowing you’re in the safest of hands with{" "}
          <span className="text-call-to-action">Executive Journeys.</span>
        </p>
      </Container>
    </section>
  );
};

export default HomeDescription;
