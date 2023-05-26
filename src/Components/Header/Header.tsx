import HeaderDropDownBtn from './HeaderDropDownBtn/HeaderDropDownBtn';

import styles from './Header.module.css'
import HeaderPhone from './HeaderPhone/HeaderPhone';
import SocialMedia from '../SocialMedia/SocialMedia';
import HeaderTitle from './HeaderTitle/HeaderTitle';
import HeaderProfile from './HeaderProfile/HeaderProfile';
import { connect } from 'react-redux';
import { RootType } from '../../Redux/redux-store';
import { useState } from 'react';
import CartHoverProductsContainer from '../Cart/CartHoverProductsContainer/CartHoverProductsContainer';
import HeaderCartIcon from './HeaderCartsIcon/HeaderCartIcon';
import { actionsCarts } from '../../Redux/Cart-reducer';
import { getAuth } from '../../Redux/selectors/Auth-selectors';



type HeaderType = {
	cart: any
	increaseCartProduct: any
	decreaseCartProduct: any
	deleteCartProduct: any
}

function Header(props: any): JSX.Element {
	let [openMenu, setOpenMenu] = useState<Boolean>(false)


	//onMouseLeave={() => setOpenMenu(false)}
	return (
		<header className={styles.header} >
			<h1 className={styles.visuallyHidden}>Купить женскую одежду</h1>
			<HeaderDropDownBtn />
			<div className={styles.spaceLeft}>
				<SocialMedia />
			</div>
			<HeaderTitle />
			<HeaderPhone />

			<HeaderProfile />

			<HeaderCartIcon
				setOpenMenu={setOpenMenu}
				countCartHeart={props.carts.totalCountCartHeart}
				cart={props.carts}
				setOpenModalWindow={props.setOpenModalWindow}
			/>




			{openMenu && <CartHoverProductsContainer
				setOpenMenu={setOpenMenu}
				carts={props.carts}
				increaseCartProduct={props.increaseCartProduct}
				decreaseCartProduct={props.decreaseCartProduct}
				deleteProduct={props.deleteCartProduct}
				orderCartList={props.orderCartList}
			/>}
		</header>
	);
}

const mapStateToProps = (state: RootType) => {
	return {
		carts: state.cart.carts,
	}
}


let { increaseCartProduct, decreaseCartProduct, deleteCartProduct, orderCartList } = actionsCarts;
export default connect(mapStateToProps, {
	increaseCartProduct,
	decreaseCartProduct,
	deleteCartProduct,
	orderCartList,
})(Header);