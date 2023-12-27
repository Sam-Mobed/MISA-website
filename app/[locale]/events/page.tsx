import { useTranslations } from 'next-intl';

import Hero from '@/components/Events/Hero';
import Upcoming from '@/components/Events/Upcoming';
import Gallery from '@/components/Events/Gallery';
import Suggest from '@/components/Events/Suggest';

import Footer from '@/components/shared/Footer';

export default function Events(){
    const t = useTranslations('Events');
    const t_footer = useTranslations('Footer');
    return (
        <div className='overflow-hidden'>
            <Hero title={t('events')} />
            <section id='upcoming'></section>
            {/* @ts-except-error Async Server Component */}
            <Upcoming 
            title={t('Upcoming')} 
            event_done={t('event-done')} 
            no_wl={t('no-waitlist')} 
            yes_wl={t('yes-waitlist')} 
            lnks={t('links')} 
            />
            {/* @ts-except-error Async Server Component */}
            <Gallery
            title={t('gallery')}
            text={t('gallery-desciption')}
            />
            <section id='suggest'></section>
            <Suggest
            title={t('suggest-title')}
            text={t('suggest-text')}
            placeholder={t('placeholder')}
            />
            <Footer
            misa={t_footer("MISA")}
            home={t_footer("Home")}
            goal={t_footer("Goal")}
            values={t_footer("values")}
            about={t_footer("About")}
            story={t_footer("Story")}
            members={t_footer("Members")}
            events={t_footer("Events")}
            upcoming={t_footer("Upcoming")} 
            suggest={t_footer("suggest")}
            join={t_footer("join")}
            socialmedia={t_footer("Social-Media")}
            newsletter={t_footer("Newsletter")}
            vercel={t_footer("Vercel")}
            made={t_footer("Made")}
            />
        </div>
    );
}