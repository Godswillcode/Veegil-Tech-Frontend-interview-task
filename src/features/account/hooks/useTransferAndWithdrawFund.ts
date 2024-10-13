import axios from "axios";
import { useMutation } from "react-query";
import { MICROSERVICE_ENDPOINTS } from "src/config/environment";
import { useGetUserInfo } from "src/hooks/useGetUserInfo";
import { ITransferAndWithdrawFundsProps } from "../types";



export const createData = async (props: {
  data: ITransferAndWithdrawFundsProps;
  token: string;
}) => {
  const url = `${MICROSERVICE_ENDPOINTS.GENERAL_SERVICE}/transaction/${props.data.userId}`;

  const config = {
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${props.token}`,
    },
  };

  const data: any = {
    amount: props.data.amount,
    reason: props.data.reason,
    note: props.data.note,
    password: props.data.password,
    // transaction_type: "debit",
  };

  const response = await axios.post(url, data, config);

  return response;
};

export const useTransferAndWithdrawFund = () => {
  const { token } = useGetUserInfo();
  return useMutation((props: ITransferAndWithdrawFundsProps) =>
    createData({ data: props, token })
  );
};
