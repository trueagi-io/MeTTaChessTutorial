/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async rewrites() {
    return [
      {
        source: "/api/metta",
        destination: "http://backend:5001/metta",
      },
      {
        source: "/api/metta_stateless",
        destination: "http://backend:5001/metta_stateless",
      }

    ]
  },
}

export default nextConfig
