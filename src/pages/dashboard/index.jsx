import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/auth";

export default function Dashboard() {
   const user = useAuth();
   const navigate = useNavigate();

   useEffect(() => {
      if (!user) {
         navigate("/login?redirect=/dashboard");
      }
   }, [user]);

   if (!user) {
      return null;
   }

   return <div>Dashboard</div>;
}
