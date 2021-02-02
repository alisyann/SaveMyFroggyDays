import React from "react";
import { useState, useEffect } from "react";
import CardContainer from "./CardContainer";

import "./Result.css";
const APIKEY = "5ae2e3f221c38a28845f05b60cb2319b223eb39d80cef2c05a262216";
const limit = 4;
const radius = 1000; // in meters
async function request(cityName, offset = 0) {
  let arrayActivities = [];
  const coordsCity = await fetch(
    `http://api.opentripmap.com/0.1/en/places/geoname?apikey=${APIKEY}&name=${cityName}`,
  ).then((res) => res.json());
  if (coordsCity.hasOwnProperty("error")) arrayActivities = "404";
  else {
    const { lat, lon } = coordsCity;

    const listActivities = await fetch(
      `https://api.opentripmap.com/0.1/en/places/radius?apikey=${APIKEY}&radius=${radius}&limit=${limit}&offset=${offset}&lon=${lon}&lat=${lat}&rate=3&format=json`,
    ).then((res) => res.json());

    // can't forEach when using async funcions;
    for (let i = 0; i < listActivities.length; i++) {
      const activitiesData = await fetch(
        `https://api.opentripmap.com/0.1/en/places/xid/${listActivities[i].xid}?apikey=${APIKEY}`,
      ).then((res) => res.json());
      arrayActivities.push(activitiesData);
    }
  }
  return arrayActivities;
}
const Result = (props) => {
  const [arrayActivities, setArrayActivities] = useState(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      await setArrayActivities(await request(props.city, offset));
    };
    fetchData();
  }, [props.city, offset]);
  const handlePage = (next) => {
    next ? setOffset(offset + 10) : setOffset(offset - 10);
    window.scrollTo(0, 0);
  };

  return (
    <div className="searchAndResult">
      <div className="result">
        {props.city ? (
          <>
            <CardContainer arrayActivities={arrayActivities} />
            <div id="divButtonsChangePage">
              {offset > limit ? (
                <button
                  className="buttonChangePage"
                  onClick={() => handlePage(false)}
                >
                  Last
                </button>
              ) : null}
              <button
                className="buttonChangePage"
                onClick={() => handlePage(true)}
              >
                Next
              </button>
            </div>
          </>
        ) : null}
      </div>
    </div>
  );
};
export default Result;
