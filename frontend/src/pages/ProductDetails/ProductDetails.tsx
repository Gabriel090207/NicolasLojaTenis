import "./ProductDetails.css"
import { useState } from "react"
import { Link } from "react-router-dom"
import {
  FiHeart,
  FiTruck,
  FiShield,
  FiRefreshCw,
  FiStar
} from "react-icons/fi"

import productImage from "../../assets/images/product-1.jpg"

function ProductDetails() {
  const images = [productImage, productImage, productImage, productImage]
  const sizes = ["38", "39", "40", "41", "42"]

  const [selectedImage, setSelectedImage] = useState(images[0])
  const [selectedSize, setSelectedSize] = useState("40")

  const relatedProducts = [
    {
      id: 1,
      image: productImage,
      brand: "New Balance",
      name: "Tênis New Balance 9060 ",
      price: "R$ 1.299,90"
    },
    {
      id: 2,
      image: productImage,
      brand: "Nike",
      name: "Tênis Nike Air Max Urban",
      price: "R$ 999,90"
    },
    {
      id: 3,
      image: productImage,
      brand: "Puma",
      name: "Tênis Puma Runner X",
      price: "R$ 849,90"
    },
    {
      id: 4,
      image: productImage,
      brand: "Adidas",
      name: "Tênis Adidas Street Boost",
      price: "R$ 1.149,90"
    }
  ]

  return (
    <section className="product-details">
      <div className="container">
        <div className="breadcrumb">
          Home / Masculino / New Balance / 9060
        </div>

        <div className="details-grid">
          <div className="gallery">
            <div className="main-image">
              <img src={selectedImage} alt="Tênis New Balance 9060 Marrom" />
            </div>

            <div className="thumbs">
              {images.map((img, index) => (
                <button
                  key={index}
                  className={selectedImage === img ? "thumb active" : "thumb"}
                  onClick={() => setSelectedImage(img)}
                  type="button"
                >
                  <img src={img} alt={`Miniatura ${index + 1}`} />
                </button>
              ))}
            </div>
          </div>

          <div className="info">
            <p className="brand">New Balance</p>

            <h1>Tênis New Balance 9060</h1>

            <p className="price">R$ 1.299,90</p>

            <span className="installments">
              ou 10x de R$ 129,99 sem juros
            </span>

            <div className="sizes-wrap">
              <h4>Escolha o tamanho</h4>

              <div className="sizes">
                {sizes.map((size) => (
                  <button
                    key={size}
                    className={selectedSize === size ? "size-btn active" : "size-btn"}
                    onClick={() => setSelectedSize(size)}
                    type="button"
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div className="actions">
              <button className="buy-btn" type="button">
                Comprar agora
              </button>

              <button className="fav-btn" type="button" aria-label="Favoritar produto">
                <FiHeart />
              </button>
            </div>

            <div className="mini-benefits">
              <div>
                <FiTruck />
                <span>Entrega rápida</span>
              </div>

              <div>
                <FiShield />
                <span>Original garantido</span>
              </div>

              <div>
                <FiRefreshCw />
                <span>Troca em 7 dias</span>
              </div>
            </div>
          </div>
        </div>

        <div className="description">
          <h2>Sobre o produto</h2>

          <p>
            O New Balance 9060 Marrom combina referências clássicas da linha 99X
            com uma construção contemporânea, criando um visual marcante para
            quem busca autenticidade no dia a dia. Seu cabedal traz combinação de
            materiais que entrega presença visual, conforto e acabamento premium.
          </p>

          <p>
            A entressola robusta oferece excelente amortecimento e estabilidade,
            enquanto o design volumoso reforça a estética urbana que transformou
            o modelo em destaque entre os sneakers mais desejados do momento. É
            uma escolha ideal para compor produções casuais, streetwear e looks
            com personalidade.
          </p>

          <p>
            Seja para uso diário, para elevar o visual ou para investir em um
            tênis com forte identidade, o 9060 entrega estilo, conforto e
            versatilidade em um único produto.
          </p>
        </div>

        <div className="related-products">
          <div className="related-header">
            <h2>Você pode gostar</h2>
          </div>

          <div className="related-grid">
            {relatedProducts.map((product) => (
              <div className="product-card" key={product.id}>
                <img src={product.image} alt={product.name} />

                <p className="brand">{product.brand}</p>

                <h3>{product.name}</h3>

                <p className="price">{product.price}</p>

                <div className="rating">
                  <FiStar className="star-icon" />
                  4.8 <span>(120 avaliações)</span>
                </div>

                <Link to={`/produto/${product.id}`} className="btn-buy">
                  Ver Detalhes
                </Link>
              </div>
            ))}
          </div>
        </div>


        <div className="reviews-section">
  <div className="reviews-header">
    <h2>Avaliações dos clientes</h2>
    <p>4.8 de 5 baseado em 120 avaliações</p>
  </div>

  <div className="reviews-grid">

    <div className="review-card">
      <div className="review-stars">
        <FiStar />
        <FiStar />
        <FiStar />
        <FiStar />
        <FiStar />
      </div>

      <h4>João P.</h4>

      <span>Compra verificada</span>

      <p>
        Tênis absurdo de bonito e confortável.
        Chegou muito rápido.
      </p>
    </div>

    <div className="review-card">
      <div className="review-stars">
        <FiStar />
        <FiStar />
        <FiStar />
        <FiStar />
        <FiStar />
      </div>

      <h4>Mariana S.</h4>

      <span>Compra verificada</span>

      <p>
        Material premium e veste muito bem.
        Vale cada centavo.
      </p>
    </div>

    <div className="review-card">
      <div className="review-stars">
        <FiStar />
        <FiStar />
        <FiStar />
        <FiStar />
        <FiStar />
      </div>

      <h4>Lucas R.</h4>

      <span>Compra verificada</span>

      <p>
        Um dos tênis mais bonitos que já comprei.
      </p>
    </div>

  </div>
</div>
      </div>
    </section>
  )
}

export default ProductDetails