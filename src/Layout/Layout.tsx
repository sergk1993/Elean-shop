

import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom';
import styles from './Layout.module.css';
import Footer from '../Components/Footer/Footer';
import Header from '../Components/Header/Header'
import Nav from '../Components/Nav/Nav'
import { connect } from 'react-redux';
import { getProfileAuthTH, InitialAuthStateType } from '../Redux/Auth-reducer';
import Preloader from '../Components/common/Preloader/Preloader';
import EmptyModalWindow from '../Components/common/EmptyModalWindow/EmptyModalWindow';
import { getAuth } from '../Redux/selectors/Auth-selectors';
import { RootType } from '../Redux/redux-store';
import SocialSideMenu from '../Components/SocialSideMenu/SocialSideMenu';



type LayoutType = {
	getProfileAuthTH: () => void,
	auth: InitialAuthStateType

}


const Layout = (props: LayoutType): JSX.Element => {
	const [isShowBtnSocialSideMenu, setIsShowBtnSocialSideMenu] = useState(false)

	// let { id } = props.auth
	useEffect(() => {
		// setTimeout для preloader
		let timer = setTimeout(() => {
			props.getProfileAuthTH()
		}, 200);
		return () => clearTimeout(timer);
	}, [])




	let [openModalWindow, setOpenModalWindow] = useState<Boolean>(false);
	openModalWindow ? document.body.style.overflow = "hidden" : document.body.style.overflow = "auto";


	useEffect(() => {
		window.addEventListener('scroll', () => {
			if (window.scrollY > 600) {
				setIsShowBtnSocialSideMenu(true)
			} else {
				setIsShowBtnSocialSideMenu(false)
			}

		})
	}, [])


	const SocialSideMenuBtn = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		})
	}

	return (
		<>
			{props.auth.initializePage ? <Preloader /> :

				<>
					{isShowBtnSocialSideMenu && <SocialSideMenu SocialSideMenuBtnToTop={SocialSideMenuBtn} />}

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

				</>


			}
		</>
	)
}

let mapStateToProps = (state: RootType) => ({
	auth: getAuth(state),
})
export default connect(mapStateToProps, { getProfileAuthTH })(Layout);