/** @type {import('next').NextConfig} */
const nextConfig = {
  
  async redirects() {
    return [
      {
        source: '/archVisitor/:path*', // Capture all paths starting with '/archVisitor/'
        has: [
          {
            type: 'cookie',
            key: 'authToken',
          },
          {
              type: 'cookie',
              key: 'user_type',
              value: 'Architect'
          }
        ],
        permanent: true,
        destination: '/architect/search_projects', // Preserve captured path segment
      },
      {
          source: '/archVisitor/:path*', // Capture all paths starting with '/archVisitor/'
          has: [
            {
              type: 'cookie',
              key: 'authToken',
            },
            {
                type: 'cookie',
                key: 'user_type',
                value: 'Client'
            }
          ],
          permanent: true,
          destination: '/client', // Preserve captured path segment
        },
        {
          source: '/clientVisitor/:path*', // Capture all paths starting with '/archVisitor/'
          has: [
            {
              type: 'cookie',
              key: 'authToken',
            },
            {
                type: 'cookie',
                key: 'user_type',
                value: 'Client'
            }
          ],
          permanent: true,
          destination: '/client', // Preserve captured path segment
        },
        {
          source: '/clientVisitor/:path*', // Capture all paths starting with '/archVisitor/'
          has: [
            {
              type: 'cookie',
              key: 'authToken',
            },
            {
                type: 'cookie',
                key: 'user_type',
                value: 'Architect'
            }
          ],
          permanent: true,
          destination: '/architect/Profile', // Preserve captured path segment
        },
      {
        source: '/architect/:path*', // Capture all paths starting with '/architect/'
        missing: [
          {
            type: 'cookie',
            key: 'authToken',
          },
        ],
        permanent: true,
        destination: '/archVisitor', // Preserve captured path segment
      },
      {
        source: '/client/:path*', // Capture all paths starting with '/architect/'
        missing: [
          {
            type: 'cookie',
            key: 'authToken',
          },
        ],
        permanent: true,
        destination: '/clientVisitor', // Preserve captured path segment
      },
    ];
  },

  // output:"export"
  webpack :(config) => {
    if (!config.resolve.alias) {
      config.resolve.alias = {}; // Ensure alias object exists
    }
    config.resolve.alias.canvas = false;
    return config;
} 
}



export default nextConfig;