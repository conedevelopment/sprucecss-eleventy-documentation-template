const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const markdownIt = require("markdown-it");
const markdownItAnchor = require("markdown-it-anchor");

module.exports = config => {
  config.addPlugin(eleventyNavigationPlugin);
  config.addPlugin(syntaxHighlight);

  config.addPassthroughCopy({ './src/robots.txt': '/robots.txt' });
  config.addPassthroughCopy('./src/img/**');
  config.addPassthroughCopy('./src/css/**');
  config.addPassthroughCopy('./src/js/**');
  config.addPassthroughCopy('./src/font/**');

  config.addFilter('parentFilter', function(collection, parent) {
    if (!parent) return collection;
      const filtered = collection.filter(item => item.data.eleventyNavigation?.parent == parent);
      return filtered.sort((a, b) => a.data.eleventyNavigation.order - b.data.eleventyNavigation.order);
  });

  config.addCollection('content', collection => {
    return [...collection.getFilteredByGlob('./src/content/*.md')];
  });

  const markdownItOptions = {
    html: true,
  }

  // Options for the `markdown-it-anchor` library
  const markdownItAnchorOptions = {
    permalink: true,
  }

  const markdownLib = markdownIt(markdownItOptions).use(
    markdownItAnchor,
    markdownItAnchorOptions
  )

  config.setLibrary("md", markdownLib)

  return {
    markdownTemplateEngine: 'njk',
    dataTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    dir: {
      input: 'src',
      output: 'dist'
    }
  };
};
