import { useState } from "react"
import { AddCategory } from "./components/add-category/add-category.component";


export const GiftExppertApp = () => {

  const [ categories, setCategories ] = useState(['One Punch', 'dragon ball z']);

  const onAddCategory = (newCategory) => {
    setCategories([ ...categories, newCategory ])
  }

  return(
    <div className="container mt-5">
      <h1>Gift Expert App</h1>
      <hr />


      <AddCategory 
        onNewCategory={ onAddCategory }
      />

      <ul className="list-group">
        {
          categories.map(category => {
            return <li key={ category } className="list-group-item"> { category } </li>
          })
        }
      </ul>
    </div>
  )
}