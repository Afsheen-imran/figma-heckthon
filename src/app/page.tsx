



import Navbar from './components/Navbar'; 
import Footer from './components/Footer'; 
import Hero from './components/Hero';
import FoodItems from './components/FoodItems';

export default function Home() {
  return (
    <main className="min-h-screen" aria-label="Main Content">
      <Navbar />
      <Hero />
      <FoodItems/>
      <Footer />
      
    </main>
  );
}
