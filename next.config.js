const isProd = process.env.NODE_ENV === "production";

module.exports = {
  assetPrefix: isProd ? "/sticky-headers-columns/" : "",
  images: {
    unoptimized: true,
  },
};
