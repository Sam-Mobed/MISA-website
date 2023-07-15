import './globals.css';
import {useLocale, useTranslations} from 'next-intl';
import {notFound} from 'next/navigation';

import Navbar from '../../components/NavBar/';

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
  params
}: {
  children: React.ReactNode
  params: any
}) {
  //get the current locale with the useLocale hook
  const locale = useLocale();
  const t_nav = useTranslations('Navbar');
  const t_footer = useTranslations('Footer');
 
  // Show a 404 error if the user requests an unknown locale
  if (params.locale !== locale) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body>
        <Navbar 
        misa={t_nav('MISA')}
        home={t_nav('Home')}
        about={t_nav('About')}
        events={t_nav('Events')}
        apply={t_nav('Apply')}
        contact={t_nav('Contact')}
        switchLocale={t_nav('switchLocale')}
        newsLetter={t_nav('Newsletter')}
        />
        {children}
      </body>
    </html>
  )
}

/*
params has type any for now, i know it's an array of something(but not sure if they are strings or what)

body used to have this className, not sure it's useful to us tho
<body className={inter.className}>

<Navbar />
{children}
<Footer />
*/