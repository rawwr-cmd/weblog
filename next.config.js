/** @type {import('next').NextConfig} */

const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_username: "rawwr",
        mongodb_password: "kCIexrkEqPj0UFbf",
        mongodb_clustername: "cluster0",
        mongodb_database: "my-blog-dev",
      },
    };
  }

  return {
    env: {
      mongodb_username: "rawwr",
      mongodb_password: "kCIexrkEqPj0UFbf",
      mongodb_clustername: "cluster0",
      mongodb_database: "my-blog",
    },
  };
};
