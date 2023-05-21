import styles from './CartCloseBtn.module.css'




function CartCloseBtn(props: any) {
	return (
		<>
			<button
				onClick={() => props.deleteProduct(props.id)}
				className={styles.cartCloseBtn}
				style={{ width: props.width + 'px', height: props.height + 'px' }}
			>✖</button>
		</>
	)
}


export default CartCloseBtn