import CatalogPage from "../CatalogPage/CatalogPage"
import heroMen from "../../assets/images/heroes/hero-men.png"

function MenPage() {
  return (
    <CatalogPage
      title="Masculino"
      subtitle="Os melhores sneakers masculinos para seu estilo."
      heroImage={heroMen}
    />
  )
}

export default MenPage