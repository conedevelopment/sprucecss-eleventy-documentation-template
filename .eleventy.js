const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const markdownIt = require("markdown-it");
const markdownItAnchor = require("markdown-it-anchor");
const pluginTOC = require('eleventy-plugin-toc');
const { execSync } = require('child_process');

module.exports = config => {
  config.addFilter('debugger', (...args) => {
    console.log(...args)
    debugger;
  });

  config.addPlugin(eleventyNavigationPlugin);
  config.addPlugin(syntaxHighlight);
  config.addPlugin(pluginTOC);

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

  config.addCollection('posts', collection => {
    const items = collection.getFilteredByGlob('./src/posts/**/posts/*.md');
    return items.sort((a, b) => a.data.eleventyNavigation.order - b.data.eleventyNavigation.order);
  });

  const markdownLib = markdownIt({ html: false }).use(
    markdownItAnchor,
    {
      permalink: true,
      permalinkClass: 'anchor',
      permalinkSymbol: '#'
    }
  );

  config.setLibrary('md', markdownLib);

  config.on('eleventy.after', () => {
    execSync(`npx pagefind --source dist --glob \"**/*.html\"`, { encoding: 'utf-8' })
  });

  return {
    markdownTemplateEngine: 'njk',
    dataTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    dir: {
      input: 'src',
      output: 'dist'
    },
    passthroughFileCopy: true
  };
};
