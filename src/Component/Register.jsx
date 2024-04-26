 
const Register = () => {
    return (
        <div className="w-9/12 mx-auto h-[400px] flex justify-center items-center flex-col ">
            <div className="py-5 font-serif text-3xl"><p>Register  Now</p></div>
             <div>
                <form  className="space-y-3 ">
                    <input className="w-full border outline-none px-3 py-2 rounded-lg" placeholder="Enter Your Name" type="text" />
                    <input className="w-full border outline-none px-3 py-2 rounded-lg" placeholder="Enter Your Email" type="email" />
                    <input className="w-full border outline-none px-3 py-2 rounded-lg" placeholder="Enter Your PhotUrl" type="text" />
                    <input className="w-full border outline-none px-3 py-2 rounded-lg" placeholder="Enter Your Password" type="password" />
                    <input className="w-full px-3 py-2 bg-[#B70050] font-robotocon text-white " type="submit" value="Register Now" />

                </form>
    
             </div>
        </div>
    );
};

export default Register;