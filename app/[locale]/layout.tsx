import './globals.css';
import {useLocale, useTranslations} from 'next-intl';
import {notFound} from 'next/navigation';

import Navbar from '@/components/shared/NavBar';
//import Footer from '@/components/shared/Footer';

export const metadata = {
  title: 'MISA',
  description: 'The official website of the McGill Iranian Student Association',
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
  //const t_footer = useTranslations('Footer');
 
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
        />

        {children}
        {/*
        <Footer
        misa={t_footer("MISA")}
        home={t_footer("Home")}
        goal={t_footer("Goal")}
        values={t_footer("values")}
        about={t_footer("About")}
        story={t_footer("Story")}
        members={t_footer("Members")}
        events={t_footer("Events")}
        upcoming={t_footer("Upcoming")} 
        suggest={t_footer("suggest")}
        join={t_footer("join")}
        socialmedia={t_footer("Social-Media")}
        newsletter={t_footer("Newsletter")}
        vercel={t_footer("Vercel")}
        made={t_footer("Made")}
        />
        */}
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