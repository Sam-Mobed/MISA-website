import { useTranslations } from 'next-intl';

import Hero from '@/components/Events/Hero';
import Upcoming from '@/components/Events/Upcoming';
import Gallery from '@/components/Events/Gallery';

export default function Events(){
    const t = useTranslations('Events');
    return (
        <div>
            <Hero title={t('events')} />
            <Upcoming 
            title={t('Upcoming')} 
            event_done={t('event-done')} 
            no_wl={t('no-waitlist')} 
            yes_wl={t('yes-waitlist')} 
            lnks={t('links')} 
            />
            <Gallery
            title={t('gallery')}
            text={t('gallery-desciption')}
            />
        </div>
    );
}