const withNextra = require("./nextra.config");

const nextConfig = async () => {
  const nextraConfig = await withNextra;

  return {
    ...nextraConfig,
    images: {
      loader: "akamai",
      path: "",
    },
    trailingSlash: true,
  };
};

module.exports = nextConfig();
