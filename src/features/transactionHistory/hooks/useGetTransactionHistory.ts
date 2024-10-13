import axios from "axios";
import { useQuery } from "react-query";
import { MICROSERVICE_ENDPOINTS } from "src/config/environment";
import { ITransactionHistoryProps } from "../types";
import { useGetUserInfo } from "src/hooks/useGetUserInfo";

export const QUERY_KEY_FOR_TRANSACTIONS_HISTORY = "transactionsHistory";

const getData = async (props: {
  token: string;
  transaction_type?: string;
}): Promise<ITransactionHistoryProps[]> => {
  const url = `${MICROSERVICE_ENDPOINTS.GENERAL_SERVICE}/transaction`;
  const config = {
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${props.token}`,
    },
    params: {
      transaction_type: props.transaction_type,
    },
  };

  const res = await axios.get(url, config);
  
  const fetchedData = res.data.data;
  const result = fetchedData.history;
  const data: ITransactionHistoryProps[] = result;

  return data;
};
export const useGetTransactionHistory = (props?: { transaction_type?: string }) => {
    const { token } = useGetUserInfo();
  const queryData = useQuery(
    [QUERY_KEY_FOR_TRANSACTIONS_HISTORY, props?.transaction_type],
    () =>
      getData({
        token,
        transaction_type: props?.transaction_type,
      }),
    {
      onError: () => {},
      onSuccess: () => {},
    }
  );

  return queryData;
};
