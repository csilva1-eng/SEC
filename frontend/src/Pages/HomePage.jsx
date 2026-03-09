import NavBar from '../components/NavBar.jsx';
import Header from '../components/Header.jsx';

function HomePage() {


    return(
    <>
    <Header />
    <NavBar/>
    <div id = "passions">

        <h3 className = "passion-text">Passionate About</h3>
        <ul id = 'passion-list'>
            <li>Software Development</li>
            <li>Music</li>
            <li>Programming</li>
        </ul>
    </div>
        <div id = "home-bottom-center">
            <p>
                Building scalable and efficient products that generate real change for real people.
            </p>
        </div>
        <div id = 'bottom-gradient'></div>
    </>
    );
}

export default HomePage;