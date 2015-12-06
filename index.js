var CodeGen = require('swagger-js-codegen').CodeGen;
var request = require('request');
var fs      = require('fs');

request.get('http://devdocs.magento.com/swagger/schemas/2.0.0-rc-api-schema.json', function (error, response, body) {
    if (!error && response.statusCode == 200) {
        var swagger = JSON.parse(body);
        var nodejsSourceCode = CodeGen.getNodeCode({ className: 'magento', swagger: swagger });
        fs.writeFileSync('lib/magento.js', nodejsSourceCode);
    }
});
