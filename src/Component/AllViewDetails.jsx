import { useLoaderData } from "react-router-dom";

 

const AllViewDetails = () => {
    const allViewDetailsData = useLoaderData();
    
    return (
        <div className="w-9/12 mx-auto">
 
                   {
                    allViewDetailsData.map(detailsData => (
                        <div className="grid grid-cols-2 gap-5 py-28" key={detailsData._id}>
                        <div>
                           <img className="w-full" src={detailsData?.Image} alt="" />
                        </div>
                        <div>
                           <p><span className="font-semibold">Item Name : </span>{detailsData?.Item_name}</p>
                           <p><span className="font-semibold">Subcategory_Name : </span>{detailsData?.Subcategory_Name}</p>
                           <p><span className="font-semibold">Stuck_status : </span>{detailsData?.Stuck_status}</p>
                           <p><span className="font-semibold">Short_Description : </span>{detailsData?.Short_Description}</p>
                           <p><span className="font-semibold">Price : </span>{detailsData?.Price}</p>
                           <p><span className="font-semibold">Procassing_Time : </span>{detailsData?.Procassing_Time}</p>
                           <p><span className="font-semibold">Customization : </span>{detailsData?.Customization}</p>
                           <p><span className="font-semibold">Rating : </span>{detailsData?.Rating}</p>
                           <p><span className="font-semibold">User_Name : </span>{detailsData?.User_Name}</p>
                           <p><span className="font-semibold">User_Email : </span>{detailsData?.User_Email}</p>
                        </div>
                   </div>
                    ))
                   }
        </div>
    );
};

export default AllViewDetails;