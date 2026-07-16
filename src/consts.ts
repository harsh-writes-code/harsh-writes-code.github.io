import type { Site, Page, Links, Socials } from "@types"

// Global
export const SITE: Site = {
  TITLE: "Harsh",
  DESCRIPTION: "Welcome to Harsh's Portfolio, a Backend Developer with 1+ years of experience in Node.js, Express.js, TypeScript, and Laravel.",
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
    TEXT: "harshdhimanbarara15@gmail.com",
    HREF: "mailto:harshdhimanbarara15@gmail.com",
  },
  { 
    NAME: "Github",
    ICON: "github",
    TEXT: "harsh-writes-code",
    HREF: "https://github.com/harsh-writes-code"
  },
  { 
    NAME: "LinkedIn",
    ICON: "linkedin",
    TEXT: "harsh-dhiman",
    HREF: "https://www.linkedin.com/in/harsh-dhiman",
  },
]

