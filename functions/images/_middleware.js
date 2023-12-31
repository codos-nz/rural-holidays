import assetNegotiationPlugin from "pages-plugin-asset-negotiation";

export const onRequest = assetNegotiationPlugin({
  formats: ["jxl", "avif", "webp"], // The formats you want to support, in order of preference. This is the default configuration and will serve a jxl image if the browser supports it (and it was found) first, followed by avif and then webp.
});
