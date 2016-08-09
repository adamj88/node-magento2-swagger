var _       = require('underscore'),
  app     = require('express')(),
  server  = require('http').Server(app),
  io      = require('socket.io')(server),
  exphbs  = require('express-handlebars'),
  helpers = require('./lib/helpers'),
  magentoSwagger = require('magento2-swagger').Magento;

// Handlebars renderer - uses node module: https://github.com/ericf/express-handlebars
var hbs = exphbs.create({
  defaultLayout: 'default',
  extname: '.hbs',
  helpers: helpers,
  layoutsDir: 'views/layouts/',
  partialsDir: 'views/partials/'
});

var magento = new magentoSwagger('http://magento2.local/rest');

// Set app options: http://expressjs.com/4x/api.html#app.set
app.set('etag', 'strong');
app.set('view engine', '.hbs');
// Set custom variables: http://expressjs.com/4x/api.html#app.set
// app.set('title', 'My Site');

// Set Handlebars (.hbs) as rendering engine: http://expressjs.com/4x/api.html#app.engine
app.engine('.hbs', hbs.engine);

app
  .get('/store/storeViews', function(req, res) {
    // Retrieve list of all stores
    magento.storeStoreRepositoryV1GetListGet(req.params).done(function (data) {
      res.json(data);
    });
  })
;

app
  .get('/store/storeGroups', function(req, res) {
    // Retrieve list of all groups
    magento.storeGroupRepositoryV1GetListGet(req.params).done(function (data) {
      res.json(data);
    });
  })
;

app
  .get('/store/websites', function(req, res) {
    // Retrieve list of all websites
    magento.storeWebsiteRepositoryV1GetListGet(req.params).done(function (data) {
      res.json(data);
    });
  })
;

app
  .get('/store/storeConfigs', function(req, res) {
    
    magento.storeStoreConfigManagerV1GetStoreConfigsGet(req.params).done(function (data) {
      res.json(data);
    });
  })
;

app
  .get('/directory/currency', function(req, res) {
    // Get currency information for the store.
    magento.directoryCurrencyInformationAcquirerV1GetCurrencyInfoGet(req.params).done(function (data) {
      res.json(data);
    });
  })
;

app
  .get('/directory/countries', function(req, res) {
    // Get all countries and regions information for the store.
    magento.directoryCountryInformationAcquirerV1GetCountriesInfoGet(req.params).done(function (data) {
      res.json(data);
    });
  })
;

app
  .get('/directory/countries/:countryId', function(req, res) {
    // Get country and region information for the store.
    magento.directoryCountryInformationAcquirerV1GetCountryInfoGet(req.params).done(function (data) {
      res.json(data);
    });
  })
;

app
  .get('/modules', function(req, res) {
    // Returns an array of enabled modules
    magento.backendModuleServiceV1GetModulesGet(req.params).done(function (data) {
      res.json(data);
    });
  })
;

app
  .get('/eav/attribute-sets/list', function(req, res) {
    // Retrieve list of Attribute Sets
    magento.eavAttributeSetRepositoryV1GetListGet(req.params).done(function (data) {
      res.json(data);
    });
  })
;

app
  .get('/eav/attribute-sets/:attributeSetId', function(req, res) {
    // Retrieve attribute set information based on given ID
    magento.eavAttributeSetRepositoryV1GetGet(req.params).done(function (data) {
      res.json(data);
    });
  })
.delete('/eav/attribute-sets/:attributeSetId', function(req, res) {
    // Remove attribute set by given ID
    magento.eavAttributeSetRepositoryV1DeleteByIdDelete(req.params).done(function (data) {
      res.json(data);
    });
  })
.put('/eav/attribute-sets/:attributeSetId', function(req, res) {
    // Save attribute set data
    magento.eavAttributeSetRepositoryV1SavePut(req.params).done(function (data) {
      res.json(data);
    });
  })
;

app
  .post('/eav/attribute-sets', function(req, res) {
    // Create attribute set from data
    magento.eavAttributeSetManagementV1CreatePost(req.params).done(function (data) {
      res.json(data);
    });
  })
;

app
  .get('/customerGroups/:id', function(req, res) {
    // Get customer group by group ID.
    magento.customerGroupRepositoryV1GetByIdGet(req.params).done(function (data) {
      res.json(data);
    });
  })
.put('/customerGroups/:id', function(req, res) {
    // Save customer group.
    magento.customerGroupRepositoryV1SavePut(req.params).done(function (data) {
      res.json(data);
    });
  })
.delete('/customerGroups/:id', function(req, res) {
    // Delete customer group by ID.
    magento.customerGroupRepositoryV1DeleteByIdDelete(req.params).done(function (data) {
      res.json(data);
    });
  })
;

app
  .get('/customerGroups/search', function(req, res) {
    // Retrieve customer groups. The list of groups can be filtered to exclude the NOT_LOGGED_IN group using the first parameter and/or it can be filtered by tax class.
    magento.customerGroupRepositoryV1GetListGet(req.params).done(function (data) {
      res.json(data);
    });
  })
;

app
  .post('/customerGroups', function(req, res) {
    // Save customer group.
    magento.customerGroupRepositoryV1SavePost(req.params).done(function (data) {
      res.json(data);
    });
  })
;

app
  .get('/customerGroups/default/:storeId', function(req, res) {
    // Get default customer group.
    magento.customerGroupManagementV1GetDefaultGroupGet(req.params).done(function (data) {
      res.json(data);
    });
  })
;

app
  .get('/customerGroups/default', function(req, res) {
    // Get default customer group.
    magento.customerGroupManagementV1GetDefaultGroupGet(req.params).done(function (data) {
      res.json(data);
    });
  })
;

app
  .get('/customerGroups/:id/permissions', function(req, res) {
    // Check if customer group can be deleted.
    magento.customerGroupManagementV1IsReadonlyGet(req.params).done(function (data) {
      res.json(data);
    });
  })
;

app
  .get('/attributeMetadata/customer/attribute/:attributeCode', function(req, res) {
    // Retrieve attribute metadata.
    magento.customerCustomerMetadataV1GetAttributeMetadataGet(req.params).done(function (data) {
      res.json(data);
    });
  })
;

app
  .get('/attributeMetadata/customer/form/:formCode', function(req, res) {
    // Retrieve all attributes filtered by form code
    magento.customerCustomerMetadataV1GetAttributesGet(req.params).done(function (data) {
      res.json(data);
    });
  })
;

app
  .get('/attributeMetadata/customer', function(req, res) {
    // Get all attribute metadata.
    magento.customerCustomerMetadataV1GetAllAttributesMetadataGet(req.params).done(function (data) {
      res.json(data);
    });
  })
;

app
  .get('/attributeMetadata/customer/custom', function(req, res) {
    // Get custom attributes metadata for the given data interface.
    magento.customerCustomerMetadataV1GetCustomAttributesMetadataGet(req.params).done(function (data) {
      res.json(data);
    });
  })
;

app
  .get('/attributeMetadata/customerAddress/attribute/:attributeCode', function(req, res) {
    // Retrieve attribute metadata.
    magento.customerAddressMetadataV1GetAttributeMetadataGet(req.params).done(function (data) {
      res.json(data);
    });
  })
;

app
  .get('/attributeMetadata/customerAddress/form/:formCode', function(req, res) {
    // Retrieve all attributes filtered by form code
    magento.customerAddressMetadataV1GetAttributesGet(req.params).done(function (data) {
      res.json(data);
    });
  })
;

app
  .get('/attributeMetadata/customerAddress', function(req, res) {
    // Get all attribute metadata.
    magento.customerAddressMetadataV1GetAllAttributesMetadataGet(req.params).done(function (data) {
      res.json(data);
    });
  })
;

app
  .get('/attributeMetadata/customerAddress/custom', function(req, res) {
    // Get custom attributes metadata for the given data interface.
    magento.customerAddressMetadataV1GetCustomAttributesMetadataGet(req.params).done(function (data) {
      res.json(data);
    });
  })
;

app
  .get('/customers/:customerId', function(req, res) {
    // Retrieve customer.
    magento.customerCustomerRepositoryV1GetByIdGet(req.params).done(function (data) {
      res.json(data);
    });
  })
.delete('/customers/:customerId', function(req, res) {
    // Delete customer by ID.
    magento.customerCustomerRepositoryV1DeleteByIdDelete(req.params).done(function (data) {
      res.json(data);
    });
  })
;

app
  .put('/customers/:id', function(req, res) {
    // Create customer.
    magento.customerCustomerRepositoryV1SavePut(req.params).done(function (data) {
      res.json(data);
    });
  })
;

app
  .put('/customers/me', function(req, res) {
    // Create customer.
    magento.customerCustomerRepositoryV1SavePut(req.params).done(function (data) {
      res.json(data);
    });
  })
.get('/customers/me', function(req, res) {
    // Retrieve customer.
    magento.customerCustomerRepositoryV1GetByIdGet(req.params).done(function (data) {
      res.json(data);
    });
  })
;

app
  .get('/customers/search', function(req, res) {
    // Retrieve customers which match a specified criteria.
    magento.customerCustomerRepositoryV1GetListGet(req.params).done(function (data) {
      res.json(data);
    });
  })
;

app
  .post('/customers', function(req, res) {
    // Create customer account. Perform necessary business operations like sending email.
    magento.customerAccountManagementV1CreateAccountPost(req.params).done(function (data) {
      res.json(data);
    });
  })
;

app
  .put('/customers/me/activate', function(req, res) {
    // Activate a customer account using a key that was sent in a confirmation email.
    magento.customerAccountManagementV1ActivateByIdPut(req.params).done(function (data) {
      res.json(data);
    });
  })
