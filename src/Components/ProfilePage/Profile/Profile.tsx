import React from 'react'
import styles from './Profile.module.css' 

type ProfileType = {
	id: number | null,
	email: string | null,
	login: string | null,
	logout: () => void,
}


function Profile(props: ProfileType) {

	return (
		<section >
			<h3>{props.login}</h3>
				<div className={styles.profileWrapper}>

					
				</div>
				<button onClick={ props.logout}>выйти</button>
		</section >
	)
}

export default Profile