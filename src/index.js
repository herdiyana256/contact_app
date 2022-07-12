import React from 'react';
import { createRoot } from 'react-dom/client';
import ContactApp from './components/ContactApp';

// Di atur ulang saat file index sudah dikelompokan menggunakan folder baru
//import ContactApp from './ContactApp';

// Styling 
import './styles/style.css';


const root = createRoot(document.getElementById('root'));
root.render(<ContactApp />);