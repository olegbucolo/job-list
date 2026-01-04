import { NavLink } from 'react-router-dom';
import '../components/Header.css';

export function Header() {
    return (
        <header className="header-main">
            <nav className="navbar">
                <ul className="ul-l">
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/jobs">Jobs</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                </ul>
                <ul className="ul-r">
                    <li><NavLink to="/login">Login</NavLink></li>
                    <li><NavLink to="/subscribe">Subscribe</NavLink></li>
                </ul>
            </nav>
        </header>
    )
}