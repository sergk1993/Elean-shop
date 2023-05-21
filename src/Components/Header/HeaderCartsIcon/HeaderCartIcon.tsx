import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './HeaderCartIcon.module.css';

function HeaderCartIcon(props: any) {
	let navigate = useNavigate()


	return (
		<Link onClick={() => {
			if (props.cart.data.length) {
				navigate('/cart')
			} else {
				props.setOpenModalWindow(true)
			}

		}} onMouseEnter={() => props.setOpenMenu(true)} onMouseLeave={() => props.setOpenMenu(false)} className={styles.cartLink} to="/cart" aria-label="Cart link">
			<svg className={styles.cartSvg} viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M3.68027 20.8598H0.5V4.50195H3.73504" stroke="#333333" strokeMiterlimit="3.8637" />
				<path d="M5.89258 5.18856C5.89258 5.18856 5.89258 5.36384 5.89258 3.76822C5.89258 2.17355 7.09954 0.880859 8.58844 0.880859C10.0774 0.880859 11.2843 2.17355 11.2843 3.76822C11.2843 5.36288 11.2843 5.18856 11.2843 5.18856" stroke="#333333" strokeMiterlimit="3.8637" />
				<path d="M3.75977 4.50195H19.5V20.8598H3.75977V4.50195Z" fill="#E1C4A9" />
				<path d="M3.75977 4.50195H19.5V20.8598H3.75977V4.50195Z" stroke="black" strokeMiterlimit="3.8637" />
				<path d="M9.12695 6.27259C9.12695 6.27259 9.12695 4.90562 9.12695 3.47365C9.12695 2.04167 10.3339 0.880859 11.8228 0.880859C13.3117 0.880859 14.5187 2.04167 14.5187 3.47365C14.5187 4.90562 14.5187 6.27259 14.5187 6.27259" stroke="#333333" strokeMiterlimit="3.8637" />
			</svg>
			<span className={styles.cartCounter}>{props.countCartHeart}</span>

		</Link>
	)
}
export default HeaderCartIcon;