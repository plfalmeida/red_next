/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  rewrites(){
    return [
      {
        source: '/:path*',
        destination:'/:path*',
      },
      // {
      //   source: '/:path*',
      //   destination:'http://localhost:3001/:path*',
      // },
      {
        source: '/:path*',
        destination:'https://cra-redirects.vercel.app/:path*',
      },
    ]
  }
}

module.exports = nextConfig
