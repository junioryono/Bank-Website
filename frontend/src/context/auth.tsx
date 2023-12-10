import { createContext, useContext, ReactNode, useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";

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
   full_name: string;
   email: string;
   address: string;
   // salary: string;
   accounts: Account[];
};

type contextData = {
   user: User;
   setUser: any;
   authTokens: any;
   setAuthTokens: any;
   registerUser: any;
   loginUser: any;
   logoutUser: any;
};

export const AuthContext = createContext<User | contextData | undefined | null>(undefined);
export const useAuth = () => {
   return useContext(AuthContext);
};

export function AuthProvider({ children }: { children: ReactNode }) {
   // const [user, setUser] = useState<User | null | undefined>(undefined);

   const [authTokens, setAuthTokens] = useState(() =>
      localStorage.getItem("authTokens") ? JSON.parse(localStorage.getItem("authTokens") || "{}") : null,
   );

   const [user, setUser] = useState<User | null | undefined>(() =>
      localStorage.getItem("authTokens") ? jwtDecode(localStorage.getItem("authTokens") || "{}") : null,
   );

   const loginUser = async (email: string, password: string) => {
      const response = await fetch("http://127.0.0.1:8000/users/token/", {
         method: "POST",
         headers: {
            "Content-Type": "application/json",
         },
         body: JSON.stringify({
            email,
            password,
         }),
      });
      const data = await response.json();
      console.log(data);

      if (response.status === 200) {
         console.log("Logged In");
         setAuthTokens(data);
         setUser(jwtDecode(data.access));
         localStorage.setItem("authTokens", JSON.stringify(data));
      } else {
         console.log(response.status);
         console.log("there was a server issue");
         alert("Username or passowrd does not exists");
      }
      return response.status;
   };

   const registerUser = async (email: string, username: string, password: string, password2: string) => {
      const response = await fetch("http://127.0.0.1:8000/users/register/", {
         method: "POST",
         headers: {
            "Content-Type": "application/json",
         },
         body: JSON.stringify({
            email,
            username,
            password,
            password2,
         }),
      });
      if (response.status === 201) {
         // navigate("/login");
         alert("Registration Successful, Login Now");
      } else {
         console.log(response.status);
         console.log("there was a server issue");
         alert("An Error Occured");
      }
   };

   const logoutUser = () => {
      setAuthTokens(null);
      setUser(null);
      localStorage.removeItem("authTokens");
      // history.push("/login");
      alert("YOu have been logged out...");
   };

   const contextData = {
      user,
      setUser,
      authTokens,
      setAuthTokens,
      registerUser,
      loginUser,
      logoutUser,
   };

   useEffect(() => {
      if (authTokens) {
         setUser(jwtDecode(authTokens.access));
      }
   }, [authTokens]);

   // useEffect(() => {
   //    const enableTestUser = false;

   //    if (enableTestUser) {
   //       const transaction: Transaction = {
   //          status: "completed",
   //          date: new Date(),
   //          amount: 1000,
   //          description: "Test transaction",
   //       };

   //       setUser({
   //          id: "123",
   //          email: "test@gmail.com",
   //          name: "Test User",
   //          accounts: [
   //             {
   //                type: "checkings",
   //                accountNumber: "123456789",
   //                balance: 10000,
   //                transactions: [transaction, transaction, transaction],
   //                overdraftLimit: 1000,
   //             },
   //             {
   //                type: "savings",
   //                accountNumber: "987654321",
   //                balance: 10000,
   //                transactions: [transaction, transaction, transaction],
   //                interestRate: 0.01,
   //             },
   //             {
   //                type: "credit card",
   //                accountNumber: "123123123",
   //                balance: 10000,
   //                transactions: [transaction, transaction, transaction],
   //                creditLimit: 10000,
   //                interestRate: 0.1,
   //                minimumPayment: 100,
   //                paymentDueDate: new Date(),
   //             },
   //             {
   //                type: "loan",
   //                accountNumber: "321321321",
   //                balance: 10000,
   //                transactions: [transaction, transaction, transaction],
   //                interestRate: 0.1,
   //                minimumPayment: 100,
   //                paymentDueDate: new Date(),
   //             },
   //          ],
   //       });
   //    } else {
   //       setUser(null);
   //    }
   // }, []);

   return <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>;
}
