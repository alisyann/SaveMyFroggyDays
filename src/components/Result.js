import React from "react";
import { useState, useEffect } from "react";
import CardContainer from "./CardContainer";

import "./Result.css";
const APIKEY = "5ae2e3f221c38a28845f05b60cb2319b223eb39d80cef2c05a262216";
const limit = 4;
const radius = 1000; // in meters

const Result = (props) => {
  const [arrayActivities, setArrayActivities] = useState(null);
  const [offset, setOffset] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function request(props, offset = 0) {
      let arrayAct = [];
      const coordsCity = await fetch(
        `http://api.opentripmap.com/0.1/en/places/geoname?apikey=${APIKEY}&name=${props.city}`,
      ).then((res) => res.json());
      if (coordsCity.hasOwnProperty("error")) arrayAct = "404";
      else {
        const { lat, lon } = coordsCity;

        const listActivities = await fetch(
          `https://api.opentripmap.com/0.1/en/places/radius?apikey=${APIKEY}&radius=${radius}&limit=${limit}&offset=${offset}&lon=${lon}&lat=${lat}&rate=1&format=json`,
        ).then((res) => res.json());

        // can't forEach when using async funcions;
        //for (let i = 0; i < listActivities.length; i++)
        let i = 0;
        let inter = setInterval(async function () {
          const activitiesData = await fetch(
            `https://api.opentripmap.com/0.1/en/places/xid/${listActivities[i].xid}?apikey=${APIKEY}`,
          ).then((res) => res.json());
          if (
            activitiesData.kinds &&
            !(
              activitiesData.kinds.includes("accomodation") ||
              activitiesData.kinds.includes("unclassified_objects") ||
              activitiesData.kinds.includes("banks") ||
              activitiesData.kinds.includes("transport") ||
              activitiesData.kinds.includes("industrial")
            ) &&
            (!props.rain ||
              !(
                activitiesData.kinds.includes("natural") ||
                activitiesData.kinds.includes("historic") ||
                activitiesData.kinds.includes("architecture") ||
                activitiesData.kinds.includes("urban_environment")
              ))
          ) {
            arrayAct.push(activitiesData);
          }
          i++;
          setArrayActivities(arrayAct);

          setLoading(false);
          setLoading(true);

          if (i >= listActivities.length) clearInterval(inter);
        }, 500);
      }
    }
    if (props.city === "404") return;
    const fetchData = async () => {
      await request(props, offset);
    };
    fetchData();
  }, [props, offset]);

  useEffect(() => {}, [loading]);

  const handlePage = (next) => {
    setLoading(false);
    next ? setOffset(offset + 10) : setOffset(offset - 10);
    window.scrollTo(0, 0);
  };

  return (
    <div className="searchAndResult">
      <div className="result">
        {props.city ? (
          props.city === "404" ? (
            <h2 id="error404">
              Sorry we did not find any city with that name 🐸
            </h2>
          ) : (
            <>
              <CardContainer arrayActivities={arrayActivities} />
              <div id="divButtonsChangePage">
                <button
                  className="buttonChangePage"
                  onClick={() => handlePage(false)}
                >
                  Last
                </button>

                <button
                  className="buttonChangePage"
                  onClick={() => handlePage(true)}
                >
                  Next
                </button>
              </div>
            </>
          )
        ) : null}
      </div>
    </div>
  );
};
export default Result;
