import { Link } from "react-router-dom";
import cl from './Navbar.module.css'


export default function Navbar() {
    return (
        <nav className={cl.nav}>
            {/* <Link to={"/home"} className={cl.navItem}>Home</Link> */}
            <Link to={"/quiz-game/"} className={cl.navItem}>New Quiz</Link>
        </nav>
    )
}