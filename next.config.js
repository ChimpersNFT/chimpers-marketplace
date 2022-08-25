/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  api: {
    bodyParser: false,
  },
  images: {
    loader: 'custom'
  }
}

module.exports = nextConfig
