/** @type {import('next-seo').DefaultSeoProps} */
const DEFAULT_SEO = {
  // TODO: Change these default meta
  title: undefined,
  titleTemplate: '%s | Abner Development Starter',
  defaultTitle: 'Abner Development Starter',
  description:
    'Next.js, Chakra UI, and Typescript',
  canonical: 'abnerdev-project-starter.vercel.app/',
  openGraph: {
    url: 'https://abnerdev-project-starter.vercel.app/',
    type: 'website',
    title: `Abner Development Starter`,
    description: `Next.js, Chakra UI, and Typescript`,
    site_name: 'Abner Development Starter',
  },
};

export default DEFAULT_SEO;
