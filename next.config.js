/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'dist',
  // redirects: async () => {
  //   return [
  //     {
  //       source: '/institucional',
  //       destination: '/institucional/resena-historica',
  //       permanent: true,
  //     },
  //   ];
  // }
};

module.exports = nextConfig;
