import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/auth";

export default function Login() {
   const { username } = useAuth();
   const navigate = useNavigate();

   useEffect(() => {
      if (username) {
         navigate("/dashboard");
      }
   }, [username]);

   if (username) {
      return null;
   }

   return <div>Login</div>;
}
