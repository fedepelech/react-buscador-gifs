import React, { useState } from "react";
import PropTypes from 'prop-types';
import { InputGroup, InputGroupText, Input } from 'reactstrap';

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

    setCategory(cats => [inputValue, ...cats]);
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputGroup>
        <Input placeholder="Escriba aquí.." type="text" value={inputValue} onChange={handleInputChange}/>
      </InputGroup>
    </form>
  );

};

AddCategory.propTypes = {
  setCategory: PropTypes.func.isRequired
};

export default AddCategory;
