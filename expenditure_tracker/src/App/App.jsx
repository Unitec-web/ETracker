import { Route, Routes } from 'react-router-dom';
import '../styles.css';
import WelcomePage1 from '../Pages/welcome-page/WelcomePage1';
import Login from '../Pages/login-page/Login';
import SignUp from '../Pages/signup-page/SignUp';
import HomePage from '../Pages/home-page/HomePage';
import WelcomePage2 from '../Pages/welcome-page/welcomePage2';
import { EtrackerAuth } from '../context/context';
function App() {
  return (
    
    <Routes>
    
      <Route  path="/" element={<WelcomePage1 />} />
      <Route path="/welcomepage2" element={<WelcomePage2 />} />
      <Route path='/homepage' element={<EtrackerAuth><HomePage /></EtrackerAuth>}/>
      <Route path='/login' element={<EtrackerAuth> <Login /></EtrackerAuth>} />
      <Route path='/register' element={<EtrackerAuth><SignUp /></EtrackerAuth>} />
    </Routes>
  
  );
}

export default App;
