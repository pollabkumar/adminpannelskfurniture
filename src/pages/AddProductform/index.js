import React, { useState } from 'react';

const AddProduct = () => {
    const [productName, setProductName] = useState('');
    const [productCode, setProductCode] = useState('');
    const [category, setCategory] = useState('');
    const [image, setImage] = useState(null);

    // Example categories (you can replace this with dynamic categories from an API)
    const categories = [
        { id: 1, name: 'Wooden Bed' },
        { id: 2, name: 'Wooden Sofa' },
        { id: 3, name: 'Wooden Dinning' },
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Product Name:', productName);
        console.log('Product Code:', productCode);
        console.log('Selected Category:', category);
        console.log('Selected Image:', image);

        // Logic for handling form submission (e.g., sending data to backend)
    };

    const handleImageChange = (e) => {
        setImage(e.target.files[0]); // Store the selected image file
    };

    return (
        <div className="right-content">
            <div className="breadcum">
                <h2>Add New Product</h2>
            </div>
            <div className="cate">
                <form onSubmit={handleSubmit} encType="multipart/form-data">
                    {/* Product Name */}
                    <div className="cat">
                        <label>Product Name :</label>
                        <input
                            type="text"
                            value={productName}
                            onChange={(e) => setProductName(e.target.value)}
                            required
                            placeholder="Enter product name"
                        />
                    </div>

                    {/* Product Code */}
                    <div className="cat">
                        <label>Product Code :</label>
                        <input
                            type="text"
                            value={productCode}
                            onChange={(e) => setProductCode(e.target.value)}
                            required
                            placeholder="Enter product code"
                        />
                    </div>

                    {/* Category Select Box */}
                    <div className="cat">
                        <label>Select Category :</label>
                        <select
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            required
                        >
                            <option value="">Select a category</option>
                            {categories.map((cat) => (
                                <option key={cat.id} value={cat.id}>
                                    {cat.name}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* Image Upload */}
                    <div className="cat">
                        <label>Product Image :</label>
                        <input
                            type="file"
                            onChange={handleImageChange}
                            accept="image/*"
                            required
                        />
                    </div>

                    {/* Submit Button */}
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default AddProduct;
