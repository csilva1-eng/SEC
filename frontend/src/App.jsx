import { useState, useEffect, useRef } from 'react'
import HomePage from './Pages/HomePage';
import { CSSTransition } from 'react-transition-group';
import './index.css';
import IntroPage from './Pages/IntroPage';

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
        {/* <HomePage/> */}
        <h1 ref={ref}>Hi</h1>
      </CSSTransition>
      
    </>
  )
}

export default App
