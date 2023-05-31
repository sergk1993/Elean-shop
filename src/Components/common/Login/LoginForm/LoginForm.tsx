import { useForm, SubmitHandler } from "react-hook-form";
import { Link } from 'react-router-dom';
import styles from './LoginForm.module.css'

type Inputs = {
	login: string,
	password: string,
	captcha: string | null
};

type LoginFormType = {
	login: (items: Inputs) => void,
	captcha: string | null,
}

const LoginForm = (props: LoginFormType) => {

	const { register, handleSubmit, reset, formState: { errors } } = useForm<Inputs>({
		mode: 'onChange',
		defaultValues: {
			login: '',
			password: '',
			captcha: ''
		}
	});



	const onSubmit: SubmitHandler<Inputs> = (data) => {
		props.login(data);
		reset()
	};


	let regExLogin = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/gi;
	return (
		<form className={styles.formLogin} onSubmit={handleSubmit(onSubmit)}>

			<input type='text'  {...register("login",
				{
					pattern: regExLogin,
					required: 'Login должен содержать символы',
				}
			)} placeholder='Login' name='login' />
			{errors.login && <p className={styles.formError}>{errors?.login?.message || 'Неправильно введен Login'}</p>}


			<input {...register("password", {
				required: 'Password должен содержать символы'
			})}
				type='password'
				name="password"
				placeholder='Password'
			/>

			{props.captcha && <div className={styles.captchaMain}>
				<div className={styles.captchaBox}>
					<img src={props.captcha} alt="" />
					<input {...register("captcha")}
						type='text'
						name="captcha"
						placeholder='Captcha'
					/>
				</div>
			</div>
			}

			<button className={styles.loginFormBtn} type='submit'>Login</button>

			<Link target="_blank" className={styles.loginFormBtnToSignUp} to='https://social-network.samuraijs.com/signUp'>зарегистрироваться</Link>

		</form>
	)
}

export default LoginForm