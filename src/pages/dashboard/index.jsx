import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/auth";

export default function Dashboard() {
   const { username } = useAuth();
   const navigate = useNavigate();

   useEffect(() => {
      if (!username) {
         navigate("/login?redirect=/dashboard");
      }
   }, [username]);

   if (!username) {
      return null;
   }

   return <div>Dashboard</div>;
}
