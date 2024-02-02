import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavigationMain from './navigation/NavigationMain';
import Home from './pages/mainPath/Home';
import Login from './pages/mainPath/Login';
import Register from './pages/mainPath/Register';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<NavigationMain />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
