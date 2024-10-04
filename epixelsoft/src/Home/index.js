import React from 'react';
import { useState } from 'react';
import ContentCard from '../ContentCard';
import TextBlock from '../TextBlock';
import ImageCard from '../ImageCard';
import './index.css';

const Home = () => {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const newErrors = {};
    
    // First name validation
    if (!form.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }

    // Last name validation
    if (!form.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!form.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(form.email)) {
      newErrors.email = 'Enter a valid email address';
    }

    // Phone number validation (basic numeric check)
    if (!form.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\d{10}$/.test(form.phone)) {
      newErrors.phone = 'Enter a valid 10-digit phone number';
    }

    // Password validation (at least 6 characters)
    if (!form.password.trim()) {
      newErrors.password = 'Password is required';
    } else if (form.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters long';
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      // Handle successful form submission here
      console.log('Form Submitted:', form);
    }
  };
  return (
    <div>
        <div className='image-container'>
           <div className="container-1">
            <h1 className="heading-1">The largest community of photo enthuastist </h1>
            <button className='join-btn'>Join Today</button>
           </div>
        </div>
        

       <div className="main-content">
      <h1 className="main-title">Snap photos and share like never before</h1>
      <div className="content-grid">
        <div className="content-item">
          <ContentCard
            title="Sed ut perspiciatis"
            text="Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est."
            tagColor="orange"
          />
        </div>
        <div className="content-item">
          <ContentCard
            title="Lorem ipsum dolor"
            text="Amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi."
            tagColor="green"
          />
        </div>
        <div className="content-item">
          <ContentCard
            title="Nemo enim ipsam"
            text="Consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet."
          />
        </div>
        <div className="content-item">
          <ContentCard
            title="Tempor incididunt"
            text="Eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit."
          />
        </div>
      </div>
       </div>

       <div className="small-container"></div>

       <section className="main-section">
      <div className="text-area">
        <div className="head-section">
        <h1 className="main-heading">Have you ever posted any photo on social media?</h1>
        <p className="subheading">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
        </div>
        <div className="blocks-container">
        <div className="text-blocks">
          <TextBlock title="Sed ut perspiciatis" text="Nemo enim ipsam voluptatem quia voluptas 
           sit aspernatur aut odit aut fugit, sed quia consequuntur." />
          <TextBlock title="Lorem ipsum dolor" text="Amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
          <TextBlock title="Nemo enim ipsam" text="Consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem." />
        </div>
      
      <div className="image-area">
        <img src="https://res.cloudinary.com/dfodxbgfn/image/upload/v1711823123/Banner_ybifk2.svg" alt="Skyscraper" className="main-image" />
      </div>
      </div>
      </div>
       </section>

       <div className="small-container"></div>

       <section className="image-grid-section">
      <h1 className="main-heading">Make your photos more stylish</h1>
      <p className="subheading">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
      </p>
      
      <div className="image-grid">
        <ImageCard 
          imgSrc="https://res.cloudinary.com/dfodxbgfn/image/upload/v1723907814/design_12_ptqhcg.jpg" 
          title="Sed ut perspiciatis" 
          description="Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia."
        />
        <ImageCard 
          imgSrc="https://res.cloudinary.com/dfodxbgfn/image/upload/v1723907794/design_10_xg5ngl.jpg" 
          title="Lorem ipsum dolor" 
          description="Amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore."
        />
        <ImageCard 
          imgSrc="https://res.cloudinary.com/dfodxbgfn/image/upload/v1723907764/design_7_smllto.jpg" 
          title="Nemo enim ipsam" 
          description="Consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."
        />
      </div>
       </section>
       <div className="small-container"></div>

       <div className="signup-container">
      <div className="signup-header">
        <h2>Ready to take a free trial?</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
      </div>
      <div className="signup-box">
        <form onSubmit={handleSubmit}>
          <h3>Sign up for a free account</h3>
          <div className="input-group">
            <div className="input-field">
              <input
                type="text"
                name="firstName"
                placeholder="First name"
                value={form.firstName}
                onChange={handleChange}
              />
              {errors.firstName && <span className="error">{errors.firstName}</span>}
            </div>
            <div className="input-field">
              <input
                type="text"
                name="lastName"
                placeholder="Last name"
                value={form.lastName}
                onChange={handleChange}
              />
              {errors.lastName && <span className="error">{errors.lastName}</span>}
            </div>
          </div>
          <div className="input-group">
            <div className="input-field">
              <input
                type="email"
                name="email"
                placeholder="Email address"
                value={form.email}
                onChange={handleChange}
              />
              {errors.email && <span className="error">{errors.email}</span>}
            </div>
            <div className="input-field">
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={form.phone}
                onChange={handleChange}
              />
              {errors.phone && <span className="error">{errors.phone}</span>}
            </div>
          </div>
          <div className="input-group">
            <div className="input-field">
              <input
                type="password"
                name="password"
                placeholder="Create password"
                value={form.password}
                onChange={handleChange}
              />
              {errors.password && <span className="error">{errors.password}</span>}
            </div>
          </div>
          <button type="submit" className="btn-submit">Register</button>
        </form>
      </div>
    </div>
    </div>
  );
}

export default Home;
