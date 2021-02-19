import React, { useState } from "react";
import PropTypes from 'prop-types';

const AddCategory = ({setCategory}) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if(!inputValue || inputValue === '' || inputValue.trim().length < 2) {
      return false;
    }

    setCategory(cats => [...cats, inputValue]);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={inputValue} onChange={handleInputChange} />
    </form>
  );

};

AddCategory.propTypes = {
  setCategory: PropTypes.func.isRequired
};

export default AddCategory;
