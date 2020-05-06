[![Netlify Status](https://api.netlify.com/api/v1/badges/8ec719ad-c2f8-4529-b97d-e7561a9eaf33/deploy-status)](https://app.netlify.com/sites/delog-w3layouts/deploys) &nbsp;<a href="https://twitter.com/intent/follow?screen_name=w3layouts">
  <img src="https://img.shields.io/twitter/follow/w3layouts.svg?label=Follow%20@w3layouts" alt="Follow @w3layouts" />
</a>

# kyleturner.me

This simple website built with GatsbyJS and Netlify CMS. Deploys on netlify.

Instructions available at W3Layouts [Delog Launch Article](https://w3layouts.com/articles/delog-gatsby-starter-netlify-cms/).

## Features
- Built with GatsbyJS and Netlify CMS
- Option to Add, Edit, Update and Delete posts via Netlify CMS
- SEO friendly - Option to Add meta description
- In-built contact form powered by [W3Layouts](https://w3layouts.com) 
- Comes with dark mode

---

## Documentation

* Once you hit "[Deploy to Netlify](https://app.netlify.com/start/deploy?repository=https://github.com/W3Layouts/gatsby-starter-delog)"
* Connect Github
* Enter Repository Name
* And your site starts build process. After the build process your website is live

### Changing repositary URL for Netlify CMS access
You need to change repo URL to your own `repo` at delog/static/admin/config.yml, for example `username/repo-name`

### Creating Github OAuth Client ID
* Goto Github [Developer Settings](https://github.com/settings/developers)
* **New OAuth** 
* Enter Application name
* Homepage URL as Netlify URL
* And **Authorization callback URL** to `https://api.netlify.com/auth/done`)
* Once Client ID and Secret token is generated configure same in [Netlify Access Control](#accessing-netlify-cms-admin) as described.

### Accessing Netlify CMS Admin
* Goto your Netlify site admin
* Goto **Access Control** > **OAuth** then **Install Provider** you need to select provider as `Github` as add `Client ID` and `Secret` 
* Your Netlify CMS is ready. Goto you netlify site URL and append `/admin/`. for example `example.netlify.com/admin/`, You will see login with Github button.

### Managing Blog Posts in Netlify CMS
* Once logged in you will find all the blog post listed here.
* You can create, edit, update and delete like any CMS

### Editing Meta Data
Goto `gatsby-config.js`. Here you can edit following details
* Title
* Description
* Site URL
* Homepage Title
* Homepage Description
* W3Layouts Contact form domain verification key
  * Follow the steps [W3Layouts Contact form](https://w3layouts.com/articles/introducing-contact-forms-for-static-websites/) instructions and grab domain verification key (for example: xxxxxxxxxxxxxxx_Domain_verify) then past it as value for [w3l_dom_key](https://github.com/W3Layouts/gatsby-starter-delog/blob/109b93b42385238da52cf46e8e80d8a77730e42d/gatsby-config.js#L18) in `gatsby-config.js` file in your project.
* and google analytics tracking id

---

## Changelog
All notable changes to this project are listed here.

### [2.0.0] - 2020-05-01

#### Added
- React, Gatsby and Netlify website rebuild.