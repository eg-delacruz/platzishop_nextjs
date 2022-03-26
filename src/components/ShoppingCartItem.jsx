import React from 'react';
import Image from 'next/image';

//Styles
import '@styles/ShoppingCartItem.scss';

const ShoppingCartItem = () => {
  return (
    <div className="ShoppingCartItem">
      <figure>
        {/* Si hay problema aquí, solucionar como lo hice con imágenes de product item */}
        <Image src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="bike" />
      </figure>
      <p>Bike</p>
      <p>$30,00</p>
    </div>
  );
};

export default ShoppingCartItem;
