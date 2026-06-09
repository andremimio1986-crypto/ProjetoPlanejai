const js = require('@eslint/js');
const tsParser = require('@typescript-eslint/parser');
const tsPlugin = require('@typescript-eslint/eslint-plugin');
const reactHooks = require('eslint-plugin-react-hooks');
const simpleImportSort = require('eslint-plugin-simple-import-sort');
const prettierConfig = require('eslint-config-prettier');

module.exports = [
	{
		ignores: ['**/*.cjs', '.prettierrc.cjs', 'eslint.config.cjs'],
	},
	js.configs.recommended,
	...tsPlugin.configs['flat/recommended'],
	reactHooks.configs.flat.recommended,
	prettierConfig,
	{
		files: ['**/*.{ts,tsx}'],
		languageOptions: {
			parser: tsParser,
			parserOptions: {
				ecmaVersion: 'latest',
				sourceType: 'module',
				project: ['./tsconfig.app.json', './tsconfig.node.json'],
				tsconfigRootDir: __dirname,
			},
			globals: {
				browser: true,
			},
		},
		plugins: {
			'@typescript-eslint': tsPlugin,
			'react-hooks': reactHooks,
			'simple-import-sort': simpleImportSort,
		},
		settings: {
			react: {
				version: 'detect',
			},
		},
		rules: {
			'simple-import-sort/imports': 'error',
			'simple-import-sort/exports': 'error',
			'no-unused-vars': 'off',
			'@typescript-eslint/no-unused-vars': [
				'warn',
				{
					vars: 'all',
					varsIgnorePattern: '^_',
					args: 'after-used',
					argsIgnorePattern: '^_',
				},
			],
		},
	},
];
