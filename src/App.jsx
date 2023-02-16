import {BrowserRouter, Routes, Route} from 'react-router-dom'
import AuthLayout from './layout/AuthLayout'
import Login from './pages/Login'
import Transacciones from './pages/Transacciones'
import Home from './pages/Home'
import ProtectedRoutes from './layout/ProtectedRoutes'
import Vehiculos from './pages/Vehiculos'
import Configuracion from './pages/Configuracion'
import CambioPrecio from './pages/CambioPrecio'
import Dashboard from './pages/Dashboard'
import AgregarVehiculo from './pages/AgregarVehiculo'
import EditarVehiculoModal from './components/EditarVehiculoModal'


function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route  path='/login' exact element={<AuthLayout/>} >
          <Route index exact element={<Login/>} />
        </Route>
        <Route element={<ProtectedRoutes/>}>
          <Route path='/' element={<Home/>} />
          <Route path='/transacciones' element={<Transacciones/>} />
          <Route path='/vehiculos' element={<Vehiculos/>} />
          <Route path='/vehiculos/:_id' element={<EditarVehiculoModal/>} />
          <Route path='/agregar-vehiculo' element={<AgregarVehiculo/>} />
          <Route path='/configuracion' element={<Configuracion/>} />
          <Route path='/cambio-precio' element={<CambioPrecio/>} />
          <Route path='/dashboard' element={<Dashboard/>} />

        </Route>
        
      </Routes>

    </BrowserRouter>  
  )
}

export default App
