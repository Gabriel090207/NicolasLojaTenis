import CatalogPage from "../CatalogPage/CatalogPage"
import heroPromotions from "../../assets/images/heroes/hero-promotions.png"

function PromotionsPage() {
  return (
    <CatalogPage
      title="Promoções"
      subtitle="Ofertas exclusivas por tempo limitado."
      heroImage={heroPromotions}
    />
  )
}

export default PromotionsPage