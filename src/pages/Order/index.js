import React, { useState } from 'react';
import { FaPlus } from "react-icons/fa";

const Orders = () => {
    const orders = [
        { id: 1, customerName: 'Raj', orderDate: '2024-09-01', extraCharge: 'Rs 10', totalAmount: 'Rs 200', paymentMethod: 'Credit Card', status: 'Completed' },
        { id: 2, customerName: 'Manish', orderDate: '2024-09-02', extraCharge: 'Rs 15', totalAmount: 'Rs 250', paymentMethod: 'Paytm', status: 'Pending' },
        { id: 3, customerName: 'Sam', orderDate: '2024-09-03', extraCharge: 'Rs 5', totalAmount: 'Rs 100', paymentMethod: 'Bank Transfer', status: 'Cancelled' },
    ];

    // Pagination settings
    const [currentPage, setCurrentPage] = useState(1);
    const ordersPerPage = 3;

    // Calculate total pages
    const totalPages = Math.ceil(orders.length / ordersPerPage);

    // Get current orders
    const indexOfLastOrder = currentPage * ordersPerPage;
    const indexOfFirstOrder = indexOfLastOrder - ordersPerPage;
    const currentOrders = orders.slice(indexOfFirstOrder, indexOfLastOrder);

    // Handle page change
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <>
            <div className="right-content">
                <div className="breadcum">
                    <h2>Orders List</h2>
                </div>
                <div className="order-table">
                    <table style={{ width: '100%', textAlign: 'center' }}>
                        <thead>
                            <tr>
                                <th>Order ID</th>
                                <th>Customer Name</th>
                                <th>Order Date</th>
                                <th>Extra Charge</th>
                                <th>Total Amount</th>
                                <th>Payment Method</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentOrders.map((order, index) => (
                                <tr key={order.id}>
                                    <td>{order.id}</td>
                                    <td>{order.customerName}</td>
                                    <td>{order.orderDate}</td>
                                    <td>{order.extraCharge}</td>
                                    <td>{order.totalAmount}</td>
                                    <td>{order.paymentMethod}</td>
                                    <td>
                                        <button 
                                            className="tabstatus"
                                            style={{
                                                backgroundColor: order.status === 'Completed' ? 'green' : (order.status === 'Pending' ? 'orange' : 'red'),
                                                color: 'white'
                                            }}
                                        >
                                            {order.status}
                                        </button>
                                    </td>
                                    <td>
                                        <button 
                                            className="action-btn"
                                            style={{ padding: '5px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px', fontSize: '12px' }}
                                        >
                                            View
                                        </button>
                                        <button 
                                            className="action-btn"
                                            style={{ padding: '5px', backgroundColor: '#ff0000', color: '#fff', border: 'none', borderRadius: '5px', fontSize: '12px', marginLeft: '5px' }}
                                        >
                                            Delete
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

export default Orders;
