const title = "Unicial Landing Page";
const description =
  "Unicial Landing page is where you can find help on how to use Unicial metaverse";
const url = "https://unicial.org";

export default {
  title,
  description,
  canonical: url,
  openGraph: {
    locale: "en_US",
    title: "Unicial Landing Page",
    description,
    url,
    images: [
      {
        url: `${url}/images/category_bgs/1.png`,
        type: "image/png",
        width: 564,
        height: 295,
        alt: "Unicial Landing's website image",
      },
    ],
  },
  twitter: {
    cardType: "summary_large_image",
    handle: "@carles2m",
    site: "@carles2m",
  },
  additionalMetaTags: [
    {
      name: "apple-mobile-web-app-title",
      content: title,
    },
    {
      name: "application-name",
      content: title,
    },
    {
      name: "msapplication-TileColor",
      content: "#f7fafc",
    },
    {
      name: "msapplication-TileImage",
      content: "/icons/mstile-144x144.png",
    },
    {
      name: "msapplication-config",
      content: "/browserconfig.xml",
    },
    {
      name: "theme-color",
      content: "#f7fafc",
    },
  ],
  additionalLinkTags: [
    {
      rel: "apple-touch-icon",
      href: "/logo.svg",
      sizes: "180x180",
    },
    {
      rel: "shortcut icon",
      href: "icons/favicon.ico",
    },
  ],
  robotsProps: {
    noarchive: true,
  },
} as const;
