import axios from '../libs/axios'

export const getVehiculos = async () =>{
    const res = await axios.get('/vehiculos')
    return res.data  
} 

export const addVehiculo = async(tag, placas, modelo, marca, numeroEconomico, odometro, descripcion, isActive, id) =>{
    return axios.post(`/vehiculos/${id}`, {
        tag,
        placas,
        modelo,
        marca,
        numeroEconomico,
        odometro,
        descripcion,
        isActive
    })
}
export const updateVehiculos = async(tag, placas, modelo, marca, numeroEconomico, odometro, descripcion, isActive, id) =>{
    return axios.put(`/vehiculos/${id}`, {
        tag,
        placas,
        modelo,
        marca,
        numeroEconomico,
        odometro,
        descripcion,
        isActive
    })
}
export const getProfile = async () =>{
    const res = await axios.get('/users/perfil')
    return res.data  
} 