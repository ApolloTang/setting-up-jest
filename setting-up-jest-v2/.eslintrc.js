module.exports = {
    "parser": "@typescript-eslint/parser",
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": [
      "eslint:recommended",
      // "airbnb",
      "plugin:jest/recommended"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
      "react",
      "react-hooks",
      "@typescript-eslint"
    ],
    "rules": {
      "react-hooks/rules-of-hooks": "error",
      "react/jsx-uses-react": "error",        // https://github.com/eslint/eslint/issues/11183
      "react/jsx-uses-vars": ["error"],       // https://github.com/eslint/eslint/issues/8226

      "semi": ["error", "never"],
      "quotes": ["error", "single"]
    }
};
