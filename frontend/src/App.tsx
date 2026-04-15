import { BrowserRouter, Routes, Route } from "react-router-dom"

import ScrollToTop from "./components/ScrollToTop"

import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"

import Home from "./pages/Home/Home"
import ProductDetails from "./pages/ProductDetails/ProductDetails"

import LaunchesPage from "./pages/LaunchesPage/LaunchesPage"
import MenPage from "./pages/MenPage/MenPage"
import WomenPage from "./pages/WomenPage/WomenPage"
import PromotionsPage from "./pages/PromotionsPage/PromotionsPage"
import TrackOrderPage from "./pages/TrackOrderPage/TrackOrderPage"
import BrandPage from "./pages/BrandPage/BrandPage"

function App() {
  return (
    <BrowserRouter>

      <ScrollToTop />

      
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/produto/:id" element={<ProductDetails />} />

          <Route path="/lancamentos" element={<LaunchesPage />} />
          <Route path="/masculino" element={<MenPage />} />
          <Route path="/feminino" element={<WomenPage />} />
          <Route path="/promocoes" element={<PromotionsPage />} />
          <Route path="/rastrear" element={<TrackOrderPage />} />
          <Route path="/marca/:slug" element={<BrandPage />} />
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  )
}

export default App