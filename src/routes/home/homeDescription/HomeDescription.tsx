import Container from "@/components/ui/container";
import "./HomeDescription.css";
const HomeDescription = () => {
  return (
    <section className="h-[60vh] md:max-h-[450px] bg-cover bg-center home-description-image">
      <Container className=" flex flex-col items-left justify-end text-center px-4 pb-[100px] pt-28">
        <h2 className="max-w-xs md:max-w-md text-2xl text-dark text-start playfair-display-medium mb-6">
          We manage your transport needs. Book a chauffeur anywhere in{" "}
          <span className="text-call-to-action">UK</span> , we’ll manage the
          rest.
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
