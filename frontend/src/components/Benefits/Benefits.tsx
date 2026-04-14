import "./Benefits.css"

import {
  LuTruck,
  LuShieldCheck,
  LuRefreshCw,
  LuTag
} from "react-icons/lu"

function Benefits() {
  const items = [
    {
      icon: <LuTruck />,
      title: "Entrega Garantida"
    },
    {
      icon: <LuShieldCheck />,
      title: "Pagamento Seguro"
    },
    {
      icon: <LuRefreshCw />,
      title: "Troca Grátis 7 Dias"
    },
    {
      icon: <LuTag />,
      title: "Ofertas Exclusivas"
    }
  ]

  return (
    <section className="benefits">
      <div className="container">

        <div className="section-header center">
          <h2>Por que comprar na Pé na Rua?</h2>
        </div>

        <div className="benefits-grid">
          {items.map((item, index) => (
            <div className="benefit-item" key={index}>
              <div className="benefit-icon">
                {item.icon}
              </div>

              <p>{item.title}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Benefits