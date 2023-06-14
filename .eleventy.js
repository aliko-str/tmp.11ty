
module.exports = function(eleventyConfig) {
	// Add passthrough copy for static assets
	eleventyConfig.addPassthroughCopy("img");
	eleventyConfig.addPassthroughCopy("css");
	
	// Add a custom filter to clip excessive text
	eleventyConfig.addFilter("clipIt", (str, n)=>{
		// NOTE: not validating any inputs - it all runs just once and you'd want it to throw if there is an issue
		return str.substring(0, n);
	});
	
	// NOTE: chaining filters is one of the benefits of using them
	eleventyConfig.addFilter("dotIt", (str)=>{
		 return str + "…";
	});

	// Set input and output directories
	return {
		dir: {
			input: "inputs", // default: "."
			includes: "../_includes", // default: "_includes"
			data: "../_data", // default: "_data"
			output: "_site"
		}
	};
};