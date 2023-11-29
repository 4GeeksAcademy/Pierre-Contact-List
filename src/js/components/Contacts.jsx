import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Modal from '@mui/material/Modal';
import EditContactList from './EditContact';

const Contacts = () => {
  const [contactsList, setContactList] = useState([]);
  const [editedContact, setEditedContact] = useState('');
  const [editOpen, setEditOpen] = useState(false);
  const handleOpen = (id) => {
    setEditOpen(true);
    setEditedContact(id);
  };
  const handleClose = () => setEditOpen(false);

  useEffect(() => {
    const getContacts = async () => {
      const data = await fetch(
        'https://playground.4geeks.com/apis/fake/contact/agenda/pierre'
      );
      const res = await data.json();
      setContactList(res);
    };

    getContacts();
  }, []);

  const deleteContact = async (id) => {
    try {
      await fetch(`https://playground.4geeks.com/apis/fake/contact/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const updatedContacts = contactsList.filter(
        (contact) => contact.id !== id
      );
      setContactList(updatedContacts);
    } catch (error) {
      console.log('Error:', error);
    }
  };

  return (
    <section className='contact-container'>
      <Link to='/contact' className='new-contact-btn'>
        Add new contact
      </Link>
      <div className='contact-list'>
        {contactsList.map((contact, key) => (
          <div className='contact' key={key}>
            <img src='https://ih1.redbubble.net/image.1079624982.0588/flat,750x,075,f-pad,750x1000,f8f8f8.u2.jpg' />
            <div>
              <h1>{contact.full_name}</h1>
              <div className='contact-item'>
                <img src='/map-pin.svg' alt='' />
                <p>{contact.address}</p>
              </div>
              <div className='contact-item'>
                <img src='/phone.svg' alt='' />
                <p>{contact.phone}</p>
              </div>
              <div className='contact-item'>
                <img src='/mail.svg' alt='' />
                <p>{contact.email}</p>
              </div>
            </div>
            <div className='tools'>
              <img
                src='/edit.svg'
                alt=''
                onClick={() => handleOpen(contact.id)}
              />
              <img
                src='trash.svg'
                alt=''
                onClick={() => deleteContact(contact.id)}
              />
            </div>

            <Modal
              open={editOpen}
              onClose={handleClose}
              aria-labelledby='modal-modal-title'
              aria-describedby='modal-modal-description'
            >
              <EditContactList contact={editedContact} />
            </Modal>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Contacts;
