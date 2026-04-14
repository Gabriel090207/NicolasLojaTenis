import { useState } from "react"
import { Link } from "react-router-dom"

import "./Header.css"
import {
  FiSearch,
  FiUser,
  FiHeart,
  FiShoppingBag,
  FiMenu,
  FiX
} from "react-icons/fi"
import logo from "../../assets/images/logo.png"

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="header">
      {/* Topbar */}
      <div className="header-top">
        <span className="highlight">FRETE GRÁTIS</span> PARA TODO O BRASIL - PROMOÇÃO POR TEMPO LIMITADO
      </div>

      {/* Main */}
      <div className="header-main container">
        {/* Mobile Menu Button */}
        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(true)}
          aria-label="Abrir menu"
        >
          <FiMenu />
        </button>

        {/* Logo */}
        <div className="header-logo">
          <img src={logo} alt="Logo Pé na Rua" />
        </div>

        {/* Menu Desktop */}
        <nav className="header-nav">
          <Link to="/">Home</Link>
          <Link to="/lancamentos">Lançamentos</Link>
<Link to="/masculino">Masculino</Link>
<Link to="/feminino">Feminino</Link>
<Link to="/promocoes">Promoções</Link>
<Link to="/rastrear">Rastrear Pedido</Link>
        </nav>

        {/* Icons */}
        <div className="header-icons">
          <button aria-label="Pesquisar">
            <FiSearch />
          </button>

          <button aria-label="Favoritos">
            <FiHeart />
          </button>

          <button className="header-user" aria-label="Minha conta">
  <FiUser />
</button>

          <button aria-label="Sacola">
            <FiShoppingBag />
          </button>
        </div>
      </div>

      {/* Overlay */}
      <div
        className={`sidebar-overlay ${menuOpen ? "active" : ""}`}
        onClick={() => setMenuOpen(false)}
      />

      {/* Sidebar Mobile */}
      <aside className={`mobile-sidebar ${menuOpen ? "open" : ""}`}>
        <div className="mobile-sidebar-header">
  <div className="mobile-sidebar-logo">
    <img src={logo} alt="Logo Pé na Rua" />
  </div>

  <button
    className="close-sidebar"
    onClick={() => setMenuOpen(false)}
    aria-label="Fechar menu"
  >
    <FiX />
  </button>
</div>

        <div className="mobile-sidebar-content">
          <nav className="mobile-nav">
  <Link to="/" onClick={() => setMenuOpen(false)}>
    Home
  </Link>

  <Link to="/lancamentos" onClick={() => setMenuOpen(false)}>
    Lançamentos
  </Link>

  <Link to="/masculino" onClick={() => setMenuOpen(false)}>
    Masculino
  </Link>

  <Link to="/feminino" onClick={() => setMenuOpen(false)}>
    Feminino
  </Link>

  <Link to="/promocoes" onClick={() => setMenuOpen(false)}>
    Promoções
  </Link>

  <Link to="/rastrear" onClick={() => setMenuOpen(false)}>
    Rastrear Pedido
  </Link>
</nav>

          <button className="mobile-login-btn">
  <FiUser />
  <span>Entrar</span>
</button>
        </div>
      </aside>
    </header>
  )
}

export default Header