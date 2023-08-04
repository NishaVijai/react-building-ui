import FilterableProductTable from "./components/FilterableProductTable";
import "./styles.css";

export default function App() {
  const PRODUCTS = [
    { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
    { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
    { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
    { category: "Fruits", price: "$3", stocked: true, name: "Avocado" },
    { category: "Fruits", price: "$3", stocked: true, name: "Orange" },
    { category: "Fruits", price: "$4", stocked: false, name: "Kiwi" },
    { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
    { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
    { category: "Vegetables", price: "$5", stocked: true, name: "Mushroom" },
    { category: "Vegetables", price: "$5", stocked: false, name: "Potato" },
    {
      category: "Vegetables",
      price: "$6",
      stocked: false,
      name: "Sweet Potato"
    },
    { category: "Vegetables", price: "$1", stocked: true, name: "Peas" }
  ];

  return (
    <div className="App">
      <FilterableProductTable products={PRODUCTS} />
    </div>
  );
}
