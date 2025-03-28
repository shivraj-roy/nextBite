import Link from "next/link";
import classes from "./page.module.css";
import MealsList from "@/components/meals/meals-list";
import { getMeals } from "@/lib/meals";

const Meals = async () => {
   const meals = await getMeals();

   return (
      <>
         <header className={classes.header}>
            <h1>
               Delicious Meals, Created By{" "}
               <span className={classes.highlight}>You</span>
            </h1>
            <p>
               Choose your favorite meal to cook it yourself and enjoy a
               delicious meal at home.
            </p>
            <p className={classes.cta}>
               <Link href="/meals/share">Share your favorite meal</Link>
            </p>
         </header>
         <main className={classes.main}>
            <MealsList meals={meals} />
         </main>
      </>
   );
};
export default Meals;
