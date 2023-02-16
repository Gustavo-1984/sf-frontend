import { useEffect,useState } from 'react'
import { getVehiculos } from '../api/vehiculos'
import NavBar from "../components/NavBar"
import Modal from '../components/Modal'
import Editar from '../assets/edit.png'
import { useQuery } from '@tanstack/react-query'


const Vehiculos = () => {
  const handleOnclose = () => setShowModal(false)
  const [showModal, setShowModal] = useState(false)
  const [currentData, setCurrentData] = useState({})
  const [search, setSearch] = useState('')


  const {data: vehiculos, isLoading, isError} = useQuery({
    queryKey: ['vehiculos'],
    queryFn: getVehiculos,
   
  })
  // useEffect(() =>{
  //   const getVehiculo = () =>{
      
  //     const edit = vehiculos?.map((item) => (item._id))
  //     setData(edit)
  //     console.log(data);
  //   }
  //   getVehiculo()
  // }, [])
  const getVehiculo = (data) =>{
    setShowModal(true)
    setCurrentData({
     _id: data._id,
      tag:data.tag,
      marca: data.marca,
      modelo: data.modelo,
      placas: data.placas,
      descripcion: data.descripcion,
      numeroEconomico: data.numeroEconomico,
      odometro: data.odometro
    })
  }
  const updateVehiculo = (_id, updateVehiculo ) =>{
    vehiculos.map(vehiculo =>(vehiculo._id === _id ? updateVehiculo : vehiculos))
  }

  const onSearch = (e) =>{
    setSearch(e.target.value)
    console.log(e.target.value);
  }
  

    const result = !search ? vehiculos : vehiculos.filter((d) => {
      return d.tag.toLowerCase().includes(search.toLowerCase()) ||
             d.placas.toLowerCase().includes(search.toLowerCase())
    })
   
  
  
  return (
    <>
    <div>
      <NavBar nav1={'Inicio'} nav2={'Agregar Vehículo'} to1={'/'} to2={'/agregar-vehiculo'} />
    </div>
    
       <div className='w-full md:w-4/5 xl:w-full my-5 px-2 mt-5'>
        <div className='bg-sky-600 bg-opacity-100 text-gray-100 text-center h-14 max-sm:w-full'><p className='text-2xl'>Vehículos</p></div>
          <div className='p-3  lg:mt-0 rounded shadow bg-white max-sm:w-max justify-center gap-7 flex'>
                <input
                  placeholder='Buscar...' 
                  className='py-2 px-2 mb-3 border rounded border-sky-600 shadow w-96'
                  type="text" 
                  onChange={onSearch}
                  value={search} 
                  
                  />
                 <label className='text-2xl'>Filtro de búsqueda</label>
            </div>
            <table className='stripe hover w-full max-sm:w-9 xl:w-full'>
              <thead>
                <tr className='bg-indigo400 bg-opacity-100 text-black'>
                  <th className='py-4 px-2 bg-sky-600'>Tag</th>
                  <th className='py-4 px-2 bg-sky-600'>Marca</th>
                  <th className='py-4 px-2 bg-sky-600'>Modelo</th>
                  <th className='py-4 px-2 bg-sky-600'>Placas</th>
                  <th className='py-4 px-2 bg-sky-600'>Descripción</th>
                  <th className='py-4 px-2 bg-sky-600'>Numero Economico</th>
                  <th className='py-4 px-2 bg-sky-600'>Odometro</th>
                  <th className='py-4 px-2 bg-sky-600'>Editar</th>
                </tr>
              </thead>
                {result?.map((d) => (
              <tbody key={d._id}>
                    <tr className='bg-slate-100 text-center border-b'>
                      <td className='py-1'>{d.tag}</td>
                      <td>{d.marca}</td>
                      <td>{d.modelo}</td>
                      <td>{d.placas}</td>
                      <td>{d.descripcion}</td>
                      <td>{d.numeroEconomico}</td>
                      <td>{d.odometro}</td>
                      <td className='flex justify-center'>
                      <img src={Editar} onClick={() => getVehiculo(d)} className='cursor-pointer flex justify-center font-bold w-6 max-sm:w-20'/>
                      <Modal onClose={handleOnclose} visible={showModal} currentData={currentData} updateVehiculo={updateVehiculo}  setShowModal={ setShowModal}  />
                      </td>
                    </tr>
              </tbody>
                  ))}
            </table>
          </div>
   
    </>
  
   
  )
}

export default Vehiculos