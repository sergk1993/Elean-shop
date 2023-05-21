import { useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { RootType } from '../../../Redux/redux-store';
import styles from './CartSetOrder.module.css';

const CartSetOrder = (props: any) => {
	let findCartSetOrderPrice = Math.floor((props.orderList.reduce((sum: any, obj: any) => obj.price * obj.count + sum, 0)) * 100) / 100


	let classExistCart: any = useRef();

	useEffect(() => {
		let handler = (event: any) => {
			if (!classExistCart.current.contains(event.target)) {
				props.setOpenModalOrder(false)
			}
		}
		document.addEventListener('mousedown', handler)

		return () => {
			document.removeEventListener('mousedown', handler)
		}
	}, [])

	return (
		<div className='container'>
			<div  className={styles.cartSetOrderBg}>
				<section ref={classExistCart} className={styles.cartSetOrderMain}>


					<h2>Оформление заказа </h2>
					<svg onClick={() => props.setOpenModalOrder(false)} className={styles.cartSetOrderCloseBtn} viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
						<path d="M1 13L13 1" strokeWidth="5" />
						<path d="M13 13L1 1" strokeWidth="5" />
					</svg>

					<div className={styles.cartSetOrderMainWrapper}>

						{
							props.orderList.map((items: any) => {
								return (
									<article className={styles.orderListBox} key={items.id}>
										<img src={items.image} alt="car" />
										<div>
											<h3>{items.title}</h3>
											<p>количество товара - {items.count} шт.</p>
										</div>
									</article>
								);
							})

						}

					</div>
					<p className={styles.findCartSetOrderPrice}>Общая сумма {findCartSetOrderPrice} $</p>
					<div className={styles.orderListBoxLink}>
						<Link to='/categories' >Продолжить покупки </Link>
						<button onClick={() => alert(`Общая сумма ваших товаров составляет ${findCartSetOrderPrice} $`)}>Оплатить покупки </button>
					</div>

				</section>
			</div>
		</div>
	)
}

const mapStateToProps = (state: RootType) => {
	return {
		orderList: state.cart.orderList
	}

}

export default connect(mapStateToProps)(CartSetOrder)