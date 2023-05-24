---
title: "Setup"
summary: "We use eleventy --serve and compile Sass with sass-cli with npm scripts."
eleventyNavigation:
  key: Setup
  parent: Getting Started
  order: 4
---

## Clone the repository

Today more people and experts write about accessibility. For the better progression it is a good idea to read them.

## Install the dependencies

In the `package.json` file, you will find all of the dependencies (and scripts) to install them using the following command:

```shell
npm install
```

## Run the development mode

To run the development mode, use the `npm script`.   This script will also watch for changes.

```shell
npm start
```

## Run the production mode

Before you go live, you should use the production script to compress the Sass files.

```shell
npm run prod
```

## Additional Scripts

You can find some more npm scripts in the [package.json](https://github.com/conedevelopment/sprucecss-eleventy-documentation-template/blob/main/package.json) that can be helpful.
