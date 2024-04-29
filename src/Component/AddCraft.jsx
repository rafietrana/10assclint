import { useContext } from "react";
import { AuthContext } from './AuthProvider';
import { toast } from "react-toastify";

 

const AddCraft = () => {
    const {user} = useContext(AuthContext);
 
    const handleAddDataBtn =(e)=>{
        e.preventDefault();
        const form = e.target;
        const Item_name = form.Item_Name.value;
        const  Image= form.image.value;
        const Subcategory_Name=form.Subcategory_Name.value;
        const Short_Description = form.Short_Description.value;
        const Price = form.price.value;
        const Procassing_Time = form.Procassing_Time.value;
        const Customization = form.Customization.value;
        const Rating = form.rating.value;
        const Stuck_status = form.Stuck_Status.value;
        const User_Name = form.User_Name.value;
        const User_Email = form.User_Email.value;
        const dataInfo = {Item_name, Image, Subcategory_Name, Stuck_status, Short_Description, Price, Procassing_Time,  Customization, Rating, User_Name, User_Email }
        console.log('data information is ', dataInfo);



        fetch("http://localhost:5000/postdata", {
            method: 'POST',
            headers:{
                "content-type": "application/json",
            },
            body: JSON.stringify(dataInfo)
        })
        .then(res => res.json())
        .then(data=>{
    
            if(data.insertedId){
                form.reset();
                toast.success('sucessfully created a new user');
                setTimeout(()=>{
                    window.location.reload();
                },2000)
                  fetch(`http://localhost:5000/mycard/${users?.email}`)
                  .then(res =>res.json())
                  .then(data=>{
                    console.log(data);

                  })





                   

            }

        } )
        

    }
    return (
        <div className="w-9/12 my-28 mx-auto flex justify-center item-center flex-col h-screen">
                    <div className="text-center font-roboto text-[#B70050]"><p className="font-semibold py-5 text-2xl">Add Craft Item</p></div>
                     <div>
                        <form onSubmit={handleAddDataBtn} className="w-6/12 space-y-4 mx-auto ">
                            <div>
                            <label className="font-roboto ">Item Name</label>
                            <input  className="w-full px-3 py-2 outline-none border-2" name='Item_Name' type="text" />
                            </div>
                            <div>
                            <label className="font-roboto ">Image</label>
                            <input className="w-full px-3 py-2 outline-none border-2" name="image" type="text" />
                            </div>
                            <div>
                            <label className="font-roboto ">Subcategory Name</label>
                            <input className="w-full px-3 py-2 outline-none border-2" name="Subcategory_Name" type="text" />
                            </div>
                            <div>
                            <label className="font-roboto ">Short Description</label>
                            <input className="w-full px-3 py-2 outline-none border-2" name="Short_Description" type="text" />
                            </div>
                            <div>
                            <label className="font-roboto ">Price</label>
                            <input className="w-full px-3 py-2 outline-none border-2" name="price" type="text" />
                            </div>
                            <div>
                            <label className="font-roboto ">Procassing Time</label>
                            <input className="w-full px-3 py-2 outline-none border-2"name="Procassing_Time" type="text" />
                            </div>




                            <div>
    
                            <label className="font-roboto ">User Name</label>
                            <input className="w-full px-3 py-2 outline-none border-2"name="User_Name" type="text" defaultValue={user?.email ? user.displayName : 'not found Name' } disabled/>
                            </div>



                            <div>
    
                            <label className="font-roboto ">User Email</label>
                            <input className="w-full px-3 py-2 outline-none border-2"name="User_Email" type="text" defaultValue={user?.email ? user.email : 'not found email' } disabled/>
                            </div>



                            <div className="flex gap-5">
                                <p>Customization :</p>
                                <div className="flex gap-2 items-center">
                                       <label htmlFor="yes" className="font-roboto">yes</label>
                                       <input type="radio" value={'yes'} name="Customization" id="yes" />
                            </div>
                                <div className="flex gap-2 items-center">
                                       <label htmlFor="no" className="font-roboto">No</label>
                                       <input type="radio" name="Customization" id="no" value={'no'} />
                            </div>
                            </div>

                            <div className="flex gap-5">
                                <p>Stuck Status :</p>
                                <div className="flex gap-2 items-center">
                                       <label htmlFor="yes" className="font-roboto">In stock</label>
                                       <input     type="radio" value={'In stock'} name="Stuck_Status" id="in-stock" />
                            </div>
                                <div className="flex gap-2 items-center">
                                       <label htmlFor="no" className="font-roboto">Made to Order</label>
                                       <input type="radio"   name="Stuck_Status" id="no-stock" value={'Made to Order'} />
                            </div>
                            </div>















                            <div className="flex gap-5">
                                <p>Rating:</p>
                                <div className="flex gap-2 items-center">
                                       <label htmlFor="1" className="font-roboto">1</label>
                                       <input type="radio" value={'1'} name="rating" id="1" />
                            </div>
                                <div className="flex gap-2 items-center">
                                       <label htmlFor="3" className="font-roboto">2</label>
                                       <input type="radio" value={'2'} name="rating" id="2" />
                            </div>
                                <div className="flex gap-2 items-center">
                                       <label htmlFor="3" className="font-roboto">3</label>
                                       <input type="radio"value={'3'} name="rating" id="3" />
                            </div>
                                <div className="flex gap-2 items-center">
                                       <label htmlFor="4" className="font-roboto">4</label>
                                       <input type="radio" value={'4'} name="rating" id="4" />
                            </div>
                                <div className="flex gap-2 items-center">
                                       <label htmlFor="5" className="font-roboto">5</label>
                                       <input type="radio" value={'5'} name="rating" id="5" />
                            </div>

                            </div>



                            

 
                            <div>
                                <input className="border px-3 py-2 btn w-full" type="submit" value="Add Now" />
                            </div>
                        </form>
                     </div>
        </div>
    );
};

export default AddCraft;