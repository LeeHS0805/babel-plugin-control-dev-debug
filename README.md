# babel-plugin-control-dev-debug

## Introduction

An babel plugin which can be used for controling how dev code should be generate.

## Install

There is no npm package available now, you can import the plugin manually!

## Usage

Add this plugins to babel.config.js

```
module.exports = {
  plugins: ["${Relative Path}"],
};
```

In you code

```
if (DEBUG) {
  console.log("This is code in debug mode");
}
```

if you use eslint you must be add DEBUG to globals to eslint.config.js

```
// .eslintrc.js
module.exports = {
  globals: {
    DEBUG: true,
  },
};
```
