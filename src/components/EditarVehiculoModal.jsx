import React from 'react'
import {  useState } from 'react';
import { useFormik } from "formik";
import{updateVehiculos} from '../api/vehiculos'


const EditarVehiculoModal = ({currentData, updateVehiculo, setShowModal}) => {
    const formik = useFormik({
        initialValues: currentData,
        onSubmit: async (values, {resetForm}) => {
            updateVehiculo(currentData._id, values)
            await updateVehiculos(values.tag, values.placas, values.modelo, values.marca, values.numeroEconomico, values.odometro, values.descripcion, values.isActive, currentData._id)
            resetForm()
            setShowModal(false)
            console.log(values)
          
           }
    })
  return (
    <>
        <div className='w-full'>
        <form 
            className="rounded shadow p-5 w-full "
            onSubmit={formik.handleSubmit}
            
        >
          <h1 className="text-black font-black text-4xl capitalize flex justify-center mb-10">Editar Vehiculo</h1>
                <label htmlFor="" className='flex justify-start text-gray-400'>Tag</label>
                <input
                id="tag"
                className="w-full mt-1 p-2 border-sky-600 border-b outline-none"
                 placeholder="Tag"
                 type="text"
                 name="tag"
                 onChange={formik.handleChange}
                 value={formik.values.tag}
                />
                <label htmlFor="" className='flex justify-start text-gray-400 mt-3'>Marca</label>
                <input
                  id="marca"
                  className="w-full mt-1 p-2 border-sky-600 border-b outline-none"
                  type="text"
                  placeholder="Marca"
                  name="marca"
                  onChange={formik.handleChange}
                  value={formik.values.marca}
                />
                 <label htmlFor="" className='flex justify-start text-gray-400 mt-3'>Modelo</label>
                 <input
                  id="modelo"
                  className="w-full mt-1 p-2 border-sky-600 border-b outline-none"
                  type="text"
                  placeholder="Modelo"
                  name="modelo"
                  onChange={formik.handleChange}
                  value={formik.values.modelo}
                />
                 <label htmlFor="" className='flex justify-start text-gray-400 mt-3'>Placas</label>
                <input
                  id="placas"
                  className="w-full mt-1 p-3 border-sky-600 border-b outline-none"
                  type="text"
                  placeholder="Placas"
                  name="placas"
                  onChange={formik.handleChange}
                  value={formik.values.placas}
                />
                <label htmlFor="" className='flex justify-start text-gray-400 mt-3'>Descripción</label>
                <input
                  id="descripcion"
                  className="w-full mt-1 p-2 border-sky-600 border-b outline-none"
                  type="text"
                  placeholder="Descripcion"
                  name="descripcion"
                  onChange={formik.handleChange}
                  value={formik.values.descripcion}
                />
                <label htmlFor="" className='flex justify-start text-gray-400 mt-3'>Numero Economico</label>
                <input
                  id="numeroEconomico"
                  className="w-full mt-1 p-2 border-sky-600 border-b outline-none"
                  type="text"
                  placeholder="Numero Economico"
                  name="numeroeconomico"
                  onChange={formik.handleChange}
                  value={formik.values.numeroEconomico}
                />
                <label htmlFor="" className='flex justify-start text-gray-400 mt-3'>Odometro</label>
                <input
                  id="odometro"
                  className="w-full mt-1 p-2 border-sky-600 border-b outline-none"
                  type="text"
                  placeholder="Odometro"
                  name="odomentro"
                  onChange={formik.handleChange}
                  value={formik.values.odometro}
                />
                <label htmlFor="" className='flex justify-start text-gray-400 mt-3'>Activar</label>
                <label htmlFor="isActive">
                  <input 
                    type="checkbox" 
                    id='isActive' 
                    onChange={formik.handleChange}
                    value={formik.values.isActive}
                    className=' flex cursor-pointer mt-3 justify-start h-9 w-20 rounded-full appearance-none bg-gray-500 bg-opacity-5 shadow-lg checked:bg-gray-500 transition duration-200' />
                </label>
            

            <input
                  className="w-full mb-5 mt-3 p-3 border rounded bg-sky-600 uppercase font-bold hover:cursor-pointer hover:bg-sky-400 hover:text-white transition-colors"
                  type="submit"
                  value='Editar'
                  
                />
            

        </form> 
        </div>
    </>
  )
}

export default EditarVehiculoModal