"use server";

export const shareMeal = async (formData) => {
   const meal = Object.fromEntries(formData.entries());
   console.log("meal: ", meal);
};
