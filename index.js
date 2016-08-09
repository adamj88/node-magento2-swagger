/*
  @TODO - write template for path.mustache to make it into express routes
*/

var _ = require('lodash'),
  fs = require('fs'),
  Handlebars = require('handlebars'),
  request = require('request');

request('http://devdocs.magento.com/swagger/schemas/latest.json', function (error, response, body) {

  if (!error && response.statusCode == 200) {

    var swaggerSpec = JSON.parse(body);
    var file = 'paths.js';
    var template = 'templates/path.mustache';
    var paths = [];
    // console.log(swaggerSpec.paths);

    var templateData = fs.readFileSync(template, { encoding: 'UTF-8' });

    // console.log(templateData);

    _.forEach(swaggerSpec.paths, function (value, key, collection) {

      // Convert to express param paths (curly braces -> colons)
      pathName = key.replace(/{/g, ':').replace(/}/g, '').replace('/V1', '');

      pathMethods = []

      _.forEach(value, function (v, k) {
        pathMethods.push({
          path: pathName,
          method: k,
          spec: v
        });
      });

      paths.push({
        name: pathName,
        methods: pathMethods
      });

    });

    var data = {
      paths: paths
    };

    console.log(JSON.stringify(data));

    var source = Handlebars.compile(templateData);
    source = source(data);

    // console.log(typeof source);

    fs.writeFileSync(file, source, { encoding: 'UTF-8' }, function (err) {
      if (err) throw err;
      console.log('Successfully wrote to ' + file);
    });

  }

});
