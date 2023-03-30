import React, { Suspense, useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { RootType } from '../../Redux/redux-store';
import { thunkUser, UserInitialType, currentPage } from '../../Redux/Users-reducer'
import Pagination from '../common/Pagination/Pagination';
import Skeletons from '../common/Skeletons/Skeletons';
import Users from './Users';



type UsersContainerType = {
	usersState: UserInitialType,
	thunkUser: (numberPage: number, amountUsers: number) => void,
	currentPage: (current: number) => void
}





const UsersContainer = (props: UsersContainerType): JSX.Element => {
	let [isLoad, setIsLoad] = useState<any>(false)




	const UsersPage = React.lazy(() => {
		return Promise.all([
			import("./Users"),
			new Promise(resolve => setTimeout(resolve, 1000))
		])
			.then(([resp]) => resp);
	});



	useEffect(() => {
		props.thunkUser(props.usersState.currentPage, props.usersState.pageSize)
		setIsLoad(true)

	}, [props.usersState.currentPage])






	return (
		<section style={ {paddingBottom: '40px' }}>
			<Suspense fallback={<Skeletons />}>
				{isLoad && <UsersPage users={props.usersState} isLoad={isLoad} />}
			</Suspense>

			<Pagination props={props.usersState} currentPage={props.currentPage} />
		</section>
	)
}

const mapStateToProps = (state: RootType) => {

	return {
		usersState: state.usersPage
	}
}


export default connect(mapStateToProps, { thunkUser, currentPage })(UsersContainer);