import { connect } from 'react-redux'
import { getProfileTH, loginTH, LoginTHType, logOutTH } from '../../Redux/Auth-reducer'
import { RootType } from '../../Redux/redux-store'
import { IProfile } from '../../types/types'
import Login from '../common/Login/Login'
import Profile from './Profile/Profile'
import styles from './ProfilePageContainer.module.css'


type ProfilePageType = {
	auth: IProfile ,
	loginTH: (items: LoginTHType) => void,
	logOutTH: () => void,
} 

function ProfilePage(props: ProfilePageType) {
	
	return (
		<section className={styles.profilePage}>
			<div className="container">
				<div className={styles.profilePageWrapper}>
					<h3>Profile</h3>

					{!props.auth.isAuth ? <Login isLogin={props.loginTH} />
						:
						<Profile logout={props.logOutTH} {...props.auth} />
					}
				</div>
			</div>
		</section>
	)
}

let mapStateToProps = (state: RootType) => {
	return {
		auth: state.AuthPage
	}
}


export default connect(mapStateToProps, { getProfileTH, loginTH, logOutTH })(ProfilePage)