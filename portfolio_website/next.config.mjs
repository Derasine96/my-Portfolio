/** @type {import('next').NextConfig} */
// next.config.mjs
const nextConfig = {
    webpack(config) {
      config.module.rules.push({
        test: /\.svg$/,
        use: ["@svgr/webpack"],
      });
  
      return config;
    },
  };
  
  export default nextConfig;
  
