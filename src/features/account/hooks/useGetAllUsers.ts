import axios from "axios";
import { useQuery } from "react-query";
import { MICROSERVICE_ENDPOINTS } from "src/config/environment";
import { IAllUsersProps } from "../types";
import { useGetUserInfo } from "src/hooks/useGetUserInfo";

export const QUERY_KEY_FOR_GETTING_ALL_USERS = "getAllUsers";

const getData = async (props: {
  token: string;
  phone?: number | string;
}): Promise<IAllUsersProps[]> => {
  const url = `${MICROSERVICE_ENDPOINTS.GENERAL_SERVICE}/auth/get-all-users`;
  const config = {
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${props.token}`,
    },
    params: {
      phone: props.phone,
    },
  };

  const res = await axios.get(url, config);  
  const fetchedData = res.data.data;
  const result = fetchedData.users;
  const data: IAllUsersProps[] = result;

  return data;
};
export const useGetAllUsers = (props?: { phone?: number | string }) => {
    const { token } = useGetUserInfo();
  const queryData = useQuery(
    [QUERY_KEY_FOR_GETTING_ALL_USERS, props?.phone],
    () =>
      getData({
        token,
        phone: props?.phone,
      }),
    {
      onError: () => {},
      onSuccess: () => {},
    }
  );

  return queryData;
};
