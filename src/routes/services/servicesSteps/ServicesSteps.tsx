interface ServicesStepProp {
  stepNumber: number;
}

const ServicesSteps = ({ stepNumber }: ServicesStepProp) => {
  return (
    <div className="p-8 max-w-xl space-y-6">
      <h2 className="max-w-md text-2xl text-light text-start playfair-display-medium">
        Welcome to our <span className="text-call-to-action">Quick Quote</span>{" "}
        form.
      </h2>
      <div
        className={`space-y-4 ${
          stepNumber === 1 ? "text-light" : "muted-text-light"
        }`}
      >
        <h3 className="max-w-xs md:max-w-md text-xl text-start playfair-display-medium">
          Step <span className="text-call-to-action">one</span>
        </h3>
        <p className=" montserrat-medium text-start max-w-lg">
          Fill in some personal details, this will allow for a smooth booking.
          No data will be saved on our website.
        </p>
      </div>
      <div
        className={`space-y-4 ${
          stepNumber === 2 ? "text-light" : "muted-text-light"
        }`}
      >
        <h3 className="max-w-xs md:max-w-md text-xl text-start playfair-display-medium">
          Step <span className="text-call-to-action">two</span>
        </h3>
        <p className=" montserrat-medium text-start max-w-lg">
          This will ensure we get all your travel details.
        </p>
      </div>
      <div
        className={`space-y-4 ${
          stepNumber === 3 ? "text-light" : "muted-text-light"
        }`}
      >
        <h3 className="max-w-xs md:max-w-md text-xl text-start playfair-display-medium">
          Step <span className="text-call-to-action">three</span>
        </h3>
        <p className=" montserrat-medium text-start max-w-lg">
          Check all the details. Once submitted, we plan to confirm the booking
          within 2 hours. Please give us a call on +447916 186677 if you don’t
          hear from us within this time.
        </p>
      </div>
    </div>
  );
};

export default ServicesSteps;
