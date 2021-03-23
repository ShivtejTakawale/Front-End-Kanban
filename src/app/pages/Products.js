import React from 'react';
import CreateEmployeeComponent from '../components/CreateEmployeeComponent';

function Products() {
  return (
    <div className='products' style={{  
      backgroundImage: "url(" + "https://images.pexels.com/photos/34153/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350" + ")",
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat'
    }}>
      <CreateEmployeeComponent/>
    </div>
  );
}

export default Products;