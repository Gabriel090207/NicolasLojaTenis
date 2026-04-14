import "./SectionDivider.css"
import logo from "../../assets/images/logo.png"

function SectionDivider() {
  return (
    <div className="section-divider">
      <span className="divider-line"></span>

      <div className="divider-logo">
        <img src={logo} alt="Pé na Rua" />
      </div>

      <span className="divider-line"></span>
    </div>
  )
}

export default SectionDivider