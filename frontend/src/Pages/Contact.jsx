import ConForm from "../components/ConForm";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import ScrollToTopButton from "../components/ScrollToTopButton";


function Contact(){

    //contact form has name email and message fields
    return(<>
    <Header/>
    <NavBar/>
    <ScrollToTopButton/>
    <ConForm/>
    <div id = "bottom-gradient"></div>
    </>);
}

export default Contact