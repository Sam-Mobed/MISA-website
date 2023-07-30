import Hero from '@/components/About/Hero';
import Members from '@/components/About/Members';
import Story from '@/components/About/Story';
import { useTranslations } from 'next-intl';

import './index.css';

export default function About(){
    const t = useTranslations('About');
    return(
        <div>
            <Hero title={t('about')} />
            <Story title={t('story-title')} text={t('story')} />
            <Members />
        </div>
    );
}