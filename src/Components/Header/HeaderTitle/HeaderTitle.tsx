
import Title from '../../Title/Title';
import styles from './HeaderTitle.module.css';



function HeaderTitle() {
	return (
		<div className={styles.titleWrapper}>
			<Title />
			<p className={styles.titleText}>женский <span className={styles.subtext}>смокинг</span></p>
		</div>
	);
}


export default HeaderTitle;