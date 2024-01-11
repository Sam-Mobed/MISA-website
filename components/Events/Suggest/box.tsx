"use client"

import { useState } from 'react';
import { createClient} from "next-sanity";
import clientConfig from "@/sanity/config/client-config";
//import { saveText } from './savetext';

type Props = {
  placeholder:string;
}

export default function Box({placeholder}:Props){
  const [submittedText, setSubmittedText] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const client = createClient(clientConfig);
      //console.log(client.config)
      const doc = {
        _type: 'suggestion',
        suggestion_text: submittedText
      };
  
      await client.create(doc);
      //saveText(submittedText);

      setSuccessMessage('Suggestion submitted successfully!');
      setErrorMessage('');
      setSubmittedText('');
    } catch (error) {
      console.error(error);
      console.log(error);
      setErrorMessage('An unexpected error occurred. Please try again later.');
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
          className="text-suggestion block p-2.5 w-[50%] h-12 text-md text-black bg-white rounded-lg border border-2 border-gray-500 focus:ring focus:ring-blue-700 overflow-y-auto"
          placeholder={placeholder}
          />
        </label>
        {!successMessage && !errorMessage && <button type="submit">Submit</button>}
        {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
        {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
      </form>
    )
}