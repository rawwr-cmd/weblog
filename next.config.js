/** @type {import('next').NextConfig} */
const { PHASE_DEVLOPMENT_SERVER } = require("next/constants");

const nextConfig = (phase) => {
  if (phase === PHASE_DEVLOPMENT_SERVER) {
    return {
      reactStrictMode: true,
      swcMinify: true,
      env: {
        mongodb_username: "rawwr",
        mongodb_password: "kCIexrkEqPj0UFbf",
        mongodb_clustername: "cluster0",
        mongodb_database: "my-blog-dev",
      },
    };
  }
  return {
    reactStrictMode: true,
    swcMinify: true,
    env: {
      mongodb_username: "rawwr",
      mongodb_password: "kCIexrkEqPj0UFbf",
      mongodb_clustername: "cluster0",
      mongodb_database: "my-blog",
    },
  };
};

module.exports = nextConfig;
