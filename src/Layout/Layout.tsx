

import React from 'react'
import { Outlet } from 'react-router-dom';
import styles from './Layout.module.css';
import Footer from '../Components/Footer/Footer';
import Header from '../Components/Header/Header'
import Nav from '../Components/Nav/Nav'


const Layout = () => {
	return (
		<>
			<div className={styles.layoutWrapper}>

				<div className={styles.container} >
					<Header />
					<Nav />
				</div>

				<main className={styles.mainLayout}>
					<Outlet />
				</main>

				<div className={styles.container}>
					<Footer />

				</div>

			</div>
		</>
	)
}

export default Layout;