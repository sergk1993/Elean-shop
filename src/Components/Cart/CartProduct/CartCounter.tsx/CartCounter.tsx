import { CategoryProductsType } from '../../../../Redux/Categories-reducer'
import styles from './CartCounter.module.css'

type CartCounterType = {
	count: any
	id: any
	quantityCards: any
	callbackProps: any
	removeCartProduct: any
}

function CartCounter(props: any) {
	return (
		<>
			<div className={styles.cartCounterBox}>
				<button
					className={styles.cartCounterPlus}
					style={{ width: props.width + 'px', height: props.height + 'px' }}
					onClick={() => props.increaseCartProduct(props.id)}
				>+</button>

				<button
					className={styles.cartCounterFigure}
					style={{ width: props.width + 'px', height: props.height + 'px' }}
				>{props.count ? props.count : 0}
				</button>

				<button
					disabled={props.count <= 1}
					className={props.count <= 1 ? styles.disabledCartProduct : styles.cartCounterMinus}
					onClick={() => props.count > 1 && props.decreaseCartProduct(props.id)}
					style={{ width: props.width + 'px', height: props.height + 'px' }}
				>-</button>
			</div>
		</>
	)
}

export default CartCounter