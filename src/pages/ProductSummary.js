import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import salesProducts from './productsData';
import { useCart } from './context/CartContext'; 
import minusicon from '../images/minus-3108.svg'
import plusicon from '../images/500px-Plus_symbol.svg.svg'



const ProductDetail = () => {
  const { index } = useParams();
  const productIndex = parseInt(index, 10); // Convert productId to a number
  const { addToCart, cart, incrementItemQuantity, decrementItemQuantity, } = useCart();
  const [showCartItems, setShowCartItems] = useState(false);

   // Filter cart items based on the current product's index
   const cartItemsForProduct = cart.filter((item) => item.index === productIndex);


  const products = salesProducts[productIndex];

  const handleAddToCart = () => {
    addToCart(products, index); // Pass the index to addToCart
    setShowCartItems(true);
  };

  const handleIncrementQuantity = () => {
    incrementItemQuantity(index); // Pass the index to incrementItemQuantity
  };

  const handleDecrementQuantity = () => {
    decrementItemQuantity(index); // Pass the index to decrementItemQuantity
  };

  if (!products) {
    // Handle the case when the product is not found (e.g., display a "Not Found" message)
    return (
      <div>
        <h2>Product Not Found</h2>
      </div>
    );
  }

  return (
    <div className='flex flex-col gap-6 p-6 justify-center bg-white w-full lg:w-2/3 mx-auto lg:flex-row'>
      <div>
      <div className="product-images flex flex-row gap-3 flex-wrap  justify-center p-6 items-center">
        {products.image.map((image, index) => (
          <img key={index} src={image} alt={`Product ${index}`}  className={`shadow-sm ${index === 0 ? 'w-full flex-col': 'flex-row w-16 flex-1' // Set height for the first image to 'auto', and others to a fixed height
        }`} />
        ))}
        </div>
        
     </div>
      <div className='flex flex-col space-y-3 self-center'>
        <h2 className='text-4xl font-bold text-slate-600'>{products.name}</h2>
        <p>Brand: {products.brand}</p>
        <p>Description: {products.description}</p>
        <h1 className='text-3xl font-bold'>{products.price}</h1>
      
        {showCartItems ? ( 
       
        <div>
            {cart.map((item) => {
              if (index.toString() === item.index) {
                // return <div key={index}>
              return <div key={item.uniqueId}>
                  <p>{item.name}</p>
                  <div className='flex flex-row gap-6'>
                    <button onClick={() => handleDecrementQuantity(item.index)}><img src={minusicon} className='border border-solid border-slate-600 w-6 p-1 mt-6' /></button>
                    <span className='text-lg mt-6'>{item.quantity}</span>
                    <button onClick={() => handleIncrementQuantity(item.index)}><img src={plusicon} className='border border-solid border-slate-600 w-6 text-white mt-6' /></button>
                  </div>
                </div>
              } else {
                return <React.Fragment/>
              }
})}
        </div>
      ) : (
        <button className='w-full md:w-96 py-3 bg-slate-600 text-white mt-24' onClick={handleAddToCart}>
          Add To Cart
        </button>
      )}
        
      </div>
    </div>
  );
};

export default ProductDetail;