import React from 'react'
import { connect } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { RootType } from '../../../Redux/redux-store'

const mapStateToProps = (state: RootType) => {
	return {
		isAuth: state.AuthPage.isAuth
	}
}

export function WithAuthRedirect(Component: any) {

	function RedirectComponent(props: any) {
		/* если пользователь не вошел в аккаунт, перекинь его на login*/
		if (!props.isAuth) { /* <--- проверка на вход в аккаунт */
			return <Navigate to='/profile' />
		}
		/* если человек зашел в аккаунт выводится компонент */
		return <Component {...props} />
	}

	return connect(mapStateToProps)(RedirectComponent)
}




export default WithAuthRedirect