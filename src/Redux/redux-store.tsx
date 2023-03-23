import { applyMiddleware, combineReducers, compose } from 'redux';
import { createStore } from 'redux';
import AboutBlockReducer from './AboutBlock-reducer';
import CatalogPage from './CatalogPage-reducer';
import Categories from './Categories-reducer';
import ClientsSwiperReducer from './ClientsSwiper-reducer';
import dialogsReducer from './Dialogs-reducer';
import FooterReducer from './Footer-reducer';
import NavCategory from './NavCategory-reducer';






const rootReducer = combineReducers({
	catalogListPage: CatalogPage,
	navCategory: NavCategory,
	dialogsPage: dialogsReducer,
	AboutBlock: AboutBlockReducer,
	ClientsSwiper: ClientsSwiperReducer,
	footerPage: FooterReducer,
	categories: Categories,
});



export type RootType = ReturnType<typeof rootReducer>
const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const store = createStore(rootReducer, composeEnhancers(
	applyMiddleware()
))



export default store;
