/** @type {import('@docusaurus/types').DocusaurusConfig} */

const WEBSITE_URL = `https://gallant-pasteur-5e438c.netlify.app`;

module.exports = {
  title: "OpenEBS Docs",
  tagline: "OpenEBS Docs: Information regarding the latest releases",
  url: `${WEBSITE_URL}/`,
  baseUrl: "/docs/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "docs/img/favicon.ico",
  organizationName: "openebs", // Usually your GitHub org/user name.
  projectName: "website", // Usually your repo name.
  themeConfig: {
    gtag: {
      trackingID: 'UA-92076314-12',
      anonymizeIP: true,
    },
    colorMode: {
      defaultMode: "light",
      disableSwitch: true,
    },
    navbar: {
      logo: {
        alt: "OpenEBS docs logo",
        src: "../static/img/logo.svg",
      },
      items: [],
    },
    footer: {
      copyright: `Copyright © ${new Date().getFullYear()} The OpenEBS Authors | All rights reserved`,
    }
  },
  customFields: {
    openebsLogo: "/docs/img/openebs-logo.svg",
    githubApiContributors:
      "https://api.github.com/repos/openebs/openebs-docs/contributors?q=contributions&order=desc",
    footbarLinks: {
      gettingStarted: [
        {
          label: "Docs",
          link: "/",
        },
        {
          label: "GitHub",
          link: "https://github.com/openebs/openebs-docs",
          isExternal: true,
        },
        {
          label: "Community",
          link: `${WEBSITE_URL}/community`,
        },
        {
          label: "FAQ",
          link: `${WEBSITE_URL}/faq`,
        },
        {
          label: "Blog",
          link: `${WEBSITE_URL}/blog`,
        },
        {
          label: "Commercial support",
          link: `${WEBSITE_URL}/commercial-support`,
        },
      ],
      contactUs: [
        {
          label: "Email us",
          link: `${WEBSITE_URL}/email-us`,
        },
        {
          label: "Feature request",
          link: `${WEBSITE_URL}/feature-request`,
        },
      ],
      privacyPolicy: {
        label: "Privacy policy",
        link: `${WEBSITE_URL}/privacy-policy`,
      },
    },
    navLinks: [
      {
        label: "Docs",
        link: "/",
      },
      {
        label: "Community",
        link: `${WEBSITE_URL}/community`,
      },
      {
        label: "Commercial support",
        link: `${WEBSITE_URL}/support`,
      },
      {
        label: "Blog",
        link: `${WEBSITE_URL}/blog`,
      },
    ],
    socials: [
      {
        label: 'GitHub',
        src: '/docs/img/github.svg',
        link: 'https://github.com/openebs/openebs',
        isExternal: true,
      },
      {
        label: 'Slack',
        src: '/docs/img/slack.svg',
        link: `${WEBSITE_URL}/community`,
        isExternal: false
      }
    ],
    socialLinks: {
      facebook: 'https://www.facebook.com/openebs',
      github: 'https://github.com/openebs/openebs',
      slack: `${WEBSITE_URL}/community`,
      linkedin: 'https://www.linkedin.com/company/openebs',
      youtube: 'https://www.youtube.com/channel/UC3ywadaAUQ1FI4YsHZ8wa0g',
      twitter: 'https://twitter.com/openebs'
    },
    externalLinks: {
      subscribeNewsletter: 'https://lists.cncf.io/g/cncf-openebs-announcements',
      openAnIssue: 'https://github.com/openebs/openebs/issues/new',
      kubernetesSlackOpenEBS: 'https://kubernetes.slack.com/messages/openebs/'
    },
    breakpoints: {
      xs: 0,
      sm: 767,
      md: 996,
      lg: 0,
      xl: 0
    }
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          routeBasePath: "/",
          editUrl:
            "https://github.com/IsAmrish/POC-docs/edit/main/project-docs/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.scss"),
        },
        include: ["**/*.md", "**/*.mdx"], // Extensions to include.
      },
    ],
  ],
  plugins: [
    "docusaurus-plugin-sass",
    require.resolve("docusaurus-lunr-search"),
  ]
};