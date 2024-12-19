// AdminPanel.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdminPanel = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === 'admin123') {
      setIsAuthenticated(true);
      localStorage.setItem('adminAuth', 'true');
    } else {
      setError('Invalid password');
    }
  };

  const fetchBookings = async () => {
    try {
      const response = await axios.get('https://re-design-backend.onrender.com/api/bookings');
      setBookings(response.data.data || []);
    } catch (err) {
      setError('Failed to fetch bookings');
    }
    setLoading(false);
  };

  useEffect(() => {
    const isAuth = localStorage.getItem('adminAuth');
    if (isAuth) {
      setIsAuthenticated(true);
      fetchBookings();
    }
  }, []);

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('adminAuth');
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="max-w-md w-full m-4">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-6 text-center text-black">
              Admin Login
            </h2>
            {error && (
              <div className="mb-4 text-yellow-500 text-center">{error}</div>
            )}
            <form onSubmit={handleLogin}>
              <div className="mb-4">
                <input
                  type="password"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-yellow-500"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-yellow-500 text-black font-bold py-2 rounded-lg hover:bg-yellow-600"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white p-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Booking Requests</h1>
          <button
            onClick={handleLogout}
            className="bg-yellow-500 text-black px-4 py-2 rounded-lg font-bold hover:bg-yellow-600"
          >
            Logout
          </button>
        </div>

        {loading ? (
          <div className="text-center py-4">Loading...</div>
        ) : (
          <div className="bg-white text-black rounded-lg shadow overflow-x-auto">
            <table className="min-w-full">
              <thead className="bg-yellow-500">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase">Date</th>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase">Name</th>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase">Company</th>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase">Position</th>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase">Contact</th>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase">Message</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {bookings.map((booking) => (
                  <tr
                    key={booking._id}
                    className="hover:bg-yellow-100"
                  >
                    <td className="px-6 py-4 text-sm">
                      {new Date(booking.createdAt).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 text-sm font-medium">
                      {booking.name}
                    </td>
                    <td className="px-6 py-4 text-sm">
                      {booking.companyName}
                    </td>
                    <td className="px-6 py-4 text-sm">
                      {booking.position}
                    </td>
                    <td className="px-6 py-4 text-sm">
                      <div>{booking.email}</div>
                      <div>{booking.countryCode} {booking.phoneNumber}</div>
                    </td>
                    <td className="px-6 py-4 text-sm">
                      {booking.message || 'No message'}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminPanel;
