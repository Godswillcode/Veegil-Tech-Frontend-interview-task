import axios from "axios";
import { MICROSERVICE_ENDPOINTS } from "src/config/environment";
import { loginProps } from "../types";
import { useMutation } from "react-query";

const registerUser = async (props: loginProps) => {
  const url = `${MICROSERVICE_ENDPOINTS.GENERAL_SERVICE}/auth/register`;
  const data = { ...props };
  const response = await axios.post(url, data);
  return response;
};

export const useRegistration = () => {
  return useMutation(registerUser);
};
