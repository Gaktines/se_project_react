import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

function App() {
  const weatherTemp = "65F";
  return (
    <div>
      <Header />
      <Main weatherTemp = {weatherTemp} />
      <Footer />
      <ModalWithForm>These are the children</ModalWithForm>
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
