import Hero from '@/components/About/Hero';
import Members from '@/components/About/Members';
import Story from '@/components/About/Story';
import Contact from '@/components/About/Contact';
import { useTranslations } from 'next-intl';
import Navbar from '@/components/shared/NavBar';

import Footer from '@/components/shared/Footer';

export default function About(){
    const t = useTranslations('About');
    const t_footer = useTranslations('Footer');
    const t_nav = useTranslations('Navbar');
    return(
        <div style={{backgroundColor:'bisque'}} className='overflow-hidden'>
            <Navbar 
            misa={t_nav('MISA')}
            home={t_nav('Home')}
            about={t_nav('About')}
            events={t_nav('Events')}
            />
            <Hero title={t('about')} />
            <section id='show-nav'></section>
            <section id='story'></section>
            <Story title={t('story-title')} text={t('story')} />
            <section id='members'></section>
            {/* @ts-except-error Async Server Component */}
            <Members  title={t('our-members')} text={t('click')} />
            <section id='contact'></section>
            <Contact contact={t('contact')} contact_text={t('contact-text')}
            ig={t('IG')} fb={t('FB')} tg={t('TG')}
            email={t('email')} newsletter={t('newsletter')} signup={t('signup')} />

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

/*
I get the following error, but it's not an issue from my side, so don't change anything.

'Members' cannot be used as a JSX component.
Its return type 'Promise<Element>' is not a valid JSX element.
Type 'Promise<Element>' is missing the following properties from type 'Element': type, props, key
*/