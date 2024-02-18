import * as yup from "yup";

export const schemaRegister = yup.object().shape({
  name: yup
    .string()
    .min(1, "Name must contain more than 1 character")
    .max(32, "Name must contain less than 32")
    .required(),
  email: yup.string().email("Email is not valid").required("Name is required"),
  password: yup
    .string()
    .min(8, "Enter a valid Password")
    .max(64, "Enter a valid Password")
    .required(),
});

export const schemaWriteReview = yup.object().shape({
  name: yup.string().min(1).max(32).required(),
  // rating: yup.number().required(),
  review: yup.string().min(8).max(256).required(),
});

export const schemaLogin = yup.object().shape({
  email: yup.string().email("Email is not valid").required("Email is required"),
  password: yup
    .string()
    .min(8, "Enter a valid Password")
    .max(64, "Enter a valid Password")
    .required(),
});

export const schemaSendEmail = yup.object().shape({
  email: yup.string().email("Email is not valid").required(),
});

export const schemaNewPassword = yup.object().shape({
  newPassword: yup
    .string()
    .min(8, "Password must be at least 8 characters")
    .max(64, "Password must be at most 64 characters")
    .required("Password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("newPassword")], "Passwords must match")
    .required("Confirm Password is required"),
});

export const answersSchema = yup.object().shape({
  descr: yup
    .string()
    .required("Answer description is required")
    .min(1, "Answer description must be at least 1 character")
    .max(28, "Answer description must not exceed 28 characters"),
  _id: yup.string(),
});

export const schemaQuestion = yup.object().shape({
  _id: yup.string().required("Question ID is required"),
  quiz: yup.string().required("Quiz ID is required"),
  time: yup.string().required("Time is required"),
  imageUrl: yup.string().required("Image URL is required"),
  type: yup
    .string()
    .required("Type is required")
    .oneOf(["full-text", "true-or-false"]),
  descr: yup
    .string()
    .required("Question description is required")
    .min(8, "Question description must be at least 8 characters")
    .max(128, "Question description must not exceed 128 characters"),
  answers: yup.array().of(answersSchema).required("Answers are required"),
  validAnswer: yup.string().required("Valid answer is required"),
});

// export const schemaSettingsInput = yup.object().shape({
//   name: yup
//     .string()
//     .trim()
//     .required("The name is required")
//     .min(1, "Enter at least 1 character")
//     .max(32, "Enter the name no longer than 32 characters")
//     .matches(
//       /^[a-zA-Z0-9-]+$/,
//       "Name can only contain letters, numbers, and dashes"
//     )
//     .transform((value) => value.replace(/\s+/g, "")),
//   email: yup
//     .string()
//     .required("The email is required")
//     .min(8, "Enter at least 8 characters")
//     .max(64, "Enter the email no longer than 64 characters")
//     .notOneOf(
//       [
//         "!",
//         "#",
//         "$",
//         "%",
//         "&",
//         "'",
//         "*",
//         "+",
//         "/",
//         "=",
//         "?",
//         "^",
//         "_",
//         "`",
//         "{",
//         "|",
//         "}",
//         "~",
//         '"',
//         "\n",
//         "\r",
//       ],
//       "This character is not allowed"
//     )
//     .transform((value) => value.replace(/\s+/g, ""))
//     .trim(),
//   password: yup
//     .string()
//     .required("The password is required")
//     .min(8, "Enter at least 8 characters")
//     .max(64, "Enter the password no longer than 64 characters")
//     .transform((value) => value.replace(/\s+/g, ""))
//     .trim(),
// });
