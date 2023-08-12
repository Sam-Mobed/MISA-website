import Hero from '@/components/About/Hero';
import Members from '@/components/About/Members';
import Story from '@/components/About/Story';
import Contact from '@/components/About/Contact';
import { useTranslations } from 'next-intl';

import './index.css';

export default function About(){
    const t = useTranslations('About');
    return(
        <div style={{backgroundColor:'bisque'}}>
            <Hero title={t('about')} />
            <section id='story'></section>
            <Story title={t('story-title')} text={t('story')} />
            <section id='members'></section>
            {/* @ts-except-error Async Server Component */}
            <Members  title={t('our-members')} text={t('click')} />
            <Contact contact={t('contact')} contact_text={t('contact-text')}
            ig={t('IG')} fb={t('FB')} tg={t('TG')}
            email={t('email')} newsletter={t('newsletter')} signup={t('signup')} />
        </div>
    );
}

/*
I get the following error, but it's not an issue from my side, so don't change anything.

'Members' cannot be used as a JSX component.
Its return type 'Promise<Element>' is not a valid JSX element.
Type 'Promise<Element>' is missing the following properties from type 'Element': type, props, key
*/