import { Link } from 'react-router-dom';
import salesProducts from './productsData';
import { useCart } from './context/CartContext';
import { useState } from 'react';

const Home = () => {
  const { cart, addToCart, incrementItemQuantity, decrementItemQuantity } = useCart();
  const [showCartItems, setShowCartItems] = useState(false);

  const handleAddToCart = (product, index) => {
    addToCart(product, index);
  };

  const handleIncrementQuantity = (index) => {
    incrementItemQuantity(index);
  };

  const handleDecrementQuantity = (index) => {
    decrementItemQuantity(index);
  };

  return (
    <div className='w-full mx-auto h-fit bg-white md:w-2/3'>
      <h2>hello there</h2>

      <div className='flex flex-row flex-wrap gap-6 w-full h-fit justify-center'>
        {salesProducts.map((product, index) => (
          <div className='w-56 h-fit shadow-lg space-y-2' key={index}>
            <Link to={`/product/${index}`}>
              <img src={product.image[0]} alt={product.name} className='w-full h-56 p-2 border-b-2 border-b-solid border-b-slate-200 flex self-center object-cover' />
            </Link>

            <h1 className='px-2'>{product.name}</h1>
            <div className='px-2'>{product.price}</div>

            {cart.find((item) => item.index === index) ? (
              // Product is in cart, display cart item
              <div>
                {cart.map((item) => {
                  if (item.index === index) {
                    return (
                      <div key={item.uniqueId}>
                        {/* <p>{item.name}</p> */}
                        <div className='flex flex-row gap-6 py-3'>
                          <button onClick={() => handleDecrementQuantity(index)} className='text-lg bg-orange-400 w-6 text-white'>-</button>
                          <span className='text-lg'>{item.quantity}</span>
                          <button onClick={() => handleIncrementQuantity(index)} className='text-lg bg-orange-400 w-6 text-white'>+</button>
                        </div>
                      </div>
                    );
                  } else {
                    return null;
                  }
                })}
              </div>
            ) : (
              // Product is not in cart, display add to cart button
              <button className='w-full py-3 bg-slate-600 text-white mt-24' onClick={() => handleAddToCart(product, index)}>
                Add To Cart
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
