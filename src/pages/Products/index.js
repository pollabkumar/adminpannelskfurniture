import React, { useState } from 'react';
import bed from '../../assets/images/1.jpg';
import dinning from '../../assets/images/2.jpg';
import sofa from '../../assets/images/3.jpg'
import { FaPlus } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const Products = () => {
    const products = [
        { id: 1, name: 'Bed', code: 'W001', category: 'Wooden Bed', image: bed, status: 'Enabled' },
        { id: 2, name: 'Dinning', code: 'D001', category: 'Wooden Dinning', image: dinning, status: 'Enabled' },
        { id: 3, name: 'Sofa', code: 'D001', category: 'Wooden Sofa', image: sofa, status: 'Disable' },
    ];

    // Pagination settings
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 3;

    // Calculate total pages
    const totalPages = Math.ceil(products.length / productsPerPage);

    // Get current products
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

    // Handle page change
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };
    const navigate = useNavigate();  // Used for navigation

    const handleAddNewProduct = () => {
        navigate('/productform');
    };

    return (
        <>
            <div className="right-content">
                <div className="breadcum">
                    <h2>Products List</h2>
                </div>

                {/* Button aligned to the right */}
                <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '30px' }}>
                    <button   onClick={handleAddNewProduct} 
                        style={{ padding: '5px 10px', backgroundColor: '#dd3012', color: '#fff', border: 'none', borderRadius: '5px', fontSize: '13px' }}
                    >
                    <FaPlus />    Add New Product
                    </button>
                </div>

                <div className="product-table">
                    <table style={{ width: '100%', textAlign: 'center' }}>
                        <thead>
                            <tr>
                                <th>Sl No</th>
                                <th>Product</th>
                                <th>Product Code</th>
                                <th>Category</th>
                                <th>Image</th>
                                <th>Enable/Disable</th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentProducts.map((product, index) => (
                                <tr key={product.id}>
                                    <td>{indexOfFirstProduct + index + 1}</td>
                                    <td>{product.name}</td>
                                    <td>{product.code}</td>
                                    <td>{product.category}</td>
                                    <td>
                                        <img src={product.image} alt={product.name} style={{ width: '50px', height: '50px' }} />
                                    </td>
                                    <td>
                                        <button 
                                            className="tabstatus"
                                            style={{
                                                backgroundColor: product.status === 'Enabled' ? 'green' : 'red',
                                                color: 'white'
                                            }}
                                        >
                                            {product.status === 'Enabled' ? 'Disable' : 'Enable'}
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Pagination controls */}
                <div className="pagination">
                    <button 
                        onClick={() => handlePageChange(currentPage - 1)} 
                        disabled={currentPage === 1}
                    >
                        Previous
                    </button>

                    {Array.from({ length: totalPages }, (_, index) => (
                        <button
                            key={index + 1}
                            onClick={() => handlePageChange(index + 1)}
                            className={currentPage === index + 1 ? 'active' : ''}
                        >
                            {index + 1}
                        </button>
                    ))}

                    <button 
                        onClick={() => handlePageChange(currentPage + 1)} 
                        disabled={currentPage === totalPages}
                    >
                        Next
                    </button>
                </div>
            </div>
        </>
    );
};

export default Products;
