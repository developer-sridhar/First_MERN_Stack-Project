import React, { useState, useEffect } from 'react';

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        // Load Firebase from CDN
        const { default: firebase } = await import('firebase/app');
        await import('firebase/firestore');

        const firebaseConfig = {
            apiKey: "AIzaSyB5houU5qD4OcwZkkVxVC6yfdcifCIJyMQ",
  authDomain: "sridhar-mern-bookstore.firebaseapp.com",
  projectId: "sridhar-mern-bookstore",
  storageBucket: "sridhar-mern-bookstore.appspot.com",
  messagingSenderId: "823048403568",
  appId: "1:823048403568:web:7387add6470f5ed677d2b5",
  measurementId: "G-P7Z0Y79DVS"
        };

        if (!firebase.apps.length) {
          firebase.initializeApp(firebaseConfig);
        }

        const db = firebase.firestore();
        const usersCollection = db.collection('users');
        const snapshot = await usersCollection.get();
        const usersData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setUsers(usersData);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();

    return () => {};
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>All Users</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            <p>User ID: {user.id}</p>
            <p>Email: {user.email}</p>
            {/* Add more user details as needed */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
