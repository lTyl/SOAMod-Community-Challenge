const Path = require('path');

console.log(__dirname);

module.exports = {
	entry: {
		app: Path.resolve(__dirname, '../src/index.js')
	},
	output: {
		path: Path.resolve(__dirname),
		filename: '../patch-file.js'
	},
	resolve: {
		alias: {
			'~': Path.resolve(__dirname, '../src')
		}
	}
};