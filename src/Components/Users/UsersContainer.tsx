import React, { useEffect } from 'react'
import { Navigate, useLocation, useNavigate, useParams } from 'react-router-dom'
import { connect } from 'react-redux'
import { RootType } from '../../Redux/redux-store';
import { thunkUser, UserInitialType, subscrUsersThunk, unsubscribeUsersThunk } from '../../Redux/Users-reducer'
import Skeletons from '../common/Skeletons/Skeletons';

import Users from './Users';
import { redirect } from "react-router-dom";
import { compose } from 'redux';
import WithAuthRedirect from '../common/withAuthRedirect/WithAuthRedirect';
import { getUsers } from '../../Redux/selectors/Users-selectors';




type UsersContainerType = {
	usersState: UserInitialType,
	thunkUser: (numberPage: number, amountUsers: number) => void,
	subscrUsersThunk: (item: number) => void,
	unsubscribeUsersThunk: (item: number) => void,
	children?: React.ReactNode,
}




const UsersContainer = (props: UsersContainerType): JSX.Element => {

	useEffect(() => {
		props.thunkUser(props.usersState.currentPage, props.usersState.pageSize)
	}, [])

	const onPageChange = (pageNumber: number) => {
		props.thunkUser(pageNumber, props.usersState.pageSize)
	}




	return (
		<>
			{
				props.usersState.isLoading ? <Skeletons />
					:
					<section style={{ paddingBottom: '40px' }}>

						<Users
							users={props.usersState.users}
							subscribeUser={props.subscrUsersThunk}
							unsubscribe={props.unsubscribeUsersThunk}
							quantityUsers={props.usersState.quantityUsers}
							pageSize={props.usersState.pageSize}
							currentPage={props.usersState.currentPage}
							portionSize={props.usersState.pageSize}
							onPageChange={onPageChange}
							isDisabledBtn={props.usersState.disableBtn}

						/>
					</section>

			}

		</>
	)
}

const mapStateToProps = (state: RootType) => {
	return {
		usersState: getUsers(state),
	}
}

function withRouter(Component: any) {
	function ComponentWithRouterProp(props: UsersContainerType) {

		let location = useLocation();
		let navigate = useNavigate();
		let params = useParams();

		return (
			<Component
				{...props}
				router={{ location, navigate, params }}
			/>
		);
	}

	return ComponentWithRouterProp;
}


export default compose(
	WithAuthRedirect,
	withRouter,
	connect(mapStateToProps, { thunkUser, subscrUsersThunk, unsubscribeUsersThunk })
)(UsersContainer)