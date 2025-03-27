import Link from "next/link";
import Image from "next/image";
import LOGO from "@/assets/logo.png";
import classes from "./main-header.module.css";
import NavLink from "./nav-link";

const MainHeader = () => {
   return (
      <header className={classes.header}>
         <Link className={classes.logo} href="/">
            <Image src={LOGO} alt="A nextBite logo" priority />
            <span>NextBite</span>
         </Link>
         <nav className={classes.nav}>
            <ul>
               <li>
                  <NavLink href="/meals">Meals</NavLink>
               </li>
               <li>
                  <NavLink href="/community">Community</NavLink>
               </li>
               <li>
                  <NavLink href="/meals/share">Share Meal</NavLink>
               </li>
            </ul>
         </nav>
      </header>
   );
};
export default MainHeader;
