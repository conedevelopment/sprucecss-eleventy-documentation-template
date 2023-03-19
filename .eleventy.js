module.exports = config => {
  // Put robots.txt in root
  config.addPassthroughCopy({ './src/robots.txt': '/robots.txt' });

  // Set directories to pass through to the dist folder
  config.addPassthroughCopy('./src/img/');
  config.addPassthroughCopy('./src/css/');
  config.addPassthroughCopy('./src/js/');
  config.addPassthroughCopy('./src/font/');

  // Returns post items, sorted by issue order
  config.addCollection('posts', collection => {
    return [...collection.getFilteredByGlob('./src/posts/*.md')];
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
