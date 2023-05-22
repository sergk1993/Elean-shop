import { connect } from 'react-redux'
import { getProfileTH, loginTH, LoginTHType, logOutTH } from '../../Redux/Auth-reducer'
import { getAuth } from '../../Redux/selectors/Auth-selectors'
import { RootType } from '../../Redux/redux-store'
import { IProfileAuth, IProfileInfo } from '../../types/types'
import Login from '../common/Login/Login'
import styles from './MyProfilePageContainer.module.css'
import MyProfile from './MyProfile/MyProfile'
import { getProfileSL } from '../../Redux/selectors/Profile-selectors'
import { profileDataTC } from '../../Redux/Profile-reducer';
import { useEffect } from 'react'


type MyProfilePageType = {
	auth: IProfileAuth,
	loginTH: (items: LoginTHType) => void,
	logOutTH: () => void,
	profileInfo: {
		profileData:IProfileInfo | null 
	} ,
	profileDataTC: (id: number | null) => void,

}

function MyProfilePageContainer(props: MyProfilePageType) {
	let { id } = props.auth
	
	useEffect(() => {
		props.profileDataTC(id)

	}, [])


	return (
		<section className={styles.profilePage}>
			<div className="container">
				<div className={styles.profilePageWrapper}>
					<h3>Profile</h3>

					{!props.auth.isAuth ? <Login isLogin={props.loginTH} />
						:
						<MyProfile profileInfo={props.profileInfo} logout={props.logOutTH} authProps={props.auth} />
					}
				</div>
			</div>
		</section>
	)
}

let mapStateToProps = (state: RootType ) => {
	return {
		auth: getAuth(state),
		profileInfo: getProfileSL(state),
	}
}


export default connect(mapStateToProps, { getProfileTH, loginTH, logOutTH, profileDataTC })(MyProfilePageContainer)