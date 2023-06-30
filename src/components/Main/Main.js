import "./Main.css";

const Main = () => {
  return (
    <>
      <section id="weather">
        <div className="weather_tempature">65 F</div>
        <div>
          <img src="./conditions/sunnyDay.svg" alt="conditions" />
        </div>
      </section>
      <section id="card-section"></section>
    </>
  );
};

export default Main;
