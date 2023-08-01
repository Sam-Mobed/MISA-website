import { useTranslations } from 'next-intl';

import Hero from '@/components/Events/Hero';

export default function Events(){
    const t = useTranslations('Events');
    return (
        <div>
            <Hero title={t('events')} />
            <div className='bg-red-400 w-screen h-screen'>

            </div>
        </div>
    );
}