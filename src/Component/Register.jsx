 
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from './AuthProvider';
import { toast } from 'react-toastify';
 
const Register = () => {


    const {createUser, addMoreInfo} = useContext(AuthContext);
    console.log('create user is a', createUser);
       


    const handleRegisterBtn = (e) =>{
        e.preventDefault();
 
        const form = e.target;
        const  name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const password = form.password.value;

       


      if(password.length <6){
        toast.error('password must be 6 chacter Longer');
        return;
      }
      if(!/^(?=.*[a-z])(?=.*[A-Z]).+$/.test(password)){
        toast.error('Please Provide an Uppercase and LoawoerCase Latter');
        return;
      }
         
     createUser(email, password)
     .then(result => {
        addMoreInfo(name, photo)
 
        console.log(result.user);
        toast.success('created user sucessfully');
        
         setTimeout(()=>{
              window.location.reload();
         }, 2000)
    
     })
     .catch(errror => {
        toast.error('not created user sucessfully')
        console.error(errror)
     })
 
    }



    return (
        <div className="w-9/12 mx-auto h-[400px] flex justify-center items-center flex-col ">
            <div className="py-5 font-serif text-3xl text-[#B70050]"><p>Register  Now</p></div>
             <div>
                <form onSubmit={handleRegisterBtn}  className="space-y-3 ">
                    <input className="w-full border outline-none px-3 py-2 rounded-lg"name='name' placeholder="Enter Your Name" type="text" />
                    <input className="w-full border outline-none px-3 py-2 rounded-lg" name='email' placeholder="Enter Your Email" type="email" />
                    <input className="w-full border outline-none px-3 py-2 rounded-lg" name='photo' placeholder="Enter Your PhotUrl" type="text" />
                    <input className="w-full border outline-none px-3 py-2 rounded-lg" name='password' placeholder="Enter Your Password" type="password" />
                    <input className="w-full px-3 py-2 bg-[#eeebec] font-robotocon text-[#B70050] btn " type="submit" value="Register Now" />
                </form>

                <div className="text-center py-5 ">Already have an account ? <Link className='text-red-500' to={'/login'}>login</Link></div>
 
             </div>
        </div>
    );
};

export default Register;