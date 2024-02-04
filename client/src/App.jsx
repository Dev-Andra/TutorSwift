import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavigationMain from './navigation/NavigationMain';
import Home from './pages/mainPath/Home';
import Login from './pages/mainPath/Login';
import Register from './pages/mainPath/Register';
import Tutors from './pages/tutorPath/Tutors';
import Subjects from './pages/subjectPath/Subjects';
import About from './pages/About';
import Contact from './pages/Contact';
import Chats from './pages/Chats';
import VerifyEmail from './pages/VerifyEmail';

function App() {
  return (
    <Router>
      <NavigationMain />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path='/tutors' element={<Tutors />}></Route>
        <Route path='/subjects' element={<Subjects />}></Route>
        <Route path='/about' element={<About />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/chats' element={<Chats />} />
        <Route path="/register/verify-email" element={<VerifyEmail />} />
      </Routes>
    </Router>
  )
}

export default App
