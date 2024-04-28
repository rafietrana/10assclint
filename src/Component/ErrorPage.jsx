import { Link } from "react-router-dom";

 

const ErrorPage = () => {
    return (
                   <div className="rena border h-screen space-y-5 flex-col flex justify-center items-center">
                    <p className="font-bold text-4xl  text-black ">404</p>
                    <p className="text-3xl ">Not Found page</p>
                    <Link className="text-xl px-3 py-2 bg-red-600 text-black rounded-lg" to={'/'}>Back Home</Link>
                   </div>
    );
};

export default ErrorPage;