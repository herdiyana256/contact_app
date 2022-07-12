import React from 'react';
import ContactList from './ContactList';
import { getData } from '../utils/data';
 
class ContactApp extends React.Component {
 constructor(props) {
   super(props);
   this.state = {
     contacts: getData(),
   }
 
   this.onDeleteHandler = this.onDeleteHandler.bind(this);
 }
 
 onDeleteHandler(id) {
   const contacts = this.state.contacts.filter(contact => contact.id !== id);
   this.setState({ contacts });
 }
 
 render() {
   return (
     <div className="contact-app">
       <h1>Daftar Kontak</h1>
       <ContactList contacts={this.state.contacts} onDelete={this.onDeleteHandler} />
     </div>
   );
 }
}
 
export default ContactApp;
//Selanjutnya, kita ubah pembuatan component ContactApp menjadi class component. Jangan lupa saat ini kita perlu menyimpan data contacts di dalam this.state agar perubahan datanya memicu render UI. Kemudian buat juga method onDeleteEventHandler untuk menangani event ketika tombol hapus diklik.
