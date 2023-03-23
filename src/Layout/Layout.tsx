

import React from 'react'
import { Outlet } from 'react-router-dom';
import styles from './Layout.module.css';
import Footer from '../Components/Footer/Footer';
import Header from '../Components/Header/Header'
import Nav from '../Components/Nav/Nav'
import '../index.css'

const Layout = (): JSX.Element => {

	return (
		<>
			<div className={styles.layoutWrapper}>

				<div className='container'>
					<Header />
					<Nav />
				</div>

				<main className='main'>
					<Outlet />
				</main>

				<div className='container'>
					<Footer />
				</div>

			</div>


		</>
	)
}

export default Layout;