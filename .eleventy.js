module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy ("./src/css/style.css")
  eleventyConfig.addPassthroughCopy("./src/css/bootstrap.min.css");
  eleventyConfig.addPassthroughCopy("./src/imgs");
  eleventyConfig.addPassthroughCopy("./src/static");
  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);

  // markdown plugin 
  const markdownIt = require("markdown-it");
  let markdownItAttrs = require('markdown-it-attrs');
  let options = {
    html: true,
    breaks: true,
    linkify: true
  };

  let markdownLib = markdownIt(options).use(markdownItAttrs);
  eleventyConfig.setLibrary("md", markdownLib);

  // add addWatchTarget?

  return {
    dir: {
      input: "src",
      output: "public"
    },
    markdownTemplateEngine: "njk",

  }
}