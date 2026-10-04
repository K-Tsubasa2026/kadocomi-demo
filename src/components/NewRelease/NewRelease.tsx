import "./NewRelease.css"
import { Link } from 'react-router'

// 閲覧日から daysAgo 日前の発売日を作る（例：'10月4日発売'）
function formatReleaseDate(daysAgo: number) {
  const date = new Date()
  date.setDate(date.getDate() - daysAgo)
  return `${date.getMonth() + 1}月${date.getDate()}日発売`
}

// daysAgo: 閲覧日の何日前に発売したか（1冊目は当日、ほかは3日前）
const newReleaseCards = [
  {
    title: '柴犬',
    image: 'cover-shiba.jpg',
    daysAgo: 0,
  },
  {
    title: 'トイプードル',
    image: 'cover-toypoodle.jpg',
    daysAgo: 3,
  },
  {
    title: 'サモエド',
    image: 'cover-samoyed.jpg',
    daysAgo: 3,
  },
  {
    title: 'ハスキー',
    image: 'cover-husky.jpg',
    daysAgo: 3,
  },
  {
    title: 'チワワ',
    image: 'cover-chihuahua.jpg',
    daysAgo: 3,
  },
  {
    title: 'ビーグル',
    image: 'cover-beagle.jpg',
    daysAgo: 3,
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
                            {formatReleaseDate(newReleaseCard.daysAgo)}
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