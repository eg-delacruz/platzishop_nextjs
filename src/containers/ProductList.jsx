import React from 'react';

//Components
import ProductItem from '@components/ProductItem';

//Hooks
import useGetProducts from '@hooks/useGetProducts';

//Styles
//Así importábamos estilos en react
//import '@styles/ProductList.scss';
import styles from '@styles/ProductList.module.scss';

const API = 'https://api.escuelajs.co/api/v1/products';

const ProductList = () => {
  const products = useGetProducts(API);
  //console.log(products);
  return (
    <section className={styles['main-container']}>
      <div className={styles['ProductList']}>
        {products.map((product) => {
          if (product.images.length > 0 && product.images[0] !== '') {
            return <ProductItem product={product} key={product.id} />;
          }
        })}
      </div>
    </section>
  );
};

export default ProductList;
