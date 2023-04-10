import { connect } from 'react-redux'
import { getProfileTH } from '../../Redux/Auth-reducer'
import ButtonLogin from '../common/ButtonLogin/ButtonLogin'
import Profile from './Profile/Profile'
import styles from './ProfilePageContainer.module.css'


function ProfilePage(props: any) {

	return (
		<section className={styles.profilePage}>
			<div className="container">
				<div className={styles.profilePageWrapper}>
					<h3>Profile</h3>

					{!props.login.isAuth && <div className={styles.profileBtnBox}>
						<ButtonLogin titleBtn='Login' />
					
					</div>
					}

					{props.login.isAuth && <div>
						<Profile {...props.login} />
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
		login: state.AuthPage
	}
}


export default connect(mapStateToProps, { getProfileTH })(ProfilePage)