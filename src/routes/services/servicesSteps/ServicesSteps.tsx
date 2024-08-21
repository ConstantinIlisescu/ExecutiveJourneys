interface ServicesStepProp {
  stepNumber: number;
}

const ServicesSteps = ({ stepNumber }: ServicesStepProp) => {
  return (
    <div className="p-8 max-w-xl">
      <h2 className="max-w-xs md:max-w-md text-2xl text-dark text-start playfair-display-medium mb-6">
        Welcome to our <span className="text-call-to-action">Quick Quote</span>{" "}
        form.
      </h2>
      <div
        className={`mb-6 ${stepNumber === 1 ? "text-dark" : "muted-text-dark"}`}
      >
        <h3 className="max-w-xs md:max-w-md text-xl text-start playfair-display-medium mb-6">
          Step <span className="text-call-to-action">one</span>
        </h3>
        <p className=" montserrat-medium text-start max-w-lg">
          Fill in some personal details, this will allow for a smooth booking.
          No data will be saved on our website.
        </p>
      </div>
      <div
        className={`mb-6 ${stepNumber === 2 ? "text-dark" : "muted-text-dark"}`}
      >
        <h3 className="max-w-xs md:max-w-md text-xl text-start playfair-display-medium mb-6 ">
          Step <span className="text-call-to-action">two</span>
        </h3>
        <p className=" montserrat-medium text-start max-w-lg">
          Some more forms. This will ensure we get all your travel details. Stay
          assured, everything is confidential, nothing gets save either.
        </p>
      </div>
      <div
        className={`mb-6 ${stepNumber === 3 ? "text-dark" : "muted-text-dark"}`}
      >
        <h3 className="max-w-xs md:max-w-md text-xl text-start playfair-display-medium mb-6">
          Step <span className="text-call-to-action">three</span>
        </h3>
        <p className=" montserrat-medium text-start max-w-lg">
          Check all the details and view the estimated price. Once submitted, we
          plan confirm the booking within 2 hours. Please give us a call on
          07757362364 is you don’t hear from us in this time
        </p>
      </div>
    </div>
  );
};

export default ServicesSteps;
