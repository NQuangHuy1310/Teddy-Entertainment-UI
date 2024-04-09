import { images } from '~/assets'
import Banner from './Banner'
import Section from './Discover'
import Service from './Service'
import Contact from './Contact'

const Home = () => {
  return (
    <div className="flex flex-col gap-14 pb-16 lg:gap-20">
      <Banner />
      {/* Music section */}
      <Section
        sectionHeading="home.music.discoverMusic"
        subHeading="home.music.subMusic"
        title1="home.music.newMusic"
        title2="home.music.topTrending"
        subText1="home.music.subText1"
        subText2="home.music.subText2"
        image={images.music}
      />

      {/* Movie section */}
      <Section
        sectionHeading="home.movie.discoverMovie"
        subHeading="home.movie.subMovie"
        subText1="home.movie.subText1"
        subText2="home.movie.subText2"
        subText3="home.movie.subText3"
        image={images.movie}
        isShowContent
        reverse
      />

      {/* Study Section */}
      <Section
        sectionHeading="home.study.discoverStudy"
        subHeading="home.study.subStudy"
        title1="home.study.newStudy"
        title2="home.study.newStudy2"
        subText1="home.study.subText1"
        subText2="home.study.subText2"
        image={images.study}
        buttonText="home.study.studyNow"
      />

      {/* News Section */}
      <Section
        sectionHeading="home.news.discoverNew"
        subHeading="home.news.subNew"
        subText1="home.news.subText1"
        subText2="home.news.subText2"
        subText3="home.news.subText3"
        image={images.news}
        isShowContent
        reverse
      />

      {/* Service section */}
      <Service />

      {/* Contact section */}
      <Contact />
    </div>
  )
}

export default Home
