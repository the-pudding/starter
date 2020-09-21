const path = require("path");

module.exports = env => {
	const dev = !env;
	const dir = dev ? 'dev' : 'dist';

	return {
    entry: "./src/js/main.js",
    output: {
      filename: "bundle.js",
      path: path.resolve(__dirname, dir),
    }
  };  
};
