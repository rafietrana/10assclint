import { useLoaderData } from "react-router-dom";
import AllUsersCard from "./AllUsersCard";
import { useState } from "react";

 

const CraftList = () => {
    const allUserData = useLoaderData();
       const [filterData, setFilterData] = useState(allUserData)
    return (
        <div  className="w-9/12 mx-auto">
                <div className="grid gap-5  lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
                           {
                            filterData.map(dataUserAll => (
                                 <AllUsersCard key={dataUserAll._id} dataUserAll={dataUserAll} setFilterData={setFilterData} filterData={filterData}></AllUsersCard>
                            ))
                           }
                </div>
        </div>
    );
};

export default CraftList;