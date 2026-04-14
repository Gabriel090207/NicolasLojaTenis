import CatalogPage from "../CatalogPage/CatalogPage"
import heroLaunches from "../../assets/images/heroes/hero-launches.png"

function LaunchesPage() {
  return (
    <CatalogPage
      title="Lançamentos"
      subtitle="Os lançamentos mais desejados do momento."
      heroImage={heroLaunches}
    />
  )
}

export default LaunchesPage