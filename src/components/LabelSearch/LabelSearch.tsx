import './LabelSearch.css'
import { Link } from 'react-router'

// dog-testの犬12匹の顔
const dogLabels = [
    { name: '柴犬', image: 'face-shiba.jpg' },
    { name: 'ハスキー', image: 'face-husky.jpg' },
    { name: 'ポメラニアン', image: 'face-pomeranian.jpg' },
    { name: 'トイプードル', image: 'face-toypoodle.jpg' },
    { name: 'ゴールデン', image: 'face-golden.jpg' },
    { name: 'チワワ', image: 'face-chihuahua.jpg' },
    { name: 'フレブル', image: 'face-frenchbulldog.jpg' },
    { name: 'ボーダー', image: 'face-bordercollie.jpg' },
    { name: 'ビーグル', image: 'face-beagle.jpg' },
    { name: 'シェパード', image: 'face-germanshepherd.jpg' },
    { name: 'ドーベルマン', image: 'face-doberman.jpg' },
    { name: 'サモエド', image: 'face-samoyed.jpg' },
]

// 16枠に足りない分は、1匹目から順にもう一度並べる
const labelItems = [...dogLabels, ...dogLabels.slice(0, 4)]

function LabelSearch (){

    return(
        <section className="label-search">
            <div className="label-search-inner">
                <div className="label-search-header">
                    <h2 className="label-search-title">レーベルから探す</h2>
                    <Link to="/404" className="label-search-more-link">
                        もっと見る
                        <i className="fa-solid fa-angle-right"></i>
                    </Link>
                </div>
                <div className="label-search-grid">
                    {labelItems.map((label, index) => (
                        <Link
                        to="/404"
                        key={`${label.image}-${index}`}
                        className="label-search-item"
                        >
                        <div className="label-search-image">
                        <img src={`${import.meta.env.BASE_URL}images/${label.image}`} alt={label.name} />
                        </div>

                        <p className="label-search-item-title">
                        {label.name}
                        </p>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default LabelSearch
