import React, { useState } from 'react';

const ChangePassword = () => {
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Basic validation: Check if passwords match
        if (newPassword !== confirmPassword) {
            setErrorMessage('Passwords do not match');
            return;
        }

        // Clear the error message if passwords match
        setErrorMessage('');

        // Logic to handle password change (e.g., API call)
        console.log('New Password:', newPassword);
        console.log('Confirm Password:', confirmPassword);
    };

    return (
        <div className="right-content">
            <div className="breadcum">
                <h2>Change Password</h2>
            </div>
            <div className="change-password-form">
                <form onSubmit={handleSubmit}>
                    {/* New Password Field */}
                    <div className="password-field">
                        <label>New Password:</label>
                        <input
                            type="password"
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                            required
                            placeholder="Enter new password"
                        />
                    </div>

                    {/* Confirm Password Field */}
                    <div className="password-field">
                        <label>Confirm Password:</label>
                        <input
                            type="password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                            placeholder="Confirm new password"
                        />
                    </div>

                    {/* Error Message */}
                    {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}

                    {/* Submit Button */}
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default ChangePassword;
