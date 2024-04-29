import { useEffect, useState } from "react";
import CategoryCard from "./CategoryCard";

 

const CraftCategory = () => {
    const [categorys,setCategorys] = useState([])
                      useEffect(()=>{
                        fetch('http://localhost:5000/subdata')
                        .then(res => res.json())
                        .then(data => setCategorys(data))
                      })
    return (
        <div className="w-9/12 my-10 flex flex-col justify-center items-center mx-auto space-y-12">
                     <div className="font-robotocon text-3xl">Art and Craft Category </div>




                     <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 ">
                     {       
                     categorys.map(catagory =>(
                         <CategoryCard key={catagory._id} catagory={catagory}></CategoryCard>
                     ) )

                     }

                     </div>
        </div>
    );
};

export default CraftCategory;