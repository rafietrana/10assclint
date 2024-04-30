import { CiBookmark } from "react-icons/ci";
import { GiSelfLove } from "react-icons/gi";

import { TbCategory } from "react-icons/tb";
import { Link } from "react-router-dom";

const MyCards = ({ dataAdded }) => {
  const handleViewBtn = (e) => {
    const id = e._id;
    fetch(`https://my-assignment-10-server-two.vercel.app/finddata/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <div className="card card-compact w-full  border bg-gray-50">
      <div className="relative">
        <figure>
          <img
            className="w-full h-[250px] rounded-lg"
            src={dataAdded?.Image}
            alt="Shoes"
          />
        </figure>
        <div className="absolute top-3 right-3 text-white flex gap-3 "></div>
        <div className=" absolute bottom-3 w-full px-3">
          <div className="flex justify-between items-center">
            <div>
              <p className="font-semibold text-xl text-white">
                {" "}
                price : {dataAdded?.Price}
              </p>
            </div>
            <div className="flex gap-2 items-baseline">
              <span className="bg-white text-black p-1">
                <GiSelfLove />
              </span>
              <span className="bg-white text-black p-1">
                <CiBookmark />
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="card-body">
        <div className="">
          <h2 className="card-title"> {dataAdded?.Item_name} </h2>
        </div>

        <p className="flex gap-2 items-center ">
          <span>
            <TbCategory />
          </span>{" "}
          <span className="font-semibold">StuckStatus :</span>{" "}
          {dataAdded?.Stuck_status}
        </p>
        <p className="flex gap-2 items-center ">
          <span>
            <TbCategory />
          </span>{" "}
          <span className="font-semibold">SubCategory :</span>{" "}
          {dataAdded?.Subcategory_Name}
        </p>

        <div className="card-actions ">
          <Link to={`/viewdetails/${dataAdded?._id}`}>
            <button
              onClick={() => handleViewBtn(dataAdded)}
              className="px-3 w-full  py-2 text-md border  text-black rounded-lg font-semibold my-5 flex gap-2 items-center"
            >
              View Details{" "}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MyCards;
