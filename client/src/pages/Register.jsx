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
    const name = e.target.name
    const value = e.target.value
   // const { name, value } = e.target;
    // console.log(name, value);
    setUser((preValu) => ({
      ...preValu,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(user);
  };

  return (
    <>
      <section>
        <main>
          <div className='section-registation'>
            <div className='container grid grid-two-cols'>
              <img src="#" alt="logo" width="400" height="500" />
            </div>

            <div className="registation-form">
              <h1 className='main-heading mb-3'> Registration Form</h1>
              <br />

              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="fullname">fullName</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    required
                    autoComplete='off'
                    value={user.name}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    required
                    autoComplete='off'
                    value={user.email}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    name="password"
                    placeholder="Enter your password"
                    required
                    autoComplete='off'
                    value={user.password}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phoneNumber">phoneNumber</label>
                  <input
                    type="tel"
                    name="phoneNumber"
                    placeholder="Enter your Number"
                    required
                    autoComplete='off'
                    value={user.phoneNumber}
                    onChange={handleChange}
                  />
                </div>

                <br />
                <button type="submit" className="btn btn-primary">Register</button>
              </form>
            </div>
          </div>
        </main>
      </section>
    </>
  );
}

export default Register;

