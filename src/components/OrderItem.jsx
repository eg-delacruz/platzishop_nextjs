import React, { useContext } from 'react';
import AppContext from '@context/AppContext';
import Image from 'next/image';

//Assets
import close from '@icons/icon_close.png';

//Styles
//Estilos en react
//import '@styles/OrderItem.scss';
//Estilos en next
import styles from '@styles/OrderItem.module.scss';

const OrderItem = ({ product }) => {
  const { removeFromCart } = useContext(AppContext);

  const handleRemove = (product) => {
    removeFromCart(product);
  };

  const product_image_src = '/dummy_src';

  return (
    <div className={styles.OrderItem}>
      <figure>
        <Image src={product_image_src} alt={product?.title} width="100%" height="100%" />
      </figure>
      {/* Esto se llama optional chaining */}
      <p>{product?.title}</p>
      <p>${product?.price}</p>
      <Image className={(styles.pointer, styles['more-clickable-area'])} src={close} alt="close" onClick={() => handleRemove(product)} />
    </div>
  );
};

export default OrderItem;
