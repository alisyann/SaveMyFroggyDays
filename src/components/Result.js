import React from "react";
import { useState, useEffect, useRef } from "react";
import CardContainer from "./CardContainer";

import "./Result.css";
const APIKEY = "5ae2e3f221c38a28845f05b60cb2319b223eb39d80cef2c05a262216";
const limit = 1;
const radius = 1000; // in meters

const Result = (props) => {
  const [arrayActivities, setArrayActivities] = useState([]);
  const [offset, setOffset] = useState(0);
  const [loading, setLoading] = useState(false);
  const [city, setCity] = useState("");
  const [end, setEnd] = useState("");
  const inter = useRef(null);
  // Bon le but du jeu c'est de trouver quelle est la condition de fin de votre setInterval une fois qu'on aura ça on va  changer la state fin   si on a ça on est ok partout car on pourra dire si end est égal égal à true  tu clear
  const clear = () => {
    console.log("end of activities", inter.current, arrayActivities);
    window.clearInterval(inter.current);
  };
  useEffect(() => {
    async function request(props, offset) {
      let arrayAct = [];
      const coordsCity = await fetch(
        `http://api.opentripmap.com/0.1/en/places/geoname?apikey=${APIKEY}&name=${props.city}`,
      ).then((res) => res.json());
      if (coordsCity.hasOwnProperty("error")) arrayAct = "404";
      else {
        const { lat, lon } = coordsCity;

        // can't forEach when using async funcions;
        //for (let i = 0; i < listActivities.length; i++)
        let i = 0;
        inter.current = setInterval(async function () {
          const listActivities = await fetch(
            `https://api.opentripmap.com/0.1/en/places/radius?apikey=${APIKEY}&radius=${radius}&limit=${limit}&offset=${offset}&lon=${lon}&lat=${lat}&rate=1&format=json`,
          ).then((res) => res.json());
          if (!listActivities[i]) {
            // console.log("chicken", props, listActivities[i].xid, inter);
            console.log("yolo");
            clearInterval(inter.current);
            return;
          }
          console.log("nique ta mere ");
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
              )) &&
            (props.checkedAdult || !activitiesData.kinds.includes("adult")) &&
            (props.checkedRelig ||
              !activitiesData.kinds.includes("religion")) &&
            (props.checkedRest || !activitiesData.kinds.includes("foods")) &&
            (props.checkedSport || !activitiesData.kinds.includes("sport")) &&
            (props.checkedShop || !activitiesData.kinds.includes("shops"))
          ) {
            arrayAct.push(activitiesData);
          }

          i++;
          setOffset(offset + 1);
          // if(props.city === city)
          setArrayActivities([...arrayActivities, ...arrayAct]);
          // console.log(arrayActivities);
          setLoading(false);
          setLoading(true);
          setCity(props.city);
        }, 2000);
        // console.log("ici c");
        // if(listActivities[i])
        //   clear();
      }
    }
    if (props.city === "404") return;
    const fetchData = async () => {
      await request(props, offset);
    };
    fetchData();
  }, [arrayActivities, props]);
  // useEffect(() => {
  //   clearInterval(inter);
  // }, [props]);
  useEffect(() => {}, [loading]);
  // useEffect(() => {
  //   console.log("city :", city);
  //   setArrayActivities([]);
  // }, [city]);
  // useEffect(() => {
  //   setPrevCity(props.city);
  //   console.log("poulet 001:", props.city);
  // }, []);

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
            </>
          )
        ) : null}
      </div>
    </div>
  );
};
export default Result;
