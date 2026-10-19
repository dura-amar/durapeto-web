import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // This prototype has been replaced by https://durastudents.org.np (Heritage section).
  // Temporary (307) redirect so it is easy to undo.
  async redirects() {
    return [
      {
        source: "/:path*",
        destination: "https://durastudents.org.np/heritage/",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
