import "./App.css";
import Hero from "./components/Hero/Hero";
import Price from "./components/Price/Price";
import Programs from "./components/Programs/Programs";
import Reasons from "./components/Reasons/Reasons";
import Testimonials from "./components/Testimonials/Testimonials";
function App() {
  return (
    <div className="App">
      <Hero />
      <Programs />
      <Reasons />
      <Price />
      <Testimonials />
    </div>
  );
}

export default App;
