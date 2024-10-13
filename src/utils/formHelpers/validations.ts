import { Rule } from "antd/lib/form";

export const generalValidationRules: Rule[] = [
  { required: true, message: "Field is required!" },
];

export const generalValidationRulesOpt: Rule[] = [
  { required: false, message: "Field is required!" },
];

export const textInputValidationRules: Rule[] = [
  ...generalValidationRules,
  { whitespace: true },
];

export const textInputValidationRulesOpt: Rule[] = [
  { whitespace: true },
  { required: false },
];

export const emailValidationRules: Rule[] = [
  {
    required: true,
    message: "Field is required",
  },
  {
    type: "email",
    message: "Invalid Email Address",
  },
];

export const passwordValidationRules: Rule[] = [
  {
    required: true,
  },
  { message: "Field is required" },

  {
    validator: async (_, value) => {
      let paswd =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~])[A-Za-z\d!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]{8,}$/;

      if (!paswd.test(value))
        throw new Error(
          "Password should contain at least one digit and special character and a letter in uppercase, and least 8 characters"
        );
      // if (false) throw new Error("Something wrong!");
      return true;
    },
  },
];



export const integerValidationRules: Rule[] = [
  { required: true, message: "Please enter a number" },
  {
    validator: (_: any, value: number, callback: (error?: string) => void) => {
      if (isNaN(value)) {
        callback("Please enter only digits");
      } else {
        callback();
      }
    },
  },
];

export const urlValidationRules: Rule[] = [
  { required: false },
  {
    type: "url",
    message: "Invalid URL",
  },
  { whitespace: true },
];


export const phoneNumberValidationRules: Rule[] = [
  ...generalValidationRules,
  {
    validator: async (_, value) => {
      // Check if the input is exactly 11 digits long and contains only digits
      const phoneRegex = /^[0-9]{11}$/;

      if (!value) {
        throw new Error("Phone number is required.");
      }
      if (!phoneRegex.test(value)) {
        throw new Error("Phone number must be exactly 11 digits and cannot contain any other characters.");
      }
      return true;
    },
  },
];
