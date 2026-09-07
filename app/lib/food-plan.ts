export type Preferences = {
  likes: string[];
  avoids: string[];
  diet: string;
  quick: boolean;
  budget: boolean;
  otherRestriction: boolean;
  foodText: string;
};

export type FoodTextInsight = {
  inferredLikes: string[];
  recognizedFoods: string[];
  notes: string[];
  summary: string;
};

export const foodChoices = ["Fish meals", "Egg dishes", "Cereal or oats", "Smoothies", "Rice or pasta", "Mushrooms"];
export const avoidChoices = ["Fish", "Egg", "Milk", "Soy", "Wheat", "Nuts", "Sesame"];

const foodSignals = [
  { like: "Fish meals", label: "fish or seafood", words: ["fish", "salmon", "tuna", "sardine", "mackerel", "tilapia", "snapper", "escovitch"] },
  { like: "Egg dishes", label: "egg dishes", words: ["egg", "eggs", "omelet", "omelette", "shakshuka"] },
  { like: "Cereal or oats", label: "cereal, oats, or porridge", words: ["cereal", "oat", "oats", "oatmeal", "porridge"] },
  { like: "Smoothies", label: "smoothies or shakes", words: ["smoothie", "smoothies", "shake"] },
  { like: "Rice or pasta", label: "rice, pasta, or noodles", words: ["rice", "pasta", "noodle", "noodles", "spaghetti", "jollof", "arroz", "biryani", "ramen", "lo mein"] },
  { like: "Mushrooms", label: "mushrooms", words: ["mushroom", "mushrooms"] },
] as const;

const recognizedSignals = [
  { label: "beans or lentils", words: ["bean", "beans", "lentil", "lentils", "peas"] },
  { label: "chicken", words: ["chicken"] },
  { label: "fortified milk or yogurt", words: ["milk", "yogurt", "yoghurt"] },
  { label: "plant-based drinks", words: ["soy milk", "almond milk", "oat milk", "plant milk", "plant-based drink"] },
  { label: "fast-food items", words: ["burger", "burgers", "fries", "pizza", "fast food"] },
] as const;

function includesSignal(text: string, signal: string) {
  const escaped = signal.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  return new RegExp(`(^|[^a-z])${escaped}([^a-z]|$)`, "i").test(text);
}

export function interpretFoodText(foodText: string): FoodTextInsight {
  const text = foodText.trim();
  if (!text) {
    return { inferredLikes: [], recognizedFoods: [], notes: [], summary: "No usual foods entered; the plan will use your selected preferences." };
  }

  const inferredLikes = foodSignals
    .filter((signal) => signal.words.some((word) => includesSignal(text, word)))
    .map((signal) => signal.like);
  const recognizedFoods = [
    ...foodSignals.filter((signal) => inferredLikes.includes(signal.like)).map((signal) => signal.label),
    ...recognizedSignals.filter((signal) => signal.words.some((word) => includesSignal(text, word))).map((signal) => signal.label),
  ];
  const notes: string[] = [];

  if (["fried", "deep fried", "fry-up"].some((word) => includesSignal(text, word))) {
    notes.push("You mentioned fried foods. The planner keeps them visible and suggests reviewing the full meal, preparation method, and serving pattern instead of labeling the food as simply good or bad.");
  }
  if (["junk food", "snack food", "processed food"].some((word) => includesSignal(text, word))) {
    notes.push("A broad label such as junk or processed food can hide useful details. Write down the actual item or brand so you can check its ingredients, serving size, and vitamin D label value.");
  }
  if (["cultural", "traditional", "family recipe", "home food", "home-cooked", "homemade"].some((word) => includesSignal(text, word))) {
    notes.push("Cultural and family foods belong in the plan. Keep the meal name and recipe intact, then identify ingredients or fortified products that matter to the vitamin D conversation.");
  }
  if (recognizedFoods.length === 0) {
    notes.push("The planner saved your words exactly even though this small food library did not recognize the meal. Bring the recipe, ingredients, restaurant item, or product label into the conversation rather than forcing it into a generic category.");
  }

  const uniqueFoods = [...new Set(recognizedFoods)];
  return {
    inferredLikes: [...new Set(inferredLikes)],
    recognizedFoods: uniqueFoods,
    notes,
    summary: uniqueFoods.length
      ? `We recognized ${uniqueFoods.join(", ")} in what you entered.`
      : `We saved “${text}” as part of your usual routine.`,
  };
}

const meals = [
  { id: "fish", likes: ["Fish meals", "Rice or pasta"], title: "Salmon with rice", detail: "Try cooked salmon with plain rice and vegetables you enjoy. Fresh, frozen, or canned salmon can work.", contains: ["Fish"], diet: "omnivore", quick: true, budget: true },
  { id: "sardine", likes: ["Fish meals", "Rice or pasta"], title: "Sardines with a familiar staple", detail: "Pair sardines with rice, plantain, or another staple already used in your household. Check sodium and serving information on the label.", contains: ["Fish"], diet: "omnivore", quick: true, budget: true },
  { id: "egg", likes: ["Egg dishes", "Rice or pasta"], title: "An egg-and-vegetable bowl", detail: "Pair a fully cooked whole egg with rice and vegetables you like. The yolk contains some vitamin D.", contains: ["Egg"], diet: "vegetarian", quick: true, budget: true },
  { id: "milk", likes: ["Cereal or oats", "Smoothies"], title: "Fortified milk with your breakfast", detail: "Try vitamin-D-fortified milk alongside breakfast or in a fruit smoothie. Check the product label for vitamin D per serving.", contains: ["Milk"], diet: "vegetarian", quick: true, budget: true },
  { id: "plant", likes: ["Cereal or oats", "Smoothies"], title: "A fortified plant-drink smoothie", detail: "Blend a vitamin-D-fortified plant drink with fruit you already enjoy, or use it with breakfast. Fortification and allergens differ by brand, so check the label.", contains: ["Soy", "Nuts", "Wheat"], diet: "vegan", quick: true, budget: true },
  { id: "mushroom", likes: ["Mushrooms", "Rice or pasta"], title: "UV-exposed mushrooms with rice", detail: "Cook mushrooms labeled UV-exposed or vitamin-D-enhanced and serve with rice. Ordinary mushrooms may provide little vitamin D; check the packaging.", contains: [], diet: "vegan", quick: false, budget: false },
];

export function recommendFoods(p: Preferences) {
  if (p.otherRestriction) return [];
  const interpreted = interpretFoodText(p.foodText);
  const combinedLikes = [...new Set([...p.likes, ...interpreted.inferredLikes])];
  if (p.foodText.trim() && combinedLikes.length === 0) {
    return [{
      id: "entered-meal",
      likes: [],
      title: "Map the meal you named",
      detail: `Keep “${p.foodText.trim()}” visible. List its main ingredients or find the product label, then look for fish, egg yolk, UV-exposed mushrooms, or a fortified milk or plant drink. The planner cannot verify an unfamiliar recipe or its allergens.`,
      contains: [],
      diet: "unknown",
      quick: false,
      budget: false,
      match: [],
    }];
  }
  return meals
    .filter((meal) => !meal.contains.some((allergen) => p.avoids.includes(allergen)))
    .filter((meal) => p.diet !== "vegan" || meal.diet === "vegan")
    .filter((meal) => p.diet !== "vegetarian" || meal.diet !== "omnivore")
    .filter((meal) => !p.quick || meal.quick)
    .filter((meal) => !p.budget || meal.budget)
    .map((meal) => ({ ...meal, match: meal.likes.filter((like) => combinedLikes.includes(like)) }))
    .filter((meal) => combinedLikes.length === 0 || meal.match.length > 0)
    .sort((a, b) => b.match.length - a.match.length)
    .slice(0, 3);
}
