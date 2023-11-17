import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Register from './pages/register/Register';
import Login from './pages/login/Login';
import HeaderComponent from './components/HeaderComponent/HeaderComponent';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <HeaderComponent/>
        <Routes>
          <Route path='/register' element = {<Register/>}/>
          <Route path='/login' element = {<Login/>}/>
        </Routes>
      </BrowserRouter>
       
    </div>
  );
}

export default App;
