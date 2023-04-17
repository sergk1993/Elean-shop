import React from 'react'
import styles from './Preloader.module.css'


const Preloader = () => {
	return (
		<>
			<section className={styles.preloader}>

				<div className={styles.loader}></div>
			</section>
		</>
	)
}

export default Preloader