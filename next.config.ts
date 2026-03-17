import { withPayload } from '@payloadcms/next/withPayload'

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Packages with Cloudflare Workers (workerd) specific code
  // Read more: https://opennext.js.org/cloudflare/howtos/workerd
  serverExternalPackages: ['jose', 'pg-cloudflare'],

  async redirects() {
    return [
      // Spelcomputer (gaming console) redirects
      {
        source: '/reparaties/spelcomputer-reparatie{/}?',
        destination: '/reparatie/spelcomputer',
        permanent: true,
      },
      {
        source: '/reparaties/spelcomputer-reparatie/sony-playstation-reparatie{/}?',
        destination: '/reparatie/spelcomputer',
        permanent: true,
      },
      {
        source: '/reparaties/spelcomputer-reparatie/nintendo-switch-reparatie{/}?',
        destination: '/reparatie/spelcomputer/nintendo-switch',
        permanent: true,
      },
      {
        source: '/reparaties/nintendo-switch-reparatie{/}?',
        destination: '/reparatie/spelcomputer/nintendo-switch',
        permanent: true,
      },
      {
        source: '/reparaties/microsoft-xbox-reparatie{/}?',
        destination: '/reparatie/spelcomputer',
        permanent: true,
      },
      // Telefoon redirects
      {
        source: '/reparaties/telefoon-reparatie{/}?',
        destination: '/reparatie/telefoon',
        permanent: true,
      },
      {
        source: '/home/telefoon-reparatie{/}?',
        destination: '/reparatie/telefoon',
        permanent: true,
      },
      // iPhone redirects
      {
        source: '/iphone-reparatie{/}?',
        destination: '/reparatie/telefoon',
        permanent: true,
      },
      {
        source: '/reparaties/iphone-reparatie{/}?',
        destination: '/reparatie/telefoon',
        permanent: true,
      },
      {
        source: '/iphone-reparatie-meppel{/}?',
        destination: '/meppel/iphone-reparatie',
        permanent: true,
      },
      {
        source: '/reparaties/iphone-reparatie-meppel{/}?',
        destination: '/meppel/iphone-reparatie',
        permanent: true,
      },
      // Meppel telefoon redirect
      {
        source: '/reparaties/telefoon-reparatie-meppel{/}?',
        destination: '/meppel/telefoon-reparatie',
        permanent: true,
      },
      // Havelte redirect (no dedicated page, nearest location is Meppel)
      {
        source: '/havelte{/}?',
        destination: '/meppel',
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
