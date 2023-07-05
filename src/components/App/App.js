
import "./App.css";
import Header from '../Header/Header';
import Weather from '../Weather/Weather';
import Footer from "../Footer/Footer";
import {defaultClothingItems} from "../../utils/constants";
import ItemCard from "../ItemCard/ItemCard";

function App() {
  return (
    <div>
      <Header />
      <main className="main">
        <Weather day={true} type='stormy'/>
        The tempature is 65 F.You may want to wear:  
      <section className="card__section"> {defaultClothingItems.map(x => {
        return(
        <ItemCard x={x}/>
        );
      })}
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
