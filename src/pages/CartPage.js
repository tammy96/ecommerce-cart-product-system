import { useCart } from "./context/CartContext";
import salesProducts from "./productsData";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import React from "react";
import minusicon from '../images/minus-3108.svg'
import plusicon from '../images/500px-Plus_symbol.svg.svg'
import deleteIcon from '../images/delete-button-svgrepo-com.svg'

const CartPage = () => {
  const { cart, removeFromCart, incrementItemQuantity, decrementItemQuantity, clearCart } = useCart();
    const { index } = useParams();
    // console.log(incrementItemQuantity(index))
    const productIndex = parseInt(index, 10); // Convert productId to a number

    

    const handleIncrementQuantity = (itemIndex) => {
        incrementItemQuantity(itemIndex); // Pass the item's index to incrementItemQuantity
      };
    
      const handleDecrementQuantity = (itemIndex) => {
        decrementItemQuantity(itemIndex); // Pass the item's index to decrementItemQuantity
      };

  const handleRemoveCart = (itemIndex) => {
    removeFromCart(itemIndex);
    };
    
    // Use useEffect to run side effects (if needed)
  useEffect(() => {
    // console.log(cart);
  }, [cart]);

  if (!cart) {
    return <h1>Fill Your Cart Man, Go Shopping FFS!!!!</h1>;
  }

    return (
        <div className="bg-white w-full mx-auto md:w-2/3">
        {cart.length === 0 ? (
            <p>Your cart is empty.</p>
        ) : (
          <div className="flex flex-col p-3">
                {cart.map((item) => (                 
                // if(index.toString() === item.index) {
                        
                <div key={item.uniqueId}>
                    <div className="flex flex-row justify-between py-3 border-b border-b-solid border-b-slate-300">
                                        
                        <div className="flex flex-row gap-3">
                            <div className="flex flex-col gap-3">
                                <img className="w-24" src={item.image[0]} />
                                   
                                    
                                <button onClick={() => handleRemoveCart(item.index)} className="flex flex-row-reverse gap-3 bg-off-white p-2">
                                    <span className="text-xs w-24">Delete Cart</span>
                                    <img src={deleteIcon} alt="delete icon" className="w-5" />
                                </button>
                            </div>
                            <p>{item.name}</p>
                        </div>
                            
                        <div className="flex flex-col gap-6 justify-end md:gap-12">
                            <p className="self-start">{item.price}</p>     
                                        
                            <div className="flex flex-row gap-6">
                           
                            <button onClick={() => handleDecrementQuantity(item.index)} className='text-lg bg-orange-400 px-2 text-white md:w-6'>-</button>
                            <span className='text-lg'>{item.quantity}</span>
                            <button onClick={() => handleIncrementQuantity(item.index)} className='text-lg bg-orange-400 px-2 text-white md:w-6'>+</button>
                            </div>
                        </div>                                        
                    </div>
                </div>    
                            
            ))}
          </div>
        )}
    </div>
  );
};

export default CartPage;








                           