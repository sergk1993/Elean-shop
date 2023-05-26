import { connect } from 'react-redux';
import { getProfileAuthTH, loginTH, LoginTHType, logOutTH } from '../../Redux/Auth-reducer';
import { getAuth } from '../../Redux/selectors/Auth-selectors';
import { RootType } from '../../Redux/redux-store';
import { IProfileAuth, IProfileInfo } from '../../types/types';
import Login from '../common/Login/Login';
import styles from './MyProfilePageContainer.module.css';
import MyProfile from './MyProfile/MyProfile';
import { getProfileDataSL, getProfileLoading, getProfileStatus, } from '../../Redux/selectors/Profile-selectors';
import { profileStatusTH, profileDataTH, updateStatusProfileTH, actionsProfile, changeMyProfileDataInfoTH } from '../../Redux/Profile-reducer';
import { useEffect } from 'react'



type MyProfilePageType = {
	auth: IProfileAuth,
	loginTH: (items: LoginTHType) => void,
	logOutTH: () => void,
	profileInfo: IProfileInfo | null,
	profileStatusTH: (id: number | null) => void,
	profileDataTH: (id: number | null) => void,
	updateStatusProfileTH: (str: string) => void,
	changeMyProfileDataInfoTH: (payload: IProfileInfo) => void,
	profileStatus: string | null,
	getProfileLoading: boolean,
}


function MyProfilePageContainer(props: MyProfilePageType) {

	useEffect(() => {
		if (props.auth.isAuth) {
			props.profileDataTH(props.auth.id);
			props.profileStatusTH(props.auth.id);
		}
	}, [props.auth.isAuth])


	return (
		<div className="container">
			<section className={styles.profilePage}>

				<h3>Profile</h3>

				{!props.auth.isAuth ? <Login isLogin={props.loginTH} />
					:
					<MyProfile
						getProfileLoading={props.getProfileLoading}
						updateStatusProfileTH={props.updateStatusProfileTH}
						profileStatus={props.profileStatus}
						profileInfo={props.profileInfo}
						authProps={props.auth}
						changeMyProfileDataInfoTH={props.changeMyProfileDataInfoTH}
					/>

				}


				{props.auth.isAuth &&
					<button className={styles.myProfilePageBtnLogOut} onClick={props.logOutTH}>выйти</button>}

			</section>
		</div>
	)
}

let mapStateToProps = (state: RootType) => {
	return {
		auth: getAuth(state),
		profileInfo: getProfileDataSL(state),
		profileStatus: getProfileStatus(state),
		getProfileLoading: getProfileLoading(state)
	}
}


let { getProfileStatusAC } = actionsProfile;



export default connect(mapStateToProps,
	{
		getProfileAuthTH,
		loginTH,
		logOutTH,
		profileStatusTH,
		profileDataTH,
		updateStatusProfileTH,
		getProfileStatusAC,
		changeMyProfileDataInfoTH

	}
)(MyProfilePageContainer)