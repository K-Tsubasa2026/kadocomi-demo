import { useState } from 'react'
import './Hero.css'
import { Link } from 'react-router'

// スライダーで使用する画像一覧
const heroImages=[
  '019ea67f-1479-7195-9dbf-65be8c8811dd.jpg',
  '019ebabb-6d8d-758f-b091-219b7172a973.jpg',
  '019eede9-2f87-71d4-af38-1428bf359d37.jpg',
  '019f23f7-ef51-766e-aaee-e67ee1238a6c.jpg',
  '019f367a-ce0e-7d14-a510-c2630782b299.jpg',
  '019f3687-9bc3-7d3e-8a22-bd0d7307e5b6.jpg',
  '019f5fc3-d795-76d4-9754-eab1d4ae69c0.jpg',
  '14893236-00e4-4842-b4b5-db1da528a8b7.jpg',
  '76518535-2f04-4087-9804-4ca714e63f2b.jpg',
  '89e91cdc-42d7-4fa9-946b-f43c2013e82c.jpg',
  'c5521f5b-29b5-4efa-9ff3-e92c51d2cf8e.jpg',
]





function Hero(){
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0)
    return(
        <section className="hero">
            <div className="hero-slider">
                <div className="hero-track" style={{transform: `translateX(-${currentSlideIndex * 496}px)`}}>
                    {heroImages.map((image,index) =>(
                    <Link to="/404" className="hero-slide" key={image}>
                        <img src={`/images/${image}`} alt={`スライド画像${index + 1}`}/>
                    </Link>
                    ))}
                </div>
            </div>

            <div className="hero-dots">
                {heroImages.map((image, index) => (
                    <span
                        key={image}
                        className={
                            index === currentSlideIndex
                            ? 'hero-dot active'
                            : 'hero-dot'
                        }
                    onClick={() => setCurrentSlideIndex(index)}
                    />
                ))}
            </div>
        </section>
    )
}

export default Hero


// heroImages.map(...) 配列の中身を1個ずつ取り出して、同じ処理をする
// .map((image, index) 
    // image:現在の画像ファイル名
    // index:現在何番目か(0なら１つ目、１なら２つ目)
// key={image}  要素の指定（React特有）
// ${image}　変数の中身が入る（例:public/images/019ea67f.jpg）

///// コードの意味 /////
// heroImagesの画像を1枚ずつ取り出す
//         ↓
// 画像ごとに<Link>を作る
//         ↓
// その中に<img>を作る
//         ↓
// 画像ファイル名をsrcへ入れる
//         ↓
// 11枚全部終わるまで繰り返す
// ****11回同じHTMLを書く >> 配列 + map()へ変更****