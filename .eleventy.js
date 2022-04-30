module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy ("./src/css/style.css")
  eleventyConfig.addPassthroughCopy("./src/css/bootstrap.min.css");
  eleventyConfig.addPassthroughCopy("./src/imgs");
  // add addWatchTarget?

  return {
    dir: {
      input: "src",
      output: "public"
    }
  }
}