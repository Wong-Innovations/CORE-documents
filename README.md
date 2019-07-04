# CORE-documents

This is a Node.js wrapper for the CORE article and journal service's API.

## Installation

```console
foo@bar:~$ npm install core-documents --save
```

## Usage

```JavaScript
var CORE = require('core-documents');

CORE.init("your API key");

console.log(CORE.getArticles({query: "Agricultural Subsidies"}));
// This should log an array of 10 articles (in metadata format)
```

## Release History

* 0.1.0 Initial release