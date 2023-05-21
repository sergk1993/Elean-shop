import styles from './CartDescr.module.css'


function CartDescr() {
	return (
		<>
			<div className={styles.headings}>
				<p className={styles.description}>Описание</p>

				<div className={styles.settings}>
					<p>Количество</p>
					<p>Удалить</p>
					<p>Цена</p>
				</div>
				
			</div>

		</>


	)
}

export default CartDescr