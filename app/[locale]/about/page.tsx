import Hero from '@/components/About/Hero';
import Members from '@/components/About/Members';
import { useTranslations } from 'next-intl';

import './index.css';

export default function About(){
    const t = useTranslations('Index');
    return(
        <div>
            <Hero />
            <Members />
        </div>
    );
}