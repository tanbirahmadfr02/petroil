import About from "./components/About/About"
import Banner from "./components/Banner/Banner"
import Blog from "./components/Blog/Blog"
import Contact from "./components/Contact/Contact"
import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
import Location from "./components/Locaiton/Location"
import LogoSlider from "./components/LogoSlider/LogoSlider"
import Navbar from "./components/Navbar/Navbar"
import Service from "./components/Service/Service"
import Supplier from "./components/Supplier/Supplier"

function App() {

  return (
    <>
      <Header></Header>
      <Navbar></Navbar>
      <Banner></Banner>
      <Supplier></Supplier>
      <Service></Service>
      <About></About>
      <LogoSlider></LogoSlider>
      <Blog></Blog>
      <Location></Location>
      <Contact></Contact>
      <Footer></Footer>
    </>
  )
}

export default App
