// Registration.js
import React from 'react';

function Registration() {
  return (
    <div>
      <h2>Registration</h2>
      <form>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" name="username" />
        <br />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" />
        <br />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" />
        <br />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Registration;
