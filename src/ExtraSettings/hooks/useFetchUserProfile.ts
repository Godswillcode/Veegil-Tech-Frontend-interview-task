import axios from "axios";
import { useQuery } from "react-query";
import { MICROSERVICE_ENDPOINTS } from "src/config/environment";
import { userProfileProps } from "../types";
import { useGetToken } from "src/hooks/useGetToken";

export const QUERY_KEY_FOR_USER_PROFILE = "userProfile";

const getData = async (): Promise<userProfileProps> => {
 const token = useGetToken()

  const url = `${MICROSERVICE_ENDPOINTS.GENERAL_SERVICE}/get-profile`;
  const config = {
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
  const res = await axios.get(url, config);
  const item: userProfileProps = res.data.data;
  const data: userProfileProps = {
    ...item,
  };

  return data;
};
export const useFetchUserProfile = () => {
  const queryData = useQuery(
    [QUERY_KEY_FOR_USER_PROFILE],
    () => getData(),
    {
      onError: () => {},
      onSuccess: () => {},
    }
  );

  return queryData;
};
