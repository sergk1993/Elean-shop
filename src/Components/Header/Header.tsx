import Button from './Button/Button';
import Cart from './Cart/Cart';
import Favorites from './Favorites/Favorites';
import styles from './Header.module.css'
import Phone from './Phone/Phone';
import SocialMedia from '../SocialMedia/SocialMedia';
import HeaderTitle from './HeaderTitle/HeaderTitle';
import React from 'react';
import Account from './Account/Account';

function Header(): JSX.Element {
	return (
		<header className={styles.header}>
			<h1 className={styles.visuallyHidden}>Купить женскую одежду</h1>
			<Button />
			<div className={styles.spaceLeft}>
				<SocialMedia />
			</div>
			<HeaderTitle />
			<Phone />
			<Account />

			<Favorites />
			<Cart />
		</header>
	);
}

export default Header;