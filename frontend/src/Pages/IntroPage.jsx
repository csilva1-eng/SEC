import '../index.css'
import { useState, useEffect, useRef } from 'react'
import { CSSTransition } from 'react-transition-group';
function IntroPage(){

    const [introVis, setIntroVis] = useState(true);
      const time = 1200;
      const ref = useRef(null);
    
      useEffect(() => {
        setTimeout(() => {
          setIntroVis(false);
        }, time);
      }, [])


    return (
    <CSSTransition
        in = {introVis}
        nodeRef = {ref}
        timeout = {time}
        classNames = "fade"
        unmountOnExit
    >
        <div id = "open">
          <h1 ref = {ref} className = "just-text">Chris<br/> Silva</h1>
        </div>
    </CSSTransition>
      );
}

export default IntroPage