;

app
  .put('/customers/:email/activate', function(req, res) {
    // Activate a customer account using a key that was sent in a confirmation email.
    magento.customerAccountManagementV1ActivatePut(req.params).done(function (data) {
      res.json(data);
    });
  })
;

app
  .put('/customers/me/password', function(req, res) {
    // Change customer password.
    magento.customerAccountManagementV1ChangePasswordByIdPut(req.params).done(function (data) {
      res.json(data);
    });
  })
;

app
  .get('/customers/:customerId/password/resetLinkToken/:resetPasswordLinkToken', function(req, res) {
    // Check if password reset token is valid.
    magento.customerAccountManagementV1ValidateResetPasswordLinkTokenGet(req.params).done(function (data) {
      res.json(data);
    });
  })
;

app
  .put('/customers/password', function(req, res) {
    // Send an email to the customer with a password reset link.
    magento.customerAccountManagementV1InitiatePasswordResetPut(req.params).done(function (data) {
      res.json(data);
    });
  })
;

app
  .get('/customers/:customerId/confirm', function(req, res) {
    // Gets the account confirmation status.
    magento.customerAccountManagementV1GetConfirmationStatusGet(req.params).done(function (data) {
      res.json(data);
    });
  })
;

app
  .post('/customers/confirm', function(req, res) {
    // Resend confirmation email.
    magento.customerAccountManagementV1ResendConfirmationPost(req.params).done(function (data) {
      res.json(data);
    });
  })
;

app
  .put('/customers/validate', function(req, res) {
    // Validate customer data.
    magento.customerAccountManagementV1ValidatePut(req.params).done(function (data) {
      res.json(data);
    });
  })
;

app
  .get('/customers/:customerId/permissions/readonly', function(req, res) {
    // Check if customer can be deleted.
    magento.customerAccountManagementV1IsReadonlyGet(req.params).done(function (data) {
      res.json(data);
    });
  })
;

app
  .post('/customers/isEmailAvailable', function(req, res) {
    // Check if given email is associated with a customer account in given website.
    magento.customerAccountManagementV1IsEmailAvailablePost(req.params).done(function (data) {
      res.json(data);
    });
  })
;

app
  .get('/customers/me/billingAddress', function(req, res) {
    // Retrieve default billing address for the given customerId.
    magento.customerAccountManagementV1GetDefaultBillingAddressGet(req.params).done(function (data) {
      res.json(data);
    });
  })
;

app
  .get('/customers/:customerId/billingAddress', function(req, res) {
    // Retrieve default billing address for the given customerId.
    magento.customerAccountManagementV1GetDefaultBillingAddressGet(req.params).done(function (data) {
      res.json(data);
    });
  })
;

app
  .get('/customers/me/shippingAddress', function(req, res) {
    // Retrieve default shipping address for the given customerId.
    magento.customerAccountManagementV1GetDefaultShippingAddressGet(req.params).done(function (data) {
      res.json(data);
    });
  })
;

app
  .get('/customers/:customerId/shippingAddress', function(req, res) {
    // Retrieve default shipping address for the given customerId.
    magento.customerAccountManagementV1GetDefaultShippingAddressGet(req.params).done(function (data) {
      res.json(data);
    });
  })
;

app
  .get('/customers/addresses/:addressId', function(req, res) {
    // Retrieve customer address.
    magento.customerAddressRepositoryV1GetByIdGet(req.params).done(function (data) {
      res.json(data);
    });
  })
;

app
  .delete('/addresses/:addressId', function(req, res) {
    // Delete customer address by ID.
    magento.customerAddressRepositoryV1DeleteByIdDelete(req.params).done(function (data) {
      res.json(data);
    });
  })
;

app
  .get('/cmsPage/:pageId', function(req, res) {
    // Retrieve page.
    magento.cmsPageRepositoryV1GetByIdGet(req.params).done(function (data) {
      res.json(data);
    });
  })
.delete('/cmsPage/:pageId', function(req, res) {
    // Delete page by ID.
    magento.cmsPageRepositoryV1DeleteByIdDelete(req.params).done(function (data) {
      res.json(data);
    });
  })
;

app
  .get('/cmsPage/search', function(req, res) {
    // Retrieve pages matching the specified criteria.
    magento.cmsPageRepositoryV1GetListGet(req.params).done(function (data) {
      res.json(data);
    });
  })
;

app
  .post('/cmsPage', function(req, res) {
    // Save page.
    magento.cmsPageRepositoryV1SavePost(req.params).done(function (data) {
      res.json(data);
    });
  })
;

app
  .put('/cmsPage/:id', function(req, res) {
    // Save page.
    magento.cmsPageRepositoryV1SavePut(req.params).done(function (data) {
      res.json(data);
    });
  })
;

app
  .get('/cmsBlock/:blockId', function(req, res) {
    // Retrieve block.
    magento.cmsBlockRepositoryV1GetByIdGet(req.params).done(function (data) {
      res.json(data);
    });
  })
.delete('/cmsBlock/:blockId', function(req, res) {
    // Delete block by ID.
    magento.cmsBlockRepositoryV1DeleteByIdDelete(req.params).done(function (data) {
      res.json(data);
    });
  })
;

app
  .get('/cmsBlock/search', function(req, res) {
    // Retrieve blocks matching the specified criteria.
    magento.cmsBlockRepositoryV1GetListGet(req.params).done(function (data) {
      res.json(data);
    });
  })
;

app
  .post('/cmsBlock', function(req, res) {
    // Save block.
    magento.cmsBlockRepositoryV1SavePost(req.params).done(function (data) {
      res.json(data);
    });
  })
;

app
  .put('/cmsBlock/:id', function(req, res) {
    // Save block.
    magento.cmsBlockRepositoryV1SavePut(req.params).done(function (data) {
      res.json(data);
    });
  })
;

app
  .post('/products', function(req, res) {
    // Create product
    magento.catalogProductRepositoryV1SavePost(req.params).done(function (data) {
      res.json(data);
    });
  })
.get('/products', function(req, res) {
    // Get product list
    magento.catalogProductRepositoryV1GetListGet(req.params).done(function (data) {
      res.json(data);
    });
  })
;

app
  .put('/products/:sku', function(req, res) {
    // Create product
    magento.catalogProductRepositoryV1SavePut(req.params).done(function (data) {
      res.json(data);
    });
  })
.delete('/products/:sku', function(req, res) {
    
    magento.catalogProductRepositoryV1DeleteByIdDelete(req.params).done(function (data) {
      res.json(data);
    });
  })
.get('/products/:sku', function(req, res) {
    // Get info about product by product SKU
    magento.catalogProductRepositoryV1GetGet(req.params).done(function (data) {
      res.json(data);
    });
  })
;

app
  .get('/products/attributes/types', function(req, res) {
    // Retrieve list of product attribute types
    magento.catalogProductAttributeTypesListV1GetItemsGet(req.params).done(function (data) {
      res.json(data);
    });
  })
;

app
  .get('/products/attributes/:attributeCode', function(req, res) {
    // Retrieve specific attribute
    magento.catalogProductAttributeRepositoryV1GetGet(req.params).done(function (data) {
      res.json(data);
    });
  })
.put('/products/attributes/:attributeCode', function(req, res) {
    // Save attribute data
    magento.catalogProductAttributeRepositoryV1SavePut(req.params).done(function (data) {
      res.json(data);
    });
  })
.delete('/products/attributes/:attributeCode', function(req, res) {
    // Delete Attribute by id
    magento.catalogProductAttributeRepositoryV1DeleteByIdDelete(req.params).done(function (data) {
      res.json(data);
    });
  })
;

app
  .get('/products/attributes', function(req, res) {
    // Retrieve all attributes for entity type
    magento.catalogProductAttributeRepositoryV1GetListGet(req.params).done(function (data) {
      res.json(data);
    });
  })
.post('/products/attributes', function(req, res) {
    // Save attribute data
    magento.catalogProductAttributeRepositoryV1SavePost(req.params).done(function (data) {
      res.json(data);
    });
  })
;

app
  .get('/categories/attributes/:attributeCode', function(req, res) {
    // Retrieve specific attribute
    magento.catalogCategoryAttributeRepositoryV1GetGet(req.params).done(function (data) {
      res.json(data);
    });
  })
;

app
  .get('/categories/attributes', function(req, res) {
    // Retrieve all attributes for entity type
    magento.catalogCategoryAttributeRepositoryV1GetListGet(req.params).done(function (data) {
      res.json(data);
    });
  })
;

app
  .get('/categories/attributes/:attributeCode/options', function(req, res) {
    // Retrieve list of attribute options
    magento.catalogCategoryAttributeOptionManagementV1GetItemsGet(req.params).done(function (data) {
      res.json(data);
    });
  })
;

app
  .get('/products/types', function(req, res) {
    // Retrieve available product types
    magento.catalogProductTypeListV1GetProductTypesGet(req.params).done(function (data) {
      res.json(data);
    });
  })
;

app
  .get('/products/attribute-sets/sets/list', function(req, res) {
    // Retrieve list of Attribute Sets
    magento.catalogAttributeSetRepositoryV1GetListGet(req.params).done(function (data) {
      res.json(data);
    });
  })
;

app
  .get('/products/attribute-sets/:attributeSetId', function(req, res) {
    // Retrieve attribute set information based on given ID
    magento.catalogAttributeSetRepositoryV1GetGet(req.params).done(function (data) {
      res.json(data);
    });
  })
