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





const rootReducer = combineReducers({
	catalogListPage: CatalogPage,
	navCategory: NavCategory,
	dialogsPage: dialogsReducer,
	AboutBlock: AboutBlockReducer,
	ClientsSwiper: ClientsSwiperReducer,
	footerPage: FooterReducer,
	categories: Categories,
	usersPage: UsersReducer,
});



export type RootType = ReturnType<typeof rootReducer>
const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const store = createStore(rootReducer, composeEnhancers(
	applyMiddleware(thunkMiddleware)
))



export default store;
