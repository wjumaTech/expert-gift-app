import { useState } from "react";
import PropTypes from "prop-types";

export const AddCategory = ({ onNewCategory }) => {

  console.log(onNewCategory);

  const [inputValue, setInputValue] = useState('Ragna Crimson');

  const onInputChange = ({ target }) => {
    setInputValue(target.value);
  };

  const onFormSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (inputValue.trim().length <= 0) {
      return;
    };

    onNewCategory(inputValue);

    // Clear
    setInputValue('');
  };

  return (
    <form onSubmit={ onFormSubmit }>
      <input 
        type="search"
        className="form-control mb-3"
        value={ inputValue }
        onChange={ onInputChange }
      />
    </form>
  );
};

AddCategory.propTypes = {
  onNewCategory: PropTypes.func
};