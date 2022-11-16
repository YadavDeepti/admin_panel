import Home from './pages/home/Home';
import LogIn from './pages/logIn/LogIn';
import List from './pages/list/List';
import Single from './pages/single/Single';
import New from './pages/new/New';
import './App.css';
import {
  BrowserRouter as Router,Route,BrowserRouter,Routes
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='logIn' element={<LogIn />}></Route>
      <Route path='users'>
        <Route index element={<List />}></Route> 
        <Route path=':userId' element={<Single />}></Route>
        <Route path='new' element={<New />}></Route>
      </Route>
      <Route path='products'>
        <Route index element={<List />}></Route> 
        <Route path=':productId' element={<Single />}></Route>
        <Route path='new' element={<New />}></Route>
      </Route>
     
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
