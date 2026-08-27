
import Navbar from "../Components/Navbar"
import Hero from "../Components/Hero"
import Footer from "../Components/Footer"
import Problem from "../Components/Problem"
import Solution from "../Components/Solution"
import HowItWorks from "../Components/HowItWorks"
import ForProfessionals from "../Components/ForProfessionals"
import ForCompanies from "../Components/ForCompanies"
import TrustSafety from "../Components/TrustSafety"
import Fairness from "../Components/Fairness"
import FinalCTA from "../Components/FinalCTA"


const TheMainPage = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Problem/>
      <Solution/>
      <HowItWorks/>
      <ForProfessionals/>
      <ForCompanies/>
      <TrustSafety/>
      <Fairness/>
      <FinalCTA/>
      <Footer/>
    </div>
  )
}

export default TheMainPage