import './Header.css'
import { Link } from 'react-router-dom'

function Header()
{
    return(
        <>
        <header className="header">
            <h3 className="navhead3">Hamza Mirza</h3>
            <nav className="nav">
                <ul className="navul">
                <Link to="/democv/"><a><li>Home</li></a></Link>
                    <Link to="/democv/skill"><a><li>Skill</li></a></Link>
                    <Link to="/democv/education"><a><li>Education</li></a></Link>
                    <Link to="/democv/about"><a><li>About Me</li></a></Link>
                    <Link to="/democv/contact"><a><li>Contact Me</li></a></Link>
                </ul>
            </nav>
            </header>
        </>
    )
}

export default Header