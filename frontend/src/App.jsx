import { useState, useEffect, useRef } from 'react'
import HomePage from './Pages/HomePage';
import { CSSTransition } from 'react-transition-group';
import './index.css';
import IntroPage from './Pages/IntroPage';
import {Routes, Route} from 'react-router-dom';
import About from './Pages/About';
// import Projects from './Pages/Projects';
// import Contact from './Pages/Contact';

function App() {
  const [show, setShow] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, 1300);
  }, []);

  return (
    <>
    <IntroPage/>
      <CSSTransition
        in = {show}
        nodeRef = {ref}
        timeout = {1900}
        classNames = "fade-in"
        mountOnEnter>
      <div ref = {ref}>
    <Routes>
      <Route path = "/" element = {<HomePage />} />
      <Route path = "/about" element = {<About />} />
      {/* <Route path = "/projects" element = {<Projects />} />
      <Route path = "/contact" element = {<Contact />} /> */}
    </Routes>
            {/* <HomePage /> */}
            {/* <h1>Hi</h1> */}
          </div>
      </CSSTransition>
      
    </>
  )
}

export default App
