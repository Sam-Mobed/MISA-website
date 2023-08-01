import { useTranslations } from 'next-intl';

import Hero from '@/components/Events/Hero';
import Upcoming from '@/components/Events/Upcoming';

export default function Events(){
    const t = useTranslations('Events');
    return (
        <div>
            <Hero title={t('events')} />
            <Upcoming title={t('Upcoming')} />
        </div>
    );
}