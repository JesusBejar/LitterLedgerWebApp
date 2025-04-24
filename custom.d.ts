// type declaration file
export type Income = {
  amount: number;
  description: string;
  date: string;
};

export type Expense = {
  amount: number;
  category: string;
  recurring: boolean;
  date: string;
};
