import "./Main.css";
import { defaultClothingItems } from "../../utils/constants";
import Weather from "../Weather/Weather";
import ItemCard from "../ItemCard/ItemCard";



function Main({weatherTemp})  {
    return (
    <main className="main">
<Weather day={true} type="stormy" weatherTemp = {weatherTemp}/>

<section className="card__section" >
Today is {weatherTemp}.You may want to wear:
  <div className='card__items'>{defaultClothingItems.map((x) => 
    
    <ItemCard x={x} key={x?.id || x?._id} />
    
  )}
  </div>
</section>
</main>
);
}

export default Main;