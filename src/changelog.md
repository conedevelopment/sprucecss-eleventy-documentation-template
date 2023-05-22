---
title: "Changelog"
description: "Do you work on a project that requires a documentation? This theme is for you. It's a simple, clean and responsive theme for Eleventy."
layout: "layouts/changelog.html"
changelog:
    - date: "2023-02-02"
      title: "v0.2.0"
      items:
        - "**Improvement:** add `$btn-font-family` to control the button's font family."
        - "**Improvement:** add `$heading-font-weight` to control the heading's font-weight."
        - "**Improvement:** rename some keys in the `$colors` map (`mark-color` : `mark-foreground`, `code-color` : `code-foreground`)."
        - "**Improvement:** reorganize the recurrent colors into variables."
        - "**Fix:** modify `btn-variant()` mixin: add hover foreground color."
        - "Global switch to `color()` function's fallback value under the [`$settings`](https://sprucecss.com/docs/sass/variables#settings) map."
        - "Modify the [`scrollbar()`](https://sprucecss.com/docs/sass/mixins#scrollbar) mixin to accept hover thumb background-color value."
        - "Make `$breakpoints` overwriteable by key."
        - "Modify `font-size()` and `responsive-font-size()` function to accept optimal size value. The optimal value will fallback to a global settnigs under the `$settings` map."
    - date: "2023-02-11"
      title: "v0.1.0"
      items:
        - "Initial commit"
---
