import { NavLink, Outlet } from 'react-router-dom'
import worldlogo from '../images/icons8-cart-80.png'
import CartIcon from '../pages/CartIcon'; 
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
// import { faShoppingCart } from '@fortawesome/fontawesome-free-solid';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import homeicon from '../images/icons8-home.svg'




const RootLayout = () => {
    const { index } = useParams();

    return (
        <div className='font-Roboto'>
            <header>
            <nav className='w-full bg-gray-700  text-white flex flex-row justify-end gap-x-12 h-fit  pr-6'>
            <div className='flex-1 mt-4 mx-2 w-12 h-12'>
              Hello
           </div>
          
                    <NavLink className={'text-2xl focus:bg-gray-700 py-6'} to="Home">
                       <h1 className='hidden md:block'>Home</h1>
                        <img src={homeicon} alt='home icon' className='w-8 h-8  md:hidden' />
                    </NavLink>

                    {/* <NavLink className={'text-2xl focus:bg-gray-700 py-6'} to="CartPage"> */}
                    <Link className={'text-2xl focus:bg-gray-700 py-6'} to={`/CartPage/${index}`}>

                        <div className='w-12 h-6'> <img src={worldlogo} alt='world logo' />
                        </div>
                        <div className='w-fit h-fit absolute top-5 right-6'>
                        <CartIcon />
                            </div>
                            </Link>
                    {/* </NavLink> */}
            </nav>
            </header>
            
        
            
            <main className='w-full py-6 min-h-screen bg-off-white'>
                <Outlet />
            </main>
            
        <footer>
            <div className='w-full bg-gray-700 text-xs text-gray-300 px-2 h-fit md:text-md'>
               
                    <div className='flex flex-row justify-around py-12 items-center gap-6 w-full'>
                        <div className='flex flex-col w-fit p-2 gap-2'>
                            <h2>A creative agency in egypt</h2>
                            <div className='flex flex-row gap-2'>
                            <a href='https://www.google.com'>google</a>.
                            <p>08144444444</p>.
                            <p>Address</p>
                            </div>
                           <h2>One of the very best out there</h2>
                        </div>
                        <div className='hidden md:flex md:flex-row md:gap-2'>
                        <a className='border-b-2 border-b-slate-500' href='https://www.google.com'>google</a>.
                        <a className='border-b-2 border-b-slate-500' href='https://www.facebook.com'>Facebook</a>.
                        <a className='border-b-2 border-b-slate-500' href='https://www.instagram.com'>Instagram</a>
                        </div>
                        <div className='flex flex-row gap-2 md:hidden'>
                           hi there
                        </div>
                    </div>
            </div>
        </footer>
        </div>

    )
}

export default RootLayout