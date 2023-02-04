
import './App.css';
import Filter from './components/filter/filter';
import Footer from './components/footer/footer';
import Navbar from './components/navbar/navbar';

function App() {
  return (
    <div className="app">
      {/* Navbar */}
      <Navbar />
      {/* Content */}
      <Filter />
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
