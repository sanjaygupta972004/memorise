import React, { useState } from 'react';

const Register = () => {
  const initialState = {
    name: '',
    email: '',
    password: '',
    phoneNumber: ''
  };

  const [user, setUser] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevValue) => ({
      ...prevValue,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
  };

  return (
    <section className="min-h-screen bg-gray-100 py-12">
      <main className="container mx-auto px-4">
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          <img src="#" alt="logo" className="mx-auto md:mx-0 w-64 h-auto" />
          <div className="bg-white p-8 rounded shadow-md">
            <h1 className='text-2xl mb-4'>Registration Form</h1>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-600">Full Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  required
                  autoComplete='off'
                  className="mt-1 p-2 w-full border rounded-md"
                  value={user.name}
                  onChange={handleChange}
                />
              </div>

              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-600">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  required
                  autoComplete='off'
                  className="mt-1 p-2 w-full border rounded-md"
                  value={user.email}
                  onChange={handleChange}
                />
              </div>

              <div className="mb-4">
                <label htmlFor="password" className="block text-sm font-medium text-gray-600">Password</label>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  required
                  autoComplete='off'
                  className="mt-1 p-2 w-full border rounded-md"
                  value={user.password}
                  onChange={handleChange}
                />
              </div>

              <div className="mb-4">
                <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-600">Phone Number</label>
                <input
                  type="tel"
                  name="phoneNumber"
                  placeholder="Enter your Number"
                  required
                  autoComplete='off'
                  className="mt-1 p-2 w-full border rounded-md"
                  value={user.phoneNumber}
                  onChange={handleChange}
                />
              </div>

              <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600">
                Register
              </button>
            </form>
          </div>
        </div>
      </main>
    </section>
  );
}

export default Register;
