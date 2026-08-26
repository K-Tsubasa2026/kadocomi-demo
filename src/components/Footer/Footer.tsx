import './Footer.css'
import { Link } from 'react-router'

function Footer() {
    return (
        <footer>
            <div className="footer-main">
                <ul className="footer-nav-list">
                    <li><Link 
                        to="/"
                        onClick={() => window.scrollTo(0,0)}>ホーム</Link></li>
                    <li><Link to="/404">無料話増量</Link></li>
                    <li><Link to="/404">ランキング</Link></li>
                    <li><Link to="/404">掲載作品一覧</Link></li>
                    <li><Link to="/404">ジャンル一覧</Link></li>
                    <li><Link to="/404">サイトマップ</Link></li>
                    <li><Link to="/404">利用者情報の外部送信について</Link></li>
                </ul>

                <ul className="footer-nav-list">
                    <li><Link to="/404">よくあるご質問 / お問い合わせ</Link></li>
                    <li><Link to="/404">利用規約</Link></li>
                    <li><Link to="/404">プライバシーポリシー</Link></li>
                </ul>

                <p className="footer-text">
                    &copy; 2026 学習用UI模写デモ
                    （KADOKAWA CORPORATIONとは無関係の非公式・非商用の練習作品です）
                </p>
            </div>
        </footer>
    )
}

export default Footer