import React from 'react'
import {WiHumidity} from 'react-icons/wi'
import {BsThermometerSun, BsThermometerSnow} from 'react-icons/bs'
import imgIcon from '../../imagen/imgIcon.png';


export const Clima = ({resultado}) => {

  const{name, main} = resultado;
  

  if(!name) return null;

  const kelvin = 273.15;
  const convertirClima = (temp) =>{
    return parseFloat(temp - kelvin, 10).toFixed();
  }

  
  const tiempo = convertirClima(main.temp);
  const tempMax = convertirClima(main.temp_max);
  const temMin = convertirClima(main.temp_min);
  /* const tempHum = convertirClima(main.humidity); */


  return (
    <>
      <h2 className='clima__city'> {name}</h2>
      <img src={imgIcon} alt="big icon" className='clima__img' />
      <div className='clima__temp'>
        <p className='temp'>{tiempo}<span>&#176;</span>
        </p>
        <span className='centigrado'>CENTIGRADOS</span>
      </div>

      <div className='clima__pronostico'>
        <div className='pronostico'>
          <p className='pronostico__title'>Maxima</p>
          <div className='icon-temp'>
            <BsThermometerSun className='icon-temp__icon icon-temp__icon--red' />
            <span className='icon-temp__num'>{tempMax}</span>
            <span className='icon-temp__num'>&#176;</span>
          </div>
        </div>
        <div className='pronostico'>
          <p className='pronostico__title'>Minima</p>
          <div className='icon-temp'>
            <BsThermometerSnow className='icon-temp__icon icon-temp__icon--blue ' />
            <span className='icon-temp__num'>{temMin}</span>
            <span className='icon-temp__num'>&#176;</span>
          </div>
        </div>
        <div className='pronostico'>
          <p className='pronostico__title'>Humeda</p>
          <div className='icon-temp'>
            <WiHumidity className='icon-temp__icon icon-temp__icon--grey ' />
            <span className='icon-temp__num'>{main.humidity}</span>
            <span className='icon-temp__num porciento'>%</span>
          </div>
        </div>

      </div>
  </>
  )
}
