import CartCloseBtn from '../../CartProduct/CartCloseBtn/CartCloseBtn'
import CartCounter from '../../CartProduct/CartCounter.tsx/CartCounter'
import styles from './CartHoverProducts.module.css'



function CartHoverProducts(props: any) {

	let cartHoverCardPrice = Math.floor((props.price * props.cartProductCount) * 100) / 100
	return (
		<>

			<article className={styles.cartHoverProductsInfo}>

				<img className={styles.cartHoverProductsImg} src={props.callbackProps.image} alt="cart products" />

				<div className={styles.cartHoverProductsInfoBox}>

					<div className={styles.cartHoverProductsTitle}>
						<h3>{props.callbackProps.title}</h3>
						<p>{cartHoverCardPrice} $</p>
					</div>

					<div className={styles.cartHoverProductQuantityBox}>

						<div>
							<p className={styles.cartHoverProductQuantity}>Количество</p>
							<div>


								<CartCounter
									callbackProps={props.callbackProps}
									count={props.callbackProps.count}
									cartUsers={props.callbackProps}
									increaseCartProduct={props.increaseCartProduct}
									decreaseCartProduct={props.decreaseCartProduct}
									width={50}
									height={50}
									id={props.id}
								/>
							</div>
						</div>

						<CartCloseBtn
							width={50}
							height={50}
							callbackProps={props.callbackProps}
							deleteProduct={props.deleteProduct}
							id={props.id}
						/>

					</div>

				</div>

			</article>


		</>
	)
}

export default CartHoverProducts