import "./Footer.css"

import "./Footer.css"

import pixImg from "../../assets/images/payments/pix.png"
import visaImg from "../../assets/images/payments/visa.png"
import masterImg from "../../assets/images/payments/mastercard.png"
import eloImg from "../../assets/images/payments/elo.png"

import {
  FiInstagram,
  FiFacebook,
  FiMail,
  FiPhone,
  FiMapPin,
  FiShield,
  FiHelpCircle,
  FiCreditCard
} from "react-icons/fi"

function Footer() {
  return (
    <footer className="footer">
      <div className="container">

        {/* TOPO */}
        <div className="footer-top">

          <div className="footer-column brand-column">
            <h2>Pé na Rua</h2>
            <p>
              Sneakers, streetwear e estilo urbano
              para quem vive autenticidade.
            </p>
          </div>

          <div className="footer-column">
            <h3>Loja</h3>
            <ul>
              <li>Lançamentos</li>
              <li>Masculino</li>
              <li>Feminino</li>
              <li>Promoções</li>
              <li>Marcas</li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>Institucional</h3>
            <ul>
              <li>Sobre nós</li>
              <li>Trocas e devoluções</li>
              <li>Privacidade</li>
              <li>Termos de uso</li>
              <li>Contato</li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>Atendimento</h3>

            <ul className="contact-list">
              <li><FiPhone /> (34) 99999-9999</li>
              <li><FiMail /> contato@penarua.com</li>
              <li><FiMapPin /> Uberlândia - MG</li>
            </ul>

            <div className="socials">
              <a href="#"><FiInstagram /></a>
              <a href="#"><FiFacebook /></a>
            </div>
          </div>

        </div>

        {/* MEIO */}
        <div className="footer-middle">

          <div className="footer-box">
            <FiHelpCircle className="footer-box-icon" />
            <h4>Ajuda</h4>
            <ul>
              <li>Rastrear pedido</li>
              <li>Trocas</li>
              <li>FAQ</li>
              <li>Fale conosco</li>
            </ul>
          </div>

          <div className="footer-box">
            <FiCreditCard className="footer-box-icon" />
            <h4>Pagamentos</h4>

            <div className="payments">
  <img src={pixImg} alt="Pix" />
  <img src={visaImg} alt="Visa" />
  <img src={masterImg} alt="Mastercard" />
  <img src={eloImg} alt="Elo" />
</div>
          </div>

          <div className="footer-box">
            <FiShield className="footer-box-icon" />
            <h4>Compra Segura</h4>
            <p>
              Ambiente protegido com criptografia
              e pagamento seguro.
            </p>
          </div>

        </div>

        {/* FINAL */}
        <div className="footer-bottom">
          <p>© 2026 Pé na Rua. Todos os direitos reservados.</p>
        </div>

      </div>
    </footer>
  )
}

export default Footer