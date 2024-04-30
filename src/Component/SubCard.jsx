import React from 'react';
import { CiBookmark } from 'react-icons/ci';
import { GiSelfLove } from 'react-icons/gi';
 
import { TbCategory } from 'react-icons/tb';
import { Link } from 'react-router-dom';

const SubCard = ({dataSub}) => {
    return (
        <div className="card card-compact w-full  border bg-gray-50">
        <div className="relative">
        <figure><img className="w-full h-[250px] rounded-lg" src={dataSub?.Image} alt="Shoes" /></figure>
        <div className="absolute top-3 right-3 text-white flex gap-3 ">
       
          {/* <div><button className="bg-red-500 text-white px-2 py-1 font-semibold rounded-lg ">Property id </button></div>
          <div><button className="bg-green-500 text-white px-2 py-1 font-semibold rounded-lg">For status</button></div> */}
       
        </div>
        <div className=" absolute bottom-3 w-full px-3">
              <div className="flex justify-between items-center">
              <div>
                <p className="font-semibold text-xl text-white"> price : {dataSub?.Price}</p>
                
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
          <h2 className="card-title"> {dataSub?.Item_name} </h2>
          <button className="px-3 py-2 bg-gray-100 text-gray-800 font-semibold w-fit rounded-lg"> {dataSub?.Stuck_status} </button>
          </div>
      
     
            <p className="flex gap-2 items-center "><span><TbCategory/></span> <span className="font-semibold">SubCategory :</span> {dataSub?.Subcategory_Name}</p>
            <p className="flex gap-2 items-center "><span><TbCategory/></span> <span className="font-semibold">Rating :</span> {dataSub?.Rating}</p>
            <p className="flex gap-2 items-center "><span><TbCategory/></span> <span className="font-semibold">Procassing Time :</span> {dataSub?.Procassing_Time}</p>
            <p>{dataSub?.Short_Description}</p>
          <div className="card-actions ">
            <Link className='w-full' to={`/suview/${dataSub?._id}`}><button className='bg-gray-200 px-3 py-2 w-full'> View Details</button></Link>
              
      
          </div>
        </div>
      </div>
    );
};

export default SubCard;