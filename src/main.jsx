import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import BlogPage from './components/BlogPage.jsx';
import FormPage from './components/FormPage.jsx';
import AvbFormPage from './components/AvbFormPage.jsx';
import ContactPage from './components/ContactPage.jsx';
import SchadePage from './components/SchadePage.jsx';
import './index.css';

const path = window.location.pathname;
const isBlogPage = path.startsWith('/blog');
const isFormPage = path.startsWith('/aanvraagformulier');
const isAvbFormPage = path.startsWith('/avb-aanvraag');
const isContactPage = path.startsWith('/contact');
const isSchadePage = path.startsWith('/schade-melden');

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {isSchadePage ? <SchadePage /> : isContactPage ? <ContactPage /> : isAvbFormPage ? <AvbFormPage /> : isFormPage ? <FormPage /> : isBlogPage ? <BlogPage /> : <App />}
  </React.StrictMode>,
);
