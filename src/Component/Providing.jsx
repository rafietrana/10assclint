import { AiFillCrown } from "react-icons/ai";
import { FaArrowRight } from "react-icons/fa6";

const Providing = () => {
    return (
        <div className="w-9/12 mx-auto my-10 space-y-9">
            <p className="lg:text-3xl md:text-2xl text-xl font-semibold" data-aos= 'zoom-in' data-aos-duration='1000'>What we are providing</p>





          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 py-10"  data-aos= 'zoom-in' data-aos-duration='1000'>
               <div className="space-y-5 border rounded-lg p-5">
                 <div className="text-2xl text-green-500 w-2/12 bg-gray-100 rounded-full flex justify-center items-center py-4"><span><AiFillCrown /></span></div>
                 <p className="text-2xl font-semibold">Property Management</p>
                 <p className="min-h-28">We provide a range of services to property owners and landlords to help them effectively manage their real estate investments</p>
                 <p className="flex items-center gap-2  text-red-500 text-xl">Read More <span><FaArrowRight /></span></p>
               </div>
               <div className="space-y-5 border rounded-lg p-5">
                 <div className="text-2xl text-red-500 w-2/12 bg-gray-100 rounded-full flex justify-center items-center py-4"><span><AiFillCrown /></span></div>
                 <p className="text-2xl font-semibold">Home Buying</p>
                 <p className="min-h-28">Planning to buy home? We offer a range of assistance to make the home buying process smoother and more convenient for the buyer.</p>
                 <p className="flex items-center gap-2  text-red-500 text-xl">Read More <span><FaArrowRight /></span></p>
               </div>
               <div className="space-y-5 border rounded-lg p-5">
                 <div className="text-2xl text-blue-400 w-2/12 bg-gray-100 rounded-full flex justify-center items-center py-4"><span><AiFillCrown /></span></div>
                 <p className="text-2xl font-semibold">Consulting Service</p>
                 <p className="min-h-28">A team of professionals to advice and expertise to individuals, businesses, or organizations involved in various aspects of the real estate industry.</p>
                 <p className="flex items-center gap-2  text-red-500 text-xl">Read More <span><FaArrowRight /></span></p>
               </div>
 
               <div className="space-y-5 border rounded-lg p-5">
                 <div className="text-2xl text-green-500 w-2/12 bg-gray-100 rounded-full flex justify-center items-center py-4"><span><AiFillCrown /></span></div>
                 <p className="text-2xl font-semibold">Mortgage Service</p>
                 <p className="min-h-28">We offer a range of financial and administrative activities involved in obtaining a mortgage loan to purchase or refinance real estate.</p>
                 <p className="flex items-center gap-2  text-red-500 text-xl">Read More <span><FaArrowRight /></span></p>
               </div>
 
               <div className="space-y-5 border rounded-lg p-5">
                 <div className="text-2xl text-red-500 w-2/12 bg-gray-100 rounded-full flex justify-center items-center py-4 t"><span><AiFillCrown /></span></div>
                 <p className="text-2xl font-semibold">Home Selling</p>
                 <p className="min-h-28">Whether you are an individual homeowner, real estate investor, we assist in marketing, selling, and closing the sale of your property.</p>
                 <p className="flex items-center gap-2  text-red-500 text-xl ">Read More <span><FaArrowRight /></span></p>
               </div>
 
               <div className="space-y-5 border rounded-lg p-5">
                 <div className="text-2xl text-blue-500 w-2/12 bg-gray-100 rounded-full flex justify-center items-center py-4"><span><AiFillCrown /></span></div>
                 <p className="text-2xl font-semibold">Escrow Service</p>
                 <p className="min-h-28">We are serving as a neutral third party that facilitates the closing process and ensures that the terms and conditions of the sale are met.</p>
                 <p className="flex items-center gap-2 text-red-500 text-xl">Read More <span><FaArrowRight /></span></p>
               </div>
 
            </div>

        </div>
    );
};

export default Providing;