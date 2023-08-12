
import '../../shared/style.css';
import Image from "next/image";
import drunks from '../../images/drunks.png';

import { getPhotos } from "@/sanity/sanity-utils";
import { useLocale } from 'next-intl';
import Carousel from './carousel';


const imgStyle = {
    height: '15vh',
    width: 'auto',
}

type Props = {
    title:string;
    text:string;
}

export default async function Gallery(
    {
        title,
        text
    }:Props
){
    const photos = await getPhotos();
    const locale = useLocale();

    return (
        <div>
            <div className='w-screen inline flex justify-center items-center' style={{backgroundColor:'bisque'}}>
                <div className='flex flex-col pb-5' style={{width:'80vw'}}>
                    <div className='flex flex-row ml-5 mt-5 mb-5 justify-between'>
                        <h2 className='section-title text-3xl md:text-4xl lg:text-6xl'>
                            {title.split(' ').map((word,index)=>
                                <div key={`${index}-${word}`}>{word}</div>
                            )}
                        </h2>
                        <Image 
                        src={drunks}
                        style={imgStyle}
                        alt="drunks"
                        className='mr-8'
                        />
                    </div>
                    <div className='text-center text-paragraph'>{text}</div>
                </div>
            </div>
            <div className='flex justify-center items-center pt-5' style={{backgroundColor:'bisque'}}>
                <div style={{width:'80vw'}}>
                    <Carousel 
                    photos={photos} 
                    locale={locale}
                    />
                </div>
            </div>
        </div>
    );
}