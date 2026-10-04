import './NewArrivals.css'
import { Link } from 'react-router'
import { useState } from 'react'

// 日付を配列化
const dates = [
    '8/22 土',
    '8/21 金',
    '8/20 木',
    '8/19 水',
    '8/18 火',
    '8/17 月',
    '8/16 日', 
]

// 作品の配列化（dog-testの犬12匹）
const dogWorks = [
    { title: '主導権は我にあり、マイペース王', image: 'arrival-shiba.jpg' },
    { title: '中身はおしゃべりおばさん、好奇心モンスター', image: 'arrival-husky.jpg' },
    { title: '物音ひとつで即出動、警備レベルSP級', image: 'arrival-pomeranian.jpg' },
    { title: '気づけば懐に入り込む、みんなのアイドル', image: 'arrival-toypoodle.jpg' },
    { title: '放っておけない症候群、優しさの押し売り名人', image: 'arrival-golden.jpg' },
    { title: '小さな体にプライド満タン、強がり界のラスボス', image: 'arrival-chihuahua.jpg' },
    { title: '愛嬌だけで全部解決、人生ゆるめマスコットおじさん', image: 'arrival-frenchbulldog.jpg' },
    { title: '脳内ずっと作戦会議、頼れる仕事人間', image: 'arrival-bordercollie.jpg' },
    { title: '喜怒哀楽は天下一品、陽気な嗅覚探偵', image: 'arrival-beagle.jpg' },
    { title: '冷静沈着なエリート、現場を守る守護者', image: 'arrival-germanshepherd.jpg' },
    { title: '眼光だけで場を制圧、漆黒の指揮官', image: 'arrival-doberman.jpg' },
    { title: '歩く幸福供給装置、ふわふわ界の天使', image: 'arrival-samoyed.jpg' },
]

// 20枠に足りない分は、1匹目から順にもう一度並べる
const arrivals = [...dogWorks, ...dogWorks.slice(0, 8)]

function NewArrivals() {
    const [isExpanded, setIsExpanded] = useState(false)
    return(
    <section className="new-arrivals">
        <div className="section-header">
            <h2 className="section-title title-underline">新着作品</h2>
            <Link to="/404" className="more-link">
                もっと見る
                <i className="fa-solid fa-angle-right"></i>
            </Link>
        </div>

        <div className="date-tabs">
            {/* dates.map((date,index) => 日付を一つずつ取得 */}
            {/*  key={date} 各日付を識別 */}
            {dates.map((date,index) => ( 
                <Link 
                    to="/404"
                    key={date}
                    className={
                        index === 0
                        ? 'date-tab active'
                        : 'date-tab'
                    }
                >
                    {/* ▼実際に画面に表示される日付を定義 */}
                    {date} 
                </Link>
            ))}
        </div>

        <div className="arrival-grid">
            {/* arrivals.slice(0, 10) 15件のうち最初の10件だけ取得 */}
            {/* .map((arrival) => ( 1件ずつ取り出す */}
            {/* <p className="arrival-title">{arrival}</p> 実際のタイトルを画面に表示*/}
            {arrivals.slice(0,10).map((arrival, index) => (
                <Link 
                to="/404"
                key={`${arrival.image}-${index}`}
                className="arrival-card"
                >
                    <div className="arrival-image">
                        <img src={`/images/${arrival.image}`} alt={arrival.title} />
                    </div>

                    <p className="arrival-title">
                    {arrival.title}
                    </p>
                </Link>
            ))}
        </div>


        <div className="load-more-wrapper">
            <div
                className={
                    isExpanded
                    ? 'arrival-grid'
                    : 'arrival-grid arrival-grid-fade'
                }
            >
                {arrivals
                .slice(10, isExpanded ? 20 : 15)
                .map((arrival, index) => (
                    <Link
                    to="/404"
                    key={`${arrival.image}-${index + 10}`}
                    className="arrival-card"
                    >
                    <div className="arrival-image">
                        <img src={`/images/${arrival.image}`} alt={arrival.title} />
                    </div>

                    <p className="arrival-title">
                        {arrival.title}
                    </p>
                </Link>
            ))}
            </div>

                {!isExpanded && (
                <button
                    type="button"
                    className="load-more-button"
                    onClick={() => setIsExpanded(true)}
                >
                    さらに読み込む
                    <i className="fa-solid fa-circle-plus"></i>
                </button>
                )}
        </div>
    </section>
)}

export default NewArrivals