import { useState } from "react"
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export default function GifExpertApp() {
  const [categories, setCategories] = useState( [] );

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;
    setCategories([newCategory, ...categories]);
  };

  const handleClearScreen = () => {
    setCategories([]);
  };

  return (
    <>
      <h1>GifExpertApp</h1>

      <button  className="button" onClick={handleClearScreen}>Limpiar pantalla</button>

      <AddCategory onNewCategory={value => onAddCategory(value)} />

      {categories.map(category => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  )
}