.delete('/products/attribute-sets/:attributeSetId', function(req, res) {
    // Remove attribute set by given ID
    magento.catalogAttributeSetRepositoryV1DeleteByIdDelete(req.params).done(function (data) {
      res.json(data);
    });
  })
.put('/products/attribute-sets/:attributeSetId', function(req, res) {
    // Save attribute set data
    magento.catalogAttributeSetRepositoryV1SavePut(req.params).done(function (data) {
      res.json(data);
    });
  })
;

app
  .post('/products/attribute-sets', function(req, res) {
    // Create attribute set from data
    magento.catalogAttributeSetManagementV1CreatePost(req.params).done(function (data) {
      res.json(data);
    });
  })
;

app
  .get('/products/attribute-sets/:attributeSetId/attributes', function(req, res) {
    // Retrieve related attributes based on given attribute set ID
    magento.catalogProductAttributeManagementV1GetAttributesGet(req.params).done(function (data) {
      res.json(data);
    });
  })
;

app
  .post('/products/attribute-sets/attributes', function(req, res) {
    // Assign attribute to attribute set
    magento.catalogProductAttributeManagementV1AssignPost(req.params).done(function (data) {
      res.json(data);
    });
  })
;

app
  .delete('/products/attribute-sets/:attributeSetId/attributes/:attributeCode', function(req, res) {
    // Remove attribute from attribute set
    magento.catalogProductAttributeManagementV1UnassignDelete(req.params).done(function (data) {
      res.json(data);
    });
  })
;

app
  .get('/products/attribute-sets/groups/list', function(req, res) {
    // Retrieve list of attribute groups
    magento.catalogProductAttributeGroupRepositoryV1GetListGet(req.params).done(function (data) {
      res.json(data);
    });
  })
;

app
  .post('/products/attribute-sets/groups', function(req, res) {
    // Save attribute group
    magento.catalogProductAttributeGroupRepositoryV1SavePost(req.params).done(function (data) {
      res.json(data);
    });
  })
;

app
  .put('/products/attribute-sets/:attributeSetId/groups', function(req, res) {
    // Save attribute group
    magento.catalogProductAttributeGroupRepositoryV1SavePut(req.params).done(function (data) {
      res.json(data);
    });
  })
;

app
  .delete('/products/attribute-sets/groups/:groupId', function(req, res) {
    // Remove attribute group by id
    magento.catalogProductAttributeGroupRepositoryV1DeleteByIdDelete(req.params).done(function (data) {
      res.json(data);
    });
  })
;

app
  .get('/products/attributes/:attributeCode/options', function(req, res) {
    // Retrieve list of attribute options
    magento.catalogProductAttributeOptionManagementV1GetItemsGet(req.params).done(function (data) {
      res.json(data);
    });
  })
.post('/products/attributes/:attributeCode/options', function(req, res) {
    // Add option to attribute
    magento.catalogProductAttributeOptionManagementV1AddPost(req.params).done(function (data) {
      res.json(data);
    });
  })
;

app
  .delete('/products/attributes/:attributeCode/options/:optionId', function(req, res) {
    // Delete option from attribute
    magento.catalogProductAttributeOptionManagementV1DeleteDelete(req.params).done(function (data) {
      res.json(data);
    });
  })
;

app
  .get('/products/media/types/:attributeSetName', function(req, res) {
    // Retrieve the list of media attributes (fronted input type is media_image) assigned to the given attribute set.
    magento.catalogProductMediaAttributeManagementV1GetListGet(req.params).done(function (data) {
      res.json(data);
    });
  })
;

app
  .get('/products/:sku/media/:entryId', function(req, res) {
    // Return information about gallery entry
    magento.catalogProductAttributeMediaGalleryManagementV1GetGet(req.params).done(function (data) {
      res.json(data);
    });
  })
.put('/products/:sku/media/:entryId', function(req, res) {
    // Update gallery entry
    magento.catalogProductAttributeMediaGalleryManagementV1UpdatePut(req.params).done(function (data) {
      res.json(data);
    });
  })
.delete('/products/:sku/media/:entryId', function(req, res) {
    // Remove gallery entry
    magento.catalogProductAttributeMediaGalleryManagementV1RemoveDelete(req.params).done(function (data) {
      res.json(data);
    });
  })
;

app
  .post('/products/:sku/media', function(req, res) {
    // Create new gallery entry
    magento.catalogProductAttributeMediaGalleryManagementV1CreatePost(req.params).done(function (data) {
      res.json(data);
    });
  })
.get('/products/:sku/media', function(req, res) {
    // Retrieve the list of gallery entries associated with given product
    magento.catalogProductAttributeMediaGalleryManagementV1GetListGet(req.params).done(function (data) {
      res.json(data);
    });
  })
;

app
  .get('/products/:sku/group-prices/', function(req, res) {
    // Retrieve list of product prices
    magento.catalogProductGroupPriceManagementV1GetListGet(req.params).done(function (data) {
      res.json(data);
    });
  })
;

app
  .post('/products/:sku/group-prices/:customerGroupId/price/:price', function(req, res) {
    // Set group price for product
    magento.catalogProductGroupPriceManagementV1AddPost(req.params).done(function (data) {
      res.json(data);
    });
  })
;

app
  .delete('/products/:sku/group-prices/:customerGroupId/', function(req, res) {
    // Remove group price from product
    magento.catalogProductGroupPriceManagementV1RemoveDelete(req.params).done(function (data) {
      res.json(data);
    });
  })
;

app
  .get('/products/:sku/group-prices/:customerGroupId/tiers', function(req, res) {
    // Get tier price of product
    magento.catalogProductTierPriceManagementV1GetListGet(req.params).done(function (data) {
      res.json(data);
    });
  })
;

app
  .post('/products/:sku/group-prices/:customerGroupId/tiers/:qty/price/:price', function(req, res) {
    // Create tier price for product
    magento.catalogProductTierPriceManagementV1AddPost(req.params).done(function (data) {
      res.json(data);
    });
  })
;

app
  .delete('/products/:sku/group-prices/:customerGroupId/tiers/:qty', function(req, res) {
    // Remove tier price from product
    magento.catalogProductTierPriceManagementV1RemoveDelete(req.params).done(function (data) {
      res.json(data);
    });
  })
;

app
  .delete('/categories/:categoryId', function(req, res) {
    // Delete category by identifier
    magento.catalogCategoryRepositoryV1DeleteByIdentifierDelete(req.params).done(function (data) {
      res.json(data);
    });
  })
.get('/categories/:categoryId', function(req, res) {
    // Get info about category by category id
    magento.catalogCategoryRepositoryV1GetGet(req.params).done(function (data) {
      res.json(data);
    });
  })
;

app
  .post('/categories', function(req, res) {
    // Create category service
    magento.catalogCategoryRepositoryV1SavePost(req.params).done(function (data) {
      res.json(data);
    });
  })
.get('/categories', function(req, res) {
    // Retrieve list of categories
    magento.catalogCategoryManagementV1GetTreeGet(req.params).done(function (data) {
      res.json(data);
    });
  })
;

app
  .put('/categories/:id', function(req, res) {
    // Create category service
    magento.catalogCategoryRepositoryV1SavePut(req.params).done(function (data) {
      res.json(data);
    });
  })
;

app
  .put('/categories/:categoryId/move', function(req, res) {
    // Move category
    magento.catalogCategoryManagementV1MovePut(req.params).done(function (data) {
      res.json(data);
    });
  })
;

app
  .get('/products/options/types', function(req, res) {
    // Get custom option types
    magento.catalogProductCustomOptionTypeListV1GetItemsGet(req.params).done(function (data) {
      res.json(data);
    });
  })
;

app
  .get('/products/:sku/options', function(req, res) {
    // Get the list of custom options for a specific product
    magento.catalogProductCustomOptionRepositoryV1GetListGet(req.params).done(function (data) {
      res.json(data);
    });
  })
;

app
  .get('/products/:sku/options/:optionId', function(req, res) {
    // Get custom option for a specific product
    magento.catalogProductCustomOptionRepositoryV1GetGet(req.params).done(function (data) {
      res.json(data);
    });
  })
.delete('/products/:sku/options/:optionId', function(req, res) {
    
    magento.catalogProductCustomOptionRepositoryV1DeleteByIdentifierDelete(req.params).done(function (data) {
      res.json(data);
    });
  })
;

app
  .post('/products/options', function(req, res) {
    // Save custom option
    magento.catalogProductCustomOptionRepositoryV1SavePost(req.params).done(function (data) {
      res.json(data);
    });
  })
;

app
  .put('/products/options/:optionId', function(req, res) {
    // Save custom option
    magento.catalogProductCustomOptionRepositoryV1SavePut(req.params).done(function (data) {
      res.json(data);
    });
  })
;

app
  .get('/products/links/types', function(req, res) {
    // Retrieve information about available product link types
    magento.catalogProductLinkTypeListV1GetItemsGet(req.params).done(function (data) {
      res.json(data);
    });
  })
;

app
  .get('/products/links/:type/attributes', function(req, res) {
    // Provide a list of the product link type attributes
    magento.catalogProductLinkTypeListV1GetItemAttributesGet(req.params).done(function (data) {
      res.json(data);
    });
  })
;

app
  .get('/products/:sku/links/:type', function(req, res) {
    // Provide the list of links for a specific product
    magento.catalogProductLinkManagementV1GetLinkedItemsByTypeGet(req.params).done(function (data) {
      res.json(data);
    });
  })
;

app
  .post('/products/:sku/links', function(req, res) {
    // Assign a product link to another product
    magento.catalogProductLinkManagementV1SetProductLinksPost(req.params).done(function (data) {
      res.json(data);
    });
  })
