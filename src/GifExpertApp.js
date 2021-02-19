import React, { useState } from 'react';
import AddCategory from './components/AddCategory';

const GifExpertApp = () => {
  // const categories = ['One Punch', 'Simpson', 'Casados con hijos'];
  const [categories, setCategory] = useState([]);
  
  // const agregarElemento = () => {
  //   //para agregar un elemento a un array se puede hacer de la siguiente forma:
  //   setCategory([...categories, 'Mr. Robot']);
  // }

  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory setCategory={setCategory}/>
      <hr />

      <ol>
        {
          categories.map((category) => {
            return (
              <li key={category}>{category}</li>
            );
          })
        }
      </ol>
    </>
  );
};

export default GifExpertApp;
