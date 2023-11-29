import React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const NewContact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const navigate = useNavigate();

  const submitContact = async (e) => {
    e.preventDefault();
    const contact = {
      full_name: name,
      email: email,
      agenda_slug: 'pierre',
      address: address,
      phone: phone,
    };

    try {
      await fetch('https://playground.4geeks.com/apis/fake/contact/', {
        method: 'POST',
        body: JSON.stringify(contact),
        headers: {
          'Content-Type': 'application/json',
        },
      });
    } catch (error) {
      console.log('Error:', error);
    }
    navigate('/');
  };

  return (
    <form action='' className='new-contact' onSubmit={(e) => submitContact(e)}>
      <h1>Add New Conctact</h1>
      <div className='contact-input'>
        <p>Full Name</p>
        <input
          type='text'
          id='name'
          placeholder='Enter full name'
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className='contact-input'>
        <p>Email</p>
        <input
          type='text'
          id='email'
          placeholder='Enter email'
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className='contact-input'>
        <p>Phone</p>
        <input
          type='text'
          id='number'
          placeholder='Enter phone'
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>
      <div className='contact-input'>
        <p>Address</p>
        <input
          type='text'
          id='email'
          placeholder='Enter address'
          onChange={(e) => setAddress(e.target.value)}
        />
      </div>
      <button className='save'>Save</button>
      <Link to='/'>Get back to contact</Link>
    </form>
  );
};

export default NewContact;
