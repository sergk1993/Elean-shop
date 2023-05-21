import { Link } from 'react-router-dom';
import styles from './HeaderPhone.module.css'

 function HeaderPhone():JSX.Element {
		return (
		<Link className={styles.header__phone} to="tel:+74951501477"  aria-label="Phone number +74951501477">+7 (495) 150 - 14 - 77</Link>
		)
}

export default HeaderPhone;