/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['rhynoesports.org'],
  },
  env: {
    CLIENT_ID: 'skui3lyhw0mn8jsxv5mf5qmydg2vzo',
    CLIENT_SECRET: '1lrfxl7frwoo3m2j5lasq3fonjhtfl',
  },
}

module.exports = nextConfig
