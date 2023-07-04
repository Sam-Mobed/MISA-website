import Hero from '../../components/Home/Hero';


//import { getEvents } from "@/sanity/sanity-utils"
//import Head from 'next/head';
import { useTranslations } from 'next-intl';
import Link from 'next-intl/link'; //this is just to test if i18n works, to be removed
//this link component wraps the original link component, but it also has the locale perp
import Card from '../../components/Home/ValueCard';
import MemberCard from '../../components/About/MemCard';
import './index.css';

export default function Home() {

  //const events = await getEvents();
  //this is our index file, so we pass index as argument
  const t = useTranslations('Index');

  return (
    <div className='main-container'>
      <Hero />
      <div className='w-full h-screen bg-red-500'>
      

      </div>
      {/*
      
      
      
      */}
      <div className='w-full h-screen bg-blue-500'>

      </div>

      <div className='w-full h-screen bg-green-500'>

      </div>
      
      
    </div>
    );
}

/*
<Head>
        <title>MISA</title>
      </Head>

      <div>
        <Link href="/" locale="fa">switch</Link> |
        <Link href="/" locale="en">switch back</Link>
      </div>

      <div className='buffer'>Mountain</div>

      
      <div className='buffer-space relative'>
        <h1 className="site-title font-extrabold absolute bottom-8 w-full">
          <span className="inline-block bg-gradient-to-r from-green-500 to-red-600
          bg-clip-text text-transparent whitespace-nowrap">
            {t('title')}
          </span>
        </h1>
      </div>
      

      
      <div className='purpose'>
        <h2 className='purpose-title pt-5 pl-5'>{t('purpose-title')}</h2>
        <p className='text-justify p-5'>
        {t('purpose')}
        </p>
      </div>
      

      <div className='p-5'>
        <h2>{t('our-values')}</h2>
        <div className='values-box border-2 border-black flex justify-between'>
          <div className='border-2 border-black'>

            <h3 className='value'>
              {t('value1')}
            </h3>
            <p>
            {t('value1-text')}
            </p>
          </div>

          <div className='border-2 border-black'>
            <h3 className='value'>
              {t('value2')}
            </h3>
            <p>
            {t('value2-text')}
            </p>
          </div>

          <div className='border-2 border-black'>
            <h3 className='value'>
              {t('value3')}
            </h3>
            <p>
              {t('value3-text')}
            </p>
          </div>

        </div>

      </div>

      <Card
       value="Integrity"
       description='hi'
       image='hi'
       alt='hi' />

      <MemberCard />

      <div>
        <p>
          Our values stem from our constitution, which bounds us to core principles under which we operate
        </p>
      </div>

      <div>
        <h2>
          what we do:already kinda say it in purpose
          
        </h2>
        <div>we will have circles here to other routes</div>
        <div>we organize events! to bring the iranian community and those who aappreciate iranian culture closer.</div>
        <div>who we are:link to about us</div>
        <div>get in touch</div>
      </div>





*/



//this whole events thing needs to be moved to 
//another route



/*

<h1 className="site-title font-extrabold">
        <span className="inline-block bg-gradient-to-r from-green-500 to-red-600
        bg-clip-text text-transparent whitespace-nowrap">
          McGill Iranian Student Association
        </span>
      </h1>


sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl

className="max-w-5xl mx-auto py-20"

<p className="mt-3 text-xl text-gray-600">
        description of the association
      </p>

      <h2 className="mt-24 font-bold text-gray-700 text-3xl">
        Our Values
      </h2>

{events.map((event) => (
        <div key={event._id}>
          {event.name}
        </div>
      ))}


*/