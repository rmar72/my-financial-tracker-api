export type ExpenseInput = {
    amount: number;
    date: string;
    categoryId: number;
    paymentId: number;
    userId?: number;
    description?: string;
};