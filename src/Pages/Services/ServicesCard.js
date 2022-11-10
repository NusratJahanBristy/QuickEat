import React from 'react';
import { Link } from 'react-router-dom';
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

const ServicesCard = ({ service }) => {
  const { _id, img, price, serviceName, details, rating } = service;
  return (
    <div className="card w-full bg-base-100 shadow-xl">
      <figure className='h-1/2'><img className='h-5/6 w-5/6' src={img} alt="Shoes" /></figure>
      <div className="card-body">
        <h2 className="card-title text-3xl font-semibold">{serviceName}</h2>
        <p className='text-xl '>
          {
            details?.length > 100 ?
              <p>{details?.slice(0, 100) + '...'}</p>
              : <p>{details}</p>
          }

        </p>
        <div className='flex mb-2'>
          <p className='text-2xl text-orange-600 font-semibold'>Price: ${price}</p>
          <p className='text-2xl text-gray-600 font-semibold'><div className='flex justify-end text-warning align-top'>{rating}<FaStar></FaStar><FaStar></FaStar><FaStarHalfAlt></FaStarHalfAlt> </div></p>
        </div>

        <div className="card-actions justify-end">
          <button className="btn btn-block btn-warning bg-orange-600"><Link className='text-white  text-decoration-none' to={`/services/${_id}`}>Go to Details</Link></button>
        </div>
      </div>
    </div>
  );
};

export default ServicesCard;