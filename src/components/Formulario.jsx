import React,{ useState} from 'react'
import { Error } from './Error';


export const Formulario = ({busqueda, guardarBusqueda, guardarConsultar}) => {
  

  const{ciudad, pais} = busqueda;

  const[error, guardarError]=useState(false)

  const handleChange = e =>{
    guardarBusqueda({
      ...busqueda,
      [e.target.name] : e.target.value
    })
  }

  const handleSubmit = (e)=>{
    e.preventDefault();
    //validar form
    if(ciudad.trim()==='' || pais.trim()===''){
      guardarError(true);
      return;
    } else{
      guardarError(false)
    }
    guardarConsultar(true)
  }


  return (
    <form
      className='form'
      onSubmit={handleSubmit}
    >
    {error? <Error mensaje='Todos los campos son Obligatorios' /> : null}

      <div className='container-input'>
        <label className='container-input__label-lbl' htmlFor='ciudad'>Ciudad</label>
        <input
          className='container-input__input-txt'
          type='text'
          name='ciudad'
          id='ciudad'
          value={ciudad}
          onChange={handleChange}
        />
      </div>

      <div className='container-input'>
        <label className='container-input__label-lbl' htmlFor="pais">Pais</label>
        <div className='drowbox'>
        <select
          className='drowbox__select'
          name='pais'
          id='pais'
          value={pais}
          onChange={handleChange}
        >
          <option value="">----</option>
          <option value="BO">Bolivia</option>
          <option value="US">Estados Unidos</option>
          <option value="MX">México</option>
          <option value="AR">Argentina</option>
          <option value="CO">Colombia</option>
          <option value="CR">Costa Rica</option>
          <option value="ES">España</option>
          <option value="PE">Perú</option>
        </select>
        </div>
      </div>

      <div className='btn'>
        <input
          className = 'btn-input'
          type='submit'
          value='Buscar'
        />
      </div>
    </form>
  )
}
