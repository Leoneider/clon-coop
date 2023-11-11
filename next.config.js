/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  skipTrailingSlashRedirect: true,
  skipMiddlewareUrlNormalize: true,
  redirects: async () => {
    return [
      {
        source: '/institucional',
        destination: '/institucional/resena-historica',
        permanent: true,
      },
    ];
  }
};

module.exports = nextConfig;
