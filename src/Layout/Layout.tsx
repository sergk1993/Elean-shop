

import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom';
import styles from './Layout.module.css';
import Footer from '../Components/Footer/Footer';
import Header from '../Components/Header/Header'
import Nav from '../Components/Nav/Nav'
import { connect } from 'react-redux';
import { getProfileTH } from '../Redux/Auth-reducer';
import Preloader from '../Components/common/Preloader/Preloader';

type LayoutType = {
	getProfileTH: () => void,
	initialize: any
}


const Layout = (props: LayoutType): JSX.Element => {
	useEffect(() => {
		/* setTimeout для preloader */
		 setTimeout(() => {
			props.getProfileTH()
		}, 500);
	}, [])



	return (
		<>
			{props.initialize.initializePage ? <Preloader /> :


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

			}
		</>
	)
}

let mapStateToProps = (state: any) => ({
	initialize: state.AuthPage
})

export default connect(mapStateToProps, { getProfileTH })(Layout);