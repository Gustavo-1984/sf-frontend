import { useFormik } from "formik";
import * as Yup from 'yup';
import {loginRequest, profileRequest} from '../api/auth'
import { useAuthStore } from "../store/authUseStore";
import { useNavigate } from "react-router-dom";



const schema = Yup.object().shape({
    usuario: Yup.string().required(),
    password: Yup.string().required()
})

const Login = () => {
    const setToken = useAuthStore(state => state.setToken)
    const setProfile = useAuthStore(state => state.setProfile)
    const navigate = useNavigate()
    const formik = useFormik({
        initialValues: {
          usuario: "",
          password: "",
        },
        onSubmit: async (values, {resetForm})  => {
          resetForm()
          console.log(values);
          const resLogin =  await loginRequest(values.usuario, values.password)
          setToken(resLogin.data.token);
          const resProfile = await profileRequest()
          setProfile(resProfile.data)
          navigate('/')
         },
         validationSchema: schema
      });
     
  return (
    <>
        <h1 className="text-black font-black text-6xl capitalize">Inicia sesión para acceder a tu cuenta</h1>
        <div className="text-red-400 mt-6">
            {formik.errors.usuario && <span className="font-bold">Ingrese usuario y contraseña</span>}
        </div>
      
        <form 
            className="my-10 bg-slate-50 rounded shadow p-10"
            onSubmit={formik.handleSubmit}
            
        >
             
            <div className="my-5">
                <label className="uppercase text-black block text-xl font-bold" htmlFor="usuario">Usuario</label>
                <input
                id="usuario"
                className="w-full mt-3 p-3 border  rounded-xl bg-gray-200"
                 placeholder="Usuario"
                 type="text"
                 name="usuario"
                 onChange={formik.handleChange}
                 value={formik.values.usuario}
                />
                <label className="uppercase text-black block text-xl font-bold mt-3" htmlFor="usuario">Password</label>
                <input
                  id="password"
                  className="w-full mt-3 p-3 border rounded-xl bg-gray-200"
                  type="password"
                  placeholder="Password"
                  name="password"
                  onChange={formik.handleChange}
                  value={formik.values.password}
                />
            </div>
       

            <input
                  className="w-full mb-5 mt-3 p-3 border rounded bg-sky-600 uppercase font-bold hover:cursor-pointer hover:bg-sky-400 hover:text-white transition-colors"
                  type="submit"
                  value='Ingresar'
                  
                />
            

        </form>
    </>
    
  )
}

export default Login