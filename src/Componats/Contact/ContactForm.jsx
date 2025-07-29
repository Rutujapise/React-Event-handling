import React, { useState } from 'react';
import NameInput from './NameInput';
import EmailInput from './EmailInput';
import SubjectInput from './SubjectInput';
import MessageInput from './MessageInput';
import SendMessage from './SendMessage';
import './ContactForm.css';

function clearForm(){
    setName('');
    setEmail('');
    setSubject('');
    setMessage('');
    }
    function validationForm(){
      console.log(name)
      if(!name || name.trim()){
        alert('name required')
        return false
      }
      return true
    }

  const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  function handleContactForm(event) {
    event.preventDefault();
    alert('Form Submit');
    const payload = { name, email, subject, message };
    console.log(payload);
    localStorage.setItem('ContactForm', JSON.stringify(payload));
    clearForm();

   
  }
    

  return (
    <div className="contactContainer">
      <form className="formContainer" onSubmit={handleContactForm}>
        <NameInput inputType="text" onChange={setName} value={name} />
        <EmailInput inputType="email" onChange={setEmail} value={email} />
        <SubjectInput inputType="text" onChange={setSubject} value={subject} />
        <MessageInput onChange={setMessage} value={message} />
        <SendMessage inputType="submit" />
        
      </form>
    </div>
  );
};

export default ContactForm;
