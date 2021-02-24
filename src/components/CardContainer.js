import "./CardContainer.css";
import Img from "../Image/iconWiki.png";
const CardContainer = props => {
  const printActivities = props.arrayActivities ? (
    props.arrayActivities === "404" ? (
      <h2 id="error404">Sorry we did not find any city with that name 🐸</h2>
    ) : (
      props.arrayActivities.map((act, i) => (
        <li
          className="listCard"
          key={i}
          onClick={() => act.url ?  window.open(act.url) : act.wikipedia ? window.open(act.wikipedia) : window.alert("sorry")}
        >
          <div className="card">
            <div className="cardContent">
              <img
                className="actImg"
                src={act.preview ? act.preview.source : null}
                alt={act.name}
              />
              <div className="titre">
                <h3>{act.name}</h3>
                <div className="logo">
                  <img className="logoImg" src={Img} alt="Icone Wikipedia" />
                  <p>Wikipédia</p>
                </div>
              </div>
            </div>
          </div>
        </li>
      ))
    )
  ) : null;

  return <ul className="cardContainer">{printActivities}</ul>;
};

export default CardContainer;
