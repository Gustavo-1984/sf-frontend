import SF from '../assets/sf-black-total.svg'
import { Link } from 'react-router-dom'
import { useAuthStore } from '../store/authUseStore'
import { format, compareAsc } from 'date-fns'
import { useNavigate } from 'react-router-dom'

const Header = () => {
    const logout = useAuthStore(state => state.logout)
    const profile = useAuthStore(state => state.profile)
    const hoy = format(new Date(), 'yyyy-MM-dd')
    const navigate = useNavigate()
  return (
    <>
        <div className='flex flex-col md:flex-row justify-between h-20 max-md:h-52 items-center'>
            <div className=' mx-5 max-sm:my-0 max-sm:mx-10'>
                <Link  to='/'>
                    <img className=' max-sm:h-10' src={SF} alt="smart" />
                </Link>
            </div>
           
           
           <div className='flex flex-col md:flex-row items-center gap-6 py-10 px-5 max-sm:py-0 max-sm:gap-2 max-lg:gap-0'>
            <h1 className='text-xl font-bold max-sm:text-lg max-lg:text-base'>Usuario: <span className='font-mono font-normal text-base'>{profile.usuario}</span></h1>
            <h1 className='text-xl font-bold max-sm:text-lg max-lg:text-base'>Fecha: <span className='font-mono font-normal text-base'>{hoy}</span></h1>
                <button onClick={() =>{
                    logout()
                    navigate('/')
                }} type='button' className='bg-sky-600 p-1 rounded uppercase font-bold w-24 max-sm:w-20'>Salir</button>
           </div>
        </div>
    </>
  )
}

export default Header