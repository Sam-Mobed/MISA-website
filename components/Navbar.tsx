"use client"
//we need to render this on the client side since 
//we'll be using client side tools for animation
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function navbar(){
    const { locale, push } = useRouter();
    //push sends user from one route to another route
    let switchText = 'فارسی'; //default is to switch to farsi
    let switchLocale = 'fa';

    if (locale==='fa'){
        //if the current locale is farsi, then the user has the 
        //option of switching to english
        switchText = 'English';
        switchLocale = 'en'; 
    }

    //we don't want to redirect the user to any route, so just leave it as /
    //second argument is a mask URL
    const handleClick = (switchTo: string) => {
        push('/', undefined, { locale: switchTo });
    };

    //this is why we need to render this component on the client side
    

    return (
        <div>
            <nav>
                <div>
                    <button onClick={() => handleClick(switchLocale)}>
                        {switchText}
                    </button>
                </div>
            </nav>
        </div>
    );
}