import { Fragment } from 'react'
import CartCloseBtn from '../CartCloseBtn/CartCloseBtn'
import CartCounter from '../CartCounter.tsx/CartCounter'
import styles from './CartCard.module.css'


function CartCard(props: any) {
	let findSum = Math.floor((props.price * props.productCount) * 100) / 100;
	return (
		<>
			<div className={styles.cartCard}>

				<div className={styles.cartCardInfoBox}>
					<img src={props.image} alt="" />
					<div className={styles.cartCardInfoText}>
						<h3>{props.title}</h3>
						<p >популярность {props.rating.rate}</p>
					</div>
				</div>

				<div className={styles.cartCardBtnBox}>
					<CartCounter
						id={props.id}
						count={props.productCount}
						increaseCartProduct={props.increaseCartProduct}
						decreaseCartProduct={props.decreaseCartProduct}
						callbackProps={props.callbackProps}
						width={70}
						height={70}
						{...props} />

					<CartCloseBtn
						width={70}
						height={70}
						id={props.id}
						price={props.price}
						callbackProps={props.callbackProps}
						deleteProduct={props.deleteProduct}

					/>

					<p className={styles.cartCardBtnPrice}>{findSum}$</p>
				</div>


			</div>
		</>
	)
}

export default CartCard