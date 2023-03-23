import axios from 'axios'
import { useState } from 'react'
import { connect } from 'react-redux'
import { NavLink, Outlet, useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { Route, Router, Routes } from 'react-router-dom'
import '../../index.css'
import { CategoryAside } from '../../Redux/Categories-reducer'
import { RootType } from '../../Redux/redux-store'
import styles from './Categories.module.css'
import CategoriesAside from './CategoriesAside/CategoriesAside'
import News from './NewsCategories'



type CategoriesAsideType = {
	categoryAside: CategoryAside,
}



function CategoriesContainer(props: CategoriesAsideType): JSX.Element {
	const { categoryListTitle } = props.categoryAside;

	// axios.get('https://fakestoreapi.com/products').then(data => {

	// })


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

				<CategoriesAside state={props.categoryAside} findTitle={findTheSameTitle} />

			
				<Outlet />
			</section>
		</div>
	)
}

const mapStateToProps = (state: RootType) => {
	return {
		categoryAside: state.categories.categoryAsideCollections
	}
}

export default connect(mapStateToProps)(CategoriesContainer)