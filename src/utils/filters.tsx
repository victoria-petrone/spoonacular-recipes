export interface IFilter {
  name: "cuisine" | "diet" | "intolerances";
  title: string;
  options: Array<{ name: string; value: string }>;
}

const filtersData: IFilter[] = [
  {
    name: "cuisine", //key del obj config (api)
    title: "Cuisine", // nombre que se muestra
    options: [
      { name: "German", value: "German" },
      { name: "African", value: "African" },
      { name: "Italian", value: "Italian" },
      { name: "Latin American", value: "Latin American" },
    ],
  },
  {
    name: "diet",
    title: "Diet",
    options: [
      { name: "Gluten Free", value: "Gluten Free" },
      { name: "Ketogenic", value: "Ketogenic" },
      { name: "Vegetarian", value: "Vegetarian" },
      { name: "Lacto-Vegetarian", value: "Lacto-Vegetarian" },
      { name: "Ovo-Vegetarian", value: "Ovo-Vegetarian" },
      { name: "Vegan", value: "Vegan" },
      { name: "Pescetarian", value: "Pescetarian" },
      { name: "Paleo", value: "Paleo" },
      { name: "Primal", value: "Primal" },
      { name: "Whole30", value: "Whole30" },
    ],
  },
  {
    name: "intolerances",
    title: "Intolerances",
    options: [
      { name: "Dairy", value: "Dairy" },
      { name: "Egg", value: "Egg" },
      { name: "Gluten", value: "Gluten" },
      { name: "Grain", value: "Grain" },
      { name: "Peanut", value: "Peanut" },
      { name: "Seafood", value: "Seafood" },
      { name: "Sesame", value: "Sesame" },
      { name: "Shellfish", value: "Shellfish" },
      { name: "Soy", value: "Soy" },
      { name: "Sulfite", value: "Sulfite" },
      { name: "Tree Nut", value: "Tree Nut" },
      { name: "Wheat", value: "Wheat" },
    ],
  },
];
export default filtersData;
