import Home from './pages/home/Home';
import LogIn from './pages/logIn/LogIn';
import List from './pages/list/List';
import Single from './pages/single/Single';
import New from './pages/new/New';
import './App.css';
import "./style/dark.scss";
import {
  BrowserRouter as Router,Route,BrowserRouter,Routes
} from "react-router-dom";
import { productInputs, userInputs } from './formSource';
import { useContext } from 'react';
import {DarkModeContext}  from './context/darkModeContext';


function App() {
const {darkMode} =useContext(DarkModeContext)

 return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='logIn' element={<LogIn />} ></Route>
      <Route path='users'>
        <Route index element={<List />}></Route> 
        <Route path=':userId' element={<Single />}></Route>
        <Route path='new' element={<New inputs = {userInputs} title="Add New user"/>}></Route>
      </Route>
      <Route path='products'>
        <Route index element={<List />}></Route> 
        <Route path=':productId' element={<Single />}></Route>
        <Route path='new' element={<New inputs = {productInputs} title="Add New Product"/>}></Route>
      </Route>
     
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
