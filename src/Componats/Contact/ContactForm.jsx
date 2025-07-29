import React, { useState } from 'react';
import NameInput from './NameInput';
import EmailInput from './EmailInput';
import SubjectInput from './SubjectInput';
import MessageInput from './MessageInput';
import SendMessage from './SendMessage';
import './ContactForm.css';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  function clearForm() {
    setName('');
    setEmail('');
    setSubject('');
    setMessage('');
  }

 function validationForm() {
  if (!name||!name.trim()) {
    alert('Name is required');
    return false;
  }
  else if (!email||!email.trim()) {
    alert('Email is required');
    return false;
  }
  else if (!subject||!subject.trim()) {
    alert('Subject is required');
    return false;
  }
  else if (!message|| !message.trim()) {
    alert('Message is required');
    return false;
  }else{
  return true;
  }
}



  function handleContactForm(event) {
  event.preventDefault();
  if (!validationForm()) {return;}

  alert('Form Submitted!');
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
