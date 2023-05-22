import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import './Components/_color.css';
import reportWebVitals from './reportWebVitals';
import store from './Redux/redux-store';
import { Provider } from 'react-redux/es/exports';
import { createBrowserRouter, createHashRouter, createRoutesFromElements, HashRouter, Route, RouterProvider } from 'react-router-dom';
import Layout from './Layout/Layout';
import Dialogs from './Components/Dialogs/Dialogs';
import UsersContainer from './Components/Users/UsersContainer';
import { ErrorPage } from './Components/common/ErrorPage/ErrorPage';
import CartContainer from './Components/Cart/CartContainer';
import CategoriesContainer from './Components/Categories/CategoriesContainer';
import CategoriesCardProduct from './Components/Categories/CategoriesCardProduct/CategoriesCardProduct';
import CartSetOrder from './Components/Cart/CartSetOrder/CartSetOrder';
import  { SkeletonTheme } from 'react-loading-skeleton';
import MyProfilePageContainer from './Components/MyProfilePage/MyProfilePageContainer';


const router = createHashRouter(
    createRoutesFromElements(
        <Route path="/" element={<Layout />} errorElement={<ErrorPage />}>
            <Route index element={<App />} />
            <Route path="dialogs" element={<Dialogs />} />
            <Route path="users/:id?" element={<UsersContainer />} />
            <Route path="profile" element={<MyProfilePageContainer />} />
            <Route path="cart" element={<CartContainer />} />
            <Route path='categories-product' element={<CategoriesCardProduct />} />
            <Route path='cart-set-order' element={<CartSetOrder />} />

            <Route path="categories" element={< CategoriesContainer />} />
        </Route>
    )
);


const rootElem = document.getElementById('root');
if (rootElem) {
    const root = ReactDOM.createRoot(rootElem);
    root.render(
        <SkeletonTheme baseColor="#dcd9d957" highlightColor="#eae8e8">
            <Provider store={store}>
                <RouterProvider router={router} />
            </Provider>
        </SkeletonTheme>
    );

}
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
