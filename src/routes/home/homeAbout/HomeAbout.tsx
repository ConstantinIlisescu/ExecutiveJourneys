import Container from "@/components/Container";

const HomeAbout = () => {
  return (
    <div className=" bg-dark text-light py-24">
      <Container>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl  playfair-display-medium mb-8">
            At <span className="text-call-to-action">Executive Journeys</span>,
            we have a passion for what we do and will go above and beyond to
            ensure we get it
            <span className="text-call-to-action">right</span> the first time,
            <span className="text-call-to-action">every time</span>.
          </h2>
          <p className="text-lg montserrat-medium">
            As a proud, family-run business, we extend our familial values to
            every aspect of our service. Our commitment to treating our clients
            and team members like family forms the cornerstone of our
            operations. This family ethos underpins everything we do, ensuring
            that our dedication, care, and attention to detail are reflected in
            every journey. With us, you can expect personalized service,
            unwavering reliability, and the warm, welcoming touch that only a
            family-run business can provide. Let us make every trip a memorable
            experience, where you feel valued, comfortable, and truly taken care
            of.
          </p>
        </div>
      </Container>
    </div>
  );
};

export default HomeAbout;
