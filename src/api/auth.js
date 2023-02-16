import axios from '../libs/axios'

export const loginRequest = async(usuario, password) =>{
    return axios.post('/users/login', {
        usuario,
        password
    })
}

export const profileRequest = async () =>  axios.get('/users/perfil')