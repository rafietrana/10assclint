import { useLoaderData } from "react-router-dom";
import AllUsersCard from "./AllUsersCard";
 
import { FaSortDown } from "react-icons/fa6";
import { useState } from "react";

 

const CraftList = () => {
    const allUserData = useLoaderData();
       const [filterData, setFilterData] = useState(allUserData);
       
       console.log('filter', filterData);


 


       const handleFilterBtn =(value)=>{
        console.log('your button is now working');
        console.log('value is ', value);
           

        const mainFilter = allUserData.filter(dataFilt => dataFilt.Customization === value);
        console.log('main filter data by customization ', mainFilter);


        setFilterData(mainFilter)
        


       }
    return (
      <>


      <div  className="w-9/12 mx-auto flex justify-center items-center flex-col ">
        <div className="py-5 ">
        <div className="dropdown">
<div tabIndex={0} role="button" className="btn m-1 flex justify-center items-center"><span>Filter By Customization </span><span className="-mt-2"><FaSortDown /></span></div>
<ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
<li  onClick={()=>handleFilterBtn('yes')}><a>Customization :  yes</a></li>
<li onClick={()=>handleFilterBtn('no')}> <a> Customization : no</a></li>
</ul>
</div>
        </div>
            <div className="grid gap-5  lg:grid-cols-3 md:grid-cols-2 grid-cols-1 py-20">
                       {
                        filterData.map(dataUserAll => (
                             <AllUsersCard key={dataUserAll._id} dataUserAll={dataUserAll} setFilterData={setFilterData} filterData={filterData}></AllUsersCard>
                        ))
                       }
            </div>
    </div>


 





        </>
    );
};

export default CraftList;