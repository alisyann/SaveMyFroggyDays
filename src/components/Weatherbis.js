import React, {useState, useEffect} from "react";
import Search from './Search'

const apiKey = '3ab8eebb78097ae35ae801f42442c34d'

const Weatherbis = (props) => {

    const [meteo, setMeteo] = useState([])
    const [dropdown, setDropdown] = useState("")
    const [day, setDay]= useState([])
    const [loading, setLoading] = useState(false);
    const [meteoT, setMeteoT] = useState(null);
    const[selected, setSelected]= useState(false)

useEffect(() => { fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}`)
.then(res => res.json())

.then(res => { setMeteo(res.list)})},[props.city])

/*if (props.city){
        const vaChercherCetteMeteo = async()=>{
       
      //  const search = (props) => {
        await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}`)
        .then(res => res.json())

        .then(result => { setMeteo(res.list)})
    }}*/
        
           useEffect(() => {setMeteoT(meteo
                .find(meteoInTime=> (meteoInTime.dt_txt.includes('12:00:00'))
               && dtToDate(meteoInTime.dt).includes(day))); setLoading(true);}, [meteo, day]);

    let today = new Date()

    let tomorrow = new Date()
    tomorrow.setDate(today.getDate() + 1)
    

    let dayTwo =  new Date()
    dayTwo.setDate(today.getDate() + 2)

    let dayThree =  new Date()
    dayThree.setDate(today.getDate() + 3)

    let dayFour =  new Date()
    dayFour.setDate(today.getDate() + 4)

    const localString = (date) =>{
    //    setDay(date.toLocaleDateString())
        return (date.toLocaleDateString())
    }

const dtToDate = (dt)=>{
return new Date(dt*1000).toLocaleString()
}

    return (
        
     <div>
       
        <div>
           
         <div>
         <select value={dropdown} onChange={(e)=>{setDropdown((e.target.value)); setDay(e.target.value)}}>
        <option value={localString(tomorrow)} >Tomorrow</option>
        <option value={localString(dayTwo)} >dans 2 jours</option>
        <option value={localString(dayThree)} >dans 3 jours</option>
        <option value={localString(dayFour)} >dans 4 jours</option>
        </select>
         </div>
        </div>
        {
        (meteoT) ? 
        (
        <div>
            <img
        src={`http://openweathermap.org/img/wn/${meteoT.weather[0].icon}.png`}
        className={meteoT.weather[0].icon}
        id="iconMeteo"
        alt={meteoT.weather[0].description}/>
        </div>) 
       : console.log(dropdown) // ('')
        }
   </div>
        
    )
}
export default Weatherbis;
