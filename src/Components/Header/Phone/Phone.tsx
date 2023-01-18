import styles from './Phone.module.css'

 function Phone():JSX.Element {
		return (
		<a className={styles.header__phone} href="tel:+74951501477"  aria-label="Phone link +74951501477">+7 (495) 150 - 14 - 77</a>
		)
}

export default Phone;