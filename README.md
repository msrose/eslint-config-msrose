# eslint-config-msrose

[![npm version](https://badge.fury.io/js/eslint-config-msrose.svg)](https://badge.fury.io/js/eslint-config-msrose)
[![Build Status](https://travis-ci.org/msrose/eslint-config-msrose.svg?branch=master)](https://travis-ci.org/msrose/eslint-config-msrose)

My eslint config

## To use the base config

```
npm install --save-dev eslint eslint-config-msrose
```

In your .eslintrc.js:

```javascript
module.exports = {
  extends: 'msrose'
};
```

## To use the React config:

```
npm install --save-dev eslint eslint-plugin-react eslint-config-msrose
```

In your .eslintrc.js:

```javascript
module.exports = {
  extends: 'msrose/react'
};
```

## To use the Jest config:

```
npm install --save-dev eslint eslint-plugin-jest eslint-config-msrose
```

In your .eslintrc.js:

```javascript
module.exports = {
  extends: 'msrose/jest'
};
```
