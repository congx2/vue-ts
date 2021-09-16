module.exports = {
	root: true,
	env: {
		node: true
	},
	extends: [
		'plugin:vue/essential',
		'eslint:recommended',
		'@vue/typescript/recommended',
		'@vue/prettier',
		'@vue/prettier/@typescript-eslint'
	],
	parserOptions: {
		ecmaVersion: 2020
	},
	rules: {
		'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		quotes: 'off',
		'prettier/prettier': [
			'error',
			{
				useTabs: true,
				tabWidth: 2,
				singleQuote: true,
				semi: false,
				trailingComma: 'none',
				quoteProps: 'as-needed',
				jsxSingleQuote: false,
				bracketSpacing: true,
				bracketSameLine: false,
				jsxBracketSameLine: false,
				arrowParens: 'avoid',
				printWidth: 100,
				htmlWhitespaceSensitivity: 'ignore',
				vueIndentScriptAndStyle: true,
				embeddedLanguageFormatting: 'auto',
				endOfLine: 'lf'
			},
			{
				usePrettierrc: true
			}
		]
	}
}
