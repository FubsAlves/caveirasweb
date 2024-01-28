/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'media.graphassets.com',
                port: '',
                pathname: '/**',
            }
        ]
    },

    async rewrites() {
        return [
            {
                source: "/",
                destination: "/menu",
            },
            {
                source: "/index",
                destination: "/_index",
            }
        ]
    },
    
    async redirects() {
        return [
            {
                source: "/",
                destination: "/menu",
                statusCode: 301,
            }
        ]
    }

};

export default nextConfig;
