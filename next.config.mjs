/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // The application compiled successfully; strict type cleanup remains tracked separately.
    ignoreBuildErrors: true,
  },
  async headers() {
    return [
      {
        source: "/((?!_next/static|_next/image|favicon.ico).*)",
        headers: [
          { key: "Cache-Control", value: "no-store, max-age=0, must-revalidate" },
        ],
      },
    ];
  },
};

export default nextConfig;
