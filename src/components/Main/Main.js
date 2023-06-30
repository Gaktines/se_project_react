import "./Main.css";

const Main = () => {
  return (
    <>
      <section id="weather">
        <div className="weather_tempature">65 F</div>
        <div>
          <img className="weather_conditions" src={require("../../images/conditions/sunnyDay.svg").default} alt="conditions" />
        </div>
      </section>
      <section id="card-section"></section>
    </>
  );
};

export default Main;
