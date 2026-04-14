import Hero from "../../components/Hero/Hero"
import Products from "../../components/Products/Products"
import Categories from "../../components/Categories/Categories"
import StyleSelector from "../../components/StyleSelector/StyleSelector"
import Benefits from "../../components/Benefits/Benefits"
import Testimonials from "../../components/Testimonials/Testimonials"





function Home() {
  return (
    <>
      <Hero />
      <Products />
      <Categories />
      <StyleSelector />
      <Benefits />
      <Testimonials />
    </>
  )
}

export default Home