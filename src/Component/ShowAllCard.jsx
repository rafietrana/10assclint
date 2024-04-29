 
import { Link, useLoaderData } from "react-router-dom";

 

const ShowAllCard = () => {
    const allData = useLoaderData();
    console.log(' all data is ', allData);



    const showHandleAllBtn =(id)=>{
   


 console.log(id);
 


    }
    return (
        <div className="w-9/12 mx-auto">
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Item Name</th>
        <th>Stock Status</th>
        <th>Price</th>
        <th>User Email</th>
        <th>View More</th>
      </tr>
    </thead>
    <tbody>
        {
            allData.map( (dataAll, idx) => (
                <tr key={dataAll._id}>
                <th>{idx+1}</th>
                <td>{dataAll?.Item_name}</td>
                <td>{dataAll?.Stuck_status}</td>
                <td>{dataAll?.Price}</td>
                <td>{dataAll?.User_Email}</td>
                <td><Link to={`/allviewdetails/${dataAll?._id}`}><button onClick={()=>showHandleAllBtn(dataAll?._id)}  className="btn">View Details</button></Link></td>
              </tr>
            ))
        }

 
    </tbody>
  </table>
</div>
        </div>
    );
};

export default ShowAllCard;