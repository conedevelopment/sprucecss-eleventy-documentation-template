const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

module.exports = config => {
  config.addPlugin(eleventyNavigationPlugin);

  // Put robots.txt in root
  config.addPassthroughCopy({ './src/robots.txt': '/robots.txt' });

  // Set directories to pass through to the dist folder
  config.addPassthroughCopy('./src/img/');
  config.addPassthroughCopy('./src/css/');
  config.addPassthroughCopy('./src/js/');
  config.addPassthroughCopy('./src/font/');

  // Returns content items, sorted by issue order
  config.addCollection('content', collection => {
    return [...collection.getFilteredByGlob('./src/content/*.md')];
  });

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