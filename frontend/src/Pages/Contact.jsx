import ConForm from "../components/ConForm";
import Header from "../components/Header";
import NavBar from "../components/NavBar";


function Contact(){

    //contact form has name email and message fields
    return(<>
    <Header/>
    <NavBar/>
    <ConForm/>
    <div id = "bottom-gradient"></div>
    </>);
}

export default Contact