
import './Header.css'; // Import the CSS file
import Navbar from '../navbar/Navbar';
function Header() {
    return (
        <div className="header-container">
            <h1>Travel destinations!</h1>
            <Navbar/>
        </div>
    );
}

export default Header;
