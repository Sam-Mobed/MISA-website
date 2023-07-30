import Hero from '@/components/About/Hero';
import Members from '@/components/About/Members';
import { useTranslations } from 'next-intl';

import './index.css';

export default function About(){
    const t = useTranslations('About');
    return(
        <div>
            <Hero title={t('about')} />
            <Members />
        </div>
    );
}