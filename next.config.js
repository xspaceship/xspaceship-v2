const WindiCSS = require('windicss-webpack-plugin').default;

module.exports = {
	reactStrictMode: true,
	webpack(config, { isServer }) {
		// Replace React with Preact only in client
		if (!isServer) {
			Object.assign(config.resolve.alias, {
				react: 'preact/compat',
				'react-dom/test-utils': 'preact/test-utils',
				'react-dom': 'preact/compat',
			});
		}

		// Add WindiCSS
		config.plugins.push(new WindiCSS());

		return config;
	},
};
