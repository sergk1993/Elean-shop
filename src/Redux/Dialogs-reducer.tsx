import { DialogsPageInterface } from '../types/types';

const ADD_USER_MESSAGE = 'ADD_USER_MESSAGE';



const initialState: DialogsPageInterface = {
	users: [
		{ id: 0, name: 'Sergey', message: 'text', img: 'https://statcdn.fandango.com/MPX/image/NBCU_Fandango/79/250/thumb_AC3E8332-BDAE-4BCC-88E6-7885FF452732.jpg' },
		{ id: 1, name: 'Mikhail', message: 'text', img: 'https://teacher.co.ke/wp-content/uploads/2020/12/secondary-school-Teacher.jpg' },
		{ id: 3, name: 'John', message: 'text', img: 'https://atamashi.net/wp-content/uploads/2021/04/jojoshcked-696x464.jpeg' },
		{ id: 4, name: 'Anton', message: 'text', img: 'https://static.dailymoscow.ru/uploads/novosib/2016/04/ixB9HNPxuW0.jpg' },
	],
	message: ['Сообщение']

}


type StateDialogsType = typeof initialState;

type ActionTypes = ReturnType<typeof addNewMessageAC> 


function dialogsReducer(state = initialState, action: ActionTypes):StateDialogsType {

	switch (action.type) {
		case ADD_USER_MESSAGE:
			return {
				...state,
				message: [...state.message, action.text],
			}
			
		default:
			return state;
	}
}


type AddNewMessageACType = {
	type: 'ADD_USER_MESSAGE',
	text:string,
}


export const addNewMessageAC = (text: string):AddNewMessageACType => {
	return {
		type: ADD_USER_MESSAGE,
		text
	}
}





export default dialogsReducer;
