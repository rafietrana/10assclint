 

const Login = () => {
    return (
        <div className="w-9/12 mx-auto h-screen flex justify-center items-center flex-col ">
             <div>
                <form  className="space-y-3    ">
                    <input className="w-full border outline-none px-3 py-2 rounded-lg" placeholder="Enter Your Name" type="text" />
                    <input className="w-full border outline-none px-3 py-2 rounded-lg" placeholder="Enter Your Email" type="email" />
                </form>
             </div>
        </div>
    );
};

export default Login;