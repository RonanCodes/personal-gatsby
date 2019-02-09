[![Netlify Status](https://api.netlify.com/api/v1/badges/8280c50c-658d-4ec9-929d-d24edfb48cc1/deploy-status)](https://app.netlify.com/sites/silly-agnesi-43a1cd/deploys)

<h1 align="center">
    <img alt="Personal Gatsby Cursive" src="https://github.com/RonanC/personal-gatsby/blob/master/src/images/personal-gatsby-cursive.png" width="400" />
</h1>

<p align="center">
  <a target="_blank" rel="noopener noreferrer" href="https://silly-agnesi-43a1cd.netlify.com/">
    <img alt="Personal Gatsby Logo" src="https://github.com/RonanC/personal-gatsby/blob/master/src/images/personal-gatsby-logo.png" width="150" />
  </a>
</p>

**This project contains the basics needed to set up a personal website:**

- Landing page
- Contact form
- Portfolio page
- Blog page

**With included extras:**

- Backend CMS for writers to update the portfolio & blog
- PWA (progressive web app) so that customers get a good offline experience (and can save your website as a local app)
- Site manifest (for SEO purposes)
- Optimized image loading
- Optimized pre-loading of pages (on link hover)

**Example:**
https://silly-agnesi-43a1cd.netlify.com/

## 💻 How to run dev

```sh
npm i
```

```sh
gatsby develop
```

The site is now running at: `http://localhost:8000`

GraphiQL is available at: `http://localhost:8000/___graphql`

_Note: This allows you to query your GraphQL api_

## 🎩 How to run production

```sh
gatsby build
```

```sh
gatsby serve
```

The site is now running at: `http://localhost:9000`

## 💫 How to deploy (Netlify)

```sh
npx netlify deploy
```

## ✏️ Netlify CMS setup

- Turn on Identity here:
  https://app.netlify.com/sites/silly-agnesi-43a1cd/identity

- Make registration invite only:
  https://app.netlify.com/sites/silly-agnesi-43a1cd/settings/identity#registration-preferences

- Invite yourself, create an account, and login via your site `/admin/`

**If you get an error when you land on the admin page it may be because you edited your project settings:**
To fix this reset the project link and the git-gateway in the below two places.

1. https://app.netlify.com/sites/silly-agnesi-43a1cd/settings/deploys#build-settings
2. https://app.netlify.com/sites/silly-agnesi-43a1cd/settings/identity#services

Make sure that you you're using `git-gateway` in your `config.yml` file:

```yml
backend:
  name: git-gateway
  branch: master
```

**Notes:**

- The gatsby-plugin-netlify-cms takes care of the hooking up on our side so you can ignore that in the doc above.
- Everything in the created static folder will get compoed into the output.
- More info on Netlify CMS with Gatsby here: https://www.gatsbyjs.org/docs/sourcing-from-netlify-cms/
- Adding markdown pages: https://www.gatsbyjs.org/docs/adding-markdown-pages/

### Netlify CMS Additional Information

- config options: https://www.netlifycms.org/docs/configuration-options/

**Demo here for all you needs:**

- https://github.com/netlify/netlify-cms/blob/master/dev-test/config.yml
- https://cms-demo.netlify.com/#/collections/posts

# General Notes

- Mock content brought to you by Hipster Ipsum: https://hipsum.co/

# Color Palette

This project is using this color palette/scheme: https://dribbble.com/shots/4797890--Chat-Property-dashboard

- primary (header): #4C2FC9
- secondary (lighter shade): #AEAFE8
- accent (text): #2A2A57
- light grey (background): #eaeaea
- border grey (border): #e2e2e2
- regular text: black

**Other:**

- accent: #9056D4
- light-pink: #DD6589
- dark-pink: #8A4966
- gray: #B3B2C0

# Inspiration

- Main website used to template this one (sorry for ripping you off 🙃): https://emmawedekind.com/

# Resources

- Sites and colour palettes/schemes: https://dribbble.com/
- Imagery: https://undraw.co/
- Tutorials:
  - Wes Bos' React for Beginners course: https://reactforbeginners.com/
  - Scot Tolinski's Pro Gatsby 2 course: https://www.leveluptutorials.com/tutorials/pro-gatsby-2
  - Emma Wedekind's portolfio website tutorial: https://dev.to/emmawedekind/how-to-build-a-great-technical-portfolio-53bb
- The great people on:
  - Gitter: https://gitter.im/netlify/NetlifyCMS
  - Spectrum: https://spectrum.chat/gatsby-js/
- Free Logo Design for their awesome logo: https://en.freelogodesign.org/
- Font Meme for a great Cursive Text Logo Inspiration: https://fontmeme.com/cursive-fonts/
  - Garton 65 #2A2A57
- Font Squirral for giving me the Garton Font, which allowed me to create an SVG version: https://www.fontsquirrel.com/fonts/garton
- Figma fordoing up the cursive font and exporting to SVG: https://www.figma.com/login
- React Icons (+ font awesome) for adding the ability to effortlessly introduce font awesome icons: https://github.com/react-icons/react-icons
