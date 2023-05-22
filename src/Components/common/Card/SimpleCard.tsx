import React from 'react'
import { Link } from 'react-router-dom'
import { CategoryAsideType } from '../../../Redux/Categories-reducer'
import styles from './SimpleCard.module.css'

type SimpleCardType = {
	title: string,
	price: number,
	description?: string,
	image: string | null,
	id: number,
	height: number,
	addCartProduct: (payload: any) => void,
	removeCart: (id: any) => void,
	cartsProducts: any,
}

/* вызывается в CardsCategories*/
function SimpleCard(props: any) {
	/* проверка добавленных через сердечко товаров */

	let checkUser = props.cartsProducts.data.find((el: any) => el.id === props.id) !== undefined;
 
	return (
		<div className={styles.simpleCardMain} onClick={() => props.currentProductAC(props)}>

			<Link to="/categories-product" >

				<img className={styles.simpleCardImg} src={`${props.categoryUsersProperty.image}`} style={{ height: `${props.height}px` }} alt="" />
			</Link>
			<div>
				<div className={styles.simpleCardTitleBox}>
					<h3 className={styles.simpleCardTitle}> {props.categoryUsersProperty.title}</h3>
					<button className={styles.simpleCardBtn}>

						<svg className={checkUser ? styles.simpleCardSvgActive : styles.simpleCardBtnSvg} onClick={() => {
							if (checkUser) {
								props.removeCart(props.id)
							} else {
								props.addCartProduct(props.categoryUsersProperty)
							}
						}

						} viewBox="0 0 25 21" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M12.5769 4.24603C11.8813 3.62026 9.21613 1.37173 6.85609 1.39471C4.43734 1.41857 0.70379 3.00156 1.0187 7.69219C1.29714 11.8357 12.3919 20.3561 12.3919 20.3561C12.4613 20.4073 12.5334 20.4073 12.6081 20.3561C12.6081 20.3561 23.7029 11.8348 23.9813 7.69219C24.2962 3.00156 20.5627 1.41857 18.143 1.39471C15.4022 1.36819 12.2496 4.40512 12.2496 4.40512L10.1093 6.58736" strokeMiterlimit="3.8637" />
						</svg>

					</button>
				</div>
				<p className={styles.simpleCardPrice}>{props.categoryUsersProperty.price} $</p>
			</div>



		</div>
	)
}

export default SimpleCard