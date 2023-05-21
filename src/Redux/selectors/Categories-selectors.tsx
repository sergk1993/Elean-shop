import { RootType } from '../redux-store';

export const getCategories = (state: RootType) => state.categories;
export const getCartsProducts = (state: RootType) => state.cart.carts;

export const categoryProductsSL = (state: RootType) => state.categories.categoryProducts;
