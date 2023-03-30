import axios from 'axios';
import { getUsers } from '../Redux/Users-reducer';


const instance = axios.create({
	baseURL: 'https://social-network.samuraijs.com/api/1.0',
})



export const userApi = {

	getUsers(currentPage = 1, pageSize = 10, ) {
		
		return instance.get(`/users?page=${currentPage}&count=${pageSize}`).then(resp => resp)
	},

}


