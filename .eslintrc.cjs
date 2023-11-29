module.exports = {
  root: true,
  env: { browser: true, es2021: true, node: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
  ],
  ignorePatterns: ["dist", "docs"],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "react", "unused-imports", "react-refresh", "import"],
  rules: {
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off",
    "linebreak-style": ["error", "unix"],
    quotes: ["error", "single"],
    semi: ["error", "always"],
    // no-mixed-spaces-and-tabsルールをoffに設定する
    "no-mixed-spaces-and-tabs": "off",
    // // インデントはスペースで統一
    indent: ["error", 2, { SwitchCase: 1 }],

    "import/order": [
      "error",
      {
        "alphabetize": {
          "order": "asc"
        }
      }
    ],

    // // タブ文字は使用しない
    // 'no-tabs': 'error',

    // {'string'}のような波括弧を消す
    'react/jsx-curly-brace-presence': 'error',
    /**
     * @description importが型のみの場合は、import typeを強制
     */
    "@typescript-eslint/consistent-type-imports": "error",

    /**
     * 未使用のimport削除
     */
    "unused-imports/no-unused-imports": "warn",

    /**
     * @description propsを自動でソート
     * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-sort-props.md}
     */
    "react/jsx-sort-props": [
      "error",
      {
        callbacksLast: true,
        shorthandFirst: true,
        ignoreCase: true,
        noSortAlphabetically: true,
        reservedFirst: true,
      },
    ],
  },
};
