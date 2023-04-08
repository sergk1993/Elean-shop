import React from 'react'
import styles from './ButtonLogin.module.css'

type ButtonLoginType = {
	titleBtn: string,
	children?: React.ReactNode
}

function ButtonLogin({ titleBtn}: ButtonLoginType ) {
	return (
		<button className={styles.login} >
			{titleBtn}
		</button>
	)
}

export default ButtonLogin