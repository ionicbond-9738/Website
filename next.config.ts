import type { NextConfig } from "next";

const repoName = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "";

const nextConfig: NextConfig = {
    output: "export", // ✅ required for static export
    images: {
        unoptimized: true, // ✅ disable optimization for static export
    },
    basePath: repoName ? `/${repoName}` : "",
    assetPrefix: repoName ? `/${repoName}/` : "",
    webpack(config) {
        // Grab the existing rule that handles SVG imports
        const fileLoaderRule = config.module.rules.find((rule: any) =>
            rule.test?.test?.(".svg")
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
                use: ["@svgr/webpack"], // use SVGR for React components
            }
        );

        // Modify the original file loader to ignore *.svg
        fileLoaderRule.exclude = /\.svg$/i;

        return config;
    },
};

export default nextConfig;
