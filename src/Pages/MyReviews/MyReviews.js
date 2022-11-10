import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import AllReviews from './AllReviews';
import { toast } from 'react-toastify';

const MyReviews = () => {
    const {user}=useContext(AuthContext);
    const [reviews,setReviews]=useState([])

    useEffect(()=>{
       fetch(`http://localhost:5000/reviews`)
       .then(res=>res.json())
       .then(data=>setReviews(data)) 
    })

    const handleDelete = id =>{
        const proceed = window.confirm('Are you sure, you want to delete this review');
        if(proceed){
            fetch(`http://localhost:5000/reviews/${id}`, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount > 0){
                    toast.success('Successfully Deleted', { autoClose: 3000 })
                    const remaining = reviews.filter(rew => rew._id !== id);
                    setReviews(remaining);
                }
            })
        }
    }
    
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
                            handleDelete={handleDelete}
                        ></AllReviews>)
                        
                    }
                </tbody>
            </table>
        </div>
    </div>
    );
};

export default MyReviews;