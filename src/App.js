import './App.css';
import Navbar from "./components/navbar/Navbar"
import Hero from './components/Hero';
import Banner from './components/Banner';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Banner />
      <div className="text-3xl sm:text-4xl font-bold text-red-600 text-center">MENU</div>
    </div>
  )
}

export default App;
