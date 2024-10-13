import axios from "axios";
import { useMutation } from "react-query";
import { MICROSERVICE_ENDPOINTS } from "src/config/environment";
import { useGetUserInfo } from "src/hooks/useGetUserInfo";

interface IAddFundProps {
  amount: number;
}

export const createData = async (props: {
  data: IAddFundProps;
  token: string;
}) => {
  const url = `${MICROSERVICE_ENDPOINTS.GENERAL_SERVICE}/transaction/deposit`;

  const config = {
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${props.token}`,
    },
  };

  const data: any = {
    amount: props.data.amount,
  };

  const response = await axios.post(url, data, config);

  return response;
};

export const useAddFund = () => {
  const { token } = useGetUserInfo();
  return useMutation((props: IAddFundProps) =>
    createData({ data: props, token })
  );
};
