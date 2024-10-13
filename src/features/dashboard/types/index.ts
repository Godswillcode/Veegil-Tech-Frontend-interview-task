export interface IActivityLogs {
  id: number;
  action_type: string;
  item: string;
  created_at: string;
  user: {
    id: number;
    name: string;
    email: string;
  }
}

export interface ICurrentBalance{
  balance: number;
}





