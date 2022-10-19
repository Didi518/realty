import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import ForgotPassword from './pages/ForgotPassword';
import Offers from './pages/Offers';
import Header from './components/Header';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profil" element={<Profile />} />
          <Route path="/connexion" element={<SignIn />} />
          <Route path="/inscription" element={<SignUp />} />
          <Route path="/changer-mdp" element={<ForgotPassword />} />
          <Route path="/offres" element={<Offers />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
