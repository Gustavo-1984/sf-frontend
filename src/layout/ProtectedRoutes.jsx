import { Navigate, Outlet } from "react-router-dom"
import { useAuthStore } from '../store/authUseStore'
import Header from "../components/Header"

const ProtectedRoutes = () => {
   const isAuth = useAuthStore(state => state.isAuth)

 return(
   <>
      {isAuth ? 
      (
         <div className="">
            <Header />
            <main className="flex-1">
               <Outlet />
            </main>
         </div>
         

      ) : <Navigate to="/login" />

      }
   </>
 )
}

export default ProtectedRoutes