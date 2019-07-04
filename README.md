# CORE-js

This is a Node.js wrapper for the CORE article and journal service's API.

## Installation

```console
foo@bar:~$ npm install scapegoat --save
```

## Usage

```JavaScript
var CORE = require('CORE-js');

CORE.init("your API key");

console.log(CORE.getArticles({query: "Agricultural Subsidies"}));
// This should log an array of 10 articles (in metadata format)
```

