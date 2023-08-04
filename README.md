<div align="center">
  My personal portfolio website to show my skills, experience, and articles I published
</div>

## Built with

- **Framework**: [Next.js](https://nextjs.org/)
- **Styling**: [Chakra UI](https://chakra-ui.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Markdown Processor**: [remark](https://remark.js.org/)
- **Deployment**: [Netlify](https://app.netlify.com/)
- **Api's**:
  - [Dev.to](https://dev.to/api)
  - [Github](https://api.github.com)

## Overview

- `components/*` - Contains all components related to pages (blog, projects, about, etc).
  - `shared/*` - All reusable components like header, footer etc.
  - `layouts/*` - The different page layouts.
  - `theme/*` - Manage theme of site.
- `data/*` - Data that used for blog posts, projects etc.
- `lib/*` - Collection of helpful utilities or code for external services like devto api.
- `pages/api/*` - [API routes](https://nextjs.org/docs/api-routes/introduction).
- `pages/*` - All other static pages.
- `public/*` - Static assets including audios, fonts and images.
