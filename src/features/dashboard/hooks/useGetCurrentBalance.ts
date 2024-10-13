import axios from "axios";
import { useQuery } from "react-query";
import { MICROSERVICE_ENDPOINTS } from "src/config/environment";
import { useGetUserInfo } from "src/hooks/useGetUserInfo";
import { ICurrentBalance } from "../types";

export const QUERY_KEY_FOR_CURRENT_BALANCE = "currentBalance";

const getData = async (props: { token: string }): Promise<ICurrentBalance> => {
  const url = `${MICROSERVICE_ENDPOINTS.GENERAL_SERVICE}/auth/get-balance`;
  const config = {
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${props.token}`,
    },
  };

  const res = await axios.get(url, config);
  const ans: ICurrentBalance = res.data.data.user;

  return ans;
};
export const useGetCurrentBalance = () => {
  const { token } = useGetUserInfo();
  const queryData = useQuery(
    [QUERY_KEY_FOR_CURRENT_BALANCE],
    () => getData({ token }),
    {
      onError: () => {},
      onSuccess: () => {},
    }
  );

  return queryData;
};
