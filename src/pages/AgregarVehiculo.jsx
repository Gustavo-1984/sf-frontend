import NavBar from "../components/NavBar"
import { useFormik } from "formik";
import { useAuthStore } from "../store/authUseStore";
import { useQuery } from '@tanstack/react-query'
import { getProfile } from '../api/vehiculos'
import * as Yup from 'yup';
import { useSearchParams } from "react-router-dom";
import { addVehiculo } from "../api/vehiculos";
import Swal from 'sweetalert2'

// const schema = Yup.object().shape({
//     usuario: Yup.string().required(),
//     password: Yup.string().required()
// })

 

const AgregarVehiculo = () => {
  const profile = useAuthStore(state => state.profile)
  //const [user, setUser] = useSearchParams()
    
    //console.log(profile._id)

    const formik = useFormik({
        initialValues: {
            tag: "",
            placas: "",
            modelo: "",
            marca: "",
            numeroEconomico: "",
            odometro: 0,
            descripcion: "",
            isActive: true,
        },
        onSubmit: async (values, {resetForm})  => {
          resetForm()
          const addV =  await addVehiculo(values.tag, values.placas, values.modelo, values.marca, values.numeroEconomico, values.odometro, values.descripcion, values.isActive, profile._id)
          console.log(addV);
          Swal.fire({
            icon: 'success',
            title: 'Vehículo agregado correctamente',
            showConfirmButton: false,
            timer: 1500
          })
         },
       
      });
  return (
    <>
    <div>
        <NavBar nav1={'Inicio'} nav2={'Ver Vehículos'} to1={'/'} to2={'/vehiculos'} />
    </div>
        
       
    <div className="  flex flex-col items-center justify-center mt-20">
        <form 
            className=" p-5  rounded w-1/3"
            onSubmit={formik.handleSubmit}
            
        >
          <h1 className="text-black font-black text-4xl capitalize flex justify-start mb-5">Agregar Vehiculo</h1>
                <input
                id="tag"
                className="w-full mt-3 p-3 border-sky-600 border-b outline-none"
                 placeholder="Tag"
                 type="text"
                 name="tag"
                 onChange={formik.handleChange}
                 value={formik.values.tag}
                />
                <input
                  id="placas"
                  className="w-full mt-3 p-3 border-sky-600 border-b outline-none"
                  type="text"
                  placeholder="Placas"
                  name="placas"
                  onChange={formik.handleChange}
                  value={formik.values.placas}
                />
                 <input
                  id="modelo"
                  className="w-full mt-3 p-3 border-sky-600 border-b outline-none"
                  type="text"
                  placeholder="Modelo"
                  name="modelo"
                  onChange={formik.handleChange}
                  value={formik.values.modelo}
                />
                 <input
                  id="marca"
                  className="w-full mt-3 p-3 border-sky-600 border-b outline-none"
                  type="text"
                  placeholder="Marca"
                  name="marca"
                  onChange={formik.handleChange}
                  value={formik.values.marca}
                />
                <input
                  id="numeroEconomico"
                  className="w-full mt-3 p-3 border-sky-600 border-b outline-none"
                  type="text"
                  placeholder="Numero Economico"
                  name="numeroEconomico"
                  onChange={formik.handleChange}
                  value={formik.values.numeroEconomico}
                />
                <input
                  id="odometro"
                  className="w-full mt-3 p-3 border-sky-600 border-b outline-none"
                  type="number"
                  placeholder="Odometro"
                  name="odometro"
                  onChange={formik.handleChange}
                  value={formik.values.odometro}
                />
                <input
                  id="descripcion"
                  className="w-full mt-3 p-3 border-sky-600 border-b outline-none"
                  type="text"
                  placeholder="descripcion"
                  name="descripcion"
                  onChange={formik.handleChange}
                  value={formik.values.descripcion}
                />
                 {/* <label htmlFor="" className='flex justify-start text-gray-400 mt-3'>Activar</label>
                <label htmlFor="isActive">
                  <input 
                    type="checkbox" 
                    id='isActive' 
                    onChange={formik.handleChange}
                    value={formik.values.isActive}
                    className=' flex cursor-pointer mt-3 justify-start h-9 w-20 rounded-full appearance-none bg-white shadow-lg checked:bg-gray-500 transition duration-200' />
                </label> */}
            
       

            <input
                  className="w-full mb-5 mt-3 p-3 border rounded bg-sky-600 uppercase font-bold hover:cursor-pointer hover:bg-sky-400 hover:text-white transition-colors"
                  type="submit"
                  value='Agregar Vehículo'
                  
                />
            

        </form> 
        </div>
       
    </>
    
  )
}

export default AgregarVehiculo