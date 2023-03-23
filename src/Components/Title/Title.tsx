import React from 'react'
import { Link } from 'react-router-dom';
import styles from './Title.module.css';



function Title() {
	return (
		<Link className={styles.title} to='/' aria-label='Main title'>
			<svg className={styles.titleE} viewBox="0 0 21 26" xmlns="http://www.w3.org/2000/svg">
				<path d="M0 25.189L2.90476 23.5611V1.98531L0 0.33902V0H18.2148V6.48798H18.0504L14.9813 0.762617H6.66853V12.0558H12.0583L14.1957 8.79389H14.5005V16.1713H14.1957L12.0583 12.8184H6.66853V24.7654H16.1993L20.1943 19.0219L20.3526 19.04L19.4088 25.528H0.000343002L0 25.189Z" />
			</svg>

			<svg className={styles.titleL} viewBox="0 0 20 26" xmlns="http://www.w3.org/2000/svg">
				<path d="M10.3043 0H0.353516V0.33902L3.25827 1.98531V23.5611L0.353516 25.189V25.528H18.4407L19.3844 19.04L19.2262 19.0219L15.2312 24.7654H7.02204V1.98531L10.3043 0.33902V0Z" />
			</svg>

			<svg className={styles.titleE} viewBox="0 0 21 26" xmlns="http://www.w3.org/2000/svg">
				<path d="M0 25.189L2.90476 23.5611V1.98531L0 0.33902V0H18.2148V6.48798H18.0504L14.9813 0.762617H6.66853V12.0558H12.0583L14.1957 8.79389H14.5005V16.1713H14.1957L12.0583 12.8184H6.66853V24.7654H16.1993L20.1943 19.0219L20.3526 19.04L19.4088 25.528H0.000343002L0 25.189Z" />
			</svg>

			<svg className={styles.titleN} viewBox="0 0 25 26" xmlns="http://www.w3.org/2000/svg">
				<path d="M7.45976 25.2074L4.46372 23.2947L4.46407 3.72846L20.7666 26L21.8933 25.528V2.23325L24.8894 0.32093V0.000333066H18.0928V0.32093L21.0889 2.23325V20.3534L6.21124 0H0.736328V0.339009L3.696 1.9853V23.2947L0.736328 25.2074V25.528H7.45976V25.2074Z" />
			</svg>
			<svg className={styles.titleA} viewBox="0 0 27 26" xmlns="http://www.w3.org/2000/svg">
				<path d="M12.2339 17.1761V16.4135H16.8927L12.2339 3.38331V0.000333066H14.8586L19.2281 11.7809L23.5976 23.5614L26.6122 25.1893V25.5283H16.5883V25.1893L19.4625 23.5433L17.1789 17.1764L12.2339 17.1761ZM12.2339 0.000333066V3.38331L7.5754 16.4135H12.2339V17.1761H7.28917L5.02343 23.543H5.04196L8.79337 25.189V25.528H0.888672V25.189L4.07966 23.5611L11.6072 2.7295L9.91389 0.339009V0L12.2339 0.000333066Z" />
			</svg>
		</Link>
	)
}

export default Title;