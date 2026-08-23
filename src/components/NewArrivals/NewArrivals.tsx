import './NewArrivals.css'
import { Link } from 'react-router'

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

// 作品の配列化
const arrivals = [
    '新着作品タイトル1',
    '新着作品タイトル2',
    '新着作品タイトル3',
    '新着作品タイトル4',
    '新着作品タイトル5',
    '新着作品タイトル6',
    '新着作品タイトル7',
    '新着作品タイトル8',
    '新着作品タイトル9',
    '新着作品タイトル10',
    '新着作品タイトル11',
    '新着作品タイトル12',
    '新着作品タイトル13',
    '新着作品タイトル14',
    '新着作品タイトル15',
]

function NewArrivals() {

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
            {/* ▼日付を一つずつ取得 */}
            {dates.map((date,index) => ( 
                <Link 
                    to="/404"
                    key={date} //各日付を識別
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
            <Link to="/404" className="arrival-card">
                <div className="arrival-image">Demo image</div>
                <p className="arrival-title">新着作品タイトル1</p>
            </Link>
            <Link to="/404" className="arrival-card">
                <div className="arrival-image">Demo image</div>
                <p className="arrival-title">新着作品タイトル2</p>
            </Link>
            <Link to="/404" className="arrival-card">
                <div className="arrival-image">Demo image</div>
                <p className="arrival-title">新着作品タイトル3</p>
            </Link>
            <Link to="/404" className="arrival-card">
                <div className="arrival-image">Demo image</div>
                <p className="arrival-title">新着作品タイトル4</p>
            </Link>
            <Link to="/404" className="arrival-card">
                <div className="arrival-image">Demo image</div>
                <p className="arrival-title">新着作品タイトル5</p>
            </Link>
            <Link to="/404" className="arrival-card">
                <div className="arrival-image">Demo image</div>
                <p className="arrival-title">新着作品タイトル6</p>
            </Link>
            <Link to="/404" className="arrival-card">
                <div className="arrival-image">Demo image</div>
                <p className="arrival-title">新着作品タイトル7</p>
            </Link>
            <Link to="/404" className="arrival-card">
                <div className="arrival-image">Demo image</div>
                <p className="arrival-title">新着作品タイトル8</p>
            </Link>
            <Link to="/404" className="arrival-card">
                <div className="arrival-image">Demo image</div>
                <p className="arrival-title">新着作品タイトル9</p>
            </Link>
            <Link to="/404" className="arrival-card">
                <div className="arrival-image">Demo image</div>
                <p className="arrival-title">新着作品タイトル10</p>
            </Link>
        </div>

        <div className="load-more-wrapper">
            <div className="arrival-grid arrival-grid-fade">
                <Link to="/404" className="arrival-card">
                    <div className="arrival-image">Demo image</div>
                    <p className="arrival-title">新着作品タイトル11</p>
                </Link>
                <Link to="/404" className="arrival-card">
                    <div className="arrival-image">Demo image</div>
                    <p className="arrival-title">新着作品タイトル12</p>
                </Link>
                <Link to="/404" className="arrival-card">
                    <div className="arrival-image">Demo image</div>
                    <p className="arrival-title">新着作品タイトル13</p>
                </Link>
                <Link to="/404" className="arrival-card">
                    <div className="arrival-image">Demo image</div>
                    <p className="arrival-title">新着作品タイトル14</p>
                </Link>
                <Link to="/404" className="arrival-card">
                    <div className="arrival-image">Demo image</div>
                    <p className="arrival-title">新着作品タイトル15</p>
                </Link>
            </div>

            <button type="button" className="load-more-button">
                さらに読み込む
                <i className="fa-solid fa-circle-plus"></i>
            </button>
        </div>
    </section>
)}

export default NewArrivals