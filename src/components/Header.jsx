import React, { useState, useEffect } from 'react'
import { getApiClima } from '../helpers/getApiClima'
import { Clima } from './Clima'
import { Formulario } from './Formulario'
import { Error } from './Error'

export const Header = ({titulo}) => {

  const [busqueda, guardarBusqueda] = useState({
    ciudad: 'tarija',
    pais: 'BO'
  })
  const{ciudad, pais} = busqueda;

  const[consultar, guardarConsultar] = useState(true);

  const[resultado, guardarResultado] = useState({});

  const[error, guardarError] = useState(false);

  useEffect(() => {
    const ConsultarApi =  ()=>{
      if(consultar){
       
        getApiClima(ciudad, pais).then(guardarResultado);

        guardarConsultar(false)
      } 
    }
    //detecta si hay error 404
    if(resultado.cod === '404'){
      guardarError(true)
    }else{
      guardarError(false);
    }
    ConsultarApi();

  }, [consultar, resultado])


  let componente;
  if(error){
    componente = <Error mensaje = 'No Hay Resultados' />
  } else{
    componente = <Clima resultado={resultado} />
  }

  return (
    <>
    <nav className='nav'>
      <h1 className='nav__title'>{titulo}</h1>
      <div className=''>
        <Formulario 
          busqueda={busqueda}
          guardarBusqueda={guardarBusqueda}
          guardarConsultar={guardarConsultar}
        />
      </div>
    </nav>
    
    <div className='container-clima'>
      <div className='clima'> {componente} </div>
    </div>
    </>
    
  )
}
