import React from 'react'
import styles from '../Header.module.css'

 function Phone() {
		return (
		<a className={styles.header__phone} href="tel:+74951501477"  aria-label="Phone link +74951501477">+7 (495) 150 - 14 - 77</a>
		)
}
export default Phone;