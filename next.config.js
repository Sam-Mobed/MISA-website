/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    i18n:{
        locales: ['en', 'fa'],
        defaultLocale: 'en',
    }
}
//automatic locale detection is set to true by default
//i believe

module.exports = nextConfig
