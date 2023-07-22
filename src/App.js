import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Women from './component/Women.jsx';
import Men from './component/Men.jsx';
import Navbar from './component/static/Navbar';
import Footer from './component/static/Footer';
import Topbar from './component/static/Topbar';
import Traditional from './component/Traditional';
import Contact from './component/Contact.jsx';
import About from './component/About.jsx';
import Bridal from './component/Bridal.jsx';
import Home from './component/Home.jsx';
function App() {
  return (
    <div>
      <Router>
        <Topbar/>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/traditional" element={<Traditional/>}></Route>
          <Route path="/contact" element={<Contact/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/bridal" element={<Bridal/>}></Route>
          <Route path="/women" element={<Women/>}></Route>
          <Route path="/men" element={<Men/>}></Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
