import Hero from '@/components/About/Hero';
import { useTranslations } from 'next-intl';

import './index.css';

export default function About(){
    const t = useTranslations('Index');
    return(
        <div>
            <Hero />

        </div>
    );
}