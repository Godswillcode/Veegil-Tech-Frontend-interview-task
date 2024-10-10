import axios from "axios";
import { useMutation } from "react-query";
import { MICROSERVICE_ENDPOINTS } from "src/config/environment";
import { forgotPasswordProps } from "../types";

const UserRequest = async (props: forgotPasswordProps) => {
  const url = `${MICROSERVICE_ENDPOINTS.GENERAL_SERVICE}/password-reset`;
  const data = { ...props };
  const response = await axios.post(url, data);
  return response;
};

export const useForgotPassword = () => {
  return useMutation(UserRequest);
};
