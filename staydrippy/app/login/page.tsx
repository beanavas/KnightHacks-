"use client"

import { useState } from 'react';
import { useRouter } from 'next/navigation'; // Use 'next/router' if you're on an older version
import Link from 'next/link';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const response = await fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        password,
      }),
    });

    if (response.ok) {
      // Redirect to the upload page if login is successful
      router.push('/upload');
    } else {
      const data = await response.json();
      alert(data.message); // Show an alert if login fails
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-pink-100">
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center text-pink-700 mb-6">Login</h2>

        <form onSubmit={handleSubmit}>
          {/* Username input */}
          <div className="mb-4">
            <label htmlFor="username" className="block text-sm font-medium text-pink-700">
              Username
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full mt-1 px-4 py-2 border border-pink-500 text-pink-700 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
              placeholder="Enter your username"
            />
          </div>

          {/* Password input */}
          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-pink-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full mt-1 px-4 py-2 border border-gray-300 text-pink-700 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-white-500 focus:border-pink-500"
              placeholder="Enter your password"
            />
          </div>
          
          <div className="flex justify-center mt-4">
            <button
              type="submit"
              className="bg-pink-500 text-white px-6 py-2 rounded-full hover:bg-gray-600"
            >
              Get Started
            </button>
          </div>
        </form>
        
        {/* Optional: Link to another page if needed */}
        <div className="flex justify-center mt-4">
          <Link href="/upload" className="text-pink-500">Skip to Upload</Link>
        </div>
      </div>
    </div>
  );
}
