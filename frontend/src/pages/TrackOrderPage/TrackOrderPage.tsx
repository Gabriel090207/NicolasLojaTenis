import "./TrackOrderPage.css"
import { useState } from "react"
import {
  FiTruck,
  FiPackage,
  FiCheckCircle,
  FiMapPin
} from "react-icons/fi"

function TrackOrderPage() {
  const [orderCode, setOrderCode] = useState("")
  const [document, setDocument] = useState("")
  const [searched, setSearched] = useState(false)

  const handleTrack = () => {
    if (orderCode.trim() && document.trim()) {
      setSearched(true)
    }
  }

  return (
    <section className="track-page">
      <div className="container">
        {/* TOPO */}
        <div className="track-top">
          <div className="track-icon-circle">
            <FiTruck />
          </div>

          <h1>Rastrear Pedido</h1>

          <p>
            Consulte o andamento da sua entrega de forma rápida e segura.
          </p>
        </div>

        {/* FORM */}
        <div className="track-form-card">
          <h2>Consultar pedido</h2>

          <div className="track-form">
            <div className="track-field">
              <label htmlFor="orderCode">Código do pedido</label>

              <input
                id="orderCode"
                type="text"
                placeholder="Ex: PNR-2026-4589"
                value={orderCode}
                onChange={(e) => setOrderCode(e.target.value)}
              />
            </div>

            <div className="track-field">
              <label htmlFor="document">E-mail ou CPF</label>

              <input
                id="document"
                type="text"
                placeholder="Digite seu e-mail ou CPF"
                value={document}
                onChange={(e) => setDocument(e.target.value)}
              />
            </div>

            <button
              className="track-btn"
              type="button"
              onClick={handleTrack}
            >
              Rastrear pedido
            </button>
          </div>
        </div>

        {/* RESULTADO */}
        {searched && (
          <div className="track-result-card">
            <div className="track-result-header">
              <div>
                <span className="small-label">Pedido</span>
                <h3>{orderCode}</h3>
              </div>

              <span className="status-badge">
                Em transporte
              </span>
            </div>

            <div className="track-summary">
              <div className="summary-item">
                <FiPackage />
                <div>
                  <strong>Separado</strong>
                  <span>Seu produto já foi embalado.</span>
                </div>
              </div>

              <div className="summary-item">
                <FiTruck />
                <div>
                  <strong>Em rota</strong>
                  <span>Saiu para entrega hoje.</span>
                </div>
              </div>

              <div className="summary-item">
                <FiMapPin />
                <div>
                  <strong>Previsão</strong>
                  <span>Receba em até 3 dias úteis.</span>
                </div>
              </div>
            </div>

            <div className="timeline">
              <div className="timeline-item done">
                <div className="dot">
                  <FiCheckCircle />
                </div>

                <div className="timeline-content">
                  <h4>Pedido confirmado</h4>
                  <p>Pagamento aprovado com sucesso.</p>
                </div>
              </div>

              <div className="timeline-item done">
                <div className="dot">
                  <FiCheckCircle />
                </div>

                <div className="timeline-content">
                  <h4>Preparando envio</h4>
                  <p>Seu pedido foi separado no estoque.</p>
                </div>
              </div>

              <div className="timeline-item active">
                <div className="dot">
                  <FiTruck />
                </div>

                <div className="timeline-content">
                  <h4>Em transporte</h4>
                  <p>Seu pedido está a caminho.</p>
                </div>
              </div>

              <div className="timeline-item">
                <div className="dot">
                  <FiMapPin />
                </div>

                <div className="timeline-content">
                  <h4>Entregue</h4>
                  <p>Aguardando conclusão da entrega.</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default TrackOrderPage