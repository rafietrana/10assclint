import { useLoaderData } from "react-router-dom";
import SubCard from "./SubCard";

 

const SubCategory = () => {
    const  subData = useLoaderData();
    console.log('subdata is', subData);



    return (
        <div className="w-9/12  mx-auto py-10 " >



              <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 ">
                   {
                    subData.map(dataSub => <SubCard key={dataSub._id} dataSub={dataSub}></SubCard>)
                   }

              </div>

 


         



        </div>
    );
};

export default SubCategory;