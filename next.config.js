const withNextra = require("nextra")({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx",
  defaultShowCopyCode: true,
});

module.exports = withNextra({
  images: {
    loader: "akamai",
    path: "",
  },
  trailingSlash: true,
  async redirects() {
    return [
      {
        source: "/sdk/storage-v2",
        destination: "/sdk/storage",
        permanent: true,
      },
    ];
  },
});
