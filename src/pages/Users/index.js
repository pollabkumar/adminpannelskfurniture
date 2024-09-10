import React, { useState } from 'react';

const Users = () => {
    const users = [
        { id: 1, name: 'Ram', phone: '9987665432', email: 'info@example.com', action: 'Details', status: 'Active' },
        { id: 2, name: 'Sam', phone: '9987665433', email: 'info@example.com', action: 'Details', status: 'Inactive' },
        { id: 3, name: 'Ram', phone: '9987665434', email: 'info@example.com', action: 'Details', status: 'Active' },
        { id: 4, name: 'Raj', phone: '9987665435', email: 'info@example.com', action: 'Details', status: 'Inactive' },
        { id: 5, name: 'Manish', phone: '9987665436', email: 'info@example.com', action: 'Details', status: 'Active' },
      
    ];

    // Pagination settings
    const [currentPage, setCurrentPage] = useState(1);
    const usersPerPage = 3;

    // Calculate total pages
    const totalPages = Math.ceil(users.length / usersPerPage);

    // Get current users
    const indexOfLastUser = currentPage * usersPerPage;
    const indexOfFirstUser = indexOfLastUser - usersPerPage;
    const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

    // Handle page change
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <>
            <div className="right-content">
                <div className="breadcum">
                    <h2>Users List</h2>
                </div>
                <div className="user-table">
                    <table style={{ width: '100%', textAlign: 'center' }}>
                        <thead>
                            <tr>
                                <th>Sl No</th>
                                <th>Name</th>
                                <th>Phone No</th>
                                <th>Email</th>
                                <th>Action</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentUsers.map(user => (
                                <tr key={user.id}>
                                    <td>{user.id}</td>
                                    <td>{user.name}</td>
                                    <td>{user.phone}</td>
                                    <td>{user.email}</td>
                                    <td>
                                        <button className="tabaction">
                                            {user.action}
                                        </button>
                                    </td>
                                    <td>
                                        <button className="tabstatus">
                                            {user.status}
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

export default Users;
