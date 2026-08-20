import './Nav.css'
import { Link } from 'react-router'

function Nav (){
    return(
        <nav className="nav">
            <ul className="nav-list">
                <li>
                    <Link to="/404">
                        <i className="fa-solid fa-book-open icon-book"></i>
                        無料話増量
                    </Link>
                </li>
                <li>
                    <Link to="/404">
                        <i className="fa-solid fa-crown icon-crown"></i>
                        ランキング
                    </Link>
                </li>
                <li>
                    <Link to="/404">
                        <i className="fa-solid fa-magnifying-glass icon-search"></i>
                        探す
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Nav