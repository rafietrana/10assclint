import {   useEffect } from "react";
 
import useAuth from "./useAuth";

 

const ShowCard = () => {
           const {user} = useAuth() || {};
           const userEmail = user?.email;
            
 
      console.log('usersEmails is', userEmail);


      


 
     
 
          


    return (
        <div className="w-9/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                <div>
                               <p>This is Show Card Component</p>
                </div>
        </div>
    );
};

export default ShowCard;