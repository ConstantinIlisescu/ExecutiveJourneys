export const JsonFormSchema = {
  one: {
    firstName: {
      label: "First Name",
      placeholder: "Enter your first name",
      type: "text",
      validation: {
        type: "string",
        min: 2,
        required: true,
        messages: {
          min: "First name must be at least 2 characters",
          required: "First name is required",
        },
      },
    },
    lastName: {
      label: "Last Name",
      placeholder: "Enter your last name",
      type: "text",
      validation: {
        type: "string",
        min: 2,
        required: true,
        messages: {
          min: "Last name must be at least 2 characters",
          required: "Last name is required",
        },
      },
    },
  },
  // Other steps...
};
