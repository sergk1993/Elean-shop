import { applyMiddleware, combineReducers, compose } from 'redux';
import { createStore } from 'redux';
import CatalogPage from './CatalogPage-reducer';
import NavCategory from './NavCategory-reducer';




const rootReducer:any = combineReducers({
	catalogListPage: CatalogPage,
	navCategory: NavCategory,
});



export type RootType = ReturnType<typeof rootReducer>
const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const store = createStore(rootReducer, composeEnhancers(
	applyMiddleware()
))


export default store;
