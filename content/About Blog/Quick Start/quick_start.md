---
title: "Quick Start"
date: 2023-02-04 10:51:13
subtitle: "Let's get started!"
category: "Instruction"
tags:
  - about
  - information
  - guidelines
background: "stickyNote.jpeg"
emoji: "🚀"
draft: false
---

## :fire: Quick Start

### 1. Create a Gatsby site

Use the Gatsby CLI ([install instructions](https://www.gatsbyjs.com/docs/tutorial/part-0/#gatsby-cli)) to create a new site, specifying the gatsby-clean-blog starter.

```
npx gatsby new gatsby-clean-blog-starter https://github.com/soheee-bae/Gatsby-Clean-Blog-Starter
```

> if you are not using `npx`, following [Gatsby Getting Started](https://www.gatsbyjs.com/docs/quick-start/)

```
npm install -g gatsby-cli
gatsby new gatsby-clean-blog-starter https://github.com/soheee-bae/Gatsby-Clean-Blog-Starter
```

### 2. Start developing

Navigate into your new site's directory and start it up.

```
cd gatsby-clean-blog-starter/
gatsby develop
```

### 3. Open the source code and start editing!

Your site is now running at `http://localhost:8000`!

Note: You'll also see a second link: `http://localhost:8000/___graphql`. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby Tutorial](https://www.gatsbyjs.com/docs/tutorial/part-4/#use-graphiql-to-explore-the-data-layer-and-write-graphql-queries).

### 4. Add your content

You can write contents to blog in `/content` directory.

### 5. Fix meta data

You can fix meta data in `/gatsby-metaconfig.js` file.

## :yellow_heart: Customize

### Gatsby config

```
root
├── gatsby-config.js
├── gatsby-metaconfig.js
└── gatsby-node.js
```

### Folder structure

```
src
├── components // components with styling
├── constants // collections of string global variables
├── layout // layout for home and post
├── pages // 404 page, about page, home page
├── hooks
├── styles
├── utils
└── templates
    └── blog-post.js // blog template
```

### Style

You can customize color, font, breakpoints and height / width of layout in `src/styles` directory.

```
src/styles
├── _breakpoints.scss
├── _colors.scss
├── _mixins.scss
├── _size.scss
└── _typography.scss
```
