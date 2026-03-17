import { withPayload } from '@payloadcms/next/withPayload'

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Packages with Cloudflare Workers (workerd) specific code
  // Read more: https://opennext.js.org/cloudflare/howtos/workerd
  serverExternalPackages: ['jose', 'pg-cloudflare'],

  async redirects() {
    return [
      {
        source: '/reparaties/spelcomputer-reparatie',
        destination: '/reparatie/spelcomputer',
        permanent: true,
      },
      {
        source: '/reparaties/spelcomputer-reparatie/',
        destination: '/reparatie/spelcomputer',
        permanent: true,
      },
      {
        source: '/reparaties/spelcomputer-reparatie/sony-playstation-reparatie',
        destination: '/reparatie/spelcomputer',
        permanent: true,
      },
      {
        source: '/reparaties/spelcomputer-reparatie/sony-playstation-reparatie/',
        destination: '/reparatie/spelcomputer',
        permanent: true,
      },
    ]
  },

  // Your Next.js config here
  webpack: (webpackConfig: any) => {
    webpackConfig.resolve.extensionAlias = {
      '.cjs': ['.cts', '.cjs'],
      '.js': ['.ts', '.tsx', '.js', '.jsx'],
      '.mjs': ['.mts', '.mjs'],
    }

    return webpackConfig
  },
}

export default withPayload(nextConfig, { devBundleServerPackages: false })
