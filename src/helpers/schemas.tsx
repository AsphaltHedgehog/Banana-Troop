import * as yup from "yup";

export const schemaRegister = yup.object().shape({
  name: yup.string().min(1).max(32).required(),
  email: yup.string().email("Email is not valid").required(),
  password: yup
    .string()
    .min(8, "Enter a valid Password")
    .max(64, "Enter a valid Password")
    .required(),
});
