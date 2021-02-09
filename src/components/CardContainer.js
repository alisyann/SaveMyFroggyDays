import "./CardContainer.css";
handleClick = (card) => {}
const CardContainer = (props) => {
  const printActivities = props.arrayActivities ? (
    props.arrayActivities === "404" ? (
      <h2 id="error404">Sorry we did not find any city with that name 🐸</h2>
    ) : (
      props.arrayActivities.map((act, i) => (
        <li className="listCard" key={i}>
          <div className="card">
            <div className="cardContent" onClick={this.handleClick}>
              <img
                className="actImg"
                src={act.preview ? act.preview.source : null}
                alt={act.name}
              />
              <div className="titre">
                <h3>{act.name}</h3>
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
