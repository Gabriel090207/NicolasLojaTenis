import "./Categories.css"
import { useEffect, useState } from "react"
import { FiArrowRight } from "react-icons/fi"

import adidasBanner from "../../assets/images/brands/adidas-banner.png"
import nikeBanner from "../../assets/images/brands/nike-banner.png"
import pumaBanner from "../../assets/images/brands/puma-banner.png"
import newBalanceBanner from "../../assets/images/brands/new-balance-banner.png"
import jordanBanner from "../../assets/images/brands/jordan-banner.png"
import mizunoBanner from "../../assets/images/brands/mizuno-banner.png"
import vansBanner from "../../assets/images/brands/vans-banner.png"

function Categories() {
  const brands = [
    { name: "Adidas", image: adidasBanner },
    { name: "Nike", image: nikeBanner },
    { name: "Puma", image: pumaBanner },
    { name: "New Balance", image: newBalanceBanner },
    { name: "Jordan", image: jordanBanner },
    { name: "Mizuno", image: mizunoBanner },
    { name: "Vans", image: vansBanner }
  ]

  const [activeIndex, setActiveIndex] = useState(0)

  const activeBrand = brands[activeIndex]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) =>
        prev === brands.length - 1 ? 0 : prev + 1
      )
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const handleBrandClick = (index: number) => {
    setActiveIndex(index)
  }

  return (
    <section className="categories">
      <div className="container">
        <div className="categories-top">
          <div className="section-header">
            <h2>Marcas em destaque</h2>
          </div>

          <div className="brands">
            {brands.map((brand, index) => (
              <button
                key={brand.name}
                className={`brand-item ${
                  activeIndex === index ? "active" : ""
                }`}
                onClick={() => handleBrandClick(index)}
              >
                {brand.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="brand-hero">
        <img
          src={activeBrand.image}
          alt={activeBrand.name}
        />

        <div className="brand-overlay">
          <div className="brand-content container">
            <h2>{activeBrand.name}</h2>

            <button className="btn-primary">
              COMPRE JÁ <FiArrowRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Categories