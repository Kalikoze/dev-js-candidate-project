module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": [
      "eslint:recommended",
      "plugin:react/recommended"
    ],
    globals: {
      require: 'false',
      process: 'false',
      describe: 'false',
      it: 'false',
      expect: 'false',
      beforeEach: 'false',
      jest: 'false',
    },
    "parserOptions": {
      "ecmaVersion": 8,
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": true
        },
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "indent": [
            "error",
            2
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ]
    }
};
