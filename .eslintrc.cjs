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
      rules: {
        '@typescript-eslint/naming-convention': [
          'warn',
          {
            selector: 'memberLike',
            modifiers: ['private'],
            format: ['camelCase'],
            leadingUnderscore: 'forbid',
          },
          {
            selector: 'variable',
            types: ['boolean'],
            format: ['PascalCase'],
            prefix: ['is', 'should', 'has', 'can', 'did', 'will', 'expected'],
            filter: {
              regex: '(loading)',
              match: false,
            },
          },
          {
            selector: 'typeParameter',
            format: ['PascalCase'],
            custom: {
              regex: 'T([A-Z][a-zA-Z]+)?$',
              match: true,
            },
          },
          {
            selector: 'interface',
            format: ['PascalCase'],
            custom: {
              regex: '^I[A-Z]',
              match: true,
            },
          },
        ],
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
