/* eslint-disable @typescript-eslint/no-var-requires */
const { withContentlayer } = require('next-contentlayer')

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
}

module.exports = withContentlayer(nextConfig)
