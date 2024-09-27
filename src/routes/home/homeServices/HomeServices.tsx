import "./HomeServices.css";

const HomeServices = () => {
  return (
    <section className=" flex flex-col">
      <div className=" bg-dark ">
        <div className="flex flex-col md:flex-row md:justify-end">
          <div className="flex flex-col mx-auto justify-center py-11 md:text-end max-w-xs text-light md:me-10">
            <h3 className="text-3xl  playfair-display-medium mb-6">
              <span className="text-call-to-action">VIP</span> chauffeurs
            </h3>
            <p className="text-lg">
              Luxury transportation with professional chauffeurs for VIPs,
              ensuring <span className="text-call-to-action">PRIVACY</span> and
              comfort at the highest standards.
            </p>
          </div>
          <img
            src="images/desktop/vip-car-open.png"
            alt=""
            className="md:w-[50vw] round-corner-left-bottom"
          />
        </div>
      </div>

      <div className="bg-light-dark">
        <div className="flex flex-col-reverse md:flex-row md:justify-start">
          <img
            src="images/desktop/business.jpg"
            alt=""
            className="md:w-[50vw] round-corner-right-top round-corner-right-bottom"
          />
          <div className="flex flex-col mx-auto py-11 justify-center text-start max-w-xs text-light md:ms-10">
            <h3 className="text-3xl  playfair-display-medium mb-6">
              <span className="text-call-to-action">Corporate</span> travel
            </h3>
            <p className="text-lg">
              Business trips for meetings, conferences, or client visits? Let us
              ensure the punctuality and comfort for your next journey.
            </p>
          </div>
        </div>
      </div>

      <div className=" bg-dark ">
        <div className="flex flex-col md:flex-row md:justify-end">
          <div className="flex flex-col mx-auto justify-center py-11 md:text-end max-w-xs text-light md:me-10">
            <h3 className="text-3xl  playfair-display-medium mb-6">
              <span className="text-call-to-action">Weddings</span> and <br />
              special occasions
            </h3>
            <p className="text-lg">
              Our chauffeur service will ensure that your special day will be
              unforgettable. Enjoy luxurious, reliable transportation with a
              professional driver who provides elegant, punctual, attentive
              service, seamlessly enhancing your special occasion experience.
            </p>
          </div>
          <img
            src="images/desktop/wedding.jpg"
            alt=""
            className="md:w-[50vw] round-corner-left-bottom round-corner-left-top "
          />
        </div>
      </div>

      <div className="bg-light-dark">
        <div className="flex flex-col-reverse md:flex-row md:justify-start">
          <img
            src="images/desktop/airport.png"
            alt=""
            className="md:w-[50vw] round-corner-right-top"
          />
          <div className="flex flex-col mx-auto py-11 justify-center text-start max-w-xs text-light md:ms-10">
            <h3 className="text-3xl  playfair-display-medium mb-6">
              <span className="text-call-to-action">Airport</span> transfers
            </h3>
            <p className="text-lg">
              Experience seamless travel with our chauffeur airport transfer
              service. Enjoy luxury, comfort, and punctuality as our
              professional drivers ensure you reach your destination on time.
              Effortless, stress-free travel begins here. Book now for an
              unparalleled airport transfer experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeServices;
