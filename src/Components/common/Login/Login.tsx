import LoginForm from './LoginForm/LoginForm'
import styles from './Login.module.css'
import { LoginTHType } from '../../../Redux/Auth-reducer'

type LoginType = {
	isLogin: (items: LoginTHType) => void
	captcha: string | null,
}
/* пропсы приходят из ProfilePage */
const Login = (props: LoginType) => {
	return (
		<section className={styles.login}>
			<LoginForm login={props.isLogin} captcha={props.captcha}/>
		</section>
	)
}

export default Login;