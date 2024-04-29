import { AiFillCrown } from "react-icons/ai";
import { FaArrowRight } from "react-icons/fa6";

const Providing = () => {
    return (
        <div className="w-9/12 mx-auto my-10 space-y-9">
            <p className="lg:text-3xl md:text-2xl text-xl font-semibold" data-aos="zoom-in" data-aos-duration="1000">What we are providing</p>

            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 py-10" data-aos="zoom-in" data-aos-duration="1000">
               <div className="space-y-5 border rounded-lg p-5 bg-red-300">
                 <div className="text-2xl text-green-500 w-2/12 bg-gray-100 rounded-full flex justify-center items-center py-4"><span><AiFillCrown /></span></div>
                 <p className="text-2xl font-semibold">Landscape Painting</p>
                 <p className="min-h-28">Mountain view canvas, Forest based Landscape painting.</p>
                 <p className="flex items-center gap-2  text-black text-xl">Read More <span><FaArrowRight /></span></p>
               </div>
               <div className="space-y-5 border rounded-lg p-5 bg-red-300">
                 <div className="text-2xl text-red-500 w-2/12  bg-gray-100 rounded-full flex justify-center items-center py-4"><span><AiFillCrown /></span></div>
                 <p className="text-2xl font-semibold">Portrait Drawing</p>
                 <p className="min-h-28">Pencil Sketch Portrait, Ink Outline Portrait, Acrylic Portrait Canvas.</p>
                 <p className="flex items-center gap-2  text-black text-xl">Read More <span><FaArrowRight /></span></p>
               </div>
               <div className="space-y-5 border rounded-lg p-5 bg-red-300">
                 <div className="text-2xl text-blue-400 w-2/12 bg-gray-100 rounded-full flex justify-center items-center py-4"><span><AiFillCrown /></span></div>
                 <p className="text-2xl font-semibold">Watercolour Painting</p>
                 <p className="min-h-28">Floral Watercolor Art, Animal Watercolor Portrait.</p>
                 <p className="flex items-center gap-2  text-black text-xl">Read More <span><FaArrowRight /></span></p>
               </div>
 
               <div className="space-y-5 border rounded-lg p-5 bg-red-300">
                 <div className="text-2xl text-green-500 w-2/12 bg-gray-100 rounded-full flex justify-center items-center py-4"><span><AiFillCrown /></span></div>
                 <p className="text-2xl font-semibold">Oil Painting</p>
                 <p className="min-h-28">Realistic Oil Portrait, Abstract Oil Painting.</p>
                 <p className="flex items-center gap-2  text-black text-xl">Read More <span><FaArrowRight /></span></p>
               </div>
 
               <div className="space-y-5 border rounded-lg p-5 bg-red-300">
                 <div className="text-2xl text-red-500 w-2/12 bg-gray-100 rounded-full flex justify-center items-center py-4 t"><span><AiFillCrown /></span></div>
                 <p className="text-2xl font-semibold">Charcoal Sketching</p>
                 <p className="min-h-28">Figure Charcoal Sketch, Architectural Charcoal Drawing.</p>
                 <p className="flex items-center gap-2  text-black text-xl ">Read More <span><FaArrowRight /></span></p>
               </div>
 
               <div className="space-y-5 border rounded-lg p-5 bg-red-300">
                 <div className="text-2xl text-blue-500 w-2/12 bg-gray-100 rounded-full flex justify-center items-center py-4"><span><AiFillCrown /></span></div>
                 <p className="text-2xl font-semibold">Cartoon Drawing</p>
                 <p className="min-h-28">Comic Strip Drawing, Superhero Cartoon Design.</p>
                 <p className="flex items-center gap-2 text-black text-xl">Read More <span><FaArrowRight /></span></p>
               </div>
            </div>
        </div>
    );
};

export default Providing;
