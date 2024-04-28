 

const Brand = () => {
    return (
        <div className="w-9/12 mx-auto my-32">
               <div className="grid lg:grid-cols-2 grid-cols-1 gap-5 w-full">
                     <div className="flex flex-col justify-center items-center space-y-3 py-12 bg-[#f4d3e1]">
                                  <p className="font-roboto text-3xl ">Our Brands</p>  
                                  <p className="text-center w-9/12">We pride ourselves on delivering the world’s leading brands in art supplies, design
materials, crafting and more. Explore your creativity with the best.</p>
<button className="text-center bg-[#B70050] px-3 py-2 text-white font-robotocon">Our Brand</button>

                     </div>
                     <div className="grid grid-cols-3 lg:items-center gap-4 ">
                         <div><img  className="lg:w-28 md:w-24 w-16 " src="https://i.ibb.co/NNMzbKC/Winsor-Newton.jpg" alt="" /></div>
                         <div><img  className="lg:w-28 md:w-24 w-16 " src="https://i.ibb.co/Y0pHG0c/Copic.jpg" alt="" /></div>
                         <div><img  className="lg:w-28 md:w-24 w-16 " src="https://i.ibb.co/b2zbPdL/Reeves.jpg" alt="" /></div>
                         <div><img  className="lg:w-28 md:w-24 w-16 " src="https://i.ibb.co/y4jfZgs/Liquitex.jpg" alt="" /></div>
                         <div><img  className="lg:w-28 md:w-24 w-16 " src="https://i.ibb.co/rbWPHhf/Jasart.jpg" alt="" /></div>
                         <div><img  className="lg:w-28 md:w-24 w-16 " src="https://i.ibb.co/NV17RSN/Derwent.jpg" alt="" /></div>
 
                     </div>
               </div>
        </div>
    );
};

export default Brand;