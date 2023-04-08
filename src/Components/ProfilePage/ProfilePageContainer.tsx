import axios from 'axios'
import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { redirect } from 'react-router-dom'
import { getProfileTH } from '../../Redux/Auth-reducer'
import ButtonLogin from '../common/ButtonLogin/ButtonLogin'
import Profile from './Profile/Profile'
import styles from './ProfilePageContainer.module.css'


function ProfilePage(props: any) {

	useEffect(() => {
		props.getProfileTH()
	}, [])

	return (
		<section className={styles.profilePage}>
			<div className="container">
				<div className={styles.profilePageWrapper}>
					<h3>Profile</h3>



					{!props.loginState.isAuth && <div className={styles.profileBtnBox}>
						<ButtonLogin titleBtn='Login' />
					
					</div>
					}


					{props.loginState.isAuth && <div>
						<Profile {...props.loginState} />
						<ButtonLogin titleBtn='Выйти' />
					</div>
					}

				</div>
			</div>
		</section>
	)
}

let mapStateToProps = (state: any) => {
	return {
		loginState: state.AuthPage
	}
}


export default connect(mapStateToProps, { getProfileTH })(ProfilePage)