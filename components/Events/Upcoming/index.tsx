import '../../shared/style.css';

import Image from "next/image";
import polo from '../../images/polo.png';
import { getEvents } from "@/sanity/sanity-utils";
import { useLocale } from 'next-intl';

import Carousel from './carousel';

const imgStyle = {
    height: '15vh',
    width: 'auto',
}

type Prop = {
    title:string;
    event_done:string;
    no_wl:string;
    yes_wl:string;
    lnks:string;
}

export default async function Upcoming({title,event_done,no_wl,yes_wl,lnks}:Prop){

    const events = await getEvents();
    const locale = useLocale();

    return (
        <div>
            <div className='w-screen inline flex justify-center items-center' style={{backgroundColor:'bisque'}}>
                <div className='flex flex-col' style={{width:'80vw'}}>
                    <div className='flex flex-row ml-5 mt-5 mb-5 justify-between'>
                        <h2 className='section-title text-3xl md:text-4xl lg:text-6xl'>
                            {title.split(' ').map((word)=>
                                <div>{word}</div>
                            )}
                        </h2>
                        <Image 
                        src={polo}
                        style={imgStyle}
                        alt="polo"
                        className='mr-8'
                        />
                    </div>
                </div>
            </div>
            <div className='flex justify-center items-center pt-5' style={{backgroundColor:'bisque'}}>
                <div style={{width:'80vw'}}>
                    <Carousel 
                    events={events} 
                    locale={locale}
                    event_done={event_done}
                    no_waitlist={no_wl}
                    yes_waitlist={yes_wl}
                    links={lnks}
                    />
                </div>
            </div>
        </div>
    );
}

/*
<div className='overflow-hidden relative'>
                    <div className='flex'>
                        {events.map((event)=>(
                            locale === 'en' ? 
                            <Carousel name={event.name_en}
                            datetime={event.datetime}
                            location={event.location}
                            cost={event.cost}
                            image={event.image}
                            content={event.content_en}
                            links={event.links}
                            links_slugs={event.links_slug}
                            space_left={event.is_there_space_left}
                            waitlist={event.is_there_waitlist}
                            waitlist_link={event.waitlist_link} />
                            :
                            <Carousel name={event.name_fa}
                            datetime={event.datetime}
                            location={event.location}
                            cost={event.cost}
                            image={event.image}
                            content={event.content_fa}
                            links={event.links}
                            links_slugs={event.links_slug}
                            space_left={event.is_there_space_left}
                            waitlist={event.is_there_waitlist}
                            waitlist_link={event.waitlist_link} />
                        ))}
                    </div>
                    <div className='flex flex-row justify-between items-center'>
                            <button>
                                <BsFillArrowLeftCircleFill className="lg:text-5xl md:text-5xl text-3xl cursor-pointer hover:text-blue-600" />
                            </button>
                            <button>
                                <BsFillArrowRightCircleFill className="lg:text-5xl md:text-5xl text-3xl cursor-pointer hover:text-blue-600" />   
                            </button>
                    </div>
                </div>
*/