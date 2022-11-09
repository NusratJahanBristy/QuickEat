import React, { useEffect, useState } from 'react';
import ServicesCard from './ServicesCard';

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <div className='text-center mb-2'>
                <h2 className='text-5xl font-semibold text-orange-600'>Our Services</h2>
                <p>Orders your healthy & desire food..</p>
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    services.map(service => <ServicesCard
                        key={service._id} service={service}
                    ></ServicesCard>)
                }
            </div>
        </div>
    );
};

export default Services;