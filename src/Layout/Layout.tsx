

import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom';
import styles from './Layout.module.css';
import Footer from '../Components/Footer/Footer';
import Header from '../Components/Header/Header'
import Nav from '../Components/Nav/Nav'
import { connect } from 'react-redux';
import { getProfileAuthTH } from '../Redux/Auth-reducer';
import Preloader from '../Components/common/Preloader/Preloader';
import EmptyModalWindow from '../Components/common/EmptyModalWindow/EmptyModalWindow';
import { getAuth } from '../Redux/selectors/Auth-selectors';
import { IProfileAuth } from '../types/types';
import { RootType } from '../Redux/redux-store';

type LayoutType = {
	getProfileAuthTH: () => void,
	initialize: any,
	auth: IProfileAuth,

}


const Layout = (props: LayoutType): JSX.Element => {
	// let { id } = props.auth
	useEffect(() => {
		/* setTimeout для preloader */
		let timer = setTimeout(() => {
			props.getProfileAuthTH()
		}, 200);
		return () => clearTimeout(timer);
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

let mapStateToProps = (state: RootType) => ({
	initialize: state.AuthPage,
	auth: getAuth(state),
})
export default connect(mapStateToProps, { getProfileAuthTH })(Layout);