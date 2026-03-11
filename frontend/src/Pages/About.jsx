import Header from "../components/Header";
import NavBar from "../components/NavBar";


function About(){

    return(
    <>
    <Header/>
    <NavBar/>
    <div id = "about-content">
        <h1>About Me</h1>
        <p>
            Hi welcome to my personal website!<br/><br/>
            I am a student at the University of Florida majoring in Computer Science and minoring in mathematics.
            I am passionate about software development, programming, music, and mathematics. 
            Always in search of internship opportunities or opportunities to learn and grow as a student and software developer!
            I currently do most of my work in MERN stack but I am always looking to expand my skill set and learn new technologies.
            If you are impressed by my work or just another likeminded invidual, I would love to connect with you on linkedin (top left) or through email (contact page)! 
        </p>
    </div>
    <div id = 'bottom-gradient'></div>
    </>);
}


export default About;