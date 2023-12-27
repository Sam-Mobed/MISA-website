import Card from './Card';

import '../../shared/style.css';

import Image from 'next/image';
import members from '../../images/members.png';
import {getMembers} from '@/sanity/sanity-utils';
import { useLocale } from 'next-intl';

type Props = {
    title:string;
    text:string;
}

const imgStyle = {
    height: '15vh',
    width: 'auto',
}

export default async function Members({title, text}:Props){

    const MISA_members = await getMembers();
    const locale = useLocale();
    //console.log(MISA_members[0])

    return (
        <div className='w-screen inline flex justify-center items-center overflow-hidden' style={{backgroundColor:'bisque'}}>
            <div className='flex flex-col' style={{width:'80vw'}}>
                <div className='flex flex-row ml-5 mt-5 justify-between'>
                    <h2 className='section-title text-3xl md:text-4xl lg:text-6xl'>
                        {title.split(' ').map((word, index)=>
                            <div key={`${index}-${word}`}>{word}</div>
                        )}
                    </h2>
                    <Image 
                    src={members}
                    style={imgStyle}
                    alt="historians"
                    className='mr-8'
                    />
                </div>

                <div className='text-paragraph flex justify-center mt-5'>
                    {text}
                </div>
                
                <div className='flex flex-row flex-wrap justify-between center-items'>
                    {MISA_members.reverse().map((member,index)=>(
                        <div className='flex-1 mb-5 mt-5 flex justify-center' style={{ flexBasis: '25%' }} key={`${index}-${member.name_en}`}>
                            {locale === 'en' ? 
                            <Card name={member.name_en} degreemajor={member.degree_major_en}  
                            startfinish={member.start_finishDates} role={member.role_en}
                            card_image={member.card_image} person_image={member.person_image} /> : 
                            <Card name={member.name_fa} degreemajor={member.degree_major_fa}  
                            startfinish={member.start_finishDates} role={member.role_fa}
                            card_image={member.card_image} person_image={member.person_image} />}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}