import React, { useState } from 'react';
import './App.css';

// Simple form to add/edit contacts
function ContactForm({ onSubmit, contact }) {
  const [name, setName] = useState(contact ? contact.name : '');
  const [phone, setPhone] = useState(contact ? contact.phone : '');
  const [email, setEmail] = useState(contact ? contact.email : '');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, phone, email });
    setName('');
    setPhone('');
    setEmail('');
  };

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
        required
      />
      <input
        type="text"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        placeholder="Phone"
        required
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        required
      />
      <button type="submit" className="submit-btn">Save Contact</button>
    </form>
  );
}

// Simple list to display contacts
function ContactList({ contacts, onDelete, onEdit }) {
  return (
    <div className="contact-list">
      {contacts.map((contact, index) => (
        <div key={index} className="contact-item">
          <span className="contact-details">
            {contact.name} | {contact.phone} | {contact.email}
          </span>
          <div className="contact-actions">
            <button onClick={() => onEdit(index)} className="edit-btn">Edit</button>
            <button onClick={() => onDelete(index)} className="delete-btn">Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
}

// Main App Component
function App() {
  const [contacts, setContacts] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const handleAddContact = (contact) => {
    setContacts([...contacts, contact]);
  };

  const handleDeleteContact = (index) => {
    setContacts(contacts.filter((_, i) => i !== index));
  };

  const handleEditContact = (index) => {
    setEditIndex(index);
  };

  return (
    <div className="app">
      <h1 className="app-title">Contact Management</h1>
      <ContactForm
        onSubmit={editIndex === null ? handleAddContact : (contact) => {
          const updatedContacts = [...contacts];
          updatedContacts[editIndex] = contact;
          setContacts(updatedContacts);
          setEditIndex(null);
        }}
        contact={editIndex !== null ? contacts[editIndex] : null}
      />
      <ContactList
        contacts={contacts}
        onDelete={handleDeleteContact}
        onEdit={handleEditContact}
      />
    </div>
  );
}

export default App;
