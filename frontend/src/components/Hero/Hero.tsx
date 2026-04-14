import "./Hero.css"
import banner from "../../assets/images/hero-banner.jpg"

function Hero() {
  return (
    <section className="hero">
      <img src={banner} alt="Banner" className="hero-image" />

      <div className="hero-overlay">
        <div className="hero-content container">
          <span className="hero-subtitle">
            PÉ NA RUA: SNEAKERS & ESTILO
          </span>

          <h1 className="hero-title">
            O CONFORTO QUE SEUS <br /> PÉS MERECEM
          </h1>

          <p className="hero-description">
            Descubra a coleção 2026 com tecnologia de ponta e design exclusivo.
          </p>

          <button className="btn-primary">
            VER COLEÇÃO COMPLETA
          </button>
        </div>
      </div>
    </section>
  )
}

export default Hero