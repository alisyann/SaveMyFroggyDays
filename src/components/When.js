import React from 'react';
import './When.css';

 const When = () =>{
    const Heure = () =>{
        return(
            <select name="pets" id="pet-select">
            <option value="Morning">Morning</option>
            <option value="Afternoon">Afternoon</option>
            <option value="Evening">Evening</option>
        </select>
        )
    }
 return(
     <div className='whenStart'>
        <p className='dayMeteo'>Tuesday 9th<span className='listDeroulante'>{<Heure />}</span></p>
        <p className='dayMeteo'>Wenesday 10th<span className='listDeroulante'>{<Heure />}</span></p>
        <p className='dayMeteo'>Thursday 11th<span className='listDeroulante'>{<Heure />}</span></p>
        <p className='dayMeteo'>Friday 12th<span className='listDeroulante'>{<Heure />}</span></p>
     </div>
 )
 }

export default When;