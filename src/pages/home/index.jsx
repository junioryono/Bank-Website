import { Link } from "react-router-dom";

export default function Home() {
   const navBarItems = [
      "Checking",
      "Savings & CDs",
      "Credit Cards",
      "Home",
      "Loans",
      "Personal",
      "Loans",
      "Auto",
      "Loans",
      "Premier",
      "Education & Tools",
   ];
   return (
      <>
         <nav className="flex bg-center gap-20 border-b-2">
            <Link to={"create/checkings"} className="hover:bg-orange-50 hover:underline rounded-md px-3 py-3">
               Checking
            </Link>
            <Link to={"create/savings"} className="hover:bg-orange-50 hover:underline rounded-md px-3 py-3">
               Savings
            </Link>
            <Link to={"apply/credit-card"} className="hover:bg-orange-50 hover:underline rounded-md px-3 py-3">
               Credit Cards
            </Link>
            <Link to={"apply/loan"} className="hover:bg-orange-50 hover:underline rounded-md px-3 py-3">
               Loans
            </Link>
         </nav>
      </>
   );
}
