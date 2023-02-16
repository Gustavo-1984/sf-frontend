import {useState} from 'react'
import { getTransactions } from '../api/transacciones'
import {CSVLink} from 'react-csv'
import NavBar from '../components/NavBar'
import { format, compareAsc } from 'date-fns'
import { useQuery } from '@tanstack/react-query'




const Transacciones = () => {

  const [search, setSearch] = useState('')
  const [filtro, setFilter] = useState([])
  const hoy = format(new Date(), 'yyyy-MM-dd')

  const {data, isLoading, isError} = useQuery({
    queryKey: ['transacciones'],
    queryFn: getTransactions
  })

 const labels = [
    { label: "Serie", key: "serialNumber" },
    { label: "Tag", key: "tag" },
    { label: "Fecha", key: "createdAt" },
    { label: "Hora", key: "createdAt" },
    { label: "Litros", key: "litros" },
    { label: "Venta", key: "venta" },
   
  ]

const onSearch = (e) =>{
  setSearch(e.target.value)
  console.log(e.target.value);
}

const handleSubmit = () => {
  const result = !search ? data : data.filter((d) => format(new Date(d.createdAt), 'yyyy-MM-dd').includes(search))
  setFilter(result)
}


  
  return (
    <>
      <NavBar nav1={'Inicio'} nav2={'Transaciones'} to1={'/'} to2={'/'} />
    
    <div className='w-full md:w-4/5 xl:w-full my-5 px-2 mt-5'>
        <div className='bg-sky-600 bg-opacity-100 text-gray-100 text-center h-14 max-sm:w-full'><p className='text-2xl'>Transacciones</p></div>
          <div className='p-8  lg:mt-0 rounded shadow bg-white max-sm:w-max'>
            <div className=' ' >
              <form className='flex gap-4'>
                <label>De: </label>
                <input 
                  className='py-2 px-2 mb-3 border rounded border-sky-600 shadow'
                  type="date" 
                  onChange={onSearch}
                  value={search} 
                  max={hoy}
                  />
                  <button onClick={() => handleSubmit()} type='button' className='bg-sky-600 mb-2 rounded uppercase font-bold w-28 max-sm:w-20'>Buscar</button>
                  <CSVLink data={filtro} filename={`Reporte ${hoy}`} target='_blank' headers={labels} className='flex items-center justify-center bg-sky-600 mb-2 rounded uppercase font-bold w-44 max-sm:w-20'>
                  Reporte excel
                </CSVLink>
              </form>
              <div>
                
              </div>
            </div>
            <table className='stripe hover w-full max-sm:w-9 xl:w-full'>
              <thead>
                <tr className='bg-indigo400 bg-opacity-100 text-black'>
                  <th className='py-4 px-2 bg-sky-600'>Serie</th>
                  <th className='py-4 px-2 bg-sky-600'>Tag</th>
                  <th className='py-4 px-2 bg-sky-600'>Fecha</th>
                  <th className='py-4 px-2 bg-sky-600'>Hora</th>
                  <th className='py-4 px-2 bg-sky-600'>Litros</th>
                  <th className='py-4 px-2 bg-sky-600'>Precio</th>
                  <th className='py-4 px-2 bg-sky-600'>Venta</th>
                </tr>
              </thead>
              <tbody>
                 {filtro.map((d) =>(
                    <tr className='bg-slate-100 text-center' key={d._id}>
                      <td className='py-1'>{d.serialNumber}</td>
                      <td>{d.tag}</td>
                      <td>{format(new Date(d.createdAt), 'yyyy-MM-dd')}</td>
                      <td>{format(new Date(d.createdAt), 'HH:mm:ss').toString()}</td>
                      <td>{d.litros.toFixed(3)}</td>
                      <td>$ {21.33}</td>
                      <td>$ {d.venta.toFixed(3)}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
    </div>
    </>
    
    
  )
}

export default Transacciones