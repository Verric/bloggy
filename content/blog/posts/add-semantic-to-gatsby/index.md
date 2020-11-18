---
title: How to add Semantic-ui-react to Gatsby
date: 2020-11-18 23:54:00
tags: ["gatsby"]
description: "test"
---

This assumes you aren't going to override any styles or theme Semantic-UI

```shell
yarn add semantic-ui-react semantic-ui-css
```

append the following to `gatsby-browser.js`

```javascript
import "semantic-ui-css/semantic.min.css"
```

At this stage I'm begging to assume that anything you put in `index.js` in a `Create-React-App` you just put into `gatsby-browser.js`
and wing it from there.
