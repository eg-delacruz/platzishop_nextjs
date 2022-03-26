import React, { useContext } from 'react';
import Image from 'next/image';
import AppContext from '@context/AppContext';
import addToCartImage from '@icons/bt_add_to_cart.svg';
import addedToCartImage from '@icons/bt_added_to_cart.svg';

//Styles
//Así importábamos estilos en react
//import '@styles/ProductItem.scss';
import styles from '@styles/ProductItem.module.scss';

const ProductItem = ({ product }) => {
  const { state, addToCart } = useContext(AppContext);

  const handleClick = (item) => {
    console.log('in cart: ', state.cart.includes(item));
    addToCart(item);
  };

  return (
    <div className={styles.ProductItem}>
      {/* Esta imagen se pone así porque cuando página carga, aun no están las imagenes y next/image da error,
      con lo cual renderizamos condicionalmente esto hasta que las imagenes ya hayan llegado */}
      {product.images[0] && <Image src={product.images[0]} width={240} height={240} alt={product.title} />}
      <div className={styles['product-info']}>
        <div>
          <p>${product.price}</p>
          <p>{product.title}</p>
        </div>
        <button onKeyDown={() => handleClick(product)} onClick={() => handleClick(product)}>
          <figure className={styles['more-clickable-area']}>
            {state.cart.includes(product) ? (
              <Image className={(styles.disabled, styles['add-to-cart-btn'])} src={addedToCartImage} width={50} height={50} alt="added to cart" />
            ) : (
              <Image className={(styles['add-to-cart-btn'], styles.pointer)} src={addToCartImage} alt="add to cart" />
            )}
          </figure>
        </button>
      </div>
    </div>
  );
};

export default ProductItem;
