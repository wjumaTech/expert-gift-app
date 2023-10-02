import { useState } from "react"

export const AddCategory = ({ onNewCategory }) => {

  const [ inputValue, setInputValue ] = useState('Ragna Crimson')

  const onInputChange = ({ target }) => {
    setInputValue(target.value)
  }

  const onFormSubmit = (e) => {
    e.preventDefault();

    // Validation
    if( inputValue.trim().length <= 0 ) {
      return;
    }

    onNewCategory(inputValue);

    // Clear
    setInputValue('');
  }

  return(
    <form onSubmit={ onFormSubmit }>
      <input 
        type="search"
        className="form-control mb-3"
        value={ inputValue }
        onChange={ onInputChange }
      />
    </form>
  )
}