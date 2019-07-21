module.exports = function config(api) {
	const plugins = [
		'@babel/transform-flow-strip-types',
		'@babel/plugin-transform-runtime',
		'@babel/plugin-proposal-class-properties',
		'@babel/plugin-proposal-export-default-from',
		'@babel/plugin-syntax-dynamic-import',
		'jest-hoist',
	]
	if (api.env('test')) {
		plugins.push('@babel/plugin-transform-modules-commonjs')
	}
	return {
		presets: ['babel-preset-expo'],
		plugins,
	}
}
