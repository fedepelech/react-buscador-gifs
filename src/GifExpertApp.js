import React, { useState } from 'react';
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

const GifExpertApp = () => {
  // const categories = ['One Punch', 'Simpson', 'Casados con hijos'];
  const [categories, setCategory] = useState(['One Punch']);

  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory setCategory={setCategory}/>
      <hr />

      <ol>
        {
          categories.map((category) => {
            return (
                <GifGrid key={category} category={category} />
              );
          })
        }
      </ol>
    </>
  );
};

export default GifExpertApp;