.put('/products/:sku/links', function(req, res) {
    // Save product link
    magento.catalogProductLinkRepositoryV1SavePut(req.params).done(function (data) {
      res.json(data);
    });
  })
;

app
  .delete('/products/:sku/links/:type/:linkedProductSku', function(req, res) {
    
    magento.catalogProductLinkRepositoryV1DeleteByIdDelete(req.params).done(function (data) {
      res.json(data);
    });
  })
;

app
  .get('/categories/:categoryId/products', function(req, res) {
    // Get products assigned to category
    magento.catalogCategoryLinkManagementV1GetAssignedProductsGet(req.params).done(function (data) {
      res.json(data);
    });
  })
.post('/categories/:categoryId/products', function(req, res) {
    // Assign a product to the required category
    magento.catalogCategoryLinkRepositoryV1SavePost(req.params).done(function (data) {
      res.json(data);
    });
  })
.put('/categories/:categoryId/products', function(req, res) {
    // Assign a product to the required category
    magento.catalogCategoryLinkRepositoryV1SavePut(req.params).done(function (data) {
      res.json(data);
    });
  })
;

app
  .delete('/categories/:categoryId/products/:sku', function(req, res) {
    // Remove the product assignment from the category by category id and sku
    magento.catalogCategoryLinkRepositoryV1DeleteByIdsDelete(req.params).done(function (data) {
      res.json(data);
    });
  })
;

app
  .get('/search', function(req, res) {
    // Make Full Text Search and return found Documents
    magento.searchV1SearchGet(req.params).done(function (data) {
      res.json(data);
    });
  })
;

app
  .get('/carts/:cartId', function(req, res) {
    // Enables an administrative user to return information for a specified cart.
    magento.quoteCartRepositoryV1GetGet(req.params).done(function (data) {
      res.json(data);
    });
  })
.put('/carts/:cartId', function(req, res) {
    // Assigns a specified customer to a specified shopping cart.
    magento.quoteCartManagementV1AssignCustomerPut(req.params).done(function (data) {
      res.json(data);
    });
  })
;

app
  .get('/carts', function(req, res) {
    // Enables administrative users to list carts that match specified search criteria.
    magento.quoteCartRepositoryV1GetListGet(req.params).done(function (data) {
      res.json(data);
    });
  })
;

app
  .post('/carts/', function(req, res) {
    // Creates an empty cart and quote for a guest.
    magento.quoteCartManagementV1CreateEmptyCartPost(req.params).done(function (data) {
      res.json(data);
    });
  })
;

app
  .post('/customers/:customerId/carts', function(req, res) {
    // Creates an empty cart and quote for a specified customer.
    magento.quoteCartManagementV1CreateEmptyCartForCustomerPost(req.params).done(function (data) {
      res.json(data);
    });
  })
;

app
  .post('/carts/mine', function(req, res) {
    // Creates an empty cart and quote for a specified customer.
    magento.quoteCartManagementV1CreateEmptyCartForCustomerPost(req.params).done(function (data) {
      res.json(data);
    });
  })
.get('/carts/mine', function(req, res) {
    // Returns information for the cart for a specified customer.
    magento.quoteCartManagementV1GetCartForCustomerGet(req.params).done(function (data) {
      res.json(data);
    });
  })
;

app
  .put('/carts/mine/order', function(req, res) {
    // Places an order for a specified cart.
    magento.quoteCartManagementV1PlaceOrderPut(req.params).done(function (data) {
      res.json(data);
    });
  })
;

app
  .put('/carts/:cartId/order', function(req, res) {
    // Places an order for a specified cart.
    magento.quoteCartManagementV1PlaceOrderPut(req.params).done(function (data) {
      res.json(data);
    });
  })
;

app
  .get('/guest-carts/:cartId', function(req, res) {
    // Enable a guest user to return information for a specified cart.
    magento.quoteGuestCartRepositoryV1GetGet(req.params).done(function (data) {
      res.json(data);
    });
  })
.put('/guest-carts/:cartId', function(req, res) {
    // Assign a specified customer to a specified shopping cart.
    magento.quoteGuestCartManagementV1AssignCustomerPut(req.params).done(function (data) {
      res.json(data);
    });
  })
;

app
  .post('/guest-carts', function(req, res) {
    // Enable an customer or guest user to create an empty cart and quote for an anonymous customer.
    magento.quoteGuestCartManagementV1CreateEmptyCartPost(req.params).done(function (data) {
      res.json(data);
    });
  })
;

app
  .put('/guest-carts/:cartId/order', function(req, res) {
    // Place an order for a specified cart.
    magento.quoteGuestCartManagementV1PlaceOrderPut(req.params).done(function (data) {
      res.json(data);
    });
  })
;

app
  .put('/carts/:cartId/selected-shipping-method', function(req, res) {
    // Sets the carrier and shipping methods codes for a specified cart.
    magento.quoteShippingMethodManagementV1SetPut(req.params).done(function (data) {
      res.json(data);
    });
  })
.get('/carts/:cartId/selected-shipping-method', function(req, res) {
    // Returns selected shipping method for a specified quote.
    magento.quoteShippingMethodManagementV1GetGet(req.params).done(function (data) {
      res.json(data);
    });
  })
;

app
  .get('/carts/:cartId/shipping-methods', function(req, res) {
    // Lists applicable shipping methods for a specified quote.
    magento.quoteShippingMethodManagementV1GetListGet(req.params).done(function (data) {
      res.json(data);
    });
  })
;

app
  .put('/carts/mine/selected-shipping-method', function(req, res) {
    // Sets the carrier and shipping methods codes for a specified cart.
    magento.quoteShippingMethodManagementV1SetPut(req.params).done(function (data) {
      res.json(data);
    });
  })
.get('/carts/mine/selected-shipping-method', function(req, res) {
    // Returns selected shipping method for a specified quote.
    magento.quoteShippingMethodManagementV1GetGet(req.params).done(function (data) {
      res.json(data);
    });
  })
;

app
  .get('/carts/mine/shipping-methods', function(req, res) {
    // Lists applicable shipping methods for a specified quote.
    magento.quoteShippingMethodManagementV1GetListGet(req.params).done(function (data) {
      res.json(data);
    });
  })
;

app
  .post('/carts/mine/estimate-shipping-methods', function(req, res) {
    // Estimate shipping
    magento.quoteShippingMethodManagementV1EstimateByAddressPost(req.params).done(function (data) {
      res.json(data);
    });
  })
;

app
  .post('/carts/mine/estimate-shipping-methods-by-address-id', function(req, res) {
    // Estimate shipping
    magento.quoteShippingMethodManagementV1EstimateByAddressIdPost(req.params).done(function (data) {
      res.json(data);
    });
  })
;

app
  .put('/guest-carts/:cartId/selected-shipping-method', function(req, res) {
    // Set the carrier and shipping methods codes for a specified cart.
    magento.quoteGuestShippingMethodManagementV1SetPut(req.params).done(function (data) {
      res.json(data);
    });
  })
.get('/guest-carts/:cartId/selected-shipping-method', function(req, res) {
    // Return selected shipping method for a specified quote.
    magento.quoteGuestShippingMethodManagementV1GetGet(req.params).done(function (data) {
      res.json(data);
    });
  })
;

app
  .get('/guest-carts/:cartId/shipping-methods', function(req, res) {
    // List applicable shipping methods for a specified quote.
    magento.quoteGuestShippingMethodManagementV1GetListGet(req.params).done(function (data) {
      res.json(data);
    });
  })
;

app
  .post('/guest-carts/:cartId/estimate-shipping-methods', function(req, res) {
    // Estimate shipping
    magento.quoteGuestShippingMethodManagementV1EstimateByAddressPost(req.params).done(function (data) {
      res.json(data);
    });
  })
;

app
  .get('/carts/:cartId/items', function(req, res) {
    // Lists items that are assigned to a specified cart.
    magento.quoteCartItemRepositoryV1GetListGet(req.params).done(function (data) {
      res.json(data);
    });
  })
;

app
  .post('/carts/items', function(req, res) {
    // Adds the specified item to the specified cart.
    magento.quoteCartItemRepositoryV1SavePost(req.params).done(function (data) {
      res.json(data);
    });
  })
;

app
  .put('/carts/items/:itemId', function(req, res) {
    // Adds the specified item to the specified cart.
    magento.quoteCartItemRepositoryV1SavePut(req.params).done(function (data) {
      res.json(data);
    });
  })
;

app
  .delete('/carts/:cartId/items/:itemId', function(req, res) {
    // Removes the specified item from the specified cart.
    magento.quoteCartItemRepositoryV1DeleteByIdDelete(req.params).done(function (data) {
      res.json(data);
    });
  })
;

app
  .get('/carts/mine/items', function(req, res) {
    // Lists items that are assigned to a specified cart.
    magento.quoteCartItemRepositoryV1GetListGet(req.params).done(function (data) {
      res.json(data);
    });
  })
.post('/carts/mine/items', function(req, res) {
    // Adds the specified item to the specified cart.
    magento.quoteCartItemRepositoryV1SavePost(req.params).done(function (data) {
      res.json(data);
    });
  })
;

app
  .put('/carts/mine/items/:itemId', function(req, res) {
    // Adds the specified item to the specified cart.
    magento.quoteCartItemRepositoryV1SavePut(req.params).done(function (data) {
      res.json(data);
    });
  })
