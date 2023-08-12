import { useTranslations } from 'next-intl';

import Hero from '@/components/Events/Hero';
import Upcoming from '@/components/Events/Upcoming';
import Gallery from '@/components/Events/Gallery';
import Suggest from '@/components/Events/Suggest';

export default function Events(){
    const t = useTranslations('Events');
    return (
        <div>
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
        </div>
    );
}