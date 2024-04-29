 
import { useLoaderData } from "react-router-dom";

 

const ViewDetails = () => {
        //   const [viewData, setViewData] = useState({});
        //   console.log('view data is', viewData);

        const loaderData = useLoaderData();
                    console.log('loader data is', loaderData);

 
            // loaderData.map(dataLoader => setViewData(dataLoader))
 

    return (

        <div className="w-9/12 mx-auto">
                    <div className=" my-9">
                               <div>
                           v 
                                           

                                           {
                                            loaderData.map(dataLoader => (
                                                <div className="grid grid-cols-2 gap-4" key={dataLoader._id}>
                                                     <div>
                                                        <img className="w-full" src={dataLoader?.Image} alt="" />
                                                     </div>
                                                     <div>
                                                        <p><span className="font-semibold">Item Name : </span>{dataLoader?.Item_name}</p>
                                                        <p><span className="font-semibold">Subcategory_Name : </span>{dataLoader?.Subcategory_Name}</p>
                                                        <p><span className="font-semibold">Stuck_status : </span>{dataLoader?.Stuck_status}</p>
                                                        <p><span className="font-semibold">Short_Description : </span>{dataLoader?.Short_Description}</p>
                                                        <p><span className="font-semibold">Price : </span>{dataLoader?.Price}</p>
                                                        <p><span className="font-semibold">Procassing_Time : </span>{dataLoader?.Procassing_Time}</p>
                                                        <p><span className="font-semibold">Customization : </span>{dataLoader?.Customization}</p>
                                                        <p><span className="font-semibold">Rating : </span>{dataLoader?.Rating}</p>
                                                        <p><span className="font-semibold">User_Name : </span>{dataLoader?.User_Name}</p>
                                                        <p><span className="font-semibold">User_Email : </span>{dataLoader?.User_Email}</p>
                                                     </div>
                                                </div>
                                            ))
                                           }

                               </div>
                               <div>

                               </div>
                    </div>
        </div>
    );
};

export default ViewDetails;