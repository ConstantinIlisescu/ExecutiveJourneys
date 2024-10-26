import Container from "@/components/Container";
import ButtonOutline from "@/components/buttonOutline/ButtonOutline";
import "./Fleet.css";

const Fleet = () => {
  return (
    <div id='fleet' className="bg-dark text-light pt-24 pb-12">
      <Container>
        <h2 className="text-3xl text-center playfair-display-medium pb-10">
          Our <span className="text-call-to-action"> Fleet</span>
        </h2>
        <div className="flex justify-center gap-10 flex-wrap">
          <div className=" flex flex-col items-center">
            <h3 className="playfair-display-medium text-xl">
              <span className="text-call-to-action">Luxury</span> class
            </h3>
            <img
              src="images/desktop/s-class.jpg"
              alt=""
              className="md:w-[350px] rounded-3xl py-2"
            />
            <p>Mercedes-Benz S-Class, BMW Series 7, or similar</p>
            <div className="mt-10">
              <span className="muted-outline-bg-primary text-nowrap  px-10 py-3 rounded-full text-xl  shadow-lg h-fit">
                Coming Soon
              </span>
            </div>
          </div>
          <div className=" flex flex-col items-center">
            <h3 className="playfair-display-medium text-xl">
              <span className="text-call-to-action">Executive</span> class
            </h3>

            <img
              src="images/desktop/e-class.jpg"
              alt=""
              className="md:w-[350px] rounded-3xl py-2"
            />
            <p>Mercedes-Benz E-Class, BMW Series 5 or similar</p>
            <div className="mt-10">
              <ButtonOutline children="Book Now" href="/quote?fleet_type=executive" />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Fleet;
