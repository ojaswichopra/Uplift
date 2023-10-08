import logo from './logo.svg';
import './App.css';
import About from './container/About/About.jsx';
import Footer from './container/Footer/Footer.jsx';
import Header from './container/Header/Header.jsx';
import Skills from './container/Skills/Skills.jsx';
import Testimonials from './container/Testimonials/Testimonials.jsx';
import Work from './container/Work/Work.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import Resources from './container/Resources/Resources.jsx';
function App() {
  return (
    <div className="app">
      <Navbar/>
      <Header/>
      <About/>
      <Work/>
      <Skills/>
      <Testimonials/>
      <Resources/>
      <Footer/>
      
    </div>
  );
}

export default App;
