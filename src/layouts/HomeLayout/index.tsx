import Footer from '../components/Footer'
import Header from '../components/Header'

const HomeLayout = () => {
  return (
    <div className="">
      <Header />
      <main className="mx-auto mt-12 min-h-screen bg-opacity-50 bg-[url('assets/bgHero.jpeg')] bg-cover bg-center"></main>
      <Footer />
    </div>
  )
}

export default HomeLayout
