# Magento 2 REST API client automatically generated from Swagger specification

Magento 2 implements [Swagger](http://swagger.io/) providing a JSON Schema of the REST endpoints, this package compiles the JSON into classes and methods using templates (see inside the `templates/` directory) for consuming the API in a NodeJS applicaton.

## Installation

```sh
npm install magento2-swagger --save
```

## Example usage

A full specification of all the endpoints in this packages can be found in the [Magento 2 Dev Docs](http://devdocs.magento.com/swagger/index.html)

```js
var magentoSwagger = require('magento2-swagger').Magento;

var magento = new magentoSwagger('http://www.example.com/rest');

magento.catalogCategoryManagementV1GetTreeGet().done(function (response) {
  console.log(response.body);
});
```
