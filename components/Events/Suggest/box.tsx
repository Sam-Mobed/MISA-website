"use client"
import { useState } from 'react';

const sendEmail = async (content:string) => {
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ content ,recipient: 'masdebom@gmail.com',}),
      });
  
      if (response.ok) {
        console.error('Email sent successfully');
        return 0
      } else {
        console.error('Failed to send email');
        return 1
      }
    } catch (error) {
      console.error('Error sending email:', error);
      return 2
    }
};

type Props = {
    placeholder:string;
}

export default function Box({placeholder}:Props){
    const [textareaContent, setTextareaContent] = useState('');

    const handleSendEmail = () => {
        sendEmail(textareaContent);
    };

    return (
        <div>
            <textarea
            id="message"
            style={{resize:'none'}}
            className="text-suggestion block p-2.5 w-full h-32 text-md text-black bg-white rounded-lg border border-2 border-gray-500 focus:ring focus:ring-blue-700 overflow-y-auto"
            placeholder={placeholder}
            value={textareaContent}
            onChange={(e) => setTextareaContent(e.target.value)}
            >
            </textarea>
            {/*<button onClick={handleSendEmail}>Send Email</button>*/}
        </div>
    )
}