import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import About from './components/About';
import TextForm from './components/TextForm';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter, createRoutesFromElements,Route } from 'react-router-dom';
// Routing Method 1

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     children: [
//       {
//         path: "",
//         element: <TextForm />
//       },
//       {
//         path: "about",
//         element: <About />
//       }
//     ]
//   },
// ]);

// Routing Method 2
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path='' element={<TextForm />} />
      <Route path='about' element={<About />} />
    </Route>
  )
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
