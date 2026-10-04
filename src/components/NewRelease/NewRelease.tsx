import "./NewRelease.css"
import { Link } from 'react-router'

const newReleaseCards = [
  {
    title: '柴犬',
    image: 'cover-shiba.jpg',
    releaseDate: '8月24日発売',
  },
  {
    title: 'トイプードル',
    image: 'cover-toypoodle.jpg',
    releaseDate: '8月21日発売',
  },
  {
    title: 'サモエド',
    image: 'cover-samoyed.jpg',
    releaseDate: '8月21日発売',
  },
  {
    title: 'ハスキー',
    image: 'cover-husky.jpg',
    releaseDate: '8月21日発売',
  },
  {
    title: 'チワワ',
    image: 'cover-chihuahua.jpg',
    releaseDate: '8月21日発売',
  },
  {
    title: 'ビーグル',
    image: 'cover-beagle.jpg',
    releaseDate: '8月21日発売',
  },
]

function NewRelease () {
     return(
        <section className="new-release"> 
            <div className="new-release-inner">
                <div className="new-release-header">
                    <h2 className="new-release-title">
                        <i className="fa-solid fa-book"></i>
                        コミック最新刊販売中
                    </h2>

                    <Link to="/404" className="new-release-more-link">
                        もっと見る
                        <i className="fa-solid fa-angle-right"></i>
                    </Link>
                </div>

                <div className="new-release-grid">
                    {newReleaseCards.map((newReleaseCard) => (
                    <Link
                    to="/404"
                    key={newReleaseCard.title}
                    className="new-release-card"
                    >
                        <div className="new-release-image">
                        <img src={`/images/${newReleaseCard.image}`} alt={newReleaseCard.title} />
                        </div>

                        <p className="new-release-date">
                            {newReleaseCard.releaseDate}
                        </p>

                        <p className="new-release-card-title">
                        {newReleaseCard.title}
                        </p>
                    </Link>
                    ))}
                </div>
        </div>
    </section>
  )
}

export default NewRelease