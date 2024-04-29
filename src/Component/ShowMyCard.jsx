import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import MyCards from "./MyCards";
import { Bounce, Fade } from "react-awesome-reveal";

 

const ShowMyCard = () => {
    const  {AddedData} = useContext(AuthContext);
    console.log(AddedData);
 

    return (
        <div className="w-9/12 mx-auto flex flex-col justify-center items-center my-16 space-y-4">
               <div className="text-2xl font-robotocon text-[#B70050] font-semibold"><Fade cascade delay={500} l> Your Added Data</Fade></div> 
             
           <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-2 ">
           <Bounce duration={1000}>
                  {
                    AddedData.slice(0,6).map(dataAdded=><MyCards key={dataAdded._id} dataAdded={dataAdded} ></MyCards> )
                  }
                  </Bounce>
           </div>


            
        </div>
    );
};

export default ShowMyCard;