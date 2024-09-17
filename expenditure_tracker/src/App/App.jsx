import { Route, Routes } from 'react-router-dom';
import './styles.css';
import WelcomePage from '../Pages/welcome-page/WelcomePage';
import Login from '../Pages/login-page/Login';
import SignUp from '../Pages/signup-page/SignUp';
import HomePage from '../Pages/home-page/HomePage';

function App() {
  return (
    
    <Routes>
    
      <Route  path="/" element={<WelcomePage></WelcomePage>} />
      <Route path='/homepage' element={<HomePage></HomePage>}/>
      <Route path='/login' element={<Login></Login>} />
      <Route path='/register' element={<SignUp></SignUp>} />
    </Routes>
  
  );
}

export default App;
