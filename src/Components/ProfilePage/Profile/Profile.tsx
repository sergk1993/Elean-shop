import React from 'react'
import ButtonLogin from '../../common/ButtonLogin/ButtonLogin'
import styles from './Profile.module.css' 

type ProfileType = {
	id: number | null,
	email: string | null,
	login: string | null,
}


function Profile(props: ProfileType) {
	
	return (
		<section >
			<h3>{props.login}</h3>
				<div className={styles.profileWrapper}>

					
				</div>
			<ButtonLogin titleBtn='Выйти' />
		</section >
	)
}

export default Profile