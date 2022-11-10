import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

const ServiceDetails = () => {
  const services = useLoaderData();
  const { img, price, serviceName, details, rating } = services;
  return (
    <div className="hero w-full  ">
      <div className="hero-content gap-20 grid md:grid-cols-2 flex-col lg:flex-row">
        <div className="text-center lg:text-left">

          <div className="card w-full bg-base-100 shadow-xl">
            <figure className='h-1/2'><img className='h-5/6 w-5/6' src={img} alt="Shoes" /></figure>
            <div className="card-body">
              <h2 className="card-title text-3xl font-semibold  ">{serviceName}</h2>
              <p className='text-xl '>
                {details}

              </p>
              <div className='flex mb-2'>
                <p className='text-2xl text-orange-600 font-semibold'>Price: $ {price}</p>
                <p className='text-2xl text-gray-600 font-semibold'><div className='flex justify-end text-warning align-top'>{rating}<FaStar></FaStar><FaStar></FaStar><FaStarHalfAlt></FaStarHalfAlt> </div></p>
              </div>

              <div className="card-actions justify-end">
                <button className="btn btn-block btn-warning bg-orange-600"><Link className='text-white  text-decoration-none'>Go to Checkout page</Link></button>
              </div>
            </div>
          </div>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100  py-10">
          <h1 className="text-5xl text-center font-bold">Sign up</h1>
        </div>
      </div>
    </div>

  );
};

export default ServiceDetails;