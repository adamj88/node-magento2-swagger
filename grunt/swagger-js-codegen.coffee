module.exports =

  magento:
    options:
      apis: [
        swagger: '<%= package.config.swagger %>'
        className: 'Magento'
        mustache:
          className: 'Magento'
          # customParam: 'foo'
        template:
          class: './templates/class.mustache',
          method: './templates/method.mustache',
          request: './templates/request.mustache'
        custom: true
      ]
      dest: 'lib'
