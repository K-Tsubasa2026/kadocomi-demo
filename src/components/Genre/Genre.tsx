import './Genre.css'
import { Link } from 'react-router'

const genreItems = [
    'ファンタジー',
    '恋愛',
    'ラブコメ',
    'グルメ',
    'ギャグ・コメディ',
    'ホラー',
    '異世界',
    '悪役令嬢',
    '百合',
    'BL',
    'コミカライズ',
    '小説家になろう'
]

function Genre (){

    return(
        <section className="genre">
            <div className="genre-inner">
                <div className="genre-header">
                    <h2 className="genre-title">ジャンル・タグから探す</h2>
                    <Link to="/404" className="genre-more-link">
                        もっと見る
                        <i className="fa-solid fa-angle-right"></i>
                    </Link>
                </div>
                <div className="genre-grid">
                    {genreItems.map((genre) => (
                        <Link
                        to="/404"
                        key={genre}
                        className="genre-item"
                        >
                        {genre}
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Genre