import "./CatalogPage.css"
import { Link } from "react-router-dom"
import { FiChevronDown, FiStar } from "react-icons/fi"

import productImage from "../../assets/images/product-1.jpg"

type CatalogPageProps = {
  title: string
  subtitle?: string
  heroImage: string
}

function CatalogPage({
  title,
  subtitle = "Explore nossa seleção exclusiva de sneakers.",
  heroImage
}: CatalogPageProps) {
  const sections = [
    {
      title: "Destaques",
      products: Array.from({ length: 4 }, (_, i) => ({
        id: i + 1,
        image: productImage,
        brand: ["Nike", "Adidas", "New Balance", "Puma"][i % 4],
        name: `Tênis Premium ${i + 1}`,
        price: `R$ ${(899 + i * 50).toLocaleString("pt-BR")},90`
      }))
    },
    {
      title: "Mais vendidos",
      products: Array.from({ length: 4 }, (_, i) => ({
        id: i + 10,
        image: productImage,
        brand: ["Nike", "Adidas", "New Balance", "Puma"][i % 4],
        name: `Sneaker Elite ${i + 1}`,
        price: `R$ ${(1099 + i * 70).toLocaleString("pt-BR")},90`
      }))
    },
    {
      title: "Novidades",
      products: Array.from({ length: 4 }, (_, i) => ({
        id: i + 20,
        image: productImage,
        brand: ["Nike", "Adidas", "New Balance", "Puma"][i % 4],
        name: `Street Drop ${i + 1}`,
        price: `R$ ${(1299 + i * 80).toLocaleString("pt-BR")},90`
      }))
    }
  ]

  const totalProducts = sections.reduce(
    (acc, section) => acc + section.products.length,
    0
  )

  return (
    <section className="catalog-page">
      <div
        className="catalog-hero"
        style={{
          backgroundImage: `linear-gradient(to top, rgba(0,0,0,.72), rgba(0,0,0,.28)), url(${heroImage})`
        }}
      >
        <div className="container hero-content">
          <div className="hero-text">
            <p className="catalog-breadcrumb">Home / {title}</p>

            <h1>{title}</h1>

            <span>{subtitle}</span>
          </div>
        </div>
      </div>

      <div className="catalog-content container-wide">
        <div className="catalog-topbar">
          <p>{totalProducts} produtos encontrados</p>

          <div className="catalog-filters">
            <button>
              Mais vendidos <FiChevronDown />
            </button>

            <button>
              Filtrar <FiChevronDown />
            </button>
          </div>
        </div>

        {sections.map((section, index) => (
          <div className="catalog-section" key={index}>
            <div className="catalog-section-header">
              <h2>{section.title}</h2>
            </div>

            <div className="catalog-grid">
              {section.products.map((product) => (
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
        ))}
      </div>
    </section>
  )
}

export default CatalogPage