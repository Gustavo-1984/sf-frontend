import { useState } from "react";
import { Link } from "react-router-dom"
import Card from "../components/Card"
import Transaction from "../assets/database.png";
import Truck from "../assets/truck.png";
import Configuration from "../assets/ajuste.png";
import Precio from "../assets/etiqueta-de-precio.png";
import Dashboard from "../assets/diseno-web.png";
import Modal from "../components/Modal";

const Home = () => {
  const handleOnclose = () => setShowModal(false)
  const [showModal, setShowModal] = useState(false)
  return (
    <>
  <div className="grid grid-flow-row gap-4 m-5 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1">
   
    <Link to='/transacciones' className='h-64 rounded'>
        <Card titulo={'Transacciones'} image={Transaction} descripcion={'Reporte de ventas'}/>
    </Link>
    <Link to='/vehiculos' className='h-64 rounded'>
        <Card titulo={'Vehículos'} image={Truck} descripcion={'Agregar Visualizar y Editar'}/>
    </Link>
    <Link to='/configuracion' className='h-64 rounded'>
        <Card titulo={'Configuracion'} image={Configuration} descripcion={'Agregar Reglas de Carga '}/>
    </Link>
    <Link to='/cambio-precio' className='h-64 rounded' >
        <Card titulo={'Cambio de precio'} image={Precio} descripcion={'Modificar y Agregar Cambio'}/>
        
    </Link>
  </div>
  <div className="mx-5">
  <Link to='/dashboard' className='h-64 roundeds'>
        <Card titulo={'Dashboard'} image={Dashboard} descripcion={'Visualizar datos'}/>
    </Link>
    </div>
  </>
  
  )
}

export default Home