.delete('/carts/mine/items/:itemId', function(req, res) {
    // Removes the specified item from the specified cart.
    magento.quoteCartItemRepositoryV1DeleteByIdDelete(req.params).done(function (data) {
      res.json(data);
    });
  })
;

app
  .get('/guest-carts/:cartId/items', function(req, res) {
    // List items that are assigned to a specified cart.
    magento.quoteGuestCartItemRepositoryV1GetListGet(req.params).done(function (data) {
      res.json(data);
    });
  })
;

app
  .post('/guest-carts/items', function(req, res) {
    // Add the specified item to the specified cart.
    magento.quoteGuestCartItemRepositoryV1SavePost(req.params).done(function (data) {
      res.json(data);
    });
  })
;

app
  .put('/guest-carts/items/:itemId', function(req, res) {
    // Add the specified item to the specified cart.
    magento.quoteGuestCartItemRepositoryV1SavePut(req.params).done(function (data) {
      res.json(data);
    });
  })
;

app
  .delete('/guest-carts/:cartId/items/:itemId', function(req, res) {
    // Remove the specified item from the specified cart.
    magento.quoteGuestCartItemRepositoryV1DeleteByIdDelete(req.params).done(function (data) {
      res.json(data);
    });
  })
;

app
  .get('/carts/:cartId/selected-payment-method', function(req, res) {
    // Returns the payment method for a specified shopping cart.
    magento.quotePaymentMethodManagementV1GetGet(req.params).done(function (data) {
      res.json(data);
    });
  })
.put('/carts/:cartId/selected-payment-method', function(req, res) {
    // Adds a specified payment method to a specified shopping cart.
    magento.quotePaymentMethodManagementV1SetPut(req.params).done(function (data) {
      res.json(data);
    });
  })
;

app
  .get('/carts/:cartId/payment-methods', function(req, res) {
    // Lists available payment methods for a specified shopping cart.
    magento.quotePaymentMethodManagementV1GetListGet(req.params).done(function (data) {
      res.json(data);
    });
  })
;

app
  .get('/carts/mine/selected-payment-method', function(req, res) {
    // Returns the payment method for a specified shopping cart.
    magento.quotePaymentMethodManagementV1GetGet(req.params).done(function (data) {
      res.json(data);
    });
  })
.put('/carts/mine/selected-payment-method', function(req, res) {
    // Adds a specified payment method to a specified shopping cart.
    magento.quotePaymentMethodManagementV1SetPut(req.params).done(function (data) {
      res.json(data);
    });
  })
;

app
  .get('/carts/mine/payment-methods', function(req, res) {
    // Lists available payment methods for a specified shopping cart.
    magento.quotePaymentMethodManagementV1GetListGet(req.params).done(function (data) {
      res.json(data);
    });
  })
;

app
  .get('/guest-carts/:cartId/selected-payment-method', function(req, res) {
    // Return the payment method for a specified shopping cart.
    magento.quoteGuestPaymentMethodManagementV1GetGet(req.params).done(function (data) {
      res.json(data);
    });
  })
.put('/guest-carts/:cartId/selected-payment-method', function(req, res) {
    // Add a specified payment method to a specified shopping cart.
    magento.quoteGuestPaymentMethodManagementV1SetPut(req.params).done(function (data) {
      res.json(data);
    });
  })
;

app
  .get('/guest-carts/:cartId/payment-methods', function(req, res) {
    // List available payment methods for a specified shopping cart.
    magento.quoteGuestPaymentMethodManagementV1GetListGet(req.params).done(function (data) {
      res.json(data);
    });
  })
;

app
  .get('/carts/:cartId/billing-address', function(req, res) {
    // Returns the billing address for a specified quote.
    magento.quoteBillingAddressManagementV1GetGet(req.params).done(function (data) {
      res.json(data);
    });
  })
.post('/carts/:cartId/billing-address', function(req, res) {
    // Assigns a specified billing address to a specified cart.
    magento.quoteBillingAddressManagementV1AssignPost(req.params).done(function (data) {
      res.json(data);
    });
  })
;

app
  .get('/carts/mine/billing-address', function(req, res) {
    // Returns the billing address for a specified quote.
    magento.quoteBillingAddressManagementV1GetGet(req.params).done(function (data) {
      res.json(data);
    });
  })
.post('/carts/mine/billing-address', function(req, res) {
    // Assigns a specified billing address to a specified cart.
    magento.quoteBillingAddressManagementV1AssignPost(req.params).done(function (data) {
      res.json(data);
    });
  })
;

app
  .get('/guest-carts/:cartId/billing-address', function(req, res) {
    // Return the billing address for a specified quote.
    magento.quoteGuestBillingAddressManagementV1GetGet(req.params).done(function (data) {
      res.json(data);
    });
  })
.post('/guest-carts/:cartId/billing-address', function(req, res) {
    // Assign a specified billing address to a specified cart.
    magento.quoteGuestBillingAddressManagementV1AssignPost(req.params).done(function (data) {
      res.json(data);
    });
  })
;

app
  .get('/carts/:cartId/coupons', function(req, res) {
    // Returns information for a coupon in a specified cart.
    magento.quoteCouponManagementV1GetGet(req.params).done(function (data) {
      res.json(data);
    });
  })
.delete('/carts/:cartId/coupons', function(req, res) {
    // Deletes a coupon from a specified cart.
    magento.quoteCouponManagementV1RemoveDelete(req.params).done(function (data) {
      res.json(data);
    });
  })
;

app
  .put('/carts/:cartId/coupons/:couponCode', function(req, res) {
    // Adds a coupon by code to a specified cart.
    magento.quoteCouponManagementV1SetPut(req.params).done(function (data) {
      res.json(data);
    });
  })
;

app
  .get('/carts/mine/coupons', function(req, res) {
    // Returns information for a coupon in a specified cart.
    magento.quoteCouponManagementV1GetGet(req.params).done(function (data) {
      res.json(data);
    });
  })
.delete('/carts/mine/coupons', function(req, res) {
    // Deletes a coupon from a specified cart.
    magento.quoteCouponManagementV1RemoveDelete(req.params).done(function (data) {
      res.json(data);
    });
  })
;

app
  .put('/carts/mine/coupons/:couponCode', function(req, res) {
    // Adds a coupon by code to a specified cart.
    magento.quoteCouponManagementV1SetPut(req.params).done(function (data) {
      res.json(data);
    });
  })
;

app
  .get('/guest-carts/:cartId/coupons', function(req, res) {
    // Return information for a coupon in a specified cart.
    magento.quoteGuestCouponManagementV1GetGet(req.params).done(function (data) {
      res.json(data);
    });
  })
.delete('/guest-carts/:cartId/coupons', function(req, res) {
    // Delete a coupon from a specified cart.
    magento.quoteGuestCouponManagementV1RemoveDelete(req.params).done(function (data) {
      res.json(data);
    });
  })
;

app
  .put('/guest-carts/:cartId/coupons/:couponCode', function(req, res) {
    // Add a coupon by code to a specified cart.
    magento.quoteGuestCouponManagementV1SetPut(req.params).done(function (data) {
      res.json(data);
    });
  })
;

app
  .get('/carts/:cartId/shipping-address', function(req, res) {
    // Returns the shipping address for a specified quote.
    magento.quoteShippingAddressManagementV1GetGet(req.params).done(function (data) {
      res.json(data);
    });
  })
.post('/carts/:cartId/shipping-address', function(req, res) {
    // Assigns a specified shipping address to a specified cart.
    magento.quoteShippingAddressManagementV1AssignPost(req.params).done(function (data) {
      res.json(data);
    });
  })
;

app
  .get('/carts/mine/shipping-address', function(req, res) {
    // Returns the shipping address for a specified quote.
    magento.quoteShippingAddressManagementV1GetGet(req.params).done(function (data) {
      res.json(data);
    });
  })
.post('/carts/mine/shipping-address', function(req, res) {
    // Assigns a specified shipping address to a specified cart.
    magento.quoteShippingAddressManagementV1AssignPost(req.params).done(function (data) {
      res.json(data);
    });
  })
;

app
  .get('/guest-carts/:cartId/shipping-address', function(req, res) {
    // Return the shipping address for a specified quote.
    magento.quoteGuestShippingAddressManagementV1GetGet(req.params).done(function (data) {
      res.json(data);
    });
  })
.post('/guest-carts/:cartId/shipping-address', function(req, res) {
    // Assign a specified shipping address to a specified cart.
    magento.quoteGuestShippingAddressManagementV1AssignPost(req.params).done(function (data) {
      res.json(data);
    });
  })
;

app
  .get('/carts/:cartId/totals', function(req, res) {
    // Returns quote totals data for a specified cart.
    magento.quoteCartTotalRepositoryV1GetGet(req.params).done(function (data) {
      res.json(data);
    });
  })
;

app
  .get('/carts/mine/totals', function(req, res) {
    // Returns quote totals data for a specified cart.
    magento.quoteCartTotalRepositoryV1GetGet(req.params).done(function (data) {
      res.json(data);
    });
  })
;

app
  .put('/guest-carts/:cartId/collect-totals', function(req, res) {
    // Set shipping/billing methods and additional data for cart and collect totals for guest.
    magento.quoteGuestCartTotalManagementV1CollectTotalsPut(req.params).done(function (data) {
      res.json(data);
    });
  })
;

app
  .get('/guest-carts/:cartId/totals', function(req, res) {
    // Return quote totals data for a specified cart.
    magento.quoteGuestCartTotalRepositoryV1GetGet(req.params).done(function (data) {
      res.json(data);
    });
  })
;

