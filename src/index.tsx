import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import './Components/_color.css';
import reportWebVitals from './reportWebVitals';
import store from './Redux/redux-store';
import { Provider } from 'react-redux/es/exports';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ErrorPage } from './Components/ErrorPage/ErrorPage';
import { BrowserRouter } from 'react-router-dom';
import Layout from './Layout/Layout';



const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/app",
                element: <App />,
            }
        ]
    }
])



const rootElem = document.getElementById('root');
if (rootElem) {

    const root = ReactDOM.createRoot(rootElem);
    root.render(
        <Provider store={store}>
            <React.StrictMode>
                <RouterProvider router={router} />
            </React.StrictMode>
        </Provider>
    );

}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
