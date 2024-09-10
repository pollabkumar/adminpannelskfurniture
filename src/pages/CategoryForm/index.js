import React, { useState } from 'react';

const AddCategory = () => {
    const [categoryName, setCategoryName] = useState('');
    const [categoryStatus, setCategoryStatus] = useState('Enable'); // Default status

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Category Name:', categoryName);
        console.log('Category Status:', categoryStatus);
    };

    return (
        <div className="right-content">
                <div className="breadcum">
                    <h2>Add New Product Category </h2>
                </div>
        <div className='cate'>
            <form onSubmit={handleSubmit}>
                <div className='cat'>
                    <label>Category Name :</label>
                    <input
                        type="text"
                        value={categoryName}
                        onChange={(e) => setCategoryName(e.target.value)}
                        required
                        placeholder="Enter category name"
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
        </div>
    );
};

export default AddCategory;
