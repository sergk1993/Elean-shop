import React from 'react'
import { Controller, useForm } from 'react-hook-form';
import Select from "react-select";
import { FilterUsersInitType } from '../../Redux/Users-reducer';
import styles from './FilterUsers.module.css'

type FilterUsersType = {
	filter: (item: FilterUsersInitType) => void
}

type FilterUserSubmitType = {
	follow: {
		label?: string,
		value?: string,
	}
	search: string
}

function FilterUsers(props: FilterUsersType) {
	const onSubmit = (data: FilterUserSubmitType) => {
		let follow = data.follow.value
		let { search } = data
		props.filter({ search, follow })
	};

	const { register, handleSubmit, control } = useForm({
		mode: 'onSubmit',
		defaultValues: {
			search: '',
			follow: {}
		}
	});
	return (
		<div className={styles.filterUserMain}>
			<form onSubmit={handleSubmit(onSubmit)}>
				<div className={styles.filterUserInputsWrapper}>
					<input className={styles.filterUserInput} defaultValue="test" {...register("search")} placeholder='Поиск' />

					<Controller
						name='follow'
						control={control}
						render={({
							field: { onChange },
						}) => <Select
								styles={{
									control: (baseStyles) => ({
										...baseStyles,
										cursor: 'pointer',
										width: '200px',
										padding: '5px',
										'fontFamily': 'ProximaNova',
										'fontSize': '15px',
									}),

								}}
								onChange={onChange}
								placeholder='Параметра поиска'
								options={[
									{ value: "all", label: "All" },
									{ value: "1", label: "Мои друзья" },
									{ value: "0", label: "Поиск друзей" }
								]}
							/>}
					/>


					<input className={styles.filterUserSubmitBtn} type="submit" value='поиск' />
				</div>
			</form>
		</div>
	)
}

export default FilterUsers