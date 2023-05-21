import styles from './HeaderDropDownBtn.module.css'
import React from 'react';


function DropDownBtn() {
	return (
		<>
			<button className={styles.button}  aria-label="Button navigate"> 
				<span></span>
				<span></span>
				<span></span>
			</button>
		</>
	);
}


export default DropDownBtn;