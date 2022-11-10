import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import AllReviews from './AllReviews';

const MyReviews = () => {
    const {user}=useContext(AuthContext);
    const [reviews,setReviews]=useState([])

    useEffect(()=>{
       fetch(`http://localhost:5000/reviews`)
       .then(res=>res.json())
       .then(data=>setReviews(data)) 
    })

  console.log(reviews)
    
    return (
        <div>
          
        <h2 className="text-5xl text-center py-5">{reviews.length} Reviews</h2>
        <div className="overflow-x-auto w-full">
            <table className="table w-full">
                <thead>
                    <tr>
                        <th>
                        </th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Review</th>
                        <th></th>
                    </tr>
                </thead>
                
                <tbody>
                    {
                        reviews?.map(review => <AllReviews
                            key={review._id}
                            review={review}
                        ></AllReviews>)
                        
                    }
                </tbody>
            </table>
        </div>
    </div>
    );
};

export default MyReviews;