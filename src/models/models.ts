export interface User {
  email: string;
  id: string;
  avatar: string;
  name: string;
}

export interface Account {
  account_id: number;
  created_at: Date;
  name: string;
  budget_limit: number;
  categories: string[];
  belongs_to_user: string;
}
