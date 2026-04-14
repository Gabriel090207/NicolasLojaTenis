import "./Products.css"
import productImage from "../../assets/images/product-1.jpg"
import { Link } from "react-router-dom"

function Products() {
  return (
    <section className="products container">
      <h2 className="products-title">NOVIDADES NA PÉ NA RUA</h2>

      <div className="products-grid">
        {[1, 2, 3, 4].map((item) => (
          <div className="product-card" key={item}>

            {/* Badge */}
            <span className="badge">MAIS VENDIDO</span>

            {/* Imagem */}
            <img src={productImage} alt="Tênis" />

            {/* Marca */}
            <p className="brand">New Balance</p>

            {/* Nome */}
            <h3>Tênis New Balance 9060 Marrom</h3>

            {/* Preço */}
            <p className="price">R$ 1.299,90</p>

            {/* Avaliação */}
            <div className="rating">
              ⭐ 4.8 <span>(120 avaliações)</span>
            </div>

            {/* Botão */}
           <Link to={`/produto/${item}`} className="btn-buy">
  Ver Detalhes
</Link>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Products