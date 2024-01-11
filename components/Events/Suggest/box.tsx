"use client"

import { useState } from 'react';
import { createClient} from "next-sanity";
import clientConfig from "@/sanity/config/client-config";
//import { saveText } from './savetext';

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
          className="text-suggestion block p-2.5 mb-5 w-[50%] h-12 text-md text-black bg-white rounded-lg border border-2 border-gray-500 focus:ring focus:ring-blue-700 overflow-y-auto"
          placeholder={emailpholder}
          onChange={(e) => setSubmittedEmail(e.target.value)}
          />
        </label>
        {!successMessage && !errorMessage && <button type="submit" 
        className="suggestion-btn bg-blue-500 border-2 border-black text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-300">{submit}</button>}
        {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
        {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
      </form>
    )
}