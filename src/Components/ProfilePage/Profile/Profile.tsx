import React from 'react'


type ProfileType = {
	id: number | null,
	email: string | null,
	login: string | null,
}


function Profile(props: ProfileType) {
	
	return (
		<div>
			<div>{props.login}</div>

		</div>
	)
}

export default Profile