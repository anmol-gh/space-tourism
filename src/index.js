import React from 'react';
import "./App.css"
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Destination from './Components/Destination/Destination';
import Crew from './Components/Crew/Crew';
import Technology from './Components/Technology/Technology';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const BrowserRouter = createBrowserRouter([
  {
    path: "/",
    element:
      <>
        <Navbar />
        <Home />
      </>,
  },
  {
    path: "/destination",
    element:
      <><Navbar />
        <Destination /></>,
  },
  {
    path: "/crew",
    element:
      <><Navbar /><Crew/></>
  },
  {
    path: "/technology",
    element: <><Navbar /><Technology/></>
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={BrowserRouter} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
