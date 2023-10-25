const withNextra = require("nextra")(
  "nextra-theme-docs",
  "./theme.config.tsx",
  {
    defaultShowCopyCode: true, // This line enables the copy button globally
  }
);

module.exports = withNextra({
  images: {
    loader: "akamai",
    path: "",
  },
  trailingSlash: true,
});
