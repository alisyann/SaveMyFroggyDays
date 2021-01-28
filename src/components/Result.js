import React from "react";
import { useState, useEffect } from "react";
import CardContainer from "./CardContainer";

import "./Result.css";
const APIKEY = "5ae2e3f221c38a28845f05b60cb2319b223eb39d80cef2c05a262216";
const limit = 8;
const radius = 1000; // in meters

async function request(cityName) {
  let arrayActivities = [];
  const response = await fetch(
    `http://api.opentripmap.com/0.1/en/places/geoname?apikey=${APIKEY}&name=${cityName}`
  );
  const coordsCity = await response.json();
  if (coordsCity.hasOwnProperty("error")) arrayActivities = "404";
  else {
    const { lat, lon } = coordsCity;

    const response2 = await fetch(
      `https://api.opentripmap.com/0.1/en/places/radius?apikey=${APIKEY}&radius=${radius}&limit=${limit}&offset=0&lon=${lon}&lat=${lat}&rate=3&format=json`
    );
    const listActivities = await response2.json();

    // can't forEach when using async funcions;
    for (let i = 0; i < listActivities.length; i++) {
      const response3 = await fetch(
        `https://api.opentripmap.com/0.1/en/places/xid/${listActivities[i].xid}?apikey=${APIKEY}`
      );
      const activitiesData = await response3.json();
      arrayActivities.push(activitiesData);
    }
  }
  return arrayActivities;
}
const Result = props => {
  const [arrayActivities, setArrayActivities] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      await setArrayActivities(await request(props.city));
    };
    fetchData();
  }, [props.city]);
  return (
    <div className="searchAndResult">
      <div className="result">
        {props.city ? (
          <CardContainer arrayActivities={arrayActivities} />
        ) : null}
      </div>
    </div>
  );
};
export default Result;
