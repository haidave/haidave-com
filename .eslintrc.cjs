const path = require('path')

/** @type {import("eslint").Linter.Config} */
const config = {
  overrides: [
    {
      extends: [
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'prettier',
        'plugin:tailwindcss/recommended',
      ],
      files: ['*.ts', '*.tsx'],
      parserOptions: {
        project: path.join(__dirname, 'tsconfig.json'),
      },
      plugins: ['tailwindcss'],
      settings: {
        tailwindcss: {
          callees: ['cn'],
          config: 'tailwind.config.js',
        },
      },
      rules: {
        // TODO: temporary disable this rule because it's conflicting with prettier-plugin-tailwindcss
        // https://github.com/francoismassart/eslint-plugin-tailwindcss/issues/231
        'tailwindcss/classnames-order': 'off',
        'tailwindcss/no-custom-classname': 'off',
      },
    },
    {
      files: ['src/pages/**/*.{ts,tsx}'],
      rules: {
        'import/no-default-export': 'off',
        'import/prefer-default-export': 'error',
      },
    },
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: path.join(__dirname, 'tsconfig.json'),
  },
  plugins: ['@typescript-eslint'],
  extends: ['next/core-web-vitals', 'plugin:@typescript-eslint/recommended'],
  rules: {
    '@typescript-eslint/consistent-type-imports': [
      'warn',
      {
        prefer: 'type-imports',
        fixStyle: 'inline-type-imports',
      },
    ],
    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
  },
}

module.exports = config
