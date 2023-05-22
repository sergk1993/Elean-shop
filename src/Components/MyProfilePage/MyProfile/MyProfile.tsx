import React from 'react'
import { IProfileInfo } from '../../../types/types'
import styles from './MyProfile.module.css'

type MyProfileType = {
	authProps: {
		id: number | null,
		email: string | null,
		login: string | null,
	}
	logout: () => void,
	profileInfo: {
		profileData: IProfileInfo | null
	},

}


function MyProfile(props: MyProfileType) {
	let { login } = props.authProps
	return (

		<section >
			<h3>{login}</h3>
			<div className={styles.profileWrapper}>

				{/* {props.profileInfo !== null &&
					props.profileInfo.profileData.map((items) => {
						return (
							<div>

							</div>
						);
					})
				} */}
			</div>
			<button onClick={props.logout}>выйти</button>
		</section >
	)
}

export default MyProfile