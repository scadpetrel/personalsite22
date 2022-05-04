module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy ("./src/css/style.css")
  eleventyConfig.addPassthroughCopy("./src/css/bootstrap.min.css");
  eleventyConfig.addPassthroughCopy("./src/imgs");
  eleventyConfig.addPassthroughCopy("./src/static");
  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);
  // add addWatchTarget?

  return {
    dir: {
      input: "src",
      output: "public"
    },
    markdownTemplateEngine: "njk",

  }
}