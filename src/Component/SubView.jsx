import { useLoaderData } from "react-router-dom";

 

const SubView = () => {
    const subview = useLoaderData();
    console.log('subdata isssss',  subview);
    return (
        <div className="w-9/12 mx-auto py-10 ">
            {
                subview.map(viewsub =>(
                    <div className="grid grid-cols-2 gap-5 py-28" key={viewsub?._id}>
                    <div>
                       <img className="w-full" src={viewsub?.Image} alt="" />
                    </div>
                    <div>
                       <p><span className="font-semibold">Item Name : </span>{viewsub?.Item_name}</p>
                       <p><span className="font-semibold">Subcategory_Name : </span>{viewsub?.Subcategory_Name}</p>
                       <p><span className="font-semibold">Stuck_status : </span>{viewsub?.Stuck_status}</p>
                       <p><span className="font-semibold">Short_Description : </span>{viewsub?.Short_Description}</p>
                       <p><span className="font-semibold">Price : </span>{viewsub?.Price}</p>
                       <p><span className="font-semibold">Procassing_Time : </span>{viewsub?.Procassing_Time}</p>
                       <p><span className="font-semibold">Customization : </span>{viewsub?.Customization}</p>
                       <p><span className="font-semibold">Rating : </span>{viewsub?.Rating}</p>
                       <p><span className="font-semibold">User_Name : </span>{viewsub?.User_Name}</p>
                       <p><span className="font-semibold">User_Email : </span>{viewsub?.User_Email}</p>
                    </div>
               </div>
                ))
            }
             
        </div>
    );
};

export default SubView;