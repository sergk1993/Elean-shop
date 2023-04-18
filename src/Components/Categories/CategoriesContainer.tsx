import axios from 'axios'
import { useState } from 'react'
import { connect } from 'react-redux'
import { Navigate, NavLink, Outlet, useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { Route, Router, Routes } from 'react-router-dom'
import { compose } from 'redux'
import { CategoryAsideType } from '../../Redux/Categories-reducer'
import { getCategories } from '../../Redux/selectors/Categories-selectors'
import { RootType } from '../../Redux/redux-store'
import WithAuthRedirect from '../common/withAuthRedirect/WithAuthRedirect'
import styles from './Categories.module.css'
import CategoriesAside from './CategoriesAside/CategoriesAside'
import News from './NewsCategories'



type CategoriesAsideType = {
	categoryAside: CategoryAsideType,
}



function CategoriesContainer(props: CategoriesAsideType): JSX.Element {
	const { categoryListTitle } = props.categoryAside.categoryAsideCollections;
	const [nameTitle, setNameTitle] = useState('Категории')


	function findTheSameTitle(name: string) {
		let cutCategoryTitle = name.toLowerCase().slice(0, -2);
		categoryListTitle.filter(asideTitle => {
			if (asideTitle.toLowerCase().startsWith(cutCategoryTitle)) {
				return setNameTitle(asideTitle)
			}
		})
	}




	return (
		<div className='container'>

			<h3 className={styles.categoriesTitle} >{nameTitle}</h3>
			<section className={styles.categories}>

				<CategoriesAside categoryAside={props.categoryAside} findTitle={findTheSameTitle} />


				<Outlet />
			</section>
		</div>
	)
}

const mapStateToProps = (state: RootType) => {
	return {
		categoryAside: getCategories(state)
	}
}

export default compose(
	WithAuthRedirect,
	connect(mapStateToProps)
)(CategoriesContainer)