app
  .put('/carts/mine/collect-totals', function(req, res) {
    // Set shipping/billing methods and additional data for cart and collect totals.
    magento.quoteCartTotalManagementV1CollectTotalsPut(req.params).done(function (data) {
      res.json(data);
    });
  })
;

app
  .get('/carts/licence', function(req, res) {
    // Lists active checkout agreements.
    magento.checkoutAgreementsCheckoutAgreementsRepositoryV1GetListGet(req.params).done(function (data) {
      res.json(data);
    });
  })
;

app
  .post('/bundle-products/:sku/links/:optionId', function(req, res) {
    // Add child product to specified Bundle option by product sku
    magento.bundleProductLinkManagementV1AddChildByProductSkuPost(req.params).done(function (data) {
      res.json(data);
    });
  })
;

app
  .put('/bundle-products/:sku/links/:id', function(req, res) {
    
    magento.bundleProductLinkManagementV1SaveChildPut(req.params).done(function (data) {
      res.json(data);
    });
  })
;

app
  .get('/bundle-products/:productSku/children', function(req, res) {
    // Get all children for Bundle product
    magento.bundleProductLinkManagementV1GetChildrenGet(req.params).done(function (data) {
      res.json(data);
    });
  })
;

app
  .delete('/bundle-products/:sku/options/:optionId/children/:childSku', function(req, res) {
    // Remove product from Bundle product option
    magento.bundleProductLinkManagementV1RemoveChildDelete(req.params).done(function (data) {
      res.json(data);
    });
  })
;

app
  .get('/bundle-products/:sku/options/all', function(req, res) {
    // Get all options for bundle product
    magento.bundleProductOptionRepositoryV1GetListGet(req.params).done(function (data) {
      res.json(data);
    });
  })
;

app
  .get('/bundle-products/:sku/options/:optionId', function(req, res) {
    // Get option for bundle product
    magento.bundleProductOptionRepositoryV1GetGet(req.params).done(function (data) {
      res.json(data);
    });
  })
.delete('/bundle-products/:sku/options/:optionId', function(req, res) {
    // Remove bundle option
    magento.bundleProductOptionRepositoryV1DeleteByIdDelete(req.params).done(function (data) {
      res.json(data);
    });
  })
;

app
  .get('/bundle-products/options/types', function(req, res) {
    // Get all types for options for bundle products
    magento.bundleProductOptionTypeListV1GetItemsGet(req.params).done(function (data) {
      res.json(data);
    });
  })
;

app
  .post('/bundle-products/options/add', function(req, res) {
    // Add new option for bundle product
    magento.bundleProductOptionManagementV1SavePost(req.params).done(function (data) {
      res.json(data);
    });
  })
;

app
  .put('/bundle-products/options/:optionId', function(req, res) {
    // Add new option for bundle product
    magento.bundleProductOptionManagementV1SavePut(req.params).done(function (data) {
      res.json(data);
    });
  })
;

app
  .get('/products/:sku/downloadable-links', function(req, res) {
    // List of links with associated samples
    magento.downloadableLinkRepositoryV1GetListGet(req.params).done(function (data) {
      res.json(data);
    });
  })
.post('/products/:sku/downloadable-links', function(req, res) {
    // Update downloadable link of the given product (link type and its resources cannot be changed)
    magento.downloadableLinkRepositoryV1SavePost(req.params).done(function (data) {
      res.json(data);
    });
  })
;

app
  .put('/products/:sku/downloadable-links/:id', function(req, res) {
    // Update downloadable link of the given product (link type and its resources cannot be changed)
    magento.downloadableLinkRepositoryV1SavePut(req.params).done(function (data) {
      res.json(data);
    });
  })
;

app
  .delete('/products/downloadable-links/:id', function(req, res) {
    // Delete downloadable link
    magento.downloadableLinkRepositoryV1DeleteDelete(req.params).done(function (data) {
      res.json(data);
    });
  })
;

app
  .get('/products/:sku/downloadable-links/samples', function(req, res) {
    // List of samples for downloadable product
    magento.downloadableSampleRepositoryV1GetListGet(req.params).done(function (data) {
      res.json(data);
    });
  })
.post('/products/:sku/downloadable-links/samples', function(req, res) {
    // Update downloadable sample of the given product
    magento.downloadableSampleRepositoryV1SavePost(req.params).done(function (data) {
      res.json(data);
    });
  })
;

app
  .put('/products/:sku/downloadable-links/samples/:id', function(req, res) {
    // Update downloadable sample of the given product
    magento.downloadableSampleRepositoryV1SavePut(req.params).done(function (data) {
      res.json(data);
    });
  })
;

app
  .delete('/products/downloadable-links/samples/:id', function(req, res) {
    // Delete downloadable sample
    magento.downloadableSampleRepositoryV1DeleteDelete(req.params).done(function (data) {
      res.json(data);
    });
  })
;

app
  .get('/orders/:id', function(req, res) {
    // Loads a specified order.
    magento.salesOrderRepositoryV1GetGet(req.params).done(function (data) {
      res.json(data);
    });
  })
;

app
  .get('/orders', function(req, res) {
    // Lists orders that match specified search criteria.
    magento.salesOrderRepositoryV1GetListGet(req.params).done(function (data) {
      res.json(data);
    });
  })
;

app
  .put('/orders/create', function(req, res) {
    // Performs persist operations for a specified order.
    magento.salesOrderRepositoryV1SavePut(req.params).done(function (data) {
      res.json(data);
    });
  })
;

app
  .post('/orders/', function(req, res) {
    // Performs persist operations for a specified order.
    magento.salesOrderRepositoryV1SavePost(req.params).done(function (data) {
      res.json(data);
    });
  })
;

app
  .get('/orders/:id/statuses', function(req, res) {
    // Gets the status for a specified order.
    magento.salesOrderManagementV1GetStatusGet(req.params).done(function (data) {
      res.json(data);
    });
  })
;

app
  .post('/orders/:id/cancel', function(req, res) {
    // Cancels a specified order.
    magento.salesOrderManagementV1CancelPost(req.params).done(function (data) {
      res.json(data);
    });
  })
;

app
  .post('/orders/:id/emails', function(req, res) {
    // Emails a user a specified order.
    magento.salesOrderManagementV1NotifyPost(req.params).done(function (data) {
      res.json(data);
    });
  })
;

app
  .post('/orders/:id/hold', function(req, res) {
    // Holds a specified order.
    magento.salesOrderManagementV1HoldPost(req.params).done(function (data) {
      res.json(data);
    });
  })
;

app
  .post('/orders/:id/unhold', function(req, res) {
    // Releases a specified order from hold status.
    magento.salesOrderManagementV1UnHoldPost(req.params).done(function (data) {
      res.json(data);
    });
  })
;

app
  .post('/orders/:id/comments', function(req, res) {
    // Adds a comment to a specified order.
    magento.salesOrderManagementV1AddCommentPost(req.params).done(function (data) {
      res.json(data);
    });
  })
.get('/orders/:id/comments', function(req, res) {
    // Lists comments for a specified order.
    magento.salesOrderManagementV1GetCommentsListGet(req.params).done(function (data) {
      res.json(data);
    });
  })
;

app
  .put('/orders/:parent_id', function(req, res) {
    // Performs persist operations for a specified order address.
    magento.salesOrderAddressRepositoryV1SavePut(req.params).done(function (data) {
      res.json(data);
    });
  })
;

app
  .get('/invoices/:id', function(req, res) {
    // Loads a specified invoice.
    magento.salesInvoiceRepositoryV1GetGet(req.params).done(function (data) {
      res.json(data);
    });
  })
;

app
  .get('/invoices', function(req, res) {
    // Lists invoices that match specified search criteria.
    magento.salesInvoiceRepositoryV1GetListGet(req.params).done(function (data) {
      res.json(data);
    });
  })
;

app
  .post('/invoices/', function(req, res) {
    // Performs persist operations for a specified invoice.
    magento.salesInvoiceRepositoryV1SavePost(req.params).done(function (data) {
      res.json(data);
    });
  })
;

app
  .get('/invoices/:id/comments', function(req, res) {
    // Lists comments for a specified invoice.
    magento.salesInvoiceManagementV1GetCommentsListGet(req.params).done(function (data) {
      res.json(data);
    });
  })
;

app
  .post('/invoices/:id/emails', function(req, res) {
    // Emails a user a specified invoice.
    magento.salesInvoiceManagementV1NotifyPost(req.params).done(function (data) {
      res.json(data);
    });
  })
;

app
  .post('/invoices/:id/void', function(req, res) {
    // Voids a specified invoice.
    magento.salesInvoiceManagementV1SetVoidPost(req.params).done(function (data) {
      res.json(data);
    });
  })
;

app
  .post('/invoices/:id/capture', function(req, res) {
    // Sets invoice capture.
    magento.salesInvoiceManagementV1SetCapturePost(req.params).done(function (data) {
      res.json(data);
    });
  })
;

app
  .post('/invoices/comments', function(req, res) {
    // Performs persist operations for a specified invoice comment.
    magento.salesInvoiceCommentRepositoryV1SavePost(req.params).done(function (data) {
      res.json(data);
    });
  })
;

app
  .get('/creditmemo/:id/comments', function(req, res) {
    // Lists comments for a specified credit memo.
    magento.salesCreditmemoManagementV1GetCommentsListGet(req.params).done(function (data) {
      res.json(data);
    });
  })
.post('/creditmemo/:id/comments', function(req, res) {
    // Performs persist operations for a specified entity.
    magento.salesCreditmemoCommentRepositoryV1SavePost(req.params).done(function (data) {
      res.json(data);
    });
  })
;

app
  .put('/creditmemo/:id', function(req, res) {
    // Cancels a specified credit memo.
    magento.salesCreditmemoManagementV1CancelPut(req.params).done(function (data) {
      res.json(data);
    });
  })
.get('/creditmemo/:id', function(req, res) {
    // Loads a specified credit memo.
    magento.salesCreditmemoRepositoryV1GetGet(req.params).done(function (data) {
      res.json(data);
    });
  })
;

app
  .post('/creditmemo/:id/emails', function(req, res) {
    // Emails a user a specified credit memo.
    magento.salesCreditmemoManagementV1NotifyPost(req.params).done(function (data) {
      res.json(data);
    });
  })
;

app
  .get('/creditmemos', function(req, res) {
    // Lists credit memos that match specified search criteria.
    magento.salesCreditmemoRepositoryV1GetListGet(req.params).done(function (data) {
      res.json(data);
    });
  })
;

app
  .post('/creditmemo', function(req, res) {
    // Performs persist operations for a specified credit memo.
    magento.salesCreditmemoRepositoryV1SavePost(req.params).done(function (data) {
      res.json(data);
    });
  })
;

app
  .get('/shipment/:id', function(req, res) {
    // Loads a specified shipment.
    magento.salesShipmentRepositoryV1GetGet(req.params).done(function (data) {
      res.json(data);
    });
  })
;

app
  .get('/shipments', function(req, res) {
    // Lists shipments that match specified search criteria.
    magento.salesShipmentRepositoryV1GetListGet(req.params).done(function (data) {
      res.json(data);
    });
  })
;

app
  .post('/shipment/', function(req, res) {
    // Performs persist operations for a specified shipment.
    magento.salesShipmentRepositoryV1SavePost(req.params).done(function (data) {
      res.json(data);
    });
  })
;

app
  .get('/shipment/:id/comments', function(req, res) {
    // Lists comments for a specified shipment.
    magento.salesShipmentManagementV1GetCommentsListGet(req.params).done(function (data) {
      res.json(data);
    });
  })
.post('/shipment/:id/comments', function(req, res) {
    // Performs persist operations for a specified shipment comment.
    magento.salesShipmentCommentRepositoryV1SavePost(req.params).done(function (data) {
      res.json(data);
    });
  })
;

app
  .post('/shipment/:id/emails', function(req, res) {
    // Emails user a specified shipment.
    magento.salesShipmentManagementV1NotifyPost(req.params).done(function (data) {
      res.json(data);
    });
  })
;

app
  .get('/shipment/:id/label', function(req, res) {
    // Gets a specified shipment label.
    magento.salesShipmentManagementV1GetLabelGet(req.params).done(function (data) {
      res.json(data);
    });
  })
;

app
  .post('/shipment/track', function(req, res) {
    // Performs persist operations for a specified shipment track.
    magento.salesShipmentTrackRepositoryV1SavePost(req.params).done(function (data) {
      res.json(data);
    });
  })
;

app
  .delete('/shipment/track/:id', function(req, res) {
    // Deletes a specified shipment track by ID.
    magento.salesShipmentTrackRepositoryV1DeleteByIdDelete(req.params).done(function (data) {
      res.json(data);
    });
  })
;

app
  .get('/transactions/:id', function(req, res) {
    // Loads a specified transaction.
    magento.salesTransactionRepositoryV1GetGet(req.params).done(function (data) {
      res.json(data);
    });
  })
;

app
  .get('/transactions', function(req, res) {
    // Lists transactions that match specified search criteria.
    magento.salesTransactionRepositoryV1GetListGet(req.params).done(function (data) {
      res.json(data);
    });
  })
;

app
  .get('/stockItems/:productSku', function(req, res) {
    
    magento.catalogInventoryStockRegistryV1GetStockItemBySkuGet(req.params).done(function (data) {
      res.json(data);
    });
  })
;

app
  .put('/products/:productSku/stockItems/:itemId', function(req, res) {
    
    magento.catalogInventoryStockRegistryV1UpdateStockItemBySkuPut(req.params).done(function (data) {
      res.json(data);
    });
  })
;

app
  .get('/stockItems/lowStock/', function(req, res) {
    // Retrieves a list of SKU&#x27;s with low inventory qty
    magento.catalogInventoryStockRegistryV1GetLowStockItemsGet(req.params).done(function (data) {
      res.json(data);
    });
  })
;

app
  .get('/stockStatuses/:productSku', function(req, res) {
    
    magento.catalogInventoryStockRegistryV1GetStockStatusBySkuGet(req.params).done(function (data) {
      res.json(data);
    });
  })
;

app
  .post('/carts/:cartId/shipping-information', function(req, res) {
    
    magento.checkoutGuestShippingInformationManagementV1SaveAddressInformationPost(req.params).done(function (data) {
      res.json(data);
    });
  })
;

app
  .post('/carts/mine/shipping-information', function(req, res) {
    
    magento.checkoutShippingInformationManagementV1SaveAddressInformationPost(req.params).done(function (data) {
      res.json(data);
    });
  })
;

app
  .post('/carts/:cartId/totals-information', function(req, res) {
    // Calculate quote totals based on address and shipping method.
    magento.checkoutTotalsInformationManagementV1CalculatePost(req.params).done(function (data) {
      res.json(data);
    });
  })
;

app
  .post('/carts/mine/totals-information', function(req, res) {
    // Calculate quote totals based on address and shipping method.
    magento.checkoutTotalsInformationManagementV1CalculatePost(req.params).done(function (data) {
      res.json(data);
    });
  })
;

app
  .post('/guest-carts/:cartId/totals-information', function(req, res) {
    // Calculate quote totals based on address and shipping method.
    magento.checkoutGuestTotalsInformationManagementV1CalculatePost(req.params).done(function (data) {
      res.json(data);
    });
  })
;

app
  .post('/guest-carts/:cartId/payment-information', function(req, res) {
    // Set payment information and place order for a specified cart.
    magento.checkoutGuestPaymentInformationManagementV1SavePaymentInformationAndPlaceOrderPost(req.params).done(function (data) {
      res.json(data);
    });
  })
.get('/guest-carts/:cartId/payment-information', function(req, res) {
    // Get payment information
    magento.checkoutGuestPaymentInformationManagementV1GetPaymentInformationGet(req.params).done(function (data) {
      res.json(data);
    });
  })
;

app
  .post('/guest-carts/:cartId/set-payment-information', function(req, res) {
    // Set payment information for a specified cart.
    magento.checkoutGuestPaymentInformationManagementV1SavePaymentInformationPost(req.params).done(function (data) {
      res.json(data);
    });
  })
;

app
  .post('/carts/mine/payment-information', function(req, res) {
    // Set payment information and place order for a specified cart.
    magento.checkoutPaymentInformationManagementV1SavePaymentInformationAndPlaceOrderPost(req.params).done(function (data) {
      res.json(data);
    });
  })
.get('/carts/mine/payment-information', function(req, res) {
    // Get payment information
    magento.checkoutPaymentInformationManagementV1GetPaymentInformationGet(req.params).done(function (data) {
      res.json(data);
    });
  })
;

app
  .post('/carts/mine/set-payment-information', function(req, res) {
    // Set payment information for a specified cart.
    magento.checkoutPaymentInformationManagementV1SavePaymentInformationPost(req.params).done(function (data) {
      res.json(data);
    });
  })
;

app
  .post('/integration/admin/token', function(req, res) {
    // Create access token for admin given the admin credentials.
    magento.integrationAdminTokenServiceV1CreateAdminAccessTokenPost(req.params).done(function (data) {
      res.json(data);
    });
  })
;

app
  .post('/integration/customer/token', function(req, res) {
    // Create access token for admin given the customer credentials.
    magento.integrationCustomerTokenServiceV1CreateCustomerAccessTokenPost(req.params).done(function (data) {
      res.json(data);
    });
  })
;

app
  .get('/salesRules/:ruleId', function(req, res) {
    // Get rule by ID.
    magento.salesRuleRuleRepositoryV1GetByIdGet(req.params).done(function (data) {
      res.json(data);
    });
  })
.put('/salesRules/:ruleId', function(req, res) {
    // Save sales rule.
    magento.salesRuleRuleRepositoryV1SavePut(req.params).done(function (data) {
      res.json(data);
    });
  })
.delete('/salesRules/:ruleId', function(req, res) {
    // Delete rule by ID.
    magento.salesRuleRuleRepositoryV1DeleteByIdDelete(req.params).done(function (data) {
      res.json(data);
    });
  })
;

app
  .get('/salesRules/search', function(req, res) {
    // Retrieve sales rules.
    magento.salesRuleRuleRepositoryV1GetListGet(req.params).done(function (data) {
      res.json(data);
    });
  })
;

app
  .post('/salesRules', function(req, res) {
    // Save sales rule.
    magento.salesRuleRuleRepositoryV1SavePost(req.params).done(function (data) {
      res.json(data);
    });
  })
;

app
  .get('/coupons/:couponId', function(req, res) {
    // Get coupon by coupon id.
    magento.salesRuleCouponRepositoryV1GetByIdGet(req.params).done(function (data) {
      res.json(data);
    });
  })
.put('/coupons/:couponId', function(req, res) {
    // Save coupon.
    magento.salesRuleCouponRepositoryV1SavePut(req.params).done(function (data) {
      res.json(data);
    });
  })
.delete('/coupons/:couponId', function(req, res) {
    // Delete coupon by coupon id.
    magento.salesRuleCouponRepositoryV1DeleteByIdDelete(req.params).done(function (data) {
      res.json(data);
    });
  })
;

app
  .get('/coupons/search', function(req, res) {
    // Retrieve coupon.
    magento.salesRuleCouponRepositoryV1GetListGet(req.params).done(function (data) {
      res.json(data);
    });
  })
;

app
  .post('/coupons', function(req, res) {
    // Save coupon.
    magento.salesRuleCouponRepositoryV1SavePost(req.params).done(function (data) {
      res.json(data);
    });
  })
;

app
  .post('/coupons/generate', function(req, res) {
    // Generate coupon for a rule
    magento.salesRuleCouponManagementV1GeneratePost(req.params).done(function (data) {
      res.json(data);
    });
  })
;

app
  .post('/coupons/deleteByIds', function(req, res) {
    // Delete coupon by coupon ids.
    magento.salesRuleCouponManagementV1DeleteByIdsPost(req.params).done(function (data) {
      res.json(data);
    });
  })
;

app
  .post('/coupons/deleteByCodes', function(req, res) {
    // Delete coupon by coupon codes.
    magento.salesRuleCouponManagementV1DeleteByCodesPost(req.params).done(function (data) {
      res.json(data);
    });
  })
;

app
  .get('/configurable-products/:sku/children', function(req, res) {
    // Get all children for Bundle product
    magento.configurableProductLinkManagementV1GetChildrenGet(req.params).done(function (data) {
      res.json(data);
    });
  })
;

app
  .delete('/configurable-products/:sku/children/:childSku', function(req, res) {
    // Remove configurable product option
    magento.configurableProductLinkManagementV1RemoveChildDelete(req.params).done(function (data) {
      res.json(data);
    });
  })
;

app
  .post('/configurable-products/:sku/child', function(req, res) {
    
    magento.configurableProductLinkManagementV1AddChildPost(req.params).done(function (data) {
      res.json(data);
    });
  })
;

app
  .put('/configurable-products/variation', function(req, res) {
    // Generate variation based on same product
    magento.configurableProductConfigurableProductManagementV1GenerateVariationPut(req.params).done(function (data) {
      res.json(data);
    });
  })
;

app
  .get('/configurable-products/:sku/options/:id', function(req, res) {
    // Get option for configurable product
    magento.configurableProductOptionRepositoryV1GetGet(req.params).done(function (data) {
      res.json(data);
    });
  })
.put('/configurable-products/:sku/options/:id', function(req, res) {
    // Save option
    magento.configurableProductOptionRepositoryV1SavePut(req.params).done(function (data) {
      res.json(data);
    });
  })
.delete('/configurable-products/:sku/options/:id', function(req, res) {
    // Remove option from configurable product
    magento.configurableProductOptionRepositoryV1DeleteByIdDelete(req.params).done(function (data) {
      res.json(data);
    });
  })
;

app
  .get('/configurable-products/:sku/options/all', function(req, res) {
    // Get all options for configurable product
    magento.configurableProductOptionRepositoryV1GetListGet(req.params).done(function (data) {
      res.json(data);
    });
  })
;

app
  .post('/configurable-products/:sku/options', function(req, res) {
    // Save option
    magento.configurableProductOptionRepositoryV1SavePost(req.params).done(function (data) {
      res.json(data);
    });
  })
;

app
  .post('/taxRates', function(req, res) {
    // Create or update tax rate
    magento.taxTaxRateRepositoryV1SavePost(req.params).done(function (data) {
      res.json(data);
    });
  })
.put('/taxRates', function(req, res) {
    // Create or update tax rate
    magento.taxTaxRateRepositoryV1SavePut(req.params).done(function (data) {
      res.json(data);
    });
  })
;

app
  .get('/taxRates/:rateId', function(req, res) {
    // Get tax rate
    magento.taxTaxRateRepositoryV1GetGet(req.params).done(function (data) {
      res.json(data);
    });
  })
.delete('/taxRates/:rateId', function(req, res) {
    // Delete tax rate
    magento.taxTaxRateRepositoryV1DeleteByIdDelete(req.params).done(function (data) {
      res.json(data);
    });
  })
;

app
  .get('/taxRates/search', function(req, res) {
    // Search TaxRates
    magento.taxTaxRateRepositoryV1GetListGet(req.params).done(function (data) {
      res.json(data);
    });
  })
;

app
  .post('/taxRules', function(req, res) {
    // Save TaxRule
    magento.taxTaxRuleRepositoryV1SavePost(req.params).done(function (data) {
      res.json(data);
    });
  })
.put('/taxRules', function(req, res) {
    // Save TaxRule
    magento.taxTaxRuleRepositoryV1SavePut(req.params).done(function (data) {
      res.json(data);
    });
  })
;

app
  .delete('/taxRules/:ruleId', function(req, res) {
    // Delete TaxRule
    magento.taxTaxRuleRepositoryV1DeleteByIdDelete(req.params).done(function (data) {
      res.json(data);
    });
  })
.get('/taxRules/:ruleId', function(req, res) {
    // Get TaxRule
    magento.taxTaxRuleRepositoryV1GetGet(req.params).done(function (data) {
      res.json(data);
    });
  })
;

app
  .get('/taxRules/search', function(req, res) {
    // Search TaxRules
    magento.taxTaxRuleRepositoryV1GetListGet(req.params).done(function (data) {
      res.json(data);
    });
  })
;

app
  .post('/taxClasses', function(req, res) {
    // Create a Tax Class
    magento.taxTaxClassRepositoryV1SavePost(req.params).done(function (data) {
      res.json(data);
    });
  })
;

app
  .get('/taxClasses/:taxClassId', function(req, res) {
    // Get a tax class with the given tax class id.
    magento.taxTaxClassRepositoryV1GetGet(req.params).done(function (data) {
      res.json(data);
    });
  })
.delete('/taxClasses/:taxClassId', function(req, res) {
    // Delete a tax class with the given tax class id.
    magento.taxTaxClassRepositoryV1DeleteByIdDelete(req.params).done(function (data) {
      res.json(data);
    });
  })
;

app
  .put('/taxClasses/:classId', function(req, res) {
    // Create a Tax Class
    magento.taxTaxClassRepositoryV1SavePut(req.params).done(function (data) {
      res.json(data);
    });
  })
;

app
  .get('/taxClasses/search', function(req, res) {
    // Retrieve tax classes which match a specific criteria.
    magento.taxTaxClassRepositoryV1GetListGet(req.params).done(function (data) {
      res.json(data);
    });
  })
;

app
  .get('/carts/:cartId/gift-message', function(req, res) {
    // Return the gift message for a specified order.
    magento.giftMessageCartRepositoryV1GetGet(req.params).done(function (data) {
      res.json(data);
    });
  })
.post('/carts/:cartId/gift-message', function(req, res) {
    // Set the gift message for an entire order.
    magento.giftMessageCartRepositoryV1SavePost(req.params).done(function (data) {
      res.json(data);
    });
  })
;

app
  .get('/carts/mine/gift-message', function(req, res) {
    // Return the gift message for a specified order.
    magento.giftMessageCartRepositoryV1GetGet(req.params).done(function (data) {
      res.json(data);
    });
  })
.post('/carts/mine/gift-message', function(req, res) {
    // Set the gift message for an entire order.
    magento.giftMessageCartRepositoryV1SavePost(req.params).done(function (data) {
      res.json(data);
    });
  })
;

app
  .get('/carts/:cartId/gift-message/:itemId', function(req, res) {
    // Return the gift message for a specified item in a specified shopping cart.
    magento.giftMessageItemRepositoryV1GetGet(req.params).done(function (data) {
      res.json(data);
    });
  })
.post('/carts/:cartId/gift-message/:itemId', function(req, res) {
    // Set the gift message for a specified item in a specified shopping cart.
    magento.giftMessageItemRepositoryV1SavePost(req.params).done(function (data) {
      res.json(data);
    });
  })
;

app
  .get('/carts/mine/gift-message/:itemId', function(req, res) {
    // Return the gift message for a specified item in a specified shopping cart.
    magento.giftMessageItemRepositoryV1GetGet(req.params).done(function (data) {
      res.json(data);
    });
  })
.post('/carts/mine/gift-message/:itemId', function(req, res) {
    // Set the gift message for a specified item in a specified shopping cart.
    magento.giftMessageItemRepositoryV1SavePost(req.params).done(function (data) {
      res.json(data);
    });
  })
;

app
  .get('/guest-carts/:cartId/gift-message', function(req, res) {
    // Return the gift message for a specified order.
    magento.giftMessageGuestCartRepositoryV1GetGet(req.params).done(function (data) {
      res.json(data);
    });
  })
.post('/guest-carts/:cartId/gift-message', function(req, res) {
    // Set the gift message for an entire order.
    magento.giftMessageGuestCartRepositoryV1SavePost(req.params).done(function (data) {
      res.json(data);
    });
  })
;

app
  .get('/guest-carts/:cartId/gift-message/:itemId', function(req, res) {
    // Return the gift message for a specified item in a specified shopping cart.
    magento.giftMessageGuestItemRepositoryV1GetGet(req.params).done(function (data) {
      res.json(data);
    });
  })
.post('/guest-carts/:cartId/gift-message/:itemId', function(req, res) {
    // Set the gift message for a specified item in a specified shopping cart.
    magento.giftMessageGuestItemRepositoryV1SavePost(req.params).done(function (data) {
      res.json(data);
    });
  })
;


server.listen(3000);

io.on('connection', function (socket) {

  console.log('Connected with ID:' + socket.id);

  socket.on('disconnect', function () {
    console.log('Disconnected with ID:' + this.id);
  })

});
