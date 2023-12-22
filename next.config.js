/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
 },
    images: {
      domains: [
        "images.pexels.com",
        "avatars.githubusercontent.com",
        "lh3.googleusercontent.com",
        "res.cloudinary.com",
      ],
    },
  };
  
  module.exports = nextConfig;
  