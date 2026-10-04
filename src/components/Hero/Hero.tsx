import { useEffect, useState } from 'react'
import './Hero.css'
import { Link } from 'react-router'

// スライダーで使用する画像一覧
const heroImages=[
  'slide-friendly.jpg',
  'slide-moodmaker.jpg',
  'slide-mypace.jpg',
  'slide-active.jpg',
  'slide-works-search.jpg',
  'slide-works-ec.jpg',
]

// 無限ループ用
const loopImages = [...heroImages, ...heroImages]

// スライド幅・間隔の定数
const SLIDE_WIDTH = 480
const SLIDE_GAP = 16
const SLIDE_MOVE = SLIDE_WIDTH + SLIDE_GAP
const MOBILE_BREAKPOINT = 768

function Hero(){
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0)
  const [isTransitionEnabled, setIsTransitionEnabled] = useState(true)
  const [resetKey, setResetKey] = useState(0)
  const [slideMove, setSlideMove] = useState(SLIDE_MOVE)

    useEffect(() => {
        const autoSlideTimer = setInterval(() => {
        // 次のスライドではアニメーションを有効にする
        setIsTransitionEnabled(true)
        // スライド番号を1つ進める
        setCurrentSlideIndex((prevIndex) => prevIndex + 1)
        }, 3000)

        return () => {
        clearInterval(autoSlideTimer)
        }
    }, [resetKey])

    useEffect(() => {
    const updateSlideMove = () => {
        if (window.innerWidth <= MOBILE_BREAKPOINT) {
            setSlideMove(window.innerWidth + SLIDE_GAP)
        } else {
            setSlideMove(SLIDE_MOVE)
        }
    }

    updateSlideMove()

    window.addEventListener('resize', updateSlideMove)

    return () => {
        window.removeEventListener('resize', updateSlideMove)
    }
    }, [])


    return(
        <section className="hero">
            <div className="hero-slider">
                <div 
                className="hero-track"
                style={{
                    transform: `translateX(-${currentSlideIndex * slideMove}px)`,
                    transition: isTransitionEnabled
                    ? 'transform 0.5s ease'
                    : 'none',}}

                    onTransitionEnd={() => {
                    if (currentSlideIndex >= heroImages.length) {
                    // コピーした1枚目まで到達したら
                    // アニメーションを切って本物の1枚目に戻す
                    setIsTransitionEnabled(false)
                    setCurrentSlideIndex(0)
                    }
                }}
                >
                    {loopImages.map((image,index) =>(
                    <Link to="/404" className="hero-slide" key={`${image}-${index}`}>
                        <img src={`${import.meta.env.BASE_URL}images/${image}`} alt={`スライド画像${(index % heroImages.length) + 1}`}/>
                    </Link>
                    ))}
                </div>
            </div>

            <div className="hero-dots">
                {heroImages.map((image, index) => (
                    <span
                        key={image}
                        className={
                            index === currentSlideIndex % heroImages.length
                            ? 'hero-dot active'
                            : 'hero-dot'
                        }
                    onClick={() => {
                    setIsTransitionEnabled(true)
                    setCurrentSlideIndex(index)
                    setResetKey((prevKey) => prevKey + 1)
                    }}
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

///// js機能 /////
    // setInterval(() => { この中の処理を一定時間ごとに実行する