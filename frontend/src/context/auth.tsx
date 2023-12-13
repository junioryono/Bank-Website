import { createContext, useContext, ReactNode, useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";

type Transaction = {
   status: "pending" | "completed" | "failed";
   date: Date;
   amount: number;
   description: string;
};

type CheckingsAccount = {
   accountType: "checkings";
   accountNumber: string;
   balance: number;
   transactions: Transaction[];
   overdraftLimit: number;
};

type SavingsAccount = {
   accountType: "savings";
   accountNumber: string;
   balance: number;
   transactions: Transaction[];
   interestRate: number;
};

type CreditCardAccount = {
   accountType: "credit card";
   accountNumber: string;
   balance: number;
   transactions: Transaction[];
   creditLimit: number;
   interestRate: number;
   minimumPayment: number;
   paymentDueDate: Date;
};

type LoanAccount = {
   accountType: "loan";
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

      if (response.status === 200) {
         setAuthTokens(data);
         setUser(jwtDecode(data.access));
         localStorage.setItem("authTokens", JSON.stringify(data));
      } else {
         alert("Username or password does not exists");
      }
      return response.status;
   };

   const registerUser = async (
      email: string,
      username: string,
      password: string,
      password2: string,
      firstName: string,
      lastName: string,
      address: string,
      salary: string,
   ) => {
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
            firstName,
            lastName,
            address,
            salary,
         }),
      });
      const data = await response.json();
      if (response.status === 201) {
         // navigate("/login");
         alert("Registration Successful, Login Now");
      } else {
         alert("An Error Occured");
      }
      return response.status;
   };

   const logoutUser = () => {
      setAuthTokens(null);
      setUser(null);
      localStorage.removeItem("authTokens");
      // history.push("/login");
   };

   const fetchAccounts = async () => {
      if (authTokens) {
         const response = await fetch("http://127.0.0.1:8000/users/accounts/", {
            method: "GET",
            headers: {
               Authorization: `Bearer ${authTokens.access}`,
            },
         });

         if (!response.ok) {
            return null;
         }

         return response.json();
      }
   };

   const createAccount = async (options: any) => {
      const response = await fetch("http://127.0.0.1:8000/users/account/create/", {
         method: "POST",
         headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${authTokens?.access}`,
         },
         body: JSON.stringify({
            ...options,
         }),
      }).then((res) => res.json());

      if (response && response.id) {
         return !!response;
      }

      return false;
   };

   const contextData = {
      user,
      setUser,
      authTokens,
      setAuthTokens,
      registerUser,
      loginUser,
      logoutUser,
      fetchAccounts,
      createAccount,
   };

   useEffect(() => {
      if (authTokens) {
         setUser(jwtDecode(authTokens.access));
      }
   }, [authTokens]);

   return <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>;
}
