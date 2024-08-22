// Define the structure for a single field's validation
export type ValidationRule = {
  type: string;
  required?: {
    value: boolean;
    message: string;
  };
  min?: {
    value: number;
    message: string;
  };
  // Add other validation types here as needed
};

// Define the structure for each form field
export type FormField = {
  label: string;
  placeholder?: string;
  type: string;
  validation: ValidationRule;
  nestedFields?: FormSchema; // For nested fields
};

// Define the schema type, where each step contains form fields
export type FormSchema = {
  [key: string]: FormField;
};

export type FormData = {
  firstName?: string;
  lastName?: string;
  bookingType?: "Personal" | "Business";
  email?: string;
  confirmEmail?: string;
  contactNumber?: string;
};

// export type FormSchema = {
//   label: string;
//   placeholder?: string;
//   type: string;
//   validation: yup.AnySchema;
//   options?: string[];
// };
