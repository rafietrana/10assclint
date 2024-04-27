import { useContext } from "react";
import { AuthContext } from '../Component/AuthProvider';
import { Navigate, useLocation } from "react-router";

 

const PrivetRoute = ({children}) => {


 

    const {user, loading} = useContext(AuthContext);
 const location = useLocation();
 console.log('location value frome privet route', location);

 if(loading){
    return <p className="w-9/12 mx-auto flex justify-center items-center py-4"><span className="loading loading-spinner loading-lg"></span></p>
 }
 
      if (user) {
        return children;
          }

          else{
            return <Navigate state={location.pathname} to={'/login'}></Navigate>
          }
};

export default PrivetRoute;