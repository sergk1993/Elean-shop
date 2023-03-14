import { useRef, useState } from 'react'
import { connect } from 'react-redux'
import { addInputEmail, addInputName, changeInputCheckBox } from '../../../Redux/Footer-reducer'
import styles from './FormFooter.module.css'



type MapDispatchToPropsType = {
	addInputName: (text: string) => void,
	addInputEmail: (text:any) => void,
	changeInputCheckBox: (text: boolean) => void,
}


function FormFooter(props: MapDispatchToPropsType) {


	const inputTextRef = useRef<HTMLInputElement | null>(null);
	const [isBoolean, setBox] = useState<boolean>(true)

const checkBox = () => {
	setBox(!isBoolean)
	props.changeInputCheckBox(isBoolean)
}


	return (
		<form className={styles.form} >
			<input onChange={(e) => props.addInputName(e.currentTarget.value)} className={styles.formStyleInput} type="text" placeholder='ИМЯ' required />
			<input onChange={() => props.addInputEmail(inputTextRef.current?.value)} className={styles.formStyleInput} type="text" placeholder='E-mail' required ref={inputTextRef} />

			<label className={styles.formCheckboxWrapper}>
				<input className={styles.formCheck} type="checkbox" required
					onClick={checkBox} />
				<span className={styles.formCheckPartText}>Я согласен </span> с политикой конфиденциальности
				<span className={styles.formCheckbox} ></span>
			</label>
			<button className={styles.formBtnSubscribe}>ПОДПИСАТЬСя</button>
		</form>
	)
}







export default connect(null, { addInputName, addInputEmail, changeInputCheckBox })(FormFooter)