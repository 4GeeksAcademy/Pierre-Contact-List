import React, { useState } from 'react';

const EditContactList = (editedContact) => {
  const [editName, setEditName] = useState('');
  const [editEmail, setEditEmail] = useState('');
  const [editPhone, setEditPhone] = useState('');
  const [editAddress, setEditAddress] = useState('');

  const updateContact = async (e) => {
    e.preventDefault();

    const newContact = {
      full_name: editName,
      email: editEmail,
      id: editedContact,
      agenda_slug: 'pierre',
      address: editAddress,
      phone: editPhone,
    };

    try {
      await fetch(
        `https://playground.4geeks.com/apis/fake/contact/${editedContact.contact}`,
        {
          method: 'PUT',
          body: JSON.stringify(newContact),
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
    } catch (error) {
      console.log('Error:', error);
    }

    window.location.reload(true);
  };

  return (
    <form className='edit-contact' onSubmit={(e) => updateContact(e)}>
      <h1> Edit contact</h1>
      <div className='contact-input'>
        <p>Full Name</p>
        <input
          type='text'
          id='name'
          placeholder='Enter full name'
          onChange={(e) => setEditName(e.target.value)}
        />
      </div>
      <div className='contact-input'>
        <p>Email</p>
        <input
          type='text'
          id='email'
          placeholder='Enter email'
          onChange={(e) => setEditEmail(e.target.value)}
        />
      </div>
      <div className='contact-input'>
        <p>Phone</p>
        <input
          type='number'
          id='number'
          placeholder='Enter phone'
          onChange={(e) => setEditPhone(e.target.value)}
        />
      </div>
      <div className='contact-input'>
        <p>Address</p>
        <input
          type='text'
          id='address'
          placeholder='Enter address'
          onChange={(e) => setEditAddress(e.target.value)}
        />
      </div>
      <button className='save'>Save</button>
    </form>
  );
};

export default EditContactList;
