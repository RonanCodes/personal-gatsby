[![Netlify Status](https://api.netlify.com/api/v1/badges/3e91f3e8-ac26-41ed-91e9-fd15501436a0/deploy-status)](https://app.netlify.com/sites/ronanc/deploys)

<p align="center">
  <h1 align="center">
    <a target="_blank" rel="noopener noreferrer" href="https://ronanc.xyz">
          <img alt="Ronan Connolly Cursive" src="https://github.com/RonanC/personal-gatsby/blob/ronanc/src/images/name-cursive.svg" width="400" />
    </a>
  </h1>
</p>

<p align="center">
  <a target="_blank" rel="noopener noreferrer" href="https://ronanc.xyz">
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
- Google Analytics
- Mailchimp signup form
- Paypal donation functionality

**Example:**
https://personalgatsby.xyz
https://ronanc.xyz

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
  https://app.netlify.com/sites/YOURSITENAME/identity

- Make registration invite only:
  https://app.netlify.com/sites/YOURSITENAME/settings/identity#registration-preferences

- Invite yourself, create an account, and login via your site `/admin/`

**If you get an error when you land on the admin page it may be because you edited your project settings:**
To fix this reset the project link and the git-gateway in the below two places.

1. https://app.netlify.com/sites/YOURSITENAME/settings/deploys#build-settings
2. https://app.netlify.com/sites/YOURSITENAME/settings/identity#services

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

<!-- TODO: Remove since we now have a constants file where these are referenced -->

- primary (header): #4C2FC9
- secondary (lighter shade): #AEAFE8
- accent (text): #2A2A57
- light grey (background): #eaeaea
- border grey (border): #e2e2e2
- regular text: black
- accent2 (text): #9056D4

**Other:**

- pink: #DD6589
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
- Google Fonts: https://fonts.google.com/

# Font Family

Old font family:

```css
 {
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu,
    Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
}
```

New font family:

```css
h1,
h2,
h3,
h4,
h5 {
  font-family: 'Open Sans', 'Droid Sans', serif;
}

p {
  font-family: 'EB Garamond', 'Droid Serif', Georgia, serif;
  font-size: 22px;
}
```

# Anchor Links

`rel="noopener noreferrer"` should be added to links containing `target="_blank"` as a precaution against reverse tabnabbing.

For more information, please refer to the following article:
https://www.jitbit.com/alexblog/256-targetblank---the-most-underestimated-vulnerability-ever/

**Source:**
https://github.com/asciidoctor/asciidoctor/issues/2071

# Google Analytics

I'm using the `gatsby-plugin-google-analytics` to take care of the config, but here's what google analytics generated for me below.
The plugin will generate something similar:
https://www.gatsbyjs.org/packages/gatsby-plugin-google-analytics/#create-only-fields

## Global Site Tag (gtag.js)

This is the Global Site Tag (gtag.js) tracking code for this property. Copy and paste this code as the first item into the <HEAD> of every web page that you want to track. If you already have a Global Site Tag on your page, simply add the config line from the snippet below to your existing Global Site Tag.

```html
<!-- Global site tag (gtag.js) - Google Analytics -->
<script
  async
  src="https://www.googletagmanager.com/gtag/js?id=UA-134235296-1"
></script>
<script>
  window.dataLayer = window.dataLayer || []
  function gtag() {
    dataLayer.push(arguments)
  }
  gtag('js', new Date())

  gtag('config', 'UA-134235296-1')
</script>
```

# Mailchimp

You can create your own database of users by using Mailchimp.
The `gatsby-plugin-mailchimp` allows you to easily add in this sign up functionality.
Great for letting your followers know about new blog posts!

Follow the instructions here:
https://www.gatsbyjs.org/packages/gatsby-plugin-mailchimp/?=mailc
