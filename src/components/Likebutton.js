import React from 'react'


const products = [
    { title: 'Cabbage', id: 1 },
    { title: 'Garlic', id: 2 },
    { title: 'Apple', id: 3 },
  ];
  const listItems = products.map(product =>
    <li key={product.id}>
      {product.title}
    </li>
  );
  
  
export function MyButton(props){
    return(
        <ul>{listItems}</ul>
    );
}