import GlowBackground from "./components/GlowBackground";
import {Navbar} from "./components/Navbar"
import { Hero as Herosection } from "./components/Herosection"
import TradingRankings from "./components/TradingRankings"
import DownloadSection from "./components/DownloadSection";
import StatisticsSection from "./components/StatisticsSection";
import  FeaturesSection from "./components/FeatureSection"
import AIAssistantSection from "./components/AiAssistant"
import LiveMarketOverview from "./components/LiveMarketOverview"
import WatchHowItWorks from "./components/WatchHowItWorks"
import TestimonialSlider from "./components/TestimonialSlider"
import TradingSection from "./components/TradingSection"
import FAQSection from "./components/FAQSection"
import AuthSection from "./components/AuthSection"
import FooterSection from "./components/FooterSection"
function App() {
  return (
    <div className="relative min-h-screen text-white">

      <GlowBackground />

      <main className="relative z-10">

        <Navbar />
        <Herosection/>
        <TradingRankings/>
        <DownloadSection/>
        <StatisticsSection/>
         <FeaturesSection/>
         <AIAssistantSection/>
         <LiveMarketOverview/>
         <WatchHowItWorks/>
         <TestimonialSlider/>
         <TradingSection/>
         <FAQSection/>
         <AuthSection/>
         <FooterSection/>
      </main>

    </div>
  );
}

export default App;