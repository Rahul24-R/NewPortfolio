/** @type {import('next').NextConfig} */
const nextConfig = {};

export default {
    output: 'export', // Enables static export
    trailingSlash: true, // Ensures paths are correctly formatted for static hosting
    basePath: '/portfolio'
  };
