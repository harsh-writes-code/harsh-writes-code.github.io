import type { Site, Page, Links, Socials } from "@types"

// Global
export const SITE: Site = {
  TITLE: "Harsh",
  DESCRIPTION: "Backend Software Engineer with 1+ year of experience building scalable web applications using PHP, Laravel, Node.js, TypeScript, MySQL, and Redis.",
  AUTHOR: "Harsh",
}

// Work Page
export const WORK: Page = {
  TITLE: "Work",
  DESCRIPTION: "Places I have worked.",
}



// Projects Page 
export const PROJECTS: Page = {
  TITLE: "Projects",
  DESCRIPTION: "Recent projects I have worked on.",
}

// Search Page
export const SEARCH: Page = {
  TITLE: "Search",
  DESCRIPTION: "Search all posts and projects by keyword.",
}

// Links
export const LINKS: Links = [
  { 
    TEXT: "Home", 
    HREF: "/", 
  },
  { 
    TEXT: "Work", 
    HREF: "/work", 
  },

  { 
    TEXT: "Projects", 
    HREF: "/projects", 
  },
]

// Socials
export const SOCIALS: Socials = [
  { 
    NAME: "Email",
    ICON: "email", 
    TEXT: "happydhimanbarara@gmail.com",
    HREF: "mailto:happydhimanbarara@gmail.com",
  },

  { 
    NAME: "LinkedIn",
    ICON: "linkedin",
    TEXT: "harsh-dhiman-barara",
    HREF: "https://www.linkedin.com/in/harsh-dhiman-barara",
  },
]

