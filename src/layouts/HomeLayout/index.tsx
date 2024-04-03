import Footer from '../components/Footer'
import Header from '../components/Header'

const HomeLayout = () => {
  return (
    <div className="duration-200">
      <Header />
      <main className="mx-auto min-h-screen bg-bgBase pt-12 dark:bg-darkPrimary"></main>
      <Footer />
    </div>
  )
}

export default HomeLayout
