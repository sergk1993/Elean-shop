import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import './Components/_color.css';
import reportWebVitals from './reportWebVitals';
import store from './Redux/redux-store';
import { Provider } from 'react-redux/es/exports';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Layout from './Layout/Layout';
import { ErrorPage } from './Components/ErrorPage/ErrorPage';
import Dialogs from './Components/Dialogs/Dialogs';
import CategoriesContainer from './Components/Categories/CategoriesContainer';
import NewsCategories from './Components/Categories/NewsCategories';
import SkirtsCategories from './Components/Categories/SkirtsCategories';




const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Layout />} errorElement={<ErrorPage />}>
            <Route index element={<App />} />
            <Route path="dialogs" element={<Dialogs />} />

            <Route path="categories" element={<CategoriesContainer />} >
                <Route path="news" element={<NewsCategories />} />
                <Route path="skirts" element={<SkirtsCategories />} />
            </Route>
        </Route>
    )
);




const rootElem = document.getElementById('root');
if (rootElem) {
    const root = ReactDOM.createRoot(rootElem);
    root.render(
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
    );

}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
