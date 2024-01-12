"use client"

import { useState } from 'react';
import { createClient} from "next-sanity";
import clientConfig from "@/sanity/config/client-config";
//import { saveText } from './savetext';
//import './box.css';

type Props = {
  placeholder:string;
  submit:string;
  success:string;
  error:string;
  alrdone:string;
  emailpholder:string;
}

export default function Box({placeholder,submit,success,error,alrdone,emailpholder}:Props){
  
  const [submittedText, setSubmittedText] = useState('');
  const [submittedEmail, setSubmittedEmail] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [validEmail, setValidity] = useState(false);

  const verifyEmail = (address:string) => {
    const messageDiv = document.getElementById('emailMessage');
    const emailArea = document.getElementById('email');
    if (!messageDiv || !emailArea){
      return;
    }
    if (address===''){
      //do nothing, leave the placeholder
      messageDiv.innerHTML = '';
      //not sure which one it will be
      emailArea.classList.remove('border-red-500');
      emailArea.classList.remove('border-green-500');
      emailArea.classList.add('border-gray-500');
    }
    else if (!address.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]{4,20}\.[a-zA-Z]{2,4}$/)){ 
      //the address is invalid
      emailArea.classList.remove('border-gray-500');
      emailArea.classList.remove('border-green-500');
      emailArea.classList.add('border-red-500');
  
      setValidity(false);
      
      messageDiv.classList.remove('text-green-500');
      messageDiv.classList.add('text-red-500');
      messageDiv.innerHTML = 'Please enter a valid email.';
    }else{
      emailArea.classList.remove('border-gray-500');
      emailArea.classList.remove('border-red-500');
      emailArea.classList.add('border-green-500');
  
      setValidity(true);
      
      messageDiv.classList.remove('text-red-500');
      messageDiv.classList.add('text-green-500');
      messageDiv.innerHTML = 'Good to go!';
    }
  }

  const handleEmailChange = (emailValue: string) => {
    setSubmittedEmail(emailValue);
    verifyEmail(emailValue);
  };

  const handleSubmit = async (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const client = createClient(clientConfig);
      //console.log(client.config)
      const doc = {
        _type: 'suggestion',
        suggestion_text: submittedText,
        user_email: submittedEmail
      };
  
      await client.create(doc);
      //saveText(submittedText);

      setSuccessMessage(success);
      setErrorMessage('');
      setSubmittedText('');
    } catch (err) {
      console.error(err);
      console.log(err);
      setErrorMessage(error);
      setSuccessMessage('');
    }
  };

    return (
      <form onSubmit={handleSubmit}>
        <label>
          <textarea
          id="message"
          style={{resize:'none'}}
          className="text-suggestion block p-2.5 w-full h-32 text-md text-black bg-white rounded-lg border border-2 border-gray-500 focus:ring focus:ring-blue-700 overflow-y-auto"
          placeholder={placeholder}
          onChange={(e) => setSubmittedText(e.target.value)}
          />
          <div className='h-5'></div>
          <textarea
          id="email"
          style={{resize:'none'}}
          className="text-suggestion block p-2.5 mb-2 w-[50%] h-12 text-md text-black bg-white rounded-lg border border-2 border-gray-500 focus:ring focus:ring-blue-700 overflow-y-auto"
          placeholder={emailpholder}
          onChange={(e) => handleEmailChange(e.target.value)}
          />
          <div id='emailMessage' className='mb-3'>
            
          </div>
        </label>
        {!successMessage && !errorMessage && <button type="submit" 
        className={`suggestion-btn ${(!submittedText.trim() || !submittedEmail.trim() || !validEmail) ? 'bg-gray-500 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-700'} border-2 border-black text-white px-4 py-2 rounded-md focus:outline-none focus:ring focus:border-blue-300`}
        disabled={!submittedText.trim() || !submittedEmail.trim() || !validEmail}>
        {submit}
        </button>}
        {successMessage && <p style={{ color: 'green' }} className='mt-2 successMSG'>{successMessage}</p>}
        {errorMessage && <p style={{ color: 'red' }} className='mt-2 errorMSG'>{errorMessage}</p>}
      </form>
    )
}