// @ts-check
/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation.
 * This is especially useful for Docker builds.
 */
!process.env.SKIP_ENV_VALIDATION && (await import("./src/env/server.mjs"));

/** @type {import("next").NextConfig} */
const config = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "encrypted-tbn0.gstatic.com",
        port: "",
      },
      // {
      //   protocol: "https",
      //   hostname: "cdn11.bigcommerce.com",
      //   port: "",
      // },
      { protocol: "https", hostname: "images.thdstatic.com", port: "" },
      { protocol: "https", hostname: "images.thdstatic.com", port: "" },
      { protocol: "https", hostname: "www.growjoy.com", port: "" },
      { protocol: "https", hostname: "cdn.shopify.com", port: "" },
      { protocol: "https", hostname: "i5.walmartimages.com", port: "" },
      { protocol: "https", hostname: "cdn1.photostockeditor.com", port: "" },
      { protocol: "https", hostname: "cdn11.bigcommerce.com", port: "" },
      { protocol: "https", hostname: "2.bp.blogspot.com", port: "" },
      { protocol: "https", hostname: "bustlingnest.com", port: "" },
      { protocol: "https", hostname: "m.media-amazon.com", port: "" },
      { protocol: "https", hostname: "m.media-amazon.com", port: "" },
      { protocol: "https", hostname: "i.etsystatic.com", port: "" },
      { protocol: "https", hostname: "bloomscape.com", port: "" },
      { protocol: "https", hostname: "www.plants.com", port: "" },
    ],
  },
};
export default config;
