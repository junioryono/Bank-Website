import { createContext, useContext, ReactNode, useState, useEffect } from "react";

type Transaction = {
   status: "pending" | "completed" | "failed";
   date: Date;
   amount: number;
   description: string;
};

type CheckingsAccount = {
   type: "checkings";
   accountNumber: string;
   balance: number;
   transactions: Transaction[];
   overdraftLimit: number;
};

type SavingsAccount = {
   type: "savings";
   accountNumber: string;
   balance: number;
   transactions: Transaction[];
   interestRate: number;
};

type CreditCardAccount = {
   type: "credit card";
   accountNumber: string;
   balance: number;
   transactions: Transaction[];
   creditLimit: number;
   interestRate: number;
   minimumPayment: number;
   paymentDueDate: Date;
};

type LoanAccount = {
   type: "loan";
   accountNumber: string;
   balance: number;
   transactions: Transaction[];
   interestRate: number;
   minimumPayment: number;
   paymentDueDate: Date;
};

type Account = CheckingsAccount | SavingsAccount | CreditCardAccount | LoanAccount;

type User = {
   id: string;
   email: string;
   name: string;
   accounts: Account[];
};

export const AuthContext = createContext<User | undefined | null>(undefined);

export const useAuth = () => {
   return useContext(AuthContext);
};

export function AuthProvider({ children }: { children: ReactNode }) {
   const [user, setUser] = useState<User | null | undefined>(undefined);

   useEffect(() => {
      const enableTestUser = true;

      if (enableTestUser) {
         const transaction: Transaction = {
            status: "completed",
            date: new Date(),
            amount: 1000,
            description: "Test transaction",
         };

         setUser({
            id: "123",
            email: "test@gmail.com",
            name: "Test User",
            accounts: [
               {
                  type: "checkings",
                  accountNumber: "123456789",
                  balance: 10000,
                  transactions: [transaction, transaction, transaction],
                  overdraftLimit: 1000,
               },
               {
                  type: "savings",
                  accountNumber: "987654321",
                  balance: 10000,
                  transactions: [transaction, transaction, transaction],
                  interestRate: 0.01,
               },
               {
                  type: "credit card",
                  accountNumber: "123123123",
                  balance: 10000,
                  transactions: [transaction, transaction, transaction],
                  creditLimit: 10000,
                  interestRate: 0.1,
                  minimumPayment: 100,
                  paymentDueDate: new Date(),
               },
               {
                  type: "loan",
                  accountNumber: "321321321",
                  balance: 10000,
                  transactions: [transaction, transaction, transaction],
                  interestRate: 0.1,
                  minimumPayment: 100,
                  paymentDueDate: new Date(),
               },
            ],
         });
      } else {
         setUser(null);
      }
   }, []);

   return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
}
