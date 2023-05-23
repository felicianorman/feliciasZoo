import { Link } from "react-router-dom";
import './Navbar.scss'

const Navbar = () => {
    return (<>
    <header>
        <nav>
            <ul>
                <li><Link to={'/'} className="navLink">Hem</Link></li>
                <li><Link to={'/animals'} className="navLink">Mina djur</Link></li>
            </ul>
        </nav>
    </header>
    </>)
}

export default Navbar;