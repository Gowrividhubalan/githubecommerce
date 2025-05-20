import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer'
import { HeroSection } from './components/Herosection';
import { ShopGrid } from './components/Shopgrid';
import CardGrid from "./components/CardGrid";
import HeroBanner from './components/HeroBanner';

function App() {
  return (
    <div className=" flex flex-col justify-between  bg-gray-100 min-h-screen">
      <main className="p-8">
        <h1 className="text-4xl text-center">Welcome to My Website</h1>
        {/* Content goes here */}
      </main>
      
      
      <HeroSection />
      <ShopGrid />
      <CardGrid />
      <HeroBanner />
      <Footer />
      
      
    </div>
  );
}

export default App;
