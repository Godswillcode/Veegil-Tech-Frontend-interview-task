export type AccountTActions =  "logout" | "withdrawFunds" | "depositFund" | "transfer"


export interface IAllUsersProps {
  phone: number;
  full_name: string;
  email: string;
  _id: string;
} 

export interface ITransferAndWithdrawFundsProps {
    amount: number;
    reason?: string;
    note?: string;
    password: string;
    transaction_type?: string;
    userId: string | number;
}
