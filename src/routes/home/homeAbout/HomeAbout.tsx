import Container from "@/components/Container";

const HomeAbout = () => {
  return (
    <div id="about" className=" bg-dark text-light py-24">
      <Container>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl  playfair-display-medium mb-8">
            Welcome to{" "}
            <span className="text-call-to-action">Executive Journeys</span>
          </h2>
          <p className="text-lg montserrat-medium mb-4">
            We understand that travel is more than just reaching a destination
            —it’s about the experience along the way. Whether you’re heading to
            a crucial business meeting, catching a flight, or celebrating a
            special occasion, we are here to ensure that your journey is
            comfortable, safe, and stylish.
          </p>
          <p className="text-lg montserrat-medium mb-4">
            Our dedicated team of professional chauffeurs is committed to
            providing you with the highest level of service.You can relax and
            enjoy the ride, knowing that every detail has been taken care of.
          </p>
          <p className="text-lg montserrat-medium mb-8">
            We appreciate your trust in us and look forward to serving you. Feel
            free to reach out with any questions or to book your next journey.
          </p>
          <p className="text-lg montserrat-medium w-fit mx-auto">
            Thank you for choosing{" "}
            <span className="text-call-to-action">Executive Journeys</span>
            <br />
            —where LUXURY MEETS CONVENIENCE <br />
            Safe travels, The Executive Journeys Team
          </p>
        </div>
      </Container>
    </div>
  );
};

export default HomeAbout;
