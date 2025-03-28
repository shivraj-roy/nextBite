import classes from "./meals-list.module.css";
import MealItem from "./meal-item";

const MealsList = ({ meals }) => {
   return (
      <ul className={classes.meals}>
         {meals.map((meal) => (
            <MealItem key={meal.id} {...meal} />
         ))}
      </ul>
   );
};
export default MealsList;
