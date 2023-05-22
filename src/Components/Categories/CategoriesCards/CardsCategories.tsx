import { Fragment, useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { CategoryProductsType } from '../../../Redux/Categories-reducer'
import { RootType } from '../../../Redux/redux-store'
import SimpleCard from '../../common/Card/SimpleCard'
import SkeletonsLibrary from '../../common/SkeletonsLibrary/SkeletonsLibrary'
import styles from './CategoriesCards.module.css'

type NewsCategoriesType = {
	categoriesProduct: Array<CategoryProductsType>,
	addCartProduct: (payload: any) => void,
	removeCart: (id: number) => void,
	cartsProducts: undefined | CategoryProductsType,
	currentProductAC: any,
	isLoading: any,
}

const CategoriesCards = (props: NewsCategoriesType) => {
	return (
		<>
			<div className={styles.newsCategoriesMain}>
				{props.isLoading && < SkeletonsLibrary cards={8} />}

				{
					props.categoriesProduct.map((items: any, i) => {

						return (
							<Fragment key={items.id}>
								<SimpleCard
									height={200}
									addCartProduct={props.addCartProduct}
									removeCart={props.removeCart}
									cartsProducts={props.cartsProducts}
									id={items.id}
									categoryUsersProperty={{ ...items }}
									currentProductAC={props.currentProductAC}
								/>
							</Fragment>
						)
					})

				}

			</div>
		</>
	)
}



export default CategoriesCards