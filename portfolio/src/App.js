import './App.css';
import Frontpage from './components/Frontpage';
import AboutMe from './components/AboutMe';
import MyCV from './components/MyCV';
import Nav from 'react-bootstrap/Nav';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Button from "react-bootstrap/Button";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav id="main-menu">
          <header className="App-header">
            <h1><Link to='/'>Aura Putkonen</Link></h1>
          </header>
          <Link role="button" to="/aboutMe">
              <Button>
                <p>About</p>
              </Button>
          </Link> 
          <Link role="button" to="/myCV">
              <Button className='secondaryButton'>
                <p>My CV</p>
              </Button>
          </Link>
        </Nav>

        <Routes>
          <Route path="/" element={<Frontpage />} />
          <Route path="/aboutMe" element={<AboutMe />} />
          <Route path="/myCV" element={<MyCV />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
