import { BrowserRouter  as Router, Routes, Route} from 'react-router-dom';
import './index.css';
import Navbar from './Navbar';
import Home from './Home';
import Services from './Services';
import Footer from './Footer';
import Contact from './Contact';

function App() {
  return (

    <div className="App">
      <Router>
        <div className="App">
            <Navbar />
             <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/contact" element={<Contact />} />
             </Routes>
             <Footer />
        </div>
     </Router>
     ;
    </div>
  );
}

export default App;
