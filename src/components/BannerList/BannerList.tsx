import './BannerList.css'
import { Link } from 'react-router'

const bannerItems = [1, 2, 3, 4, 5, 6, 7, 8, 9]

function BannerList (){

    return(
        <section className="banner-list">
            <div className="banner-list-inner">
                <div className="banner-grid">
                    {bannerItems.map((item) => (
                        <Link
                        to="/404"
                        key={item}
                        className="banner-image"
                        >
                        Demo image
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default BannerList
