import { useContext } from "react";
import { CiBookmark } from "react-icons/ci";
 
import { GiSelfLove, GiVibratingShield } from "react-icons/gi";
 
import { TbCategory } from "react-icons/tb";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2'
import { AuthContext } from "./AuthProvider";

 

const AllUsersCard = ({dataUserAll, filterData, setFilterData}) => {



  const {deletedData, setDeletedData} = useContext(AuthContext)





  const handleDeleteBtn =(id) =>{
 
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {

        fetch(`http://localhost:5000/deletedata/${id}`, {
          method: "DELETE",
        })
        .then(res => res.json())
        .then(data => {
     
              if(data.deletedCount >0){
                setDeletedData(!deletedData);

                const finalFilterData = filterData.filter(dataFilter => dataFilter._id !== id);
                setFilterData(finalFilterData)


                Swal.fire({
                  title: "Deleted!",
                  text: "Your file has been deleted.",
                  icon: "success"
                });


              }
        })




      }
    });
  }



 
    return (
        <div className="card card-compact w-full  border bg-gray-50 py-10">
        <div className="relative">
        <figure><img className="w-full h-[250px] rounded-lg" src={dataUserAll?.Image} alt="Shoes" /></figure>
        <div className="absolute top-3 right-3 text-white flex gap-3 ">
       
          {/* <div><button className="bg-red-500 text-white px-2 py-1 font-semibold rounded-lg ">Property id </button></div>
          <div><button className="bg-green-500 text-white px-2 py-1 font-semibold rounded-lg">For status</button></div> */}
       
        </div>
        <div className=" absolute bottom-3 w-full px-3">
              <div className="flex justify-between items-center">
              <div>
                <p className="font-semibold text-xl text-white"> price : {dataUserAll?.Price}</p>
                
              </div>
            <div className="flex gap-2 items-baseline">
              <span className="bg-white text-black p-1"><GiSelfLove /></span>
              <span className="bg-white text-black p-1"><CiBookmark /></span>
            </div>
              </div>
      
        </div>
        </div>
        
      
        <div className="card-body">
          <div className="flex gap-5">
          <h2 className="card-title"> {dataUserAll?.Item_name} </h2>
          <button className="px-3 py-2 bg-gray-100 text-gray-800 font-semibold w-fit rounded-lg"> {dataUserAll?.Stuck_status} </button>
          </div>
      
     
    
            <p className="flex gap-2 items-center "><span><TbCategory /></span> <span className="font-semibold">Customization :</span> {dataUserAll?.Customization}</p>
            <p className="flex gap-2 items-center "><span className="text-black"><GiVibratingShield /></span> <span className="font-semibold"> Rating :</span> {dataUserAll?.Rating}</p>
          <div className="card-actions flex gap-3 ">
              <Link  to={`/update/${dataUserAll?._id}`} ><button   className="px-3 py-2 text-md border  text-black rounded-lg font-semibold my-5 flex gap-2 items-center">Update<span className="text-xl"> </span></button></Link>
              <Link   ><button onClick={()=>handleDeleteBtn(dataUserAll?._id)}   className="px-3 py-2 text-md border  text-black rounded-lg font-semibold my-5 flex gap-2 items-center">Delete<span className="text-xl"> </span></button></Link>
      
          </div>
        </div>
      </div>
    );
};

export default AllUsersCard;