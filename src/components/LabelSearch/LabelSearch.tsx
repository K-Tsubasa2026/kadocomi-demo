import './LabelSearch.css'
import { Link } from 'react-router'

const labelItems = [
    'レーベル1',
    'レーベル2',
    'レーベル3',
    'レーベル4',
    'レーベル5',
    'レーベル6',
    'レーベル7',
    'レーベル8',
    'レーベル9',
    'レーベル10',
    'レーベル11',
    'レーベル12',
    'レーベル13',
    'レーベル14',
    'レーベル15',
    'レーベル16',
]

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
                    {labelItems.map((label) => (
                        <Link
                        to="/404"
                        key={label}
                        className="label-search-item"
                        >
                        <div className="label-search-image">
                        Demo image
                        </div>

                        <p className="label-search-item-title">
                        {label}
                        </p>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default LabelSearch
