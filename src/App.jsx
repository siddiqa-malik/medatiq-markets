import GlowBackground from "./components/GlowBackground";
import {Navbar} from "./components/Navbar"
import { Hero as Herosection } from "./components/Herosection"

function App() {
  return (
    <div className="relative min-h-screen text-white">

      <GlowBackground />

      <main className="relative z-10">

        <Navbar />
        <Herosection/>
        

      </main>

    </div>
  );
}

export default App;