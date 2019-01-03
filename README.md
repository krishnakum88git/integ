# Integra Managed Care

**Note:** This site uses the [Gatsby v2 Beta](https://www.gatsbyjs.org/blog/2018-06-16-announcing-gatsby-v2-beta-launch/).

This repo contains a marketing website for Integra Managed Care that is built with [Gatsby](https://www.gatsbyjs.org/), and [Netlify CMS](https://www.netlifycms.org): **[Demo Link](https://gatsby-netlify-cms.netlify.com/)**.

It follows the [JAMstack architecture](https://jamstack.org) by using Git as a single source of truth, and [Netlify](https://www.netlify.com) for continuous deployment, and CDN distribution.

## Development Prerequisites

- Node (I recommend using v8.2.0 or higher)
- [Gatsby CLI](https://www.gatsbyjs.org/docs/)

### Access Locally
```
$ git clone https://[PATH TO PROJECT]/Integra.git
$ cd Integra
$ npm install
$ npm run develop
```
To test the CMS locally, you'll need run a production build of the site:
```
$ npm run build
$ npm run serve
```

## Hosting
The site is hosted on Netlify and gets built and deployed when commits are made to the ```master``` branch. For development changes, use a separate branch (e.g. ```dev```) - do not commit to ```master```.

### CMS
The site is generated from content in markdown files in the ```src``` directory using Netlify CMS. You can directly edit those files in a text editor or use the admin interface hosted at `/admin`. The CMS is configured a YAML file located at ```static/admin/config.yml```. You can find additional information in the [Netlify CMS Docs](https://www.netlifycms.org/docs/intro/)

## Debugging
Windows users might encounter ```node-gyp``` errors when trying to npm install.
To resolve, make sure that you have both Python 2.7 and the Visual C++ build environment installed.
```
npm config set python python2.7
npm install --global --production windows-build-tools
```

[Full details here](https://www.npmjs.com/package/node-gyp 'NPM node-gyp page')
