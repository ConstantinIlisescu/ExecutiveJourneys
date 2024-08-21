import Container from "@/components/ui/container";
import "./HomeServices.css";

const HomeServices = () => {
  return (
    <section className=" flex flex-col">
      <Container className="flex justify-center">
        <h2 className="text-2xl playfair-display-medium text-call-to-action p-10">
          Your journey begins here…
        </h2>
      </Container>

      <div className=" bg-dark ">
        <div className="flex flex-col md:flex-row md:justify-end">
          <div className="flex flex-col mx-auto justify-center py-11 md:text-end max-w-xs text-light md:me-10">
            <h3 className="text-3xl  playfair-display-medium mb-6">
              <span className="text-call-to-action">VIP</span> chauffeurs
            </h3>
            <p className="text-lg">
              Luxury transportation with professional chauffeurs for VIPs,
              ensuring comfort,{" "}
              <span className="text-call-to-action">privacy</span>, and
              impeccable service.
            </p>
          </div>
          <img
            src="images/desktop/vip-car-open.png"
            alt=""
            className="md:w-[50vw] round-corner-left-bottom"
          />
        </div>
      </div>

      <div>
        <div className="flex flex-col-reverse md:flex-row md:justify-start">
          <img
            src="images/desktop/business.jpg"
            alt=""
            className="md:w-[50vw] round-corner-right-top round-corner-right-bottom"
          />
          <div className="flex flex-col mx-auto py-11 justify-center text-start max-w-xs text-dark md:ms-10">
            <h3 className="text-3xl  playfair-display-medium mb-6">
              <span className="text-call-to-action">Business</span> chauffeurs
            </h3>
            <p className="text-lg">
              Executive car hire with skilled chauffeurs, ideal for business
              meetings and corporate events.
            </p>
          </div>
        </div>
      </div>

      <div className=" bg-dark ">
        <div className="flex flex-col md:flex-row md:justify-end">
          <div className="flex flex-col mx-auto justify-center py-11 md:text-end max-w-xs text-light md:me-10">
            <h3 className="text-3xl  playfair-display-medium mb-6">
              <span className="text-call-to-action">Wedding</span> chauffeurs
            </h3>
            <p className="text-lg">
              Elegant wedding car hire with professional chauffeurs, adding a
              touch of class to your special day.
            </p>
          </div>
          <img
            src="images/desktop/wedding.jpg"
            alt=""
            className="md:w-[50vw] round-corner-left-bottom round-corner-left-top "
          />
        </div>
      </div>

      <div>
        <div className="flex flex-col-reverse md:flex-row md:justify-start">
          <img
            src="images/desktop/airport.png"
            alt=""
            className="md:w-[50vw] round-corner-right-top"
          />
          <div className="flex flex-col mx-auto py-11 justify-center text-start max-w-xs text-dark md:ms-10">
            <h3 className="text-3xl  playfair-display-medium mb-6">
              <span className="text-call-to-action">Airport</span> chauffeurs
            </h3>
            <p className="text-lg">
              Prompt and reliable airport transfers with chauffeurs, ensuring a
              seamless and stress-free travel experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeServices;
