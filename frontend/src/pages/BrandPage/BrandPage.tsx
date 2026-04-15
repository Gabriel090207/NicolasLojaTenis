import "./BrandPage.css"
import { Link, useParams } from "react-router-dom"
import { FiChevronDown, FiStar } from "react-icons/fi"

import adidasBanner from "../../assets/images/brands/adidas-banner.png"
import nikeBanner from "../../assets/images/brands/nike-banner.png"
import pumaBanner from "../../assets/images/brands/puma-banner.png"
import newBalanceBanner from "../../assets/images/brands/new-balance-banner.png"
import jordanBanner from "../../assets/images/brands/jordan-banner.png"
import mizunoBanner from "../../assets/images/brands/mizuno-banner.png"
import vansBanner from "../../assets/images/brands/vans-banner.png"

import productImage from "../../assets/images/product-1.jpg"

function BrandPage() {
  const { slug } = useParams()

  const brands = {
    adidas: {
      title: "Adidas",
      heroImage: adidasBanner
    },
    nike: {
      title: "Nike",
      heroImage: nikeBanner
    },
    puma: {
      title: "Puma",
      heroImage: pumaBanner
    },
    "new-balance": {
      title: "New Balance",
      heroImage: newBalanceBanner
    },
    jordan: {
      title: "Jordan",
      heroImage: jordanBanner
    },
    mizuno: {
      title: "Mizuno",
      heroImage: mizunoBanner
    },
    vans: {
      title: "Vans",
      heroImage: vansBanner
    }
  }

  const brand = brands[slug as keyof typeof brands]

  if (!brand) {
    return (
      <section className="brand-page">
        <div className="container">
          <div className="brand-not-found">
            <h1>Marca não encontrada</h1>

            <Link to="/" className="btn-buy">
              Voltar para Home
            </Link>
          </div>
        </div>
      </section>
    )
  }

  const products = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    image: productImage,
    brand: brand.title,
    name: `${brand.title} Sneaker ${i + 1}`,
    price: `R$ ${(899 + i * 60).toLocaleString("pt-BR")},90`
  }))

  return (
    <section className="brand-page">
      <div
        className="catalog-hero"
        style={{
          backgroundImage: `linear-gradient(to top, rgba(0,0,0,.72), rgba(0,0,0,.28)), url(${brand.heroImage})`
        }}
      >
        <div className="container hero-content">
          <div className="hero-text">
            <p className="catalog-breadcrumb">
              Home / Marcas / {brand.title}
            </p>

            <h1>{brand.title}</h1>
          </div>
        </div>
      </div>

      <div className="catalog-content container-wide">
        <div className="catalog-topbar">
          <p>{products.length} produtos encontrados</p>

          <div className="catalog-filters">
            <button>
              Mais vendidos <FiChevronDown />
            </button>

            <button>
              Filtrar <FiChevronDown />
            </button>
          </div>
        </div>

        <div className="catalog-grid">
          {products.map((product) => (
            <div className="product-card" key={product.id}>
              <img src={product.image} alt={product.name} />

              <p className="brand">{product.brand}</p>

              <h3>{product.name}</h3>

              <p className="price">{product.price}</p>

              <div className="rating">
                <FiStar className="star-icon" />
                4.8 <span>(120 avaliações)</span>
              </div>

              <Link
                to={`/produto/${product.id}`}
                className="btn-buy"
              >
                Ver Detalhes
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default BrandPage