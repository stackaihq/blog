import type { SocialObjects } from "./types";

export const SITE = {
  website: "https://astro-paper.pages.dev/",
  author: "Sushil Kumar",
  desc: "Stackai -- The ultimate ai toolkit",
  title: "Stackai",
  ogImage: "stackai-og.jpg",
  lightAndDarkMode: true,
  postPerPage: 3,
};

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/stackaihq",
    linkTitle: ` ${SITE.title} on Github`,
    active: true,
  },
  {
    name: "LinkedIn",
    href: "http://linkedin.com/in/sushil-kumar08",
    linkTitle: `${SITE.title} on LinkedIn`,
    active: true,
  },
  {
    name: "Mail",
    href: "mailto:sushil@stackai.co",
    linkTitle: `Send an email to ${SITE.title}`,
    active: false,
  },
];
