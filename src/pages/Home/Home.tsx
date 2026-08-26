import Demo from '../../components/Demo/Demo'
import Header from '../../components/Header/Header'
import Nav from '../../components/Nav/Nav'
import Hero from '../../components/Hero/Hero'
import NewArrivals from '../../components/NewArrivals/NewArrivals'
import Genre from '../../components/Genre/Genre'
import NewRelease from '../../components/NewRelease/NewRelease'
import LabelSearch from '../../components/LabelSearch/LabelSearch'
import BannerList from '../../components/BannerList/BannerList'
import PromoBanner from '../../components/PromoBanner/PromoBanner'

function Home() {

  return (
    <>
      <Demo />
      <Header />
      <Nav />
      <Hero />
      <NewArrivals />
      <Genre />
      <NewRelease />
      <LabelSearch />
      <BannerList />
      <PromoBanner />
    </>
  )
}

export default Home
