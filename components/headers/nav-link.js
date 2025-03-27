"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import classes from "./nav-link.module.css";

const NavLink = ({ href, children }) => {
   const pathname = usePathname();
   return (
      <Link
         className={
            pathname === href
               ? `${classes.link} ${classes.active}`
               : classes.link
         }
         href={href}
      >
         {children}
      </Link>
   );
};
export default NavLink;
