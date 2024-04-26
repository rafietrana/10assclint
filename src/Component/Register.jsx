 
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from './AuthProvider';
const Register = () => {


    const {createUser} = useContext(AuthContext);
    console.log('create user is a', createUser);
       


    const handleRegisterBtn = (e) =>{
        e.preventDefault();
        console.log('alhamdulillah your button is now working');
        const form = e.target;
        const  name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const password = form.password.value;

       


     console.log(name, email, password, photo);
         
     createUser(email, password)
     .then(result => {
        alert('sucessfully created user')
        console.log(result.user);
    
     })
     .catch(errror => {
        alert('not created user sucessfully')
        console.error(errror)
     })
 
    }



    return (
        <div className="w-9/12 mx-auto h-[400px] flex justify-center items-center flex-col ">
            <div className="py-5 font-serif text-3xl"><p>Register  Now</p></div>
             <div>
                <form onSubmit={handleRegisterBtn}  className="space-y-3 ">
                    <input className="w-full border outline-none px-3 py-2 rounded-lg"name='name' placeholder="Enter Your Name" type="text" />
                    <input className="w-full border outline-none px-3 py-2 rounded-lg" name='email' placeholder="Enter Your Email" type="email" />
                    <input className="w-full border outline-none px-3 py-2 rounded-lg" name='photo' placeholder="Enter Your PhotUrl" type="text" />
                    <input className="w-full border outline-none px-3 py-2 rounded-lg" name='password' placeholder="Enter Your Password" type="password" />
                    <input className="w-full px-3 py-2 bg-[#B70050] font-robotocon text-white " type="submit" value="Register Now" />
                </form>

                <div className="text-center py-5 ">Already have an account ? <Link className='text-red-500' to={'/login'}>login</Link></div>
    
             </div>
        </div>
    );
};

export default Register;