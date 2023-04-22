---
title: "More About Blog"
date: 2023-02-06 9:51:13
subtitle: "Do you want to know more about Gatsby Clean Blog Starter?"
category: "Blog"
tags:
  - about
  - information
background: "coding.gif"
emoji: "🥛"
draft: false
---

## :fire: Welcome to Gatsby Clean Blog Starter!

&nbsp;

### 1. Support markdown with Eight frontmatter

```
---
title: "More About Blog"
date: 2023-02-06 9:51:13
subtitle: "Do you want to know more about Gatsby Clean Blog Starter?"
category: "Blog"
tags:
  - about
  - information
background: "coding.gif"
emoji: "🥛"
draft: false
---
```

1. title
2. date
3. subtitle
4. category
5. tags
6. background : background image for the post header
7. emoji
8. draft : when this is true, the post will be hidden

### 2. Support emoji

You can check [Emoji Cheat Sheet](https://www.webfx.com/tools/emoji-cheat-sheet/) for lists of emoji!

### 3. Support light/dark mode

### 4. Support pagination

You can set sibling count (of the current page) and page size (number of posts per page) in `src/constants/page.js`!

```
export const PAGE = {
  SIBLINGCOUNT: 1,
  PAGESIZE: 5,
};
```

### 5. Support search and filtering based on category and tags

Categories and tags will be added automatically as you add a new blog (.md file in `/content`).

You will be able to filter the posts by clicking category or tag badges and also search for the blog title.

### 6. Resize layout

You can resize layout (e.g. `height of footer`) in `src/styles/_size.scss`!

```
...
$content-max-width: 700px;
$footer-height: 150px;
$navbar-height: 70px;
$header-min-height: 600px;
$header-max-height: 750px;
...
```

### 7. Change color

All colors that have been used in this blog are in `src/styles/_color.scss`.
You can simply change hex code color from `src/styles/_color.scss`!

```
--lg-black: #000000;
--lg-light-black: #212529;
--lg-darkest-gray: #343a40;
--lg-darker-gray: #495057;
...
```

Note! - If you decide to change the name (e.g. `--lg-black`), you need to edit the `src/utils/theme.js` for theme switch.

### 8. Custom post thumbnail

You can display or hide (`title, subtitle, date, content`) by setting the option from `src/constants/contentItem.js`!

```
export const CONTENTITEM = {
  TITLE: true,
  SUBTITLE: true,
  DATE: true,
  CONTENT: true,
};
```

### 9. Custom header details

You can display or hide (`headerImg, title, subtitle, category, tags, icon, date`) by passing datas to `Layout`!

```
 <Layout
      headerImg={frontmatter.background}
      title={frontmatter.title}
      subtitle={frontmatter.subtitle}
      category={frontmatter.category}
      tags={frontmatter.tags}
      icon={frontmatter.emoji}
      date={frontmatter.date}
    > ...
```
