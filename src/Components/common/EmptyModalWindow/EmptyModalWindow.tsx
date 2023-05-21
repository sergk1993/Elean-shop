import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import styles from './EmptyModalWindow.module.css';


function EmptyModalWindow(props: any) {
	let classExist: any = useRef();

	useEffect(() => {
		let handler = (event: any) => {
			if (!classExist.current.contains(event.target)) {
				props.setOpenModalWindow(false)
			} 
		}
		document.addEventListener('mousedown', handler)

		return () => {
			document.removeEventListener('mousedown', handler)
		}
	}, [])
	return (
		<section  className={styles.emptyModalMain} style={{ display: props.open ? 'flex' : 'none' }}>

			<div ref={classExist} className={styles.emptyModalEmptyBox}>
				<div >
					<svg onClick={() => props.setOpenModalWindow(false)} className={styles.emptyModalClose} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M1 13L13 1" stroke="black" strokeWidth="2" />
						<path d="M13 13L1 1" stroke="black" strokeWidth="2" />
					</svg>

					<h3>{props.title}</h3>
					<svg viewBox="0 0 78 82" xmlns="http://www.w3.org/2000/svg">
						<path d="M31.8617 41.1191C34.5618 41.1191 37.6757 43.5944 38.9839 46.1319C40.2395 43.5944 43.3199 41.1191 46.02 41.1191C53.123 41.1191 56.885 50.8601 50.411 57.2242L39.2087 68.2351L27.7745 57.2242C21.0948 51.2093 24.7587 41.1191 31.8617 41.1191Z" stroke="#010101" strokeWidth="3" strokeMiterlimit="22.9256" strokeLinecap="round" strokeLinejoin="round" />
						<path d="M52.8856 27.6806V15.5121C52.8856 7.88293 46.6388 1.62891 39 1.62891C31.3636 1.62891 25.1144 7.87576 25.1144 15.5121V27.6782M8.40909 16.3803H69.5933C71.3535 16.3803 72.6976 17.8415 72.7957 19.5826L75.9956 77.0694C76.0937 78.8057 74.5343 80.2718 72.7957 80.2718H5.20675C3.46567 80.2718 1.90633 78.8273 2.00439 77.0694L5.20675 19.5826C5.3048 17.8224 6.64887 16.3803 8.40909 16.3803ZM52.8832 23.6986C54.4282 23.6986 55.6838 24.9518 55.6838 26.4967C55.6838 28.0417 54.4306 29.2949 52.8832 29.2949C51.3382 29.2949 50.085 28.0417 50.085 26.4967C50.085 24.9518 51.3382 23.6986 52.8832 23.6986ZM25.1168 23.6986C26.6618 23.6986 27.9149 24.9518 27.9149 26.4967C27.9149 28.0417 26.6618 29.2949 25.1168 29.2949C23.5694 29.2949 22.3162 28.0417 22.3162 26.4967C22.3186 24.9518 23.5694 23.6986 25.1168 23.6986Z" stroke="#010101" strokeWidth="3" strokeMiterlimit="22.9256" />
					</svg>

					<Link className={styles.emptyModalBtn} to='categories' onClick={() => props.setOpenModalWindow(false)}>Продолжить покупки</Link>
				</div>

			</div>

		</section>
	)
}

export default EmptyModalWindow