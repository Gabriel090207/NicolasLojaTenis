import "./StyleSelector.css"

import { Link } from "react-router-dom"


import { useState } from "react"
import {
  FiChevronRight,
  FiChevronLeft,
  FiStar
} from "react-icons/fi"

import tenis1 from "../../assets/images/product-1.jpg"
import tenis2 from "../../assets/images/product-1.jpg"
import tenis3 from "../../assets/images/product-1.jpg"
import tenis4 from "../../assets/images/product-1.jpg"




function StyleSelector() {
  const [showMore, setShowMore] = useState(false)
  const [slides, setSlides] = useState<Record<string, number>>({})

  const products = [
    {
      image: tenis1,
      brand: "New Balance",
      name: "Tênis New Balance 9060 ",
      price: "R$ 1.299,90"
    },
    {
      image: tenis2,
      brand: "Nike",
      name: "Tênis Nike Air Max Urban",
      price: "R$ 999,90"
    },
    {
      image: tenis3,
      brand: "Puma",
      name: "Tênis Puma Runner X",
      price: "R$ 849,90"
    },
    {
      image: tenis4,
      brand: "Adidas",
      name: "Tênis Adidas Street Boost",
      price: "R$ 1.149,90"
    }
  ]

  const styles = [
    "Casual",
    "Running",
    "Streetwear",
    ...(showMore ? ["Premium", "Skate", "Outdoor"] : [])
  ]


 const nextSlide = (style: string) => {
  setSlides((prev) => ({
    ...prev,
    [style]:
      (prev[style] ?? 0) === products.length - 1
        ? 0
        : (prev[style] ?? 0) + 1
  }))
}

const prevSlide = (style: string) => {
  setSlides((prev) => ({
    ...prev,
    [style]:
      (prev[style] ?? 0) === 0
        ? products.length - 1
        : (prev[style] ?? 0) - 1
  }))
}

  return (
    <section className="style-selector">
      <div className="container">
        <div className="section-header">
          <h2>Escolha seu estilo</h2>
        </div>

        {styles.map((style, index) => (
          <div className="style-row" key={index}>
            <div className="style-top">
              <h3>{style}</h3>

              <button className="view-all">
                Ver todos <FiChevronRight />
              </button>
            </div>

            <div className="products-slider">
             <button
  className="slider-arrow left"
  onClick={() => prevSlide(style)}
>
  <FiChevronLeft />
</button>

              <div className="products-grid">
                {products.map((product, i) => (
  <div
    className={`product-card ${
      i === (slides[style] ?? 0) ? "active-slide" : "hidden-slide"
    }`}
    key={i}
  >
    <img src={product.image} alt={product.name} />

    <p className="brand">{product.brand}</p>

    <h3>{product.name}</h3>

    <p className="price">{product.price}</p>

    <div className="rating">
      <FiStar className="star-icon" />
      4.8 <span>(120 avaliações)</span>
    </div>

   <Link to={`/produto/${i + 1}`} className="btn-buy">
  Ver Detalhes
</Link>
  </div>
))}
              </div>

              <button
  className="slider-arrow right"
  onClick={() => nextSlide(style)}
>
  <FiChevronRight />
</button>
            </div>
          </div>
        ))}

        <div className="more-wrapper">
          <button
            className="more-button"
            onClick={() => setShowMore(!showMore)}
          >
            {showMore
              ? "Ver menos estilos"
              : "Ver mais estilos"}
          </button>
        </div>
      </div>
    </section>
  )
}

export default StyleSelector