export type Preferences = { likes: string[]; avoids: string[]; diet: string; quick: boolean; budget: boolean; otherRestriction: boolean };
export const foodChoices = ["Fish meals", "Egg dishes", "Cereal or oats", "Smoothies", "Rice or pasta", "Mushrooms"];
export const avoidChoices = ["Fish", "Egg", "Milk", "Soy", "Wheat", "Nuts", "Sesame"];
const meals = [
  { id: "fish", likes: ["Fish meals", "Rice or pasta"], title: "Salmon with rice", detail: "Try cooked salmon with plain rice and vegetables you enjoy. Fresh, frozen, or canned salmon can work.", contains: ["Fish"], diet: "omnivore", quick: true, budget: true },
  { id: "egg", likes: ["Egg dishes"], title: "An egg-and-vegetable bowl", detail: "Pair a fully cooked whole egg with rice and vegetables you like. The yolk contains some vitamin D.", contains: ["Egg"], diet: "vegetarian", quick: true, budget: true },
  { id: "milk", likes: ["Cereal or oats", "Smoothies"], title: "Fortified milk with your breakfast", detail: "Try vitamin-D-fortified milk alongside breakfast or in a fruit smoothie. Check the product label for vitamin D per serving.", contains: ["Milk"], diet: "vegetarian", quick: true, budget: true },
  { id: "plant", likes: ["Cereal or oats", "Smoothies"], title: "A fortified oat-drink smoothie", detail: "Blend a vitamin-D-fortified oat drink with fruit you already enjoy, or use it with breakfast. Not every oat drink is fortified; check the label.", contains: ["Wheat"], diet: "vegan", quick: true, budget: true },
  { id: "mushroom", likes: ["Mushrooms", "Rice or pasta"], title: "UV-exposed mushrooms with rice", detail: "Cook mushrooms labeled UV-exposed or vitamin-D-enhanced and serve with rice. Ordinary mushrooms may provide little vitamin D; check the packaging.", contains: [], diet: "vegan", quick: false, budget: false },
];
export function recommendFoods(p: Preferences) {
  if (p.otherRestriction) return [];
  return meals.filter(m => !m.contains.some(a => p.avoids.includes(a)) && (p.diet !== "vegan" || m.diet === "vegan") && (p.diet !== "vegetarian" || m.diet !== "omnivore") && (!p.quick || m.quick) && (!p.budget || m.budget))
    .map(m => ({ ...m, match: m.likes.filter(l => p.likes.includes(l)) }))
    .filter(m => p.likes.length === 0 || m.match.length > 0)
    .sort((a,b) => b.match.length-a.match.length).slice(0,3);
}
