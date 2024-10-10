import axios from "axios";
import { useMutation } from "react-query";
import { MICROSERVICE_ENDPOINTS } from "src/config/environment";
import { changePasswordProps } from "../types";
import { useGetToken } from "src/hooks/useGetToken";

const UserRequest = async (props: changePasswordProps) => {
  const token = useGetToken();
  const url = `${MICROSERVICE_ENDPOINTS.GENERAL_SERVICE}/change-password`;
  const config = {
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  const data = {
    ...props,
  };

  const response = await axios.post(url, data, config);
  return response;
};

export const useChangePassword = () => {
  return useMutation(UserRequest);
};
