import { Fragment } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import { actionsCarts } from '../../../Redux/Cart-reducer';
import { RootType } from '../../../Redux/redux-store'
import styles from './CategoriesCardProduct.module.css'

function CategoriesCardProduct(props: any) {

	localStorage.setItem('cartItems', JSON.stringify(props.cart.carts.data));
	localStorage.setItem('countProducts', JSON.stringify(props.cart.carts.countProducts));
	localStorage.setItem('totalCountCartHeart', JSON.stringify(props.cart.carts.totalCountCartHeart));

	return (
		<div className='container'>
			<section className={styles.categoriesCardProductMain}>
				{props.categoryProduct.map((item: any) => {

					let checkProductHaveInCart = props.cart.carts.data.findIndex((el: any) => el.id === item.id) === -1;
					return (
						<Fragment key={item.id}>

							<div className={styles.categoriesCardProductInfo}>
								<img src={item.image} alt="product" />

								<div className={styles.categoriesCardProductDescrBox}>

									<div>
										<h2 className={styles.categoriesCardProductTitle}>{item.title}</h2>
										<p>Рейтинг {item.rating.rate}</p>
										<p>{item.description}</p>
									</div>

									<div>
										<h3>Price {item.price} $</h3>

										{checkProductHaveInCart ? <div  className={styles.categoriesCardProductBoxBtn}>
											<button  onClick={() => props.addCartProduct(item)}>Добавить товар в корзину</button>
											<Link to="/categories">Вернуться назад</Link>

										</div> : <div className={styles.categoriesCardProductHasInCartBox}>

											<p>Товар в корзине</p>

											<div className={styles.categoriesCardProductBoxBtn}>
												<button onClick={() => props.removeCartProduct(item.id)}>Удалить товар</button>
												<Link to='/cart'>Перейти в корзину</Link>
												<Link to="/categories">Продолжить покупки</Link>
											</div>

										</div>}

									</div>

								</div>
							</div>
						</Fragment>
					);
				}
				)
				}
			</section>
		</div>
	)
}

const mapStateToProps = (state: RootType) => {
	return {
		categoryProduct: state.categories.currentCategoryProducts,
		cart: state.cart,
	}
}
let { addCartProduct, removeCartProduct } = actionsCarts

export default connect(mapStateToProps, { addCartProduct, removeCartProduct })(CategoriesCardProduct)