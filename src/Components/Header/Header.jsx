import Button from './Button/Button';
import Cart from './Cart/Cart';
import Favorites from './Favorites/Favorites';
import styles from './Header.module.css'
import Phone from './Phone/Phone';
import SocialMedia from '../SocialMedia/SocialMedia';
import Title from './Title/Title';
import React from 'react';

function Header() {
	return (
		<header className={styles.header}>
			<Button />
			<div className={styles.spaceLeft}>
				<SocialMedia />
			</div>
			<Title />
			<Phone />
			<Favorites />
			<Cart />
		</header>
	);
}

export default Header;