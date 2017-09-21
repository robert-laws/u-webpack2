# Webpack 2 - Front-end build tool

This project covers how to structure and use webpack2.

## Requiring Dependencies

defined before the configuration code.

``const path = require('path')``

## Basic Webpack Configuration

```javascript
const config = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: 'build/'
  }
}
```

Notes on the basic configuration

* ``entry:`` entry property is file that begins execution and is not dependent on any other file to run, relative file reference

* ``output:`` output property is reference to directory where file should be saved. It is an absolute file reference (uses the path module)

  * ``path.resolve(__dirname, 'build')`` built-in module that comes with nodejs, accepts two arguments.

    * 1st argument = ``__dirname`` is a constant in nodejs to the current working directory

    * 2nd argument is directory to save output file

  * ``filename:`` name of file that's outputted

  * ``publicPath:`` directory path used by any loader creating a explicit file path

## Exporting the Modules with CommonJS

This makes the config module available to NodeJS for processing

``module.exports = config`` 

## Loaders

webpack supports the use of loaders to add chunks of functionality to webpack before the files it encounters are bundled to an output file location.

```javascript
module: {
    rules: [
      {
        use: 'babel-loader',
        test: /\.js$/
      }
    ]
  }
```

* Babel - turns ES2015, ES2016, etc. into ES5. Three loaders required to get Babel workflow set-up in webpack

  * babel-loader - tells babel to work with webpack - compatability layer

  * babel-core - takes in code, parses it, and generates output file

  * babel-preset-env - contains ruleset for how to transform input code into ES5

* CSS

  * using css-loader & style-loader ``use: ['style-loader', 'css-loader']``

## Importing - CommonJS vs ES2015

| Action | CommonJS | ES2015 |
|--------|----------|--------|
| Import a module | ``const sum = require('./sum')`` | ``import sum from './sum'`` |
| Export some code | ``module.exports = sum`` | ``export default sum`` |