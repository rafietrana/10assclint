import { useContext } from "react";
import { AuthContext } from "./AuthProvider";

const WeLoading = ({children}) => {
    const { webLoading } = useContext(AuthContext);
    if (webLoading) {
 
            return <p className="flex h-screen justify-center item"><span className="loading loading-bars loading-lg"></span></p>
 
     
    }
    else{
        return children;
    }
};

export default WeLoading;
