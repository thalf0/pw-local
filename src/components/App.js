import React, { useState, useEffect } from 'react';
import { v4 as uuid } from 'uuid';
import './App.css';
import Header from "./Header";
import Form from "./Form";
import List from "./List";
import Footer from './Footer';

function App() {
  const LOCAL_STORAGE_KEY = "passwords";
  const [passwords, setPasswords] = useState(JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) ?? []);

  const addPasswordHandler = (password) => {
    console.log(password)
    setPasswords([...passwords, { id: uuid(), ...password }])
  }

  const removePasswordHandler = (id) => {
    const newPasswordList = passwords.filter((password) => {
      return password.id !== id;
    });

    setPasswords(newPasswordList);
  }

//  useEffect(() => {
//    const callPasswords = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
//    if (callPasswords) setPasswords(callPasswords);
//  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(passwords))
  }, [passwords]);

  return (
    <div className="ui container">
      <Header />
      <Form addPasswordHandler={addPasswordHandler} />
      <List passwords={passwords} getPasswordId={removePasswordHandler} />
      <Footer />
    </div>
  );
}

export default App;
