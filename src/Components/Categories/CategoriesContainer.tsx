import axios from 'axios'
import { useEffect, useRef, useState } from 'react'
import { connect } from 'react-redux'
import { Navigate, NavLink, Outlet, useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { Route, Router, Routes } from 'react-router-dom'
import { compose } from 'redux'
import { actionsCategory, CategoryAsideType, getProductsTH, } from '../../Redux/Categories-reducer'
import { categoryProductsSL, getCartsProducts, getCategories, } from '../../Redux/selectors/Categories-selectors'
import { RootType } from '../../Redux/redux-store'
import styles from './Categories.module.css'
import CategoriesAside from './CategoriesAside/CategoriesAside'

import { actionsCarts } from '../../Redux/Cart-reducer'
import CategoriesCards from './CategoriesCards/CardsCategories'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'



type CategoriesAsideType = {
	categoryAside: CategoryAsideType,
	getProductsTH: (item?: string) => void,
	addCartProduct: (payload: any) => void,
	removeCartProduct: (item: number) => void,
	cartsProducts: any,
	categoriesProduct: any,
	currentProductAC: any,
}



function CategoriesContainer(props: CategoriesAsideType): JSX.Element {
	/* массив имен */
	const { categoryListTitle } = props.categoryAside.categoryAsideCollections;

	/* при обновлении всегда горел первый элементе массива имен  для active класса*/
	const [nameTitle, setNameTitle] = useState(categoryListTitle[0])

	useEffect(() => {
		props.getProductsTH()
	}, [])





	/* функция для вывода нажимаемого названия категории */
	function findTheSameTitle(name: string) {
		categoryListTitle.map((titles) => {
			if (titles === name) {
				return setNameTitle(name)
			}
		})
	}

	/* функция которая получит свойство из массива бокового меню и нажатый элемент */
	const getPropertyAsideText = (item: string, title: string) => {
		findTheSameTitle(title);
		props.getProductsTH(item)

	}


	localStorage.setItem('cartItems', JSON.stringify(props.cartsProducts.data));
	localStorage.setItem('countProducts', JSON.stringify(props.cartsProducts.countProducts));
	localStorage.setItem('totalCountCartHeart', JSON.stringify(props.cartsProducts.totalCountCartHeart));


	return (
		<div className='container'>
			{
				props.categoryAside.categoryProductsIsLoading ? <div style={{ margin: 0 + ' auto', width: 150, marginBottom: 25, marginTop: 10, }} ><Skeleton height={30} duration={1.2} />
				</div> : <h3 className={styles.categoriesTitle} >{nameTitle}</h3>

			}

			<section className={styles.categories}>

				<CategoriesAside
					getPropertyAsideText={getPropertyAsideText}
					categoryAside={props.categoryAside}
				/>

				<CategoriesCards
					isLoading={props.categoryAside.categoryProductsIsLoading}
					cartsProducts={props.cartsProducts}
					addCartProduct={props.addCartProduct}
					removeCart={props.removeCartProduct}
					categoriesProduct={props.categoriesProduct}
					currentProductAC={props.currentProductAC}
				/>


				<Outlet />
			</section>
		</div>
	)
}

const mapStateToProps = (state: RootType) => {
	return {
		categoryAside: getCategories(state),
		cartsProducts: getCartsProducts(state),
		categoriesProduct: categoryProductsSL(state),

	}
}



let { addCartProduct, removeCartProduct, } = actionsCarts
let { currentProductAC } = actionsCategory
export default connect(mapStateToProps, { getProductsTH, addCartProduct, removeCartProduct, currentProductAC })(CategoriesContainer)