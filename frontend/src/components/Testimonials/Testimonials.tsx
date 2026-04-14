import "./Testimonials.css"
import { FiStar } from "react-icons/fi"

function Testimonials() {
  const testimonials = [
    {
      name: "João P.",
      text: "Entrega rápida e tênis impecável. Recomendo demais."
    },
    {
      name: "Mariana S.",
      text: "Qualidade absurda e atendimento excelente."
    },
    {
      name: "Lucas R.",
      text: "Site bonito, compra fácil e produto top."
    },
    {
      name: "Fernanda M.",
      text: "Chegou antes do prazo. Voltarei a comprar."
    },
    {
      name: "Carlos T.",
      text: "Tênis lindo e muito confortável."
    }
  ]

  const duplicated = [...testimonials, ...testimonials]

  return (
    <section className="testimonials">
      <div className="container">

        <div className="section-header center">
          <h2>Clientes satisfeitos</h2>
        </div>

        <div className="testimonials-track">
          {duplicated.map((item, index) => (
            <div className="testimonial-card" key={index}>

              <div className="stars">
                <FiStar />
                <FiStar />
                <FiStar />
                <FiStar />
                <FiStar />
              </div>

              <p>"{item.text}"</p>

              <span>{item.name}</span>

            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Testimonials