import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../contexts/AuthProvider';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import axios from 'axios';

const Users = ({ totalUsers, setTotalUsers }) => {
    const { user, createUser } = useContext(AuthContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // Function to handle user creation
    const handleCreateUser = async () => {
        try {
            await createUser(email, password);
            // After successfully creating the user, update the total users count
            setTotalUsers(totalUsers + 1);
            // Clear input fields
            setEmail('');
            setPassword('');
            alert('User created successfully!');
        } catch (error) {
            console.error("Error creating user:", error);
        }
    };

    return (
        <div>
            <div>
                <h2>Create New User</h2>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button onClick={handleCreateUser}>Create User</button>
            </div>
            <div>
                {user && user.isAdmin && (
                    <div>Total Users: {totalUsers}</div>
                )}
            </div>
        </div>
    );
};

export default Users;
