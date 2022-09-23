---
title: "Thumbnail API"
desc: "My blog's og:image thumbnail generator."
stack:
  - "Node.js"
  - "React"
  - "Next.js"
  - "Vercel"
link: "https://api.irvanma.me"
gh: "https://github.com/irvanmalik48/thumbnail-api"
screenshot: "/showcase/no-image.webp"
---

# Collaborators

- [Irvan Malik <irvanmalik48@gmail.com>](https://github.com/irvanmalik48)

# Description

A thumbnail generating API for `og:image` meta for my blog.

It uses `puppeteer` to render the image before sending it to the browser.

Current API options are as follows:

## Post Title (Mandatory)

Method: `GET`

Input: `string`

```text
https://api.irvanma.me/api/index?title=Your Title
```

## Writer Name

Method: `GET`

Input: `string`

```text
https://api.irvanma.me/api/index?name=Your Name
```

## Writer Email

Method: `GET`

Input: `string`

```text
https://api.irvanma.me/api/index?email=example@example.com
```

## Post Date

Method: `GET`

Input: `string` (any date format allowed)

```text
https://api.irvanma.me/api/index?date=01-01-1975
```

## Post Tags

Method: `GET`

Input: `string[]`

```text
https://api.irvanma.me/api/index?tags=ex1&tags=ex2
```