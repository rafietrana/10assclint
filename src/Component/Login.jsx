import { useContext } from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthProvider";
import { toast } from "react-toastify";

 

const Login = () => {

    const {loginUser, googleLogin, githubLogin} = useContext(AuthContext);
    const navigate = useNavigate();


  const location = useLocation();
  console.log('location is ', location);


    console.log('google login is ', googleLogin);
 



    const handleLoginBtn =(e) =>{
        e.preventDefault();
           const form = e.target;
           const email = form.email.value;
           const password = form.password.value;
           console.log(email,password);



           loginUser(email, password)
           .then(result => {
            console.log(result.user);
            toast.success('sucessfully login user');
            setTimeout(()=>{
                window.location.reload();
              },1000)
            return <Navigate to={location.state ? location?.state : '/'}></Navigate>
           })
           .catch(error =>{
            console.error(error);
            toast.error('not login user sucessfully please Try Again')
           })
    }


    const handleGoogleLoginBtn = () =>{
        googleLogin()
        .then(result =>{
            console.log(result.user);
            toast.success('Sucessfully Login With google');
            setTimeout(()=>{
              window.location.reload();
            },2000)
            navigate(location?.state ? location?.state : '/')
        })
        .catch(error =>{
            console.error(error)
            toast.error('Not Login With Google')
        })
    }
 
    const handleGitHubLoginBtn = () =>{
        githubLogin()
        .then(result =>{
            console.log(result.user);
            toast.success('Sucessfully Login With github')
            setTimeout(()=>{
                window.location.reload();
              },2000)
        })
        .catch(error =>{
            console.error(error)
            toast.error('Not Login With github')
        })
    }
 
    return (
        <div className="w-9/12 py-64 mx-auto h-[400px] flex justify-center items-center flex-col ">
            <div className="py-5 font-serif text-3xl text-[#B70050]"><p>Login Now</p></div>
             <div>
                <form  onSubmit={handleLoginBtn} className="space-y-3    ">
                    <input className="w-full border outline-none px-3 py-2 rounded-lg"name="email" placeholder="Enter Your Email" type="email" />
                    <input className="w-full border outline-none px-3 py-2 rounded-lg" name="password" placeholder="Enter Your Password" type="password" />
                    <input className="w-full px-3 py-2 btn text-[#B70050] font-robotocon  " type="submit" value="Login Now" />

                </form>
 
                <div className="flex py-14 gap-2 items-center justify-center">
                      <button className="border rounded-lg w-full px-3 py-2 text-black  font-robotocon flex gap-2 justify-center items-center" onClick={handleGoogleLoginBtn}><span><FaGoogle /></span>Google Login <p></p></button>
                      <button onClick={handleGitHubLoginBtn} className="border rounded-lg w-full px-3 py-2 gap-2 text-black flex justify-center items-center   font-robotocon"> <span><FaGithub /></span>GihHub  Login</button>
                </div>
                <div>
                    <p className="text-center py-2 w-full flex item-center justify-center  gap-2">Create  an account: <Link className="text-red-500  " to={'/register'}> Register</Link></p>
                </div>
             </div>
        </div>
    );
};

export default Login;