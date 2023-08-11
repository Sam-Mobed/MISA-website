import '../../shared/style.css'
import Box from "./box";
import Image from "next/image";
import givebox from '../../images/giveBox.png';

type Props = {
    title:string;
    text:string;
    placeholder:string;
}

const imgStyle = {
    height: '15vh',
    width: 'auto',
}

export default function Suggest({title,text,placeholder}:Props){
    return (
        <div>
            <div className='w-screen inline flex justify-center items-center pb-10' style={{backgroundColor:'bisque'}}>
                <div className='flex flex-col' style={{width:'80vw'}}>
                    <div className='flex flex-row ml-5 mt-5 mb-5 justify-between'>
                        <h2 className='section-title text-3xl md:text-4xl lg:text-6xl'>
                            {title.split(' ').map((word)=>
                                <div>{word}</div>
                            )}
                        </h2>
                        <Image 
                        src={givebox}
                        style={imgStyle}
                        alt="polo"
                        className='mr-8'
                        />
                    </div>
                    <div className="text-center text-paragraph pb-3">
                        {text}
                    </div>
                    <textarea
                    id="message"
                    style={{resize:'none'}}
                    className="block p-2.5 w-full h-32 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 overflow-y-auto"
                    placeholder={placeholder}
                    ></textarea>

                </div>
            </div>
        </div>
    )
}