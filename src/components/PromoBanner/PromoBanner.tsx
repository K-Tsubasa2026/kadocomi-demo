import './PromoBanner.css'
import { Link } from 'react-router'

function PromoBanner() {
    return (
        <section className="promo-banner">
            <img
                src={`${import.meta.env.BASE_URL}images/promo-portfolio.jpg`}
                alt="ポートフォリオ制作物の紹介バナー"
                className="promo-banner-image"
            />

            <div className="app-banner">
                <Link to="/404" className="app-badge">
                    <i className="fa-brands fa-apple"></i>

                    <span className="app-badge-text">
                        <span className="app-badge-large">App Store</span>
                        <span className="app-badge-small">からダウンロード</span>
                    </span>
                </Link>

                <Link to="/404" className="app-badge">
                    <i className="fa-brands fa-google-play"></i>

                    <span className="app-badge-text">
                        <span className="app-badge-large">Google Play</span>
                        <span className="app-badge-small">で手に入れよう</span>
                    </span>
                </Link>

            </div>
        </section>
    )
}

export default PromoBanner