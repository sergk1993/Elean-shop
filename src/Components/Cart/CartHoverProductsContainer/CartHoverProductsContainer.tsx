import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CartEmpty from '../CartEmpty/CartEmpty';
import CartModalPrice from '../CartSetOrder/CartSetOrder';
import CartHoverProducts from './CartHoverProducts/CartHoverProducts'
import styles from './CartHoverProductsContainer.module.css'

/* вызывается в header */
function CartHoverProductsContainer(props: any) {
	let findSum = Math.floor((props.carts.data.reduce((sum: any, obj: any) => obj.price * obj.count + sum, 0)) * 100) / 100;

	// эта фигня для проверки ширины экрана, для кнопок counter
	const [findWidthWindowMediaSize, setFindWidthWindowMediaSize] = useState(window.innerWidth)

	useEffect(() => {
		const handleResize = () => {
			const screenWidth = window.innerWidth;
			setFindWidthWindowMediaSize(screenWidth)
		};

		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		}
	}, [])




	return (

		<section onMouseEnter={() => props.setOpenMenu(true)} onMouseLeave={() => props.setOpenMenu(false)} className={styles.cartHoverMenu}>



			{props.carts.data.length > 0 ? <>

				{props.carts.data.map((items: any) => {

					return (


						<CartHoverProducts
							image={items.image}
							price={items.price}
							priceItem={items.priceItem}
							rating={items.rating}
							title={items.title}
							key={items.id}
							id={items.id}
							cartProductCount={items.count}
							callbackProps={{ ...items }}
							decreaseCartProduct={props.decreaseCartProduct}
							increaseCartProduct={props.increaseCartProduct}
							deleteProduct={props.deleteProduct}
							findWidthWindowMediaSize={findWidthWindowMediaSize}
						/>


					)
				})}

				<div className={styles.cartHoverPriceBox}>
					<h3>ИТОГО: </h3>
					<p>{findSum} $</p>
				</div>



				<Link to='/cart' className={styles.cartHoverOrderToCart}> Перейти в корзину</Link>


			</>
				: <div className={styles.cartHoverEmptyText}>
					<CartEmpty />
				</div>
			}


		</section>

	)
}

export default CartHoverProductsContainer