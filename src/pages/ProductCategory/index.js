import React, { useState } from 'react';
import { FaPlus } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const ProductCategory = () => {
    const productcategory = [
        { id: 1, name: 'Wooden Bed', action: 'Details', status: 'Enable', enabledisable: 'Disable', edit: 'Edit' },
        { id: 2, name: 'Wooden Table', action: 'Details', status: 'Enable', enabledisable: 'Disable', edit: 'Edit' },
        { id: 3, name: 'Wooden Sofa', action: 'Details', status: 'Enable', enabledisable: 'Disable', edit: 'Edit' },

    ];

    // Pagination settings
    const [currentPage, setCurrentPage] = useState(1);
    const usersPerPage = 3;

    // Calculate total pages
    const totalPages = Math.ceil(productcategory.length / usersPerPage);

    // Get current users
    const indexOfLastUser = currentPage * usersPerPage;
    const indexOfFirstUser = indexOfLastUser - usersPerPage;
    const currentUsers = productcategory.slice(indexOfFirstUser, indexOfLastUser);

    // Handle page change
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };
    const navigate = useNavigate();  // Used for navigation

    const handleAddNewCategory = () => {
        navigate('/categoryform');
    };


    return (
        <>
            <div className="right-content">
                <div className="breadcum">
                    <h2>Product Category List</h2>
                </div>

                <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '30px' }}>
                    <button   onClick={handleAddNewCategory} 
                        style={{ padding: '5px 10px', backgroundColor: '#dd3012', color: '#fff', border: 'none', borderRadius: '5px', fontSize: '13px' }}
                    >
                    <FaPlus />    Add New Category
                    </button>
                </div>
                <div className="user-table">
                    <table style={{ width: '100%', textAlign: 'center' }}>
                        <thead>
                            <tr>
                                <th>Sl No</th>
                                <th>Name</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {productcategory.map(user => (
                                <tr key={user.id}>
                                    <td>{user.id}</td>
                                    <td>{user.name}</td>
                                    <td>
                                        <button className="tabstatus">
                                            {user.status}
                                        </button>
                                    </td>
                                    <td className="procat">
                                        <button className="tabenable">
                                            {user.enabledisable}
                                        </button>
                                        <button className="tabedit">
                                            {user.edit}
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

export default ProductCategory;
