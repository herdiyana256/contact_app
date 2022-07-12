import React from 'react';
import ContactItemBody from './ContactItemBody';
import ContactItemImage from './ContactItemImage';
import DeleteButton from './DeleteButton';
 

//Selanjutnya, gunakan component DeleteButton di dalam component ContactItem. Jangan lupa tambahkan dan berikan juga props id dan onDelete karena component DeleteButton membutuhkannya.

function ContactItem({ imageUrl, name, tag, id, onDelete }) {
 return (
   <div className="contact-item">
     <ContactItemImage imageUrl={imageUrl} />
     <ContactItemBody name={name} tag={tag} />
     <DeleteButton id={id} onDelete={onDelete} />
   </div>
 );
}
 
export default ContactItem;