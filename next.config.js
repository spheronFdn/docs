const withNextra = require("nextra")({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx",
  defaultShowCopyCode: true,
});

module.exports = withNextra({
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
