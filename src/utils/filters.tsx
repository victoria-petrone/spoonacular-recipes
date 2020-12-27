export interface IFilter {
  name: string;
  title: string;
  options: Array<{ name: string; value: string }>;
}

const filters: IFilter[] = [
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
];
export default filters;
