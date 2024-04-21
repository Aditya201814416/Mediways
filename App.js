import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Login from './components/Login';
import SignUp from './components/SignUp'
import Home from './components/Home';
import Navbar from './components/Navbar';
import Chat from './components/Chat';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/signup" element={<SignUp/>}/>
        <Route exact path="/login" element={<Login/>}/>
        <Route exact path="/chat" element={<Chat/>}/>

      </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
