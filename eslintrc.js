module.exports = {
	root: true,
	env: {
		node: true,
		browser: true,
		es6: true,
		'react-native/react-native': true,
	},
	extends: ['plugin:react/recommended', 'prettier', 'eslint:recommended'],
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: ['react', 'react-native'],
	ignorePatterns: ['!.*', 'node_modules'],
	rules: {
		indent: [
			'error',
			'tab',
			{
				SwitchCase: 1,
				ignoreNodes: ['ConditionalExpression'],
			},
		],
		'linebreak-style': ['error', 'unix'],
		quotes: ['error', 'double'],
		semi: ['error', 'always'],
		'no-console': ['error'],
		'no-unused-vars': ['error', { vars: 'all' }],
	},
	settings: {
		react: {
			version: 'detect',
		},
	},
};
