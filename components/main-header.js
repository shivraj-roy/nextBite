import Link from "next/link";
import Image from "next/image";
import LOGO from "@/assets/logo.png";
import classes from "./main-header.module.css";

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
                  <Link href="/meals">Meals</Link>
               </li>
               <li>
                  <Link href="/community">Community</Link>
               </li>
               <li>
                  <Link href="/meals/share">Share Meal</Link>
               </li>
            </ul>
         </nav>
      </header>
   );
};
export default MainHeader;
