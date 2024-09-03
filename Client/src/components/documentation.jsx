import React from 'react';
import '../components/Documentation.css';

function Documentation() {
  return (
    <>
      <div>
        <div className="container-fluid documentation-body">
          <div className="row">
            <div className="col-md-2 col-sm-12 col-xs-12">
              <nav id="navbar">
                <header>CRM</header>
                <ul className="nav nav-pills nav-stacked">
                  <a className="nav-link" href="#Introduction" rel="internal">
                    <li>What is CRM?</li>
                  </a>
                  <a className="nav-link" href="#What_does_CRM_do?" rel="internal">
                    <li>What does CRM do?</li>
                  </a>
                  <a className="nav-link" href="#What_makes_businesses_choose_CRM_systems?" rel="internal">
                    <li>What makes businesses choose CRM systems?</li>
                  </a>
                  <a className="nav-link" href="#Who_can_use_a_CRM_system?" rel="internal">
                    <li>Who can use a CRM system?</li>
                  </a>
                  <a className="nav-link" href="#Key_features_of_a_CRM" rel="internal">
                    <li>Key features of a CRM</li>
                  </a>
                  <a className="nav-link" href="#Benefits_of_CRM" rel="internal">
                    <li>Benefits of CRM</li>
                  </a>
                  <a className="nav-link" href="#Types_of_CRM" rel="internal">
                    <li>Types of CRM</li>
                  </a>
                  <a className="nav-link" href="#Challenges_in_Implementing_CRM" rel="internal">
                    <li>Challenges in Implementing CRM</li>
                  </a>
                  <a className="nav-link" href="#Introduction_to_MERN" rel="internal">
                    <li>Introduction to MERN Stack</li>
                  </a>
                  <a className="nav-link" href="#Authentication_in_MERN" rel="internal">
                    <li>Authentication in MERN Stack</li>
                  </a>
                </ul>
              </nav>
            </div>

            <div className="col-md-10 col-sm-12 col-xs-12">
              <main id="main-doc">
                <section className="main-section" id="Introduction">
                  <header>What is CRM?</header>
                  <article>
                    <p>CRM stands for Customer Relationship Management...</p>
                  </article>
                </section>

                <section className="main-section" id="What_does_CRM_do?">
                  <header>What does CRM do?</header>
                  <article>
                    <p>CRM software serves several functions to help businesses...</p>
                    <ul>
                      <li>Centralized Customer Data Management...</li>
                      <li>Sales Automation...</li>
                      <li>Marketing Automation...</li>
                      <li>Customer Service and Support...</li>
                      <li>Analytics and Reporting...</li>
                      <li>Collaboration and Communication...</li>
                    </ul>
                  </article>
                </section>

                <section className="main-section" id="What_makes_businesses_choose_CRM_systems?">
                  <header>What makes businesses choose CRM systems?</header>
                  <article>
                    <p>Businesses choose CRM systems for several reasons...</p>
                  </article>
                </section>

                <section className="main-section" id="Who_can_use_a_CRM_system?">
                  <header>Who can use a CRM system?</header>
                  <article>
                    <p>Anyone with basic knowledge can use a CRM system...</p>
                    <ul>
                      <li>Marketers: Marketers are generally responsible...</li>
                      <li>Sales reps: Sales reps are the customer-facing...</li>
                      <li>Customer service agents: After-sales support teams...</li>
                    </ul>
                  </article>
                </section>

                <section className="main-section" id="Key_features_of_a_CRM">
                  <header>What are the key features of a Customer Relationship Management system?</header>
                  <article>
                    <p className="sub-txt sm-bld"><a href="/crm/lead-management.html?source_from=what_is_crm">Lead management</a></p>
                    <p className="sub-txt">If finding quality leads is one thing...</p>
                    <p className="sub-txt sm-bld"><a href="/crm/contact-management.html?source_from=what_is_crm">Contact management</a></p>
                    <p className="sub-txt">Contact management features in CRMs help you organize...</p>
                    <p className="sub-txt sm-bld"><a href="/crm/deal-management.html?source_from=what_is_crm">Deal management</a></p>
                    <p className="sub-txt">A deal once lost is lost forever...</p>
                    <p className="sub-txt sm-bld"><a href="/crm/email.html?source_from=what_is_crm">Email management</a></p>
                    <p className="sub-txt">Email management is a core function of any business...</p>
                  </article>
                </section>

                <section className="main-section" id="Benefits_of_CRM">
                  <header>Benefits of CRM</header>
                  <article>
                    <p>Implementing a CRM system offers numerous benefits...</p>
                    <ul>
                      <li>Improved Customer Relationships...</li>
                      <li>Increased Efficiency and Productivity...</li>
                      <li>Better Data and Reporting...</li>
                      <li>Enhanced Customer Retention...</li>
                      <li>Scalability and Growth...</li>
                    </ul>
                  </article>
                </section>

                <section className="main-section" id="Types_of_CRM">
                  <header>Types of CRM</header>
                  <article>
                    <p>CRM systems can be categorized into three main types...</p>
                    <ul>
                      <li>Operational CRM: Focuses on customer-facing processes...</li>
                      <li>Analytical CRM: Focuses on analyzing customer data...</li>
                      <li>Collaborative CRM: Focuses on improving collaboration...</li>
                    </ul>
                  </article>
                </section>

                <section className="main-section" id="Challenges_in_Implementing_CRM">
                  <header>Challenges in Implementing CRM</header>
                  <article>
                    <p>While CRM systems offer numerous benefits, implementing them...</p>
                    <ul>
                      <li>Data Integration: Combining data from various sources...</li>
                      <li>User Adoption: Ensuring all employees use the CRM effectively...</li>
                      <li>Customization: Tailoring the CRM to meet specific business needs...</li>
                      <li>Cost: Managing the costs associated with CRM implementation...</li>
                      <li>Training: Providing adequate training for users...</li>
                    </ul>
                  </article>
                </section>

                <section className="main-section" id="Introduction_to_MERN">
                  <header>Introduction to MERN Stack</header>
                  <article>
                    <p>The MERN stack is a popular set of technologies for building web applications. It consists of:</p>
                    <ul>
                      <li><strong>MongoDB</strong>: A NoSQL database that stores data in JSON-like documents, offering flexibility and scalability.</li>
                      <li><strong>Express.js</strong>: A web application framework for Node.js, providing robust features for building web and mobile applications.</li>
                      <li><strong>React</strong>: A JavaScript library for building user interfaces, particularly single-page applications where you need a fast, interactive user experience.</li>
                      <li><strong>Node.js</strong>: A JavaScript runtime built on Chrome's V8 JavaScript engine, allowing you to build scalable network applications.</li>
                    </ul>
                    <p>The MERN stack is known for its ability to create high-performance, dynamic web applications using JavaScript across the entire stack, from front-end to back-end and database.</p>
                  </article>
                </section>

                <section className="main-section" id="Authentication_in_MERN">
                  <header>Authentication in MERN Stack</header>
                  <article>
                    <p>Implementing authentication in a MERN stack application involves several steps:</p>
                    <ul>
                      <li><strong>Set Up User Schema in MongoDB</strong>: Define a schema for user data, including fields for username, password, and other relevant information. Use bcrypt to hash passwords before saving them.</li>
                      <li><strong>RESTful Authentication with Express.js</strong>: Create routes for user registration and login. Use middleware to protect routes that require authentication.</li>
                      <li><strong>JWT for Token-Based Authentication</strong>: Use JSON Web Tokens (JWT) to manage authentication. Generate a token upon user login and verify the token for protected routes.</li>
                      <li><strong>React for Front-End Authentication</strong>: Create forms for user login and registration. Use React's state management to handle authentication state and store tokens in localStorage or cookies.</li>
                    </ul>
                    <p>Here is a basic example of how to implement authentication in a MERN stack application:</p>
                    <h5>1. User Schema (MongoDB)</h5>
                    <pre><code>{`
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});

UserSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

const User = mongoose.model('User', UserSchema);
module.exports = User;
                    `}</code></pre>

                    <h5>2. Authentication Routes (Express.js)</h5>
                    <pre><code>{`
const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('./models/User');

const router = express.Router();

router.post('/register', async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = new User({ username, password });
    await user.save();
    res.status(201).send({ message: 'User registered successfully' });
  } catch (err) {
    res.status(400).send(err);
  }
});

router.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (!user) return res.status(400).send({ message: 'Invalid username or password' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).send({ message: 'Invalid username or password' });

    const token = jwt.sign({ id: user._id }, 'your_jwt_secret', { expiresIn: '1h' });
    res.status(200).send({ token });
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;
                    `}</code></pre>

                    <h5>3. Protecting Routes (Express.js)</h5>
                    <pre><code>{`
const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
  const token = req.header('Authorization').replace('Bearer ', '');
  if (!token) return res.status(401).send({ message: 'Access denied' });

  try {
    const decoded = jwt.verify(token, 'your_jwt_secret');
    req.user = decoded;
    next();
  } catch (err) {
    res.status(400).send({ message: 'Invalid token' });
  }
};

module.exports = authMiddleware;
                    `}</code></pre>

                    <h5>4. React Front-End Authentication</h5>
                    <pre><code>{`
import React, { useState } from 'react';
import axios from 'axios';

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/login', { username, password });
      setToken(response.data.token);
      localStorage.setItem('token', response.data.token);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
      <button type="submit">Login</button>
    </form>
  );
}

export default LoginForm;
                    `}</code></pre>
                  </article>
                </section>
              </main>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Documentation;
