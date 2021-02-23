import React, {useState, useEffect} from "react";
import Search from './Search'

const apiKey = '3ab8eebb78097ae35ae801f42442c34d'

const Weatherbis = () => {
    const [query, setQuery] = useState('')
    const [meteo, setMeteo] = useState([])
    const [dropdown, setDropdown] = useState("Tomorrow")
    const [day, setDay]= useState([])
    const [loading, setLoading] = useState(false);
    const [meteoT, setMeteoT] = useState(null);


    const search = evt => {
        if (evt.key === 'Enter')
        fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${query}&appid=${apiKey}`)
        .then(res => res.json())
        .then(result => {
            //console.log(result.list)
            setMeteo(result.list)
        })
        .then(res=>{

            console.log(meteo)
            setQuery('');
            
        })
        }
        
//    useEffect(()=>{
//        function () {setDay(meteo.list.filter(user=> user.dt_txt.includes('12:00:00')))}
//    })
              // .then(meteo => { setDay(meteo.list.filter(user=> user.dt_txt.includes('12:00:00'))) ||
        // console.log(meteo)//})
            // console.log(meteo.list[(0, 10)].dt_txt.substr(0, 10))
       
            useEffect(() => {setMeteoT(meteo
                .find(meteoInTime=> (meteoInTime.dt_txt.includes('12:00:00'))
               && dtToDate(meteoInTime.dt).includes(day))); setLoading(true);console.log('meteo load')}, [meteo]);

       
//   const resultList = meteo.list
   
//console.log(resultList.filter(user=> user.dt_txt.includes('12:00:00')));
//const filteredDay=resultList.filter(user=> user.dt_txt.includes('12:00:00'));
//console.log(filteredDay)
// const dayMeteo = () => {hey.map(user=>{
    //     return(user.dt_txt.substr(0, 10))})}
        // console.log(dayMeteo)
   
        

  
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
            <Search/>
            <input
            onChange={e => setQuery(e.target.value)}
            value={query}
            onKeyPress={search}>
            </input>
            <div>
         <select value={dropdown} onChange={(e)=>{setDropdown(console.log(e.target.value)); setDay(e.target.value)}}>
        <option value={localString(tomorrow)} >Tomorrow</option>
        <option value={localString(dayTwo)} >dans 2 jours</option>
        <option value={localString(dayThree)}>dans 3 jours</option>
        <option value={localString(dayFour)}>dans 4 jours</option>
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
            {/* .map(user=><li>{user.dt_txt.substr(8, 2)}</li>)}</div> */}
            
         {/* <img
        src={`http://openweathermap.org/img/wn/${meteoT.weather[0].icon}.png`}
        className={meteoT.weather[0].icon}
        id="iconMeteo"
        alt={meteoT.weather[0].description}/>
        {meteo.city.name} */}
        </div>
        
       
       
        ) 
       : ('')
        }

     </div>
        
    )
}
// const api = {
//     key: '3ab8eebb78097ae35ae801f42442c34d',
//   }

// const Weatherbis = () => {
//     const [query, setQuery] = useState('')
//     const [meteo, setMeteo] = useState({})

//     const search = evt => {
//         if (evt.key === 'Enter')
//         fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${query}&appid=${api.key}`)
//         .then(res => res.json())
//         .then(result => {
//             setMeteo(result)
//             setQuery('');
//             console.log(result)
//         })
//     }

//     return (
//      <div>
//         <div>
//             <input
//             onChange={e => setQuery(e.target.value)}
//             value={query}
//             onKeyPress={search}>
//             </input>
//         </div>
//         {(typeof meteo.city != "undefined") ? (
//         <div>
//          <img
//         src={`http://openweathermap.org/img/wn/${meteo.list[0].weather[0].icon}.png`}
//         className={meteo.list[0].weather[0].icon}
//         id="iconMeteo"
//         alt={meteo.list[0].weather[0].description}/>
//         {meteo.city.name}
//         </div>
       
//         ) : ('')}
        
//      </div>
        
//     }

export default Weatherbis;
