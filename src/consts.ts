import type { Metadata, Site, Socials } from "@types";

export const SITE: Site = {
  TITLE: "Fwy13 Blog",
  DESCRIPTION: "Một blog của Fwy13 chia sẻ về mọi thứ!",
  EMAIL: "fwy13@duck.com",
  NUM_POSTS_ON_HOMEPAGE: 4,
  NUM_PROJECTS_ON_HOMEPAGE: 0,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "Astro Micro is an accessible theme for Astro.",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "A collection of articles on topics I am passionate about.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION:
    "A collection of my projects with links to repositories and live demos.",
};

export const SOCIALS: Socials = [
  {
    NAME: "GitHub",
    HREF: "https://github.com/fwy13",
  },
];
