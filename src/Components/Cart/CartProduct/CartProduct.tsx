import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import CartSetOrder from '../CartSetOrder/CartSetOrder'
import CartCard from './CartCard/CartCard'
import styles from './CartProduct.module.css'


type CartProductType = {
	cartsUsers: any,
	decreaseCartProduct: any,
	increaseCartProduct: any,
	deleteProduct: any,
	orderCartList: any,


}
function CartProduct(props: CartProductType) {
	const [openModalOrder, setOpenModalOrder] = useState<Boolean>(false)
	openModalOrder ? document.body.style.overflow = "hidden" : document.body.style.overflow = "auto";


	let findSum = Math.floor((props.cartsUsers.data.reduce((sum: any, obj: any) => obj.price * obj.count + sum, 0)) * 100) / 100

	let orderBtn = (items: any) => {
		props.orderCartList(items)
		localStorage.setItem('orderList', JSON.stringify(items))
		setOpenModalOrder(true)
	}


	return (
		<>
			{
				props.cartsUsers.data.map((items: any) => {

					return (
						<CartCard
							image={items.image}
							price={items.price}
							priceItem={items.priceItem}
							rating={items.rating}
							title={items.title}
							key={items.id}
							id={items.id}
							count={items.count}
							productCount={items.count}
							callbackProps={{ ...items }}
							decreaseCartProduct={props.decreaseCartProduct}
							increaseCartProduct={props.increaseCartProduct}
							deleteProduct={props.deleteProduct}
						/>
					)
				})
			}
			{openModalOrder && <CartSetOrder openModalOrder={openModalOrder} setOpenModalOrder={setOpenModalOrder} />}
			<div className={styles.cartProduct}>
				{props.cartsUsers.countProducts && <h3>Количество товаров {props.cartsUsers.countProducts}</h3>}


				{findSum && <p className={styles.cartProductPrice}> Сумма всех товаров {findSum} $</p>}
				{
					props.cartsUsers.data.length > 0 &&
					<button onClick={() => orderBtn(props.cartsUsers.data)} className={styles.cartToCart}>оформить заказ </button>
				}



			</div>

		</>
	)
}


export default CartProduct