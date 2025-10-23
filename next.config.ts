import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack(config) {
    // Grab the existing rule that handles SVG imports
    const fileLoaderRule = config.module.rules.find((rule: any) =>
      rule.test?.test?.(".svg"),
    );

    if (!fileLoaderRule) return config;

    // Reapply the existing rule, but only for svg imports ending in ?url
    config.module.rules.push(
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/, // *.svg?url
      },
      {
        test: /\.svg$/i,
        issuer: fileLoaderRule.issuer,
        resourceQuery: { not: [/url/] }, // all other *.svg imports
        use: ["@svgr/webpack"],
      },
    );

    // Modify the original file loader to ignore *.svg
    fileLoaderRule.exclude = /\.svg$/i;

    return config;
  },
};

export default nextConfig;
