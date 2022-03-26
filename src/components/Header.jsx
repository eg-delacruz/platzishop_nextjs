import React, { useContext } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Menu from '@components/Menu';
import MyOrder from '@containers/MyOrder';
import AppContext from '@context/AppContext';

//Assets
import menu from '@icons/icon_menu.svg';
import logo from '@logos/logo_yard_sale.svg';
import shoppingCart from '@icons/icon_shopping_cart.svg';

//Styles
//Así importábamos estilos en react
//import '@styles/Header.scss';
//Así importamos estilos en next
import styles from '@styles/Header.module.scss';

const Header = () => {
  const { state, toggleOrder, toggleMenu } = useContext(AppContext);

  return (
    <>
      <nav className={styles.Nav}>
        <Image height={60} width={25} src={menu.src} alt="menu" className={styles.menu} />
        <div className={styles['navbar-left']}>
          <Link href="/" passHref>
            <Image src={logo} alt="logo" className={styles['nav-logo']} />
          </Link>
          <ul>
            <li>
              <Link href="/" passHref>
                All
              </Link>
            </li>
            <li>
              <Link href="/" passHref>
                Clothes
              </Link>
            </li>
            <li>
              <Link href="/" passHref>
                Electronics
              </Link>
            </li>
            <li>
              <Link href="/" passHref>
                Furnitures
              </Link>
            </li>
            <li>
              <Link href="/" passHref>
                Toys
              </Link>
            </li>
            <li>
              <Link href="/" passHref>
                Others
              </Link>
            </li>
          </ul>
        </div>
        <div className={styles['navbar-right']}>
          <ul>
            <li className={(styles['more-clickable-area'], styles.pointer, styles['navbar-email'])}>
              <button onClick={() => toggleMenu()} onKeyDown={() => toggleMenu()}>
                platzi@example.com
              </button>
            </li>
            <li className={styles['navbar-shopping-cart']}>
              <button className={styles['navbar-shopping-cart']} onClick={() => toggleOrder()} onKeyDown={() => toggleOrder()}>
                <Image className={styles['more-clickable-area pointer']} src={shoppingCart} alt="shopping cart" />
                {state.cart.length > 0 ? <div>{state.cart.length}</div> : null}
              </button>
            </li>
          </ul>
        </div>
        {state.menuIsOpen && <Menu />}
      </nav>
      {state.orderIsOpen && <MyOrder />}
    </>
  );
};

export default Header;
