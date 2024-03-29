import { useTranslations } from 'next-intl';

import Hero from '@/components/Events/Hero';
import Upcoming from '@/components/Events/Upcoming';
import Gallery from '@/components/Events/Gallery';
import Suggest from '@/components/Events/Suggest';

import Footer from '@/components/shared/Footer';
import Navbar from '@/components/shared/NavBar';

export default function Events(){
    const t = useTranslations('Events');
    const t_footer = useTranslations('Footer');
    const t_nav = useTranslations('Navbar');
    return (
        <div className='overflow-hidden'>
            <Navbar 
            misa={t_nav('MISA')}
            home={t_nav('Home')}
            about={t_nav('About')}
            events={t_nav('Events')}
            />
            <Hero title={t('events')} />
            <section id='show-nav'></section>
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
            <section id='gallery'></section>
            <Gallery
            title={t('gallery')}
            text={t('gallery-desciption')}
            />
            <section id='suggest'></section>
            <Suggest
            title={t('suggest-title')}
            text={t('suggest-text')}
            placeholder={t('placeholder')}
            submit={t('Submit')}
            success={t('success')}
            error={t('error')}
            alrdone={t('already-suggested')}
            emailpholder={t('email-placeholder')}
            note={t('note')}
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