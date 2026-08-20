import './Header.css'
import { Link } from 'react-router'

function Header(){
    return(
        <header className="header">
            <div className="header-main">
                <Link to="/" className="logo-area">
                    <p className="logo-sub">漫画エンタメ全部コミコミ（模写デモ）</p>
                    <p className="logo">カドコミ風</p>
                </Link>

                <Link to="/404" className="login-link">
                    <i className="fa-solid fa-arrow-right-to-bracket"></i>
                    ログイン（デモ）
                </Link>
            </div>
        </header>
    )
}

export default Header