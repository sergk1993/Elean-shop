import Button from './Button/Button';
import Cart from './Cart/Cart';
import Favorites from './Favorites/Favorites';
import styles from './Header.module.css'
import Phone from './Phone/Phone';
import SocialMedia from '../SocialMedia/SocialMedia';
import HeaderTitle from './HeaderTitle/HeaderTitle';
import React, { useEffect } from 'react';
import Profile from './Profile/ProfileIcon';
import { connect } from 'react-redux';
import { getProfileTH } from '../../Redux/Auth-reducer';


type HeaderType = {
  getProfileTH: () => void
}


function Header(props:HeaderType): JSX.Element {

  useEffect(() => {
    props.getProfileTH()
  }, [])

	return (
		<header className={styles.header}>
			<h1 className={styles.visuallyHidden}>Купить женскую одежду</h1>
			<Button />
			<div className={styles.spaceLeft}>
				<SocialMedia />
			</div>
			<HeaderTitle />
			<Phone />
			<Profile />

			<Favorites />
			<Cart />
		</header>
	);
}

export default connect(null, {getProfileTH})(Header);