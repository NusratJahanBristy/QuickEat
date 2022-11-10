import React from 'react';

const AddServices = () => {
    const handleAddServices = event => { }
    return (
        <div className='mt-8 px-20 mx-10'>

            <form onSubmit={handleAddServices}>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                    <input name='Title' type="text" placeholder="Title" className="input input-bordered w-full  " />
                    <input name='Price' type="text" placeholder="Price" className="input input-bordered w-full " />
                    <input name='imgUrl' type="text" placeholder="imgUrl" className="input input-bordered w-full " />
                </div>
                <textarea name='Description' className="textarea textarea-bordered mt-2 w-full h-24" placeholder="Description" required></textarea>
                <input className='btn btn-warning bg-orange-600 text-white my-4' type="submit" value="Add Review " />
            </form>
        </div>
    );
};

export default AddServices;