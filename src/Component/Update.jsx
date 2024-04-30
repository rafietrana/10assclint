import { useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";


 

const Update = () => {
    const updateData = useLoaderData();
    console.log('update data is', updateData);
 
    
    const handleUpdateNowBtn =(e)=>{
        e.preventDefault();
        const form = e.target;
        const Item_name = form.Item_Name.value;
        const  Image= form.image.value;
        const Subcategory_Name=form.Subcategory_Name.value;
        const Short_Description = form.Short_Description.value;
        const Price = form.price.value;
        const Procassing_Time = form.Procassing_Time.value;
        const Customization = form.Customization.value;
        const Rating = form.Rating.value;
        const Stuck_status = form.Stuck_status.value;
 
        const dataInfo = {Item_name, Image, Subcategory_Name, Stuck_status, Short_Description, Price, Procassing_Time,  Customization, Rating,   }
        console.log('data information is ', dataInfo);
        
         

        fetch(`http://localhost:5000/updatedata/${updateData[0]?._id}`, {
            method: 'PUT',
            headers:{
                'content-type'  : 'application/json'
            },
            body: JSON.stringify(dataInfo)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.modifiedCount >0){
                 toast.success('sucessfully updated you data')
                 setTimeout(()=>{
                    window.location.reload();

                 },2000)
 
            }
            else{
                toast.error('not sucessfully update your data')
            }
        })



        
    }
    return (
        <div className="w-10/12 my-28 mx-auto flex justify-center item-center flex-col h-screen">
                    <div className="text-center font-roboto text-[#B70050]"><p className="font-semibold py-5 text-2xl">Update You Craft Item</p></div>
                    {
                        updateData.map(dataUpdate =>(
                            <div key={dataUpdate._id}>
                            <form onSubmit={handleUpdateNowBtn}  className="w-11/12 space-y-4 mx-auto ">
                                <div>
                                <label className="font-roboto " >Item Name</label>
                                <input  className="w-full px-3 py-2 outline-none border-2" name='Item_Name' defaultValue={ dataUpdate.Item_name} type="text" />
                                </div>
                                <div>
                                <label className="font-roboto ">Image</label>
                                <input className="w-full px-3 py-2 outline-none border-2" name="image" type="text" defaultValue={dataUpdate?.Image} />
                                </div>



                                <div>
            <label
              htmlFor="countries"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white outline-none"
            >
              Select an SubCatagroy
            </label>
            <select
            defaultValue={dataUpdate?.Subcategory_Name}
            name="Subcategory_Name"
              id="countries"
              className="  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
               <option    value="Landscape_Painting">Landscape Painting</option>
              <option   value="Watercolour_Painting">Watercolour Painting:</option>
              <option   value="Oil_Painting">Oil Painting</option>
              <option   value="Charcoal_Sketching">Charcoal Sketching:</option>
              <option   value="Cartoon_Drawing">Cartoon Drawing</option>
              <option   value="Portrait_Drawing">Portrait Drawing</option>
            </select>
          </div>





                                <div>
                                <label className="font-roboto ">Short Description</label>
                                <input defaultValue={dataUpdate?.Short_Description} className="w-full px-3 py-2 outline-none border-2" name="Short_Description" type="text" />
                                </div>
                                <div>
                                <label className="font-roboto ">Price</label>
                                <input className="w-full px-3 py-2 outline-none border-2" defaultValue={dataUpdate?.Price} name="price" type="text" />
                                </div>
                                <div>
                                <label className="font-roboto ">Procassing Time</label>
                                <input defaultValue={dataUpdate?.Procassing_Time} className="w-full px-3 py-2 outline-none border-2"name="Procassing_Time" type="text" />
                                </div>
    
    
    
    
 
    
    
    
                                <div className="flex gap-5">
                                    <p>Customization  </p>
                                    <div className="flex gap-2 items-center">
                                           <label htmlFor="yes" className="font-roboto">yes</label>
                                           <input type="radio"  defaultChecked={dataUpdate.Customization === 'yes'} value={'yes'} name="Customization"   id="yes" />
                                </div>
                                    <div className="flex gap-2 items-center">
                                           <label htmlFor="no" className="font-roboto">No</label>
                                           <input type="radio" defaultChecked={dataUpdate.Customization === 'no'}  name="Customization" id="no"   value={'no'} />
                                </div>
                                </div>
    
                                <div className="flex gap-5">
                                    <p>Stuck Status </p>
                                    <div className="flex gap-2 items-center">
                                        <label htmlFor="in-stock">In Stock</label>
                                           <input       type="radio"   defaultChecked={dataUpdate.Stuck_status === 'In stock'} value={'In stock'} name="Stuck_status" id="in-stock" />
                                </div>
                                    <div className="flex gap-2 items-center">
                                           <label htmlFor="no" className="font-roboto">Made to Order</label>
                                           <input required type="radio" defaultChecked={dataUpdate.Stuck_status === 'Made to Order'} name="Stuck_status" id="no-stock" value={'Made to Order'} />

                                </div>
                                </div>
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
                                <div className="flex gap-5">
                                    <p>Rating </p>
                                    <div className="flex gap-2 items-center">
                                           <label htmlFor="1" className="font-roboto">1</label>
                                           <input defaultChecked={dataUpdate.Rating ==='1'} type="radio" value={'1'} name="Rating" id="1" />
                                </div>
                                    <div className="flex gap-2 items-center">
                                           <label htmlFor="3" className="font-roboto">2</label>
                                           <input type="radio"defaultChecked={dataUpdate.Rating ==='2'}  value={'2'} name="Rating" id="2" />
                                </div>
                                    <div className="flex gap-2 items-center">
                                           <label htmlFor="3" className="font-roboto">3</label>
                                           <input type="radio" defaultChecked={dataUpdate.Rating ==='3'}  value={'3'} name="Rating" id="3" />
                                </div>
                                    <div className="flex gap-2 items-center">
                                           <label htmlFor="4" className="font-roboto">4</label>
                                           <input type="radio" defaultChecked={dataUpdate.Rating ==='4'} value={'4'} name="Rating" id="4" />
                                </div>
                                    <div className="flex gap-2 items-center">
                                           <label htmlFor="5" className="font-roboto">5</label>
                                           <input type="radio" value={'5'} defaultChecked={dataUpdate.Rating ==='5'} name="Rating" id="5" />
                                </div>
    
                                </div>
    
    
    
                                
    
     
                                <div>
                                    <input className="border px-3 py-2 btn w-full" type="submit" value="Update Now" />
                                </div>
                            </form>
                         </div>
                        ))
                    }
        </div>
    );
};

export default Update;