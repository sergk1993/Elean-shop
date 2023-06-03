import React, { useEffect, useState } from 'react'
import { Navigate, useLocation, useNavigate, useParams } from 'react-router-dom'
import { connect } from 'react-redux'
import { RootType } from '../../Redux/redux-store';
import { thunkUser, subscrUsersThunk, unsubscribeUsersThunk, FilterUsersInitType, InitialUsertType } from '../../Redux/Users-reducer'
import Skeletons from '../common/Skeletons/Skeletons';

import Users from './Users';
import { redirect } from "react-router-dom";
import { compose } from 'redux';
import WithAuthRedirect from '../common/withAuthRedirect/WithAuthRedirect';
import { getUsers } from '../../Redux/selectors/Users-selectors';
import FilterUsers from './FilterUsers';
import { profileDataTH, profileStatusTH } from '../../Redux/Profile-reducer';



type UsersContainerType = {
	usersState: InitialUsertType,
	thunkUser: (numberPage: number | boolean, amountUsers: number | boolean, filter: FilterUsersInitType) => void,
	subscrUsersThunk: (item: number) => void,
	unsubscribeUsersThunk: (item: number) => void,
	children?: React.ReactNode,
	profileDataTH: (item: number | null) => void,
	profileStatusTH: (item: number | null) => void,
	pageSizePaginator:number,
}




const UsersContainer = (props: UsersContainerType): JSX.Element => {
	let [pageSize, setpageSize] = useState(12)

	useEffect(() => {
		props.thunkUser(props.usersState.currentPage, pageSize, props.usersState.filter)
	}, [])


	/*
	 получаю все свойства из инпута 
	цифра 1 всегда перебрасывает на первую страницу при поиске
	*/
	const filterSearchUser = (filterUser: FilterUsersInitType) => {
		props.thunkUser(1, pageSize, filterUser)
	}

	/* получаю кнопку. filter для сохранения имени из инпута поиска при переключении страниц */
	const onPageChange = (pageNumber: number) => {
		props.thunkUser(pageNumber, pageSize, props.usersState.filter)
	}

	return (
		<section className='container'>

			<FilterUsers filter={filterSearchUser} />

			{
				props.usersState.isFetching ? <Skeletons />
					:
					<section style={{ paddingBottom: '40px' }}>

						<Users
							users={props.usersState.users}
							subscribeUser={props.subscrUsersThunk}
							unsubscribe={props.unsubscribeUsersThunk}
							quantityUsers={props.usersState.quantityUsers}
							pageSizePaginator={props.usersState.pageSizePaginator}
							portionSize={pageSize}
							onPageChange={onPageChange}
							isDisabledBtn={props.usersState.disableBtn}
							profileDataTH={props.profileDataTH}
							profileStatusTH={props.profileStatusTH}

						/>
					</section>

			}

		</section>
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
	connect(mapStateToProps, { thunkUser, subscrUsersThunk, unsubscribeUsersThunk, profileDataTH, profileStatusTH })
)(UsersContainer)