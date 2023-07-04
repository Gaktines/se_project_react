
import "./App.css";
import Header from '../Header/Header';
import Weather from '../Weather/Weather';
import Footer from "../Footer/Footer";

function App() {
  return (
    <div>
      <Header />
      <main className="main">
        <Weather/>
      <section id="card-section"></section>
      </main>
      <Footer />
    </div>
  );
}

/* 
Header
Main
Footer
ModalWithForm
ItemModal
*/

export default App;
