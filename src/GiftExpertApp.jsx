import { useState } from "react";

import { AddCategory, GiftGrid } from "./components";

import './GiftExpertApp.css';


export const GiftExppertApp = () => {

  const [categories, setCategories] = useState(['One Punch']);

  const onAddCategory = (newCategory) => {
    newCategory = newCategory.toLowerCase();
    if (categories.includes(newCategory)) return;
    setCategories([...categories, newCategory]);
  };

  return (
    <div className="container mt-5">
      <h1>Gift Expert App</h1>
      <hr />
      <AddCategory 
        onNewCategory={ onAddCategory }
      />
      {
        categories.map(category => (<GiftGrid key={category} category={category} />))
      }
    </div>);
};