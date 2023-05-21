import axios from 'axios'

let instance = axios.create({
	baseURL: 'https://fakestoreapi.com/'
})



export const productsApi = {
	getProducts() {
		return instance.get('products').then(res => res.data)
	}
}

