module.exports =

  magento:
    options:
      apis: [
        swagger: 'http://devdocs.magento.com/swagger/schemas/2.0.0-rc-api-schema.json'
        moduleName: 'magento'
        mustache:
          moduleName: 'magento' # This is the model name - it should be repeated here if you want to use it in mustache templates
          # customParam: 'foo'  # some custom param used in mustache templates
        template:
          class: './templates/class.mustache',
          method: './templates/method.mustache',
          request: './templates/request.mustache'
        custom : true
      ]
      dest: 'lib'
    dist: {}
