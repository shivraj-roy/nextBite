import classes from "./page.module.css";
import Image from "next/image";
import { getMeal } from "@/lib/meals";

const MealsDetails = ({ params }) => {
   const meal = getMeal(params.mealsID);

   return (
      <>
         <header className={classes.header}>
            <div className={classes.image}>
               <Image src={meal.image} alt={meal.slug} fill />
            </div>
            <div className={classes.headerText}>
               <h1>{meal.title}</h1>
               <p className={classes.creator}>
                  by{" "}
                  <a href={`mailto: ${meal.creator_email} `}>{meal.creator}</a>
               </p>
               <p className={classes.summary}>{meal.summary}</p>
            </div>
         </header>
         <main>
            <p
               className={classes.instructions}
               dangerouslySetInnerHTML={{
                  __html: meal.instructions.replace(/\n/g, "<br>"),
               }}
            ></p>
         </main>
      </>
   );
};
export default MealsDetails;
