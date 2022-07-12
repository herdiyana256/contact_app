import React from 'react';
import ContactItem from './ContactItem';
 

//Karena sekarang component ContactItem membutuhkan properti id dan onDelete, kita perlu menyediakan nilai dari kedua properti tersebut pada component yang menggunakannya, yaitu ContactList. Silakan buka berkas ContactList.jsdan ubah kodenya menjadi seperti ini.

// note :Untuk properti onDelete, kita masih melakukan drilling karena nilai handler sebenarnya ada pada component ContactApp selaku pemilik data contacts.


function ContactList({ contacts, onDelete }) {
  return (
    <div className="contact-list">
      {
        contacts.map((contact) => (
          <ContactItem 
          key={contact.id}
          id={contact.id}
          onDelete={onDelete}
          {...contact} />
        ))
      }
    </div>
  );
}
 
export default ContactList;