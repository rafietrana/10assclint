import { useEffect, useState } from "react";
import CategoryCard from "./CategoryCard";
import { Bounce, Fade } from "react-awesome-reveal";

const CraftCategory = () => {
  const [categorys, setCategorys] = useState([]);
  useEffect(() => {
    fetch("https://my-assignment-10-server-two.vercel.app/subdata")
      .then((res) => res.json())
      .then((data) => setCategorys(data));
  });
  return (
    <div className="w-9/12 my-10 flex flex-col justify-center items-center mx-auto space-y-12">
      <Fade cascade delay={1000}>
        <div className="font-robotocon text-3xl">Art and Craft Category </div>
      </Fade>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 ">
        <Bounce>
          {categorys.map((catagory) => (
            <CategoryCard key={catagory._id} catagory={catagory}></CategoryCard>
          ))}
        </Bounce>
      </div>
    </div>
  );
};

export default CraftCategory;
