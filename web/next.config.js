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
  env: {
    MAILCHIMP_SECRET: process.env.MAILCHIMP_SECRET,
    MAILCHIMP_SERVER: process.env.MAILCHIMP_SERVER,
    MAILCHIMP_LIST: process.env.MAILCHIMP_LIST,
  },
};
