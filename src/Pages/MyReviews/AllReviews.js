import React from 'react';

const AllReviews = ({review,handleDelete}) => {
    const { _id, img, price, serviceName, imgUrl,details, rating } = review;
    
    return (
        <tr>
        <th>
            <label>
                <button onClick={() => handleDelete(_id)} className='btn btn-ghost'>X</button>
            </label>
        </th>
        <td>
            <div className="flex items-center space-x-3">
                <div className="avatar">
                    <div className="rounded w-24 h-24">
                        {/* {
                            orderService?.img && 
                            <img src={orderService.img} alt="Avatar Tailwind CSS Component" />} */}
                    </div>
                </div>
                <div>
                    <div className="font-bold">{serviceName}</div>
                    <div className="text-sm opacity-50">{details}</div>
                </div>
            </div>
        </td>
        <td>
            {serviceName}
            <br />
            <span className="badge badge-ghost badge-sm">${price}</span>
        </td>
        <td>Purple</td>
        <th>
            {/* <button 
            onClick={() => handleStatusUpdate(_id)}
            className="btn btn-ghost btn-xs">{status ? status : 'pending'}</button> */}
        </th>
    </tr>
    );
};

export default AllReviews;