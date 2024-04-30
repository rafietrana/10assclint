import { useContext, useEffect, useState } from "react";
import { GrWorkshop } from "react-icons/gr";
import { IoLocationOutline, IoSearchOutline } from "react-icons/io5";
import { MdOutlineMiscellaneousServices } from "react-icons/md";
import { RiCustomerService2Line } from "react-icons/ri";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "./AuthProvider";
import "../Component/Style/style.css";

const NavBar = () => {
  const[theme, setTheme] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "light");
  const { user, userLogout } = useContext(AuthContext);
  console.log("frome user user value is ", user);

  const handleLogutBtn = () => {
    userLogout();
  };

   const handleToggle =(e)=>{
    if(e.target.checked){
      setTheme("dark");
    }else{
      setTheme("light");
    }
   }

  useEffect(()=>{
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localTheme)
  }, [theme]);

  return (
    <div  className="">
      <div className="navbar w-full md:w-9/12 mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm bg-red-500  dropdown-content mt-3  p-2 shadow z-50 rounded-box w-52"
            >
              <li className="font-robotocon text-black list-none text-xl">
                <NavLink
                  to={"/"}
                  className={({ isActive }) =>
                    isActive ? " border-b-2 font-bold" : ""
                  }
                >
                  <p className={` ${theme === 'light' ? 'text-black' : 'text-[#e1a1a1]'}`}>Home</p>
                
                </NavLink>
              </li>
              <li className="font-robotocon text-black  list-none  text-xl  ">
                <NavLink
                  to={"/allcraft"}
                  className={({ isActive }) =>
                    isActive ? " border-b-2 font-bold" : ""
                  }
                >
     
                  <p className={` ${theme === 'light' ? 'text-black' : 'text-[#e1a1a1]'}`}>             All Art & craft Items</p>
                </NavLink>
              </li>
              <li className="font-robotocon text-black  list-none  text-xl  ">
                <NavLink
                  to={"/addcraft"}
                  className={({ isActive }) =>
                    isActive ? " border-b-2 font-bold" : " "
                  }
                >
                  
                  <p className={` ${theme === 'light' ? 'text-black' : 'text-[#e1a1a1]'}`}> Add Craft Item</p>
                </NavLink>
              </li>
              <li className="font-robotocon text-black  list-none  text-xl content-hover">
                <NavLink
                  to={`/craftlist/${user?.email}`}
                  className={({ isActive }) =>
                    isActive ? " border-b-2 font-bold" : " "
                  }
                >
           
                  <p className={` ${theme === 'light' ? 'text-black' : 'text-[#e1a1a1]'}`}>        My Art&Craft List</p>
                
                </NavLink>
              </li>
            </ul>
          </div>
          <a className=" w-80">
            <img src="https://i.ibb.co/XWHq0CD/logo.png" alt="" />
          </a>
        </div>
        <div className="navbar-center hidden lg:flex ">
          {/* <ul className="menu menu-horizontal px-1">
      <li><a>Item 1</a></li>
 
    </ul> */}
          <div className="relative">
            <input
              className="px-3 hidden lg:block py-2 outline-none border w-[400px]"
              placeholder="Enter Search Item"
              type="text"
            />
            <div className="absolute top-3 right-2 ">
              <span className="text-[#B70050]">
                <IoSearchOutline />
              </span>
            </div>
          </div>
        </div>
        <div className="navbar-end ">
          <div className="lg:flex hidden gap-4 justify-center items-center">
            <div className=" flex flex-col justify-center items-center">
              <p className="text-[#B70050] text-2xl">
                {" "}
                <IoLocationOutline />
              </p>
              <p className="text-[#B70050] font-md  font-roboto">Location</p>
            </div>
            <div className=" flex flex-col justify-center items-center">
              <p className="text-[#B70050] text-2xl">
                {" "}
                <GrWorkshop />{" "}
              </p>
              <p className="text-[#B70050] font-md  font-roboto">WorkShop</p>
            </div>
            <div className=" flex flex-col justify-center items-center">
              <p className="text-[#B70050] text-2xl">
                {" "}
                <MdOutlineMiscellaneousServices />
              </p>
              <p className="text-[#B70050] font-md   font-serif">Setting</p>
            </div>
            <div className=" flex flex-col justify-center items-center">
              <p className="text-[#B70050] text-2xl">
                {" "}
                <RiCustomerService2Line />
              </p>
              <p className="text-[#B70050] font-md  font-serif">Contact</p>
            </div>
          </div>
          {/* <div className="gap-5 flex bg-[#B70050] p-5">
                     <li className="font-robotocon text-white list-none text-2xl"><NavLink>Home</NavLink></li>
                     <li className="font-robotocon text-white  list-none  text-2xl"><NavLink>All Art & craft Items</NavLink></li>
                     <li className="font-robotocon text-white  list-none  text-2xl"><NavLink>Add Craft Item</NavLink></li>
 
                </div> */}
          <div className="flex  sticky lg:hidden gap-4 justify-center items-center">
            <Link to={"/login"}>
              <button  className="text-white  text-sm md:text-md  px-3 py-2 bg-[#49243E]">
                Login
              </button>
            </Link>
            <Link to={"/register"}>
              <button className={`text-white text-sm md:text-md px-3 py-2 bg-[#845776]`}>
                Register
              </button>
            </Link>
          </div>
        </div>
        <div></div>
      </div>
      <div className={`w-9/12 mx-auto ${ theme  === 'light' ? 'bg-gray-200' :''}`}>
        <div className="gap-5  flex-wrap justify-between   p-5 hidden lg:flex">
          <div className="">
            <div className="flex gap-5 mt-2 ">
              <li className="font-robotocon text-black list-none text-xl">
                <NavLink
                  to={"/"}
                  className={({ isActive }) =>
                    isActive ? " border-b-2 font-bold" : ""
                  }
                >
                  <p className={` ${theme === 'light' ? 'text-black' : 'text-[#e1a1a1]'}`}>Home</p>
                
                </NavLink>
              </li>
              <li className="font-robotocon text-black  list-none  text-xl  ">
                <NavLink
                  to={"/allcraft"}
                  className={({ isActive }) =>
                    isActive ? " border-b-2 font-bold" : ""
                  }
                >
     
                  <p className={` ${theme === 'light' ? 'text-black' : 'text-[#e1a1a1]'}`}>             All Art & craft Items</p>
                </NavLink>
              </li>
              <li className="font-robotocon text-black  list-none  text-xl  ">
                <NavLink
                  to={"/addcraft"}
                  className={({ isActive }) =>
                    isActive ? " border-b-2 font-bold" : " "
                  }
                >
                  
                  <p className={` ${theme === 'light' ? 'text-black' : 'text-[#e1a1a1]'}`}> Add Craft Item</p>
                </NavLink>
              </li>
              <li className="font-robotocon text-black  list-none  text-xl content-hover">
                <NavLink
                  to={`/craftlist/${user?.email}`}
                  className={({ isActive }) =>
                    isActive ? " border-b-2 font-bold" : " "
                  }
                >
           
                  <p className={` ${theme === 'light' ? 'text-black' : 'text-[#e1a1a1]'}`}>        My Art&Craft List</p>
                
                </NavLink>
              </li>
            </div>
          </div>
          <div className="flex gap-4 justify-center items-center">
            <div>
            <label className="swap swap-rotate">
  
  {/* this hidden checkbox controls the state */}
  <input type="checkbox" onChange={handleToggle} />
  
  {/* sun icon */}
  <svg className="swap-on fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"/></svg>
  
  {/* moon icon */}
  <svg className="swap-off fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"/></svg>
  
</label>
            </div>
            {user ? (
              <div className="relative top-0 left-0">
                <div className="avatar">
                  <div className="content-hover">
                    <div className="w-9 rounded-ful  mt-1 h rana relative">
                      <img
                        src={
                          user.photoURL ? (
                            user.photoURL
                          ) : (
                            <img src="https://i.ibb.co/zHN4wdW/images.png"></img>
                          )
                        }
                      />
                    </div>
                    <div className="absolute joy h-20 top-16 z-40 bottom-0">
                      <div className="bg-gray-300 h-8 hover-div  shadow-lg">
                        <div>
                          <p className="text-center ">
                            {user.displayName ? (
                              user.displayName
                            ) : (
                              <p>Not found name</p>
                            )}
                          </p>
                        </div>
                        <div
                          onClick={handleLogutBtn}
                          className="bg-black py-3 px-2  text-white"
                        >
                          <Link className="p-5 pl-12  ">Logout</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <Link className="text-white px-3 py-2 bg-[#49243E]" to={"/login"}>
                Login
              </Link>
            )}

            <Link
              className="text-white px-3 py-2 bg-[#49243E]"
              to={"/register"}
            >
              Register
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
