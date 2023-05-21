

import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom';
import styles from './Layout.module.css';
import Footer from '../Components/Footer/Footer';
import Header from '../Components/Header/Header'
import Nav from '../Components/Nav/Nav'
import { connect } from 'react-redux';
import { getProfileTH } from '../Redux/Auth-reducer';
import Preloader from '../Components/common/Preloader/Preloader';
import EmptyModalWindow from '../Components/common/EmptyModalWindow/EmptyModalWindow';

type LayoutType = {
	getProfileTH: () => void,
	initialize: any
}


const Layout = (props: LayoutType): JSX.Element => {
	useEffect(() => {
		/* setTimeout для preloader */
		setTimeout(() => {
			props.getProfileTH()
		}, 200);
	}, [])

	let [openModalWindow, setOpenModalWindow] = useState<Boolean>(false);
	openModalWindow ? document.body.style.overflow = "hidden" : document.body.style.overflow = "auto";

	return (
		<>
			{props.initialize.initializePage ? <Preloader /> :


				<div className={styles.layoutWrapper}>
					
					<EmptyModalWindow title={'Корзина пустая'} open={openModalWindow} setOpenModalWindow={setOpenModalWindow} />

					<div className='container'>
						<Header setOpenModalWindow={setOpenModalWindow} />
						<Nav />
					</div>

					<main className='main' >
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