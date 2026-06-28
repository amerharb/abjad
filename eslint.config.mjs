import tsPlugin from '@typescript-eslint/eslint-plugin'
import tsParser from '@typescript-eslint/parser'
import globals from 'globals'

export default [
	{
		ignores: [
			'**/node_modules/**',
			'**/dist/**',
			'**/.next/**',
			'**/coverage/**',
			'**/*.js',
		],
	},
	{
		files: [
			'packages/*/src/**/*.ts',
			'packages/*/src/**/*.tsx',
			'packages/*/test/**/*.ts',
			'src/**/*.ts',
			'test/**/*.ts',
		],
		languageOptions: {
			parser: tsParser,
			parserOptions: {
				ecmaVersion: 2021,
				sourceType: 'module',
			},
			globals: {
				...globals.browser,
				...globals.node,
				...globals.es2021,
			},
		},
		plugins: {
			'@typescript-eslint': tsPlugin,
		},
		rules: {
			'indent': ['error', 'tab'],
			'linebreak-style': ['error', 'unix'],
			'quotes': ['warn', 'single', { avoidEscape: true, allowTemplateLiterals: true }],
			'semi': ['warn', 'never'],
			'object-curly-spacing': [
				'warn', 'always', { objectsInObjects: true, arraysInObjects: true },
			],
			'no-empty-function': ['error', { allow: ['constructors'] }],
			'no-explicit-any': ['off'],
			'no-console': 'warn',
			'no-unused-private-class-members': ['off'],
			'no-trailing-spaces': ['warn'],
			'sort-imports': ['warn', { ignoreDeclarationSort: true }],
		},
	},
]
