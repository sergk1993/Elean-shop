import Button from './Button/Button';
import Cart from './Cart/Cart';
import Favorites from './Favorites/Favorites';
import styles from './Header.module.css'
import Phone from './Phone/Phone';
import SocialMedia from '../SocialMedia/SocialMedia';
import Title from './Title/Title';

function Header() {
	return (
		<header className={styles.header}>
			<Button />
			<SocialMedia />
			<Title />
			<Phone />
			<Favorites />
			<Cart />
		</header>
	);
}

export default Header;