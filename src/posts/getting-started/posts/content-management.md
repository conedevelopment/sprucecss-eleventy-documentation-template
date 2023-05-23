---
title: "Content Management"
summary: "Today more people and experts write about accessibility. For the better progression it is a good idea to read them."
eleventyNavigation:
  key: Content Management
  parent: Getting Started
  order: 5
---

Adding content to the template is easy as almost everything is in Eleventy.

## The Basic Structure

Our base folder for the documentation pages is the `posts` folder. You must follow the folder structure, which means the `category` here. If you create a folder, you must make a list page with the same name as the folder. You must also create another `posts` folder under the `category` folder where your posts go. You must create the `posts.json` file that will parameter your `layout` and `permalink` values.

## Eleventy Navigation

The theme utilizes the [Eleventy Navigation plugin](https://www.11ty.dev/docs/plugins/navigation/), so you must explicitly set up the hierarchy. This is needed for the automatic sidebar navigation, the navigation order, and breadcrumb generation.

## Other Pages

To create simple pages, make a file directly under the `src` folder and configure it with the available front matter.
