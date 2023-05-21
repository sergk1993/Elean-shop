import { connect } from 'react-redux'
import { RootType } from '../../Redux/redux-store'
import styles from './CartContainer.module.css'
import CartDescr from './CartDescr/CartDescr'
import CartProduct from './CartProduct/CartProduct'
import { redirect } from "react-router-dom";
import { actionsCarts } from '../../Redux/Cart-reducer'
import CartEmpty from './CartEmpty/CartEmpty'
import { useEffect } from 'react'

type CartContainerType = {
	cartsUsers: any,
	decreaseCartProduct : any,
	increaseCartProduct: any,
	deleteProduct: any,
	orderCartList: any,
}




function CartContainer(props: any) {
	localStorage.setItem('cartItems', JSON.stringify(props.carts.data));
	localStorage.setItem('countProducts', JSON.stringify(props.carts.countProducts));
	localStorage.setItem('totalCountCartHeart', JSON.stringify(props.carts.totalCountCartHeart));
	
	return (
		<div className='container'>
			<section className={styles.cartMain}>

				{props.carts.data.length ?
					<>
						<h2>Корзина</h2>
						<CartDescr />

						<CartProduct
							cartsUsers={props.carts}
							decreaseCartProduct={props.decreaseCartProduct}
							increaseCartProduct={props.increaseCartProduct}
							deleteProduct={props.deleteCartProduct}
							orderCartList={props.orderCartList}
						/>
					</>
					: < CartEmpty width={600} height={600} title={35} />
				}


			</section>
		</div >
	)
}

const mapStateToProps = (state: RootType) => {
	return {
		carts: state.cart.carts,
		orderList: state.cart.orderList
	}
}

const { decreaseCartProduct, increaseCartProduct, deleteCartProduct, orderCartList } = actionsCarts;

export default connect(mapStateToProps, {
	decreaseCartProduct,
	increaseCartProduct,
	deleteCartProduct,
	orderCartList
})(CartContainer)