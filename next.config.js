/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
}

const withNextIntl = require('next-intl/plugin')(
    // This is the default (also the `src` folder is supported out of the box)
    './i18n.ts'
);


/*
i18n:{
        locales: ['en', 'fa'],
        defaultLocale: 'en',
    }
Won't be needing this, as it's for older versions of internationalization, and I'm using the next.js 13 one

//automatic locale detection is set to true by default
//i believe
*/

module.exports = withNextIntl(nextConfig);
