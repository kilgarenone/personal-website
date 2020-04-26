module.exports = function (eleventyConfig) {
  eleventyConfig.addFilter("dateIso", (date) => {
    return new Date(date).toISOString();
  });

  eleventyConfig.addFilter("dateReadable", (date) => {
    return new Date(date).toLocaleString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  });
};
