import { useContext } from "react";
import { GrWorkshop } from "react-icons/gr";
import { IoLocationOutline, IoSearchOutline } from "react-icons/io5";
import { MdOutlineMiscellaneousServices } from "react-icons/md";
import { RiCustomerService2Line } from "react-icons/ri";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "./AuthProvider";
 import '../Component/Style/style.css'
 
 

const NavBar = () => {
  const {user,userLogout} = useContext(AuthContext);
  console.log('frome user user value is ', user);

        const handleLogutBtn =()=>{
          userLogout()
        }

 
    return (
        <div>
            <div className="navbar w-9/12 mx-auto ">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><a>Item 1</a></li>
 
      </ul>
    </div>
    <a className=" w-80"><img src="https://i.ibb.co/XWHq0CD/logo.png" alt="" /></a>
  </div>
  <div className="navbar-center hidden lg:flex ">
    {/* <ul className="menu menu-horizontal px-1">
      <li><a>Item 1</a></li>
 
    </ul> */}
    <div className="relative">
    <input className="px-3 hidden lg:block py-2 outline-none border w-[400px]" placeholder="Enter Search Item" type="text"  />
    <div className="absolute top-3 right-2 "><span className="text-[#B70050]"><IoSearchOutline /></span></div>
    </div>
      

  </div>
  <div className="navbar-end ">
    <div className="lg:flex hidden gap-4 justify-center items-center">


        <div className=" flex flex-col justify-center items-center">
          <p className="text-[#B70050] text-2xl">  <IoLocationOutline /></p>
          <p className="text-[#B70050] font-md  font-roboto">Location</p>
        </div>
        <div className=" flex flex-col justify-center items-center">
          <p className="text-[#B70050] text-2xl"> <GrWorkshop /> </p>
          <p className="text-[#B70050] font-md  font-roboto">WorkShop</p>
        </div>
        <div className=" flex flex-col justify-center items-center">
          <p className="text-[#B70050] text-2xl">  <MdOutlineMiscellaneousServices /></p>
          <p className="text-[#B70050] font-md   font-serif">Setting</p>
        </div>
        <div className=" flex flex-col justify-center items-center">
          <p className="text-[#B70050] text-2xl">  <RiCustomerService2Line /></p>
          <p className="text-[#B70050] font-md  font-serif">Contact</p>
        </div>

  
    </div>
    {/* <div className="gap-5 flex bg-[#B70050] p-5">
                     <li className="font-robotocon text-white list-none text-2xl"><NavLink>Home</NavLink></li>
                     <li className="font-robotocon text-white  list-none  text-2xl"><NavLink>All Art & craft Items</NavLink></li>
                     <li className="font-robotocon text-white  list-none  text-2xl"><NavLink>Add Craft Item</NavLink></li>
 
                </div> */}
                    <div className="flex lg:hidden gap-4 justify-center items-center">
                        <Link to={'/login'}>
                        <button className="text-white text-sm md:text-md  px-3 py-2 bg-[#49243E]">Login</button>
                        </Link>
                        < Link to={'/register'}>
                        <button  className="text-white text-sm md:text-md px-3 py-2 bg-[#845776]">Register</button>
                        </Link>
               
     
    </div>
 
  </div>
  <div>
     
  </div>

</div>
<div className="w-9/12 mx-auto">
<div className="gap-5  flex-wrap justify-between bg-[#B70050] p-5 hidden lg:flex">
    <div  className="">
        <div className="flex gap-5 mt-2 ">
        <li className="font-robotocon text-white list-none text-xl"><NavLink to={'/'} className={({ isActive }) => isActive ? " border-b-2 font-bold" : "" }>Home</NavLink></li>
         <li className="font-robotocon text-white  list-none  text-xl  "><NavLink to={'/allcraft'}>All Art & craft Items</NavLink></li>
        <li className="font-robotocon text-white  list-none  text-xl  "><NavLink to={'/addcraft'} className={({ isActive }) => isActive ? " border-b-2 font-bold" : " " }>Add Craft Item</NavLink></li>
        <li className="font-robotocon text-white  list-none  text-xl content-hover"><NavLink>My Art&Craft List</NavLink></li>
        </div>
    </div>
    <div className="flex gap-4 justify-center items-center">
      {user ? <div className="relative top-0 left-0"><div className="avatar">
        <div className="content-hover">
        <div className="w-9 rounded-ful  mt-1 h rana relative">
    <img src={user.photoURL ? (user.photoURL) : (<img src="https://i.ibb.co/zHN4wdW/images.png"></img>) } />

  </div>
  <div className="absolute joy h-20 top-16 z-40 bottom-0">
  <div className="bg-gray-300 h-8 hover-div  shadow-lg">
    <div >
    <p className="text-center ">{user.displayName ? user.displayName : <p>Not found name</p>}</p>
    </div>
   <div onClick={handleLogutBtn} className="bg-black py-3 px-2  text-white">
   <Link  className="p-5 pl-12  ">Logout</Link>
   </div>

              </div>
  </div>

        </div>

</div></div>  :<Link className="text-white px-3 py-2 bg-[#49243E]" to={'/login'}>
          Login</Link> }

        <Link className="text-white px-3 py-2 bg-[#49243E]" to={'/register'}>
          Register</Link> 
 


    </div>

 
                </div>
    </div>
        </div>
    );
};

export default NavBar;