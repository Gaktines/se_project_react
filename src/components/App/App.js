import "./App.css";
import Header from "../Header/Header";
import Weather from "../Weather/Weather";
import Footer from "../Footer/Footer";
import { defaultClothingItems } from "../../utils/constants";
import ItemCard from "../ItemCard/ItemCard";

function App() {
  const weatherTemp = "65F";
  return (
    <div>
      <Header />
      <main className="main">
        <Weather day={true} type="stormy" />
        
        <section className="card__section" weatherTemp = {weatherTemp}
        >
        Today is {weatherTemp}.You may want to wear:
          <div className='card__items'>{defaultClothingItems.map((x) => {
            return(
            <ItemCard x={x} />
            );
          })}
          </div>
        </section>
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
