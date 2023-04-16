import React from 'react'
import { connect } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { RootType } from '../../../Redux/redux-store'
import { IProfile } from '../../../types/types'




const mapStateToProps = (state: RootType) => {

	return {
		isAuth: state.AuthPage
	}
}


type RedirectComponentType = {
	isAuth: IProfile
}
export function WithAuthRedirect(Component: any) {

	function RedirectComponent(props: RedirectComponentType) {
		/* если пользователь не вошел в аккаунт, перекинь его на login*/
		if (props.isAuth.isAuth === false) { /* <--- если не зарегистрирован перекинь на profile */
			return <Navigate to='/profile' />
		}
		/* если человек зашел в аккаунт выводится кликнутый компонент */
		return <Component {...props} />
	}

	return connect(mapStateToProps)(RedirectComponent)
}




export default WithAuthRedirect