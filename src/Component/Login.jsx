import { FaGoogle } from "react-icons/fa";

 

const Login = () => {
    return (
        <div className="w-9/12 mx-auto h-[400px] flex justify-center items-center flex-col ">
            <div className="py-5 font-serif text-3xl"><p>Login Now</p></div>
             <div>
                <form  className="space-y-3    ">
                    <input className="w-full border outline-none px-3 py-2 rounded-lg" placeholder="Enter Your Name" type="text" />
                    <input className="w-full border outline-none px-3 py-2 rounded-lg" placeholder="Enter Your Email" type="email" />
                    <input className="w-full px-3 py-2 bg-[#B70050] font-robotocon text-white " type="submit" value="Login Now" />

                </form>
                <div className="py-7">
                    <p>-------------------------------------------Or-----------------------------------------------</p>
                </div>
                <div className="flex gap-2 items-center justify-center">
                      <button className="bg-[#B70050] px-3 py-2 text-white font-robotocon flex gap-2 justify-center items-center"><span><FaGoogle /></span>Google Login <p></p></button>
                      <button className="bg-[#B70050] px-3 py-2 text-white   font-robotocon">GithHub Login</button>
                </div>
             </div>
        </div>
    );
};

export default Login;