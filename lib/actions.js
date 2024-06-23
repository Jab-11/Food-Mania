"use server";

import { redirect } from "next/navigation";
import { saveMeal } from "./meals";

function isInvalidText(text) {
  return !text || text.trim() === "";
}

export async function ShareMeal(prevState, formData) {
  const meal = {
    title: formData.get("title"),
    creator_email: formData.get("email"),
    creator: formData.get("name"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    image: formData.get("image"),
  };

  if (
    isInvalidText(meal.title) ||
    isInvalidText(meal.creator) ||
    isInvalidText(meal.summary) ||
    isInvalidText(meal.instructions) ||
    isInvalidText(meal.creator_email) ||
    !meal.creator_email.includes('@') ||
    !meal.image ||
    meal.image.size === 0
  ){
    return {
      message: "Invalid input"
    };
  }
    await saveMeal(meal);

  redirect("/meals");
}