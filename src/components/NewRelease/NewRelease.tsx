import "./NewRelease.css"
import { Link } from 'react-router'

const newReleaseCards = [
    '最新刊タイトル1',
    '最新刊タイトル2',
    '最新刊タイトル3',
    '最新刊タイトル4',
    '最新刊タイトル5',
    '最新刊タイトル6',
]

function NewRelease () {
     return(
        <section className="new-release">
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
                        key={newReleaseCard}
                        className="new-release-card"
                    >
                        <div className="new-release-image">
                        Demo image
                        </div>

                        <p className="new-release-card-title">
                        {newReleaseCard}
                        </p>
                    </Link>
        ))}
      </div>
    </section>
  )
}

export default NewRelease