import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import { ROUTES } from './routers/router';
import { MainContext } from './Context/Context';
import { useState } from 'react';

const router=createBrowserRouter(ROUTES)
function App() {
  const[basketItems,setBasketItems]=useState([])
  const datas={
    basketItems,
    setBasketItems
  }
  return (
    <div className="App">
     <MainContext.Provider value={datas}>
             <RouterProvider router={router}/>

     </MainContext.Provider>
    </div>
  );
}

export default App;
