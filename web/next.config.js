module.exports = {
  images: {
    deviceSizes: [320, 420, 768, 1024, 1200],
    domains: [
      "round-landing-page.luismtns.vercel.app",
      "round-landing-page.vercel.app",
      "round-landing-page-git-master.luismtns.vercel.app",
    ],
    path: "/_next/image",
    loader: "default",
  },
  async headers() {
    return [
      {
        // mathching all API routes
        source: "/:all*",
        headers: [
          { key: "Access-Control-Allow-Credentials", value: "true" },
          { key: "Access-Control-Allow-Origin", value: "*" },
          {
            key: "Access-Control-Allow-Methods",
            value: "GET,OPTIONS,PATCH,DELETE,POST,PUT",
          },
          {
            key: "Access-Control-Allow-Headers",
            value:
              "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
          },
        ],
      },
    ];
  },
  env: {
    MAILCHIMP_SECRET: process.env.MAILCHIMP_SECRET,
    MAILCHIMP_SERVER: process.env.MAILCHIMP_SERVER,
    MAILCHIMP_LIST: process.env.MAILCHIMP_LIST,
  },
};
