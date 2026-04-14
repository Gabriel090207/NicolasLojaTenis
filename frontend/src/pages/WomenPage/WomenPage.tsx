import CatalogPage from "../CatalogPage/CatalogPage"
import heroWomen from "../../assets/images/heroes/hero-women.png"

function WomenPage() {
  return (
    <CatalogPage
      title="Feminino"
      subtitle="Seleção feminina com conforto e personalidade."
      heroImage={heroWomen}
    />
  )
}

export default WomenPage