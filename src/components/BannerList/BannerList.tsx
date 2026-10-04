import './BannerList.css'
import { Link } from 'react-router'

// dog-testの犬を使った自作の企画バナー
const bannerItems = [
    { image: 'banner-magazine.jpg', alt: 'わんこ通信' },
    { image: 'banner-isekai.jpg', alt: '異世界わんこ' },
    { image: 'banner-girls.jpg', alt: 'for Wan' },
    { image: 'banner-club.jpg', alt: 'もふもふ倶楽部' },
    { image: 'banner-channel.jpg', alt: 'ちょい見チャンネル' },
    { image: 'banner-guide.jpg', alt: 'わんこ診断の楽しみ方' },
    { image: 'banner-contest.jpg', alt: 'うちの子&わんこ写真募集中' },
    { image: 'banner-award.jpg', alt: 'わんこAWARD 2026' },
    { image: 'banner-free.jpg', alt: '何度でも無料で診断し放題' },
]

function BannerList (){

    return(
        <section className="banner-list">
            <div className="banner-list-inner">
                <div className="banner-grid">
                    {bannerItems.map((item) => (
                        <Link
                        to="/404"
                        key={item.image}
                        className="banner-image"
                        >
                        <img src={`${import.meta.env.BASE_URL}images/${item.image}`} alt={item.alt} />
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default BannerList
