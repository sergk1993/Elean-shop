import { applyMiddleware, combineReducers, compose } from 'redux';
import { createStore } from 'redux';
import AboutBlockReducer from './AboutBlock-reducer';
import CatalogPage from './CatalogPage-reducer';
import Categories from './Categories-reducer';
import ClientsSwiperReducer from './ClientsSwiper-reducer';
import dialogsReducer from './Dialogs-reducer';
import FooterReducer from './Footer-reducer';
import NavCategory from './NavCategory-reducer';
import thunkMiddleware from 'redux-thunk'
import UsersReducer from './Users-reducer';
import AuthReducer from './Auth-reducer';
import CartReducer from './Cart-reducer';
import ProfileReducer from './Profile-reducer';





const rootReducer = combineReducers({
	catalogListPage: CatalogPage,
	navCategory: NavCategory,
	dialogsPage: dialogsReducer,
	AboutBlock: AboutBlockReducer,
	ClientsSwiper: ClientsSwiperReducer,
	footerPage: FooterReducer,
	categories: Categories,
	usersPage: UsersReducer,
	AuthPage: AuthReducer,
	cart: CartReducer,
	profile: ProfileReducer,
});

/* тип для обьекта экшенов */
type PropertyType<T> = T extends { [key: string]: infer U } ? U : never
export type InferActionType<T extends { [key: string]: (...arg: any[]) => any }> = ReturnType<PropertyType<T>>




export type RootType = ReturnType<typeof rootReducer>
const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const store = createStore(rootReducer, composeEnhancers(
	applyMiddleware(thunkMiddleware)
))

// @ts-ignore
window._store__ = store

export default store;
