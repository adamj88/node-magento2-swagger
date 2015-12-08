/*jshint -W069 */
/**
 * 
 * @class magento
 * @param {(string|object)} [domainOrOptions] - The project domain or options object. If object, see the object's optional properties.
 * @param {string} [domainOrOptions.domain] - The project domain
 * @param {object} [domainOrOptions.token] - auth token - object with value property and optional headerOrQueryName and isQuery properties
 */
var magento = (function() {
    'use strict';

    var request = require('request');
    var Q = require('q');

    function magento(options) {
        var domain = (typeof options === 'object') ? options.domain : options;
        this.domain = domain ? domain : 'http://example.com/rest/default';
        if (this.domain.length === 0) {
            throw new Error('Domain parameter must be specified as a string.');
        }
    }

    /**
     * Retrieve list of all stores
     * @method
     * @name magento#storeStoreRepositoryV1GetListGet
     *
     */
    magento.prototype.storeStoreRepositoryV1GetListGet = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/store/storeViews';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'GET',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * Retrieve list of all groups
     * @method
     * @name magento#storeGroupRepositoryV1GetListGet
     *
     */
    magento.prototype.storeGroupRepositoryV1GetListGet = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/store/storeGroups';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'GET',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * Retrieve list of all websites
     * @method
     * @name magento#storeWebsiteRepositoryV1GetListGet
     *
     */
    magento.prototype.storeWebsiteRepositoryV1GetListGet = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/store/websites';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'GET',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * 
     * @method
     * @name magento#storeStoreConfigManagerV1GetStoreConfigsGet
     * @param {array} storeCodes - 
     *
     */
    magento.prototype.storeStoreConfigManagerV1GetStoreConfigsGet = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/store/storeConfigs';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        if (parameters['storeCodes'] !== undefined) {
            queryParameters['storeCodes'] = parameters['storeCodes'];
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'GET',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * Get currency information for the store.
     * @method
     * @name magento#directoryCurrencyInformationAcquirerV1GetCurrencyInfoGet
     *
     */
    magento.prototype.directoryCurrencyInformationAcquirerV1GetCurrencyInfoGet = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/directory/currency';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'GET',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * Get all countries and regions information for the store.
     * @method
     * @name magento#directoryCountryInformationAcquirerV1GetCountriesInfoGet
     *
     */
    magento.prototype.directoryCountryInformationAcquirerV1GetCountriesInfoGet = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/directory/countries';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'GET',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * Get country and region information for the store.
     * @method
     * @name magento#directoryCountryInformationAcquirerV1GetCountryInfoGet
     * @param {string} countryId - 
     *
     */
    magento.prototype.directoryCountryInformationAcquirerV1GetCountryInfoGet = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/directory/countries/{countryId}';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        path = path.replace('{countryId}', parameters['countryId']);

        if (parameters['countryId'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: countryId'));
            return deferred.promise;
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'GET',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * Returns an array of enabled modules
     * @method
     * @name magento#backendModuleServiceV1GetModulesGet
     *
     */
    magento.prototype.backendModuleServiceV1GetModulesGet = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/modules';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'GET',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * Retrieve list of Attribute Sets
     * @method
     * @name magento#eavAttributeSetRepositoryV1GetListGet
     * @param {string} searchCriteria[filterGroups][][filters][][field] - Field
     * @param {string} searchCriteria[filterGroups][][filters][][value] - Value
     * @param {string} searchCriteria[filterGroups][][filters][][conditionType] - Condition type
     * @param {string} searchCriteria[sortOrders][][field] - Sorting field.
     * @param {string} searchCriteria[sortOrders][][direction] - Sorting direction.
     * @param {integer} searchCriteria[pageSize] - Page size.
     * @param {integer} searchCriteria[currentPage] - Current page.
     *
     */
    magento.prototype.eavAttributeSetRepositoryV1GetListGet = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/eav/attribute-sets/list';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        if (parameters['searchCriteria[filterGroups][][filters][][field]'] !== undefined) {
            queryParameters['searchCriteria[filterGroups][][filters][][field]'] = parameters['searchCriteria[filterGroups][][filters][][field]'];
        }

        if (parameters['searchCriteria[filterGroups][][filters][][value]'] !== undefined) {
            queryParameters['searchCriteria[filterGroups][][filters][][value]'] = parameters['searchCriteria[filterGroups][][filters][][value]'];
        }

        if (parameters['searchCriteria[filterGroups][][filters][][conditionType]'] !== undefined) {
            queryParameters['searchCriteria[filterGroups][][filters][][conditionType]'] = parameters['searchCriteria[filterGroups][][filters][][conditionType]'];
        }

        if (parameters['searchCriteria[sortOrders][][field]'] !== undefined) {
            queryParameters['searchCriteria[sortOrders][][field]'] = parameters['searchCriteria[sortOrders][][field]'];
        }

        if (parameters['searchCriteria[sortOrders][][direction]'] !== undefined) {
            queryParameters['searchCriteria[sortOrders][][direction]'] = parameters['searchCriteria[sortOrders][][direction]'];
        }

        if (parameters['searchCriteria[pageSize]'] !== undefined) {
            queryParameters['searchCriteria[pageSize]'] = parameters['searchCriteria[pageSize]'];
        }

        if (parameters['searchCriteria[currentPage]'] !== undefined) {
            queryParameters['searchCriteria[currentPage]'] = parameters['searchCriteria[currentPage]'];
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'GET',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * Retrieve attribute set information based on given ID
     * @method
     * @name magento#eavAttributeSetRepositoryV1GetGet
     * @param {integer} attributeSetId - 
     *
     */
    magento.prototype.eavAttributeSetRepositoryV1GetGet = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/eav/attribute-sets/{attributeSetId}';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        path = path.replace('{attributeSetId}', parameters['attributeSetId']);

        if (parameters['attributeSetId'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: attributeSetId'));
            return deferred.promise;
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'GET',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * Remove attribute set by given ID
     * @method
     * @name magento#eavAttributeSetRepositoryV1DeleteByIdDelete
     * @param {integer} attributeSetId - 
     *
     */
    magento.prototype.eavAttributeSetRepositoryV1DeleteByIdDelete = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/eav/attribute-sets/{attributeSetId}';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        path = path.replace('{attributeSetId}', parameters['attributeSetId']);

        if (parameters['attributeSetId'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: attributeSetId'));
            return deferred.promise;
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'DELETE',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * Save attribute set data
     * @method
     * @name magento#eavAttributeSetRepositoryV1SavePut
     * @param {string} attributeSetId - 
     * @param {} $body - 
     *
     */
    magento.prototype.eavAttributeSetRepositoryV1SavePut = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/eav/attribute-sets/{attributeSetId}';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        path = path.replace('{attributeSetId}', parameters['attributeSetId']);

        if (parameters['attributeSetId'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: attributeSetId'));
            return deferred.promise;
        }

        if (parameters['$body'] !== undefined) {
            body = parameters['$body'];
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'PUT',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * Create attribute set from data
     * @method
     * @name magento#eavAttributeSetManagementV1CreatePost
     * @param {} $body - 
     *
     */
    magento.prototype.eavAttributeSetManagementV1CreatePost = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/eav/attribute-sets';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        if (parameters['$body'] !== undefined) {
            body = parameters['$body'];
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'POST',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * Get customer group by group ID.
     * @method
     * @name magento#customerGroupRepositoryV1GetByIdGet
     * @param {integer} id - 
     *
     */
    magento.prototype.customerGroupRepositoryV1GetByIdGet = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/customerGroups/{id}';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        path = path.replace('{id}', parameters['id']);

        if (parameters['id'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: id'));
            return deferred.promise;
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'GET',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * Save customer group.
     * @method
     * @name magento#customerGroupRepositoryV1SavePut
     * @param {string} id - 
     * @param {} $body - 
     *
     */
    magento.prototype.customerGroupRepositoryV1SavePut = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/customerGroups/{id}';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        path = path.replace('{id}', parameters['id']);

        if (parameters['id'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: id'));
            return deferred.promise;
        }

        if (parameters['$body'] !== undefined) {
            body = parameters['$body'];
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'PUT',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * Delete customer group by ID.
     * @method
     * @name magento#customerGroupRepositoryV1DeleteByIdDelete
     * @param {integer} id - 
     *
     */
    magento.prototype.customerGroupRepositoryV1DeleteByIdDelete = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/customerGroups/{id}';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        path = path.replace('{id}', parameters['id']);

        if (parameters['id'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: id'));
            return deferred.promise;
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'DELETE',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * Retrieve customer groups. The list of groups can be filtered to exclude the NOT_LOGGED_IN group using the first parameter and/or it can be filtered by tax class.
     * @method
     * @name magento#customerGroupRepositoryV1GetListGet
     * @param {string} searchCriteria[filterGroups][][filters][][field] - Field
     * @param {string} searchCriteria[filterGroups][][filters][][value] - Value
     * @param {string} searchCriteria[filterGroups][][filters][][conditionType] - Condition type
     * @param {string} searchCriteria[sortOrders][][field] - Sorting field.
     * @param {string} searchCriteria[sortOrders][][direction] - Sorting direction.
     * @param {integer} searchCriteria[pageSize] - Page size.
     * @param {integer} searchCriteria[currentPage] - Current page.
     *
     */
    magento.prototype.customerGroupRepositoryV1GetListGet = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/customerGroups/search';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        if (parameters['searchCriteria[filterGroups][][filters][][field]'] !== undefined) {
            queryParameters['searchCriteria[filterGroups][][filters][][field]'] = parameters['searchCriteria[filterGroups][][filters][][field]'];
        }

        if (parameters['searchCriteria[filterGroups][][filters][][value]'] !== undefined) {
            queryParameters['searchCriteria[filterGroups][][filters][][value]'] = parameters['searchCriteria[filterGroups][][filters][][value]'];
        }

        if (parameters['searchCriteria[filterGroups][][filters][][conditionType]'] !== undefined) {
            queryParameters['searchCriteria[filterGroups][][filters][][conditionType]'] = parameters['searchCriteria[filterGroups][][filters][][conditionType]'];
        }

        if (parameters['searchCriteria[sortOrders][][field]'] !== undefined) {
            queryParameters['searchCriteria[sortOrders][][field]'] = parameters['searchCriteria[sortOrders][][field]'];
        }

        if (parameters['searchCriteria[sortOrders][][direction]'] !== undefined) {
            queryParameters['searchCriteria[sortOrders][][direction]'] = parameters['searchCriteria[sortOrders][][direction]'];
        }

        if (parameters['searchCriteria[pageSize]'] !== undefined) {
            queryParameters['searchCriteria[pageSize]'] = parameters['searchCriteria[pageSize]'];
        }

        if (parameters['searchCriteria[currentPage]'] !== undefined) {
            queryParameters['searchCriteria[currentPage]'] = parameters['searchCriteria[currentPage]'];
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'GET',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * Save customer group.
     * @method
     * @name magento#customerGroupRepositoryV1SavePost
     * @param {} $body - 
     *
     */
    magento.prototype.customerGroupRepositoryV1SavePost = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/customerGroups';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        if (parameters['$body'] !== undefined) {
            body = parameters['$body'];
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'POST',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * Get default customer group.
     * @method
     * @name magento#customerGroupManagementV1GetDefaultGroupGet
     * @param {integer} storeId - 
     *
     */
    magento.prototype.customerGroupManagementV1GetDefaultGroupGet = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/customerGroups/default/{storeId}';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        path = path.replace('{storeId}', parameters['storeId']);

        if (parameters['storeId'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: storeId'));
            return deferred.promise;
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'GET',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * Get default customer group.
     * @method
     * @name magento#customerGroupManagementV1GetDefaultGroupGet
     * @param {integer} storeId - 
     *
     */
    magento.prototype.customerGroupManagementV1GetDefaultGroupGet = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/customerGroups/default';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        if (parameters['storeId'] !== undefined) {
            queryParameters['storeId'] = parameters['storeId'];
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'GET',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * Check if customer group can be deleted.
     * @method
     * @name magento#customerGroupManagementV1IsReadonlyGet
     * @param {integer} id - 
     *
     */
    magento.prototype.customerGroupManagementV1IsReadonlyGet = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/customerGroups/{id}/permissions';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        path = path.replace('{id}', parameters['id']);

        if (parameters['id'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: id'));
            return deferred.promise;
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'GET',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * Retrieve attribute metadata.
     * @method
     * @name magento#customerCustomerMetadataV1GetAttributeMetadataGet
     * @param {string} attributeCode - 
     *
     */
    magento.prototype.customerCustomerMetadataV1GetAttributeMetadataGet = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/attributeMetadata/customer/attribute/{attributeCode}';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        path = path.replace('{attributeCode}', parameters['attributeCode']);

        if (parameters['attributeCode'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: attributeCode'));
            return deferred.promise;
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'GET',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * Retrieve all attributes filtered by form code
     * @method
     * @name magento#customerCustomerMetadataV1GetAttributesGet
     * @param {string} formCode - 
     *
     */
    magento.prototype.customerCustomerMetadataV1GetAttributesGet = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/attributeMetadata/customer/form/{formCode}';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        path = path.replace('{formCode}', parameters['formCode']);

        if (parameters['formCode'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: formCode'));
            return deferred.promise;
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'GET',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * Get all attribute metadata.
     * @method
     * @name magento#customerCustomerMetadataV1GetAllAttributesMetadataGet
     *
     */
    magento.prototype.customerCustomerMetadataV1GetAllAttributesMetadataGet = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/attributeMetadata/customer';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'GET',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * Get custom attributes metadata for the given data interface.
     * @method
     * @name magento#customerCustomerMetadataV1GetCustomAttributesMetadataGet
     * @param {string} dataInterfaceName - 
     *
     */
    magento.prototype.customerCustomerMetadataV1GetCustomAttributesMetadataGet = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/attributeMetadata/customer/custom';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        if (parameters['dataInterfaceName'] !== undefined) {
            queryParameters['dataInterfaceName'] = parameters['dataInterfaceName'];
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'GET',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * Retrieve attribute metadata.
     * @method
     * @name magento#customerAddressMetadataV1GetAttributeMetadataGet
     * @param {string} attributeCode - 
     *
     */
    magento.prototype.customerAddressMetadataV1GetAttributeMetadataGet = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/attributeMetadata/customerAddress/attribute/{attributeCode}';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        path = path.replace('{attributeCode}', parameters['attributeCode']);

        if (parameters['attributeCode'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: attributeCode'));
            return deferred.promise;
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'GET',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * Retrieve all attributes filtered by form code
     * @method
     * @name magento#customerAddressMetadataV1GetAttributesGet
     * @param {string} formCode - 
     *
     */
    magento.prototype.customerAddressMetadataV1GetAttributesGet = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/attributeMetadata/customerAddress/form/{formCode}';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        path = path.replace('{formCode}', parameters['formCode']);

        if (parameters['formCode'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: formCode'));
            return deferred.promise;
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'GET',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * Get all attribute metadata.
     * @method
     * @name magento#customerAddressMetadataV1GetAllAttributesMetadataGet
     *
     */
    magento.prototype.customerAddressMetadataV1GetAllAttributesMetadataGet = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/attributeMetadata/customerAddress';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'GET',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * Get custom attributes metadata for the given data interface.
     * @method
     * @name magento#customerAddressMetadataV1GetCustomAttributesMetadataGet
     * @param {string} dataInterfaceName - 
     *
     */
    magento.prototype.customerAddressMetadataV1GetCustomAttributesMetadataGet = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/attributeMetadata/customerAddress/custom';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        if (parameters['dataInterfaceName'] !== undefined) {
            queryParameters['dataInterfaceName'] = parameters['dataInterfaceName'];
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'GET',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * Retrieve customer.
     * @method
     * @name magento#customerCustomerRepositoryV1GetByIdGet
     * @param {integer} customerId - 
     *
     */
    magento.prototype.customerCustomerRepositoryV1GetByIdGet = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/customers/{customerId}';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        path = path.replace('{customerId}', parameters['customerId']);

        if (parameters['customerId'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: customerId'));
            return deferred.promise;
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'GET',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * Delete customer by ID.
     * @method
     * @name magento#customerCustomerRepositoryV1DeleteByIdDelete
     * @param {integer} customerId - 
     *
     */
    magento.prototype.customerCustomerRepositoryV1DeleteByIdDelete = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/customers/{customerId}';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        path = path.replace('{customerId}', parameters['customerId']);

        if (parameters['customerId'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: customerId'));
            return deferred.promise;
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'DELETE',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * Create customer.
     * @method
     * @name magento#customerCustomerRepositoryV1SavePut
     * @param {string} id - 
     * @param {} $body - 
     *
     */
    magento.prototype.customerCustomerRepositoryV1SavePut = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/customers/{id}';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        path = path.replace('{id}', parameters['id']);

        if (parameters['id'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: id'));
            return deferred.promise;
        }

        if (parameters['$body'] !== undefined) {
            body = parameters['$body'];
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'PUT',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * Create customer.
     * @method
     * @name magento#customerCustomerRepositoryV1SavePut
     * @param {} $body - 
     *
     */
    magento.prototype.customerCustomerRepositoryV1SavePut = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/customers/me';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        if (parameters['$body'] !== undefined) {
            body = parameters['$body'];
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'PUT',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * Retrieve customer.
     * @method
     * @name magento#customerCustomerRepositoryV1GetByIdGet
     *
     */
    magento.prototype.customerCustomerRepositoryV1GetByIdGet = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/customers/me';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'GET',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * Retrieve customers which match a specified criteria.
     * @method
     * @name magento#customerCustomerRepositoryV1GetListGet
     * @param {string} searchCriteria[filterGroups][][filters][][field] - Field
     * @param {string} searchCriteria[filterGroups][][filters][][value] - Value
     * @param {string} searchCriteria[filterGroups][][filters][][conditionType] - Condition type
     * @param {string} searchCriteria[sortOrders][][field] - Sorting field.
     * @param {string} searchCriteria[sortOrders][][direction] - Sorting direction.
     * @param {integer} searchCriteria[pageSize] - Page size.
     * @param {integer} searchCriteria[currentPage] - Current page.
     *
     */
    magento.prototype.customerCustomerRepositoryV1GetListGet = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/customers/search';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        if (parameters['searchCriteria[filterGroups][][filters][][field]'] !== undefined) {
            queryParameters['searchCriteria[filterGroups][][filters][][field]'] = parameters['searchCriteria[filterGroups][][filters][][field]'];
        }

        if (parameters['searchCriteria[filterGroups][][filters][][value]'] !== undefined) {
            queryParameters['searchCriteria[filterGroups][][filters][][value]'] = parameters['searchCriteria[filterGroups][][filters][][value]'];
        }

        if (parameters['searchCriteria[filterGroups][][filters][][conditionType]'] !== undefined) {
            queryParameters['searchCriteria[filterGroups][][filters][][conditionType]'] = parameters['searchCriteria[filterGroups][][filters][][conditionType]'];
        }

        if (parameters['searchCriteria[sortOrders][][field]'] !== undefined) {
            queryParameters['searchCriteria[sortOrders][][field]'] = parameters['searchCriteria[sortOrders][][field]'];
        }

        if (parameters['searchCriteria[sortOrders][][direction]'] !== undefined) {
            queryParameters['searchCriteria[sortOrders][][direction]'] = parameters['searchCriteria[sortOrders][][direction]'];
        }

        if (parameters['searchCriteria[pageSize]'] !== undefined) {
            queryParameters['searchCriteria[pageSize]'] = parameters['searchCriteria[pageSize]'];
        }

        if (parameters['searchCriteria[currentPage]'] !== undefined) {
            queryParameters['searchCriteria[currentPage]'] = parameters['searchCriteria[currentPage]'];
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'GET',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * Create customer account. Perform necessary business operations like sending email.
     * @method
     * @name magento#customerAccountManagementV1CreateAccountPost
     * @param {} $body - 
     *
     */
    magento.prototype.customerAccountManagementV1CreateAccountPost = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/customers';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        if (parameters['$body'] !== undefined) {
            body = parameters['$body'];
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'POST',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * Activate a customer account using a key that was sent in a confirmation email.
     * @method
     * @name magento#customerAccountManagementV1ActivateByIdPut
     * @param {} $body - 
     *
     */
    magento.prototype.customerAccountManagementV1ActivateByIdPut = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/customers/me/activate';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        if (parameters['$body'] !== undefined) {
            body = parameters['$body'];
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'PUT',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * Activate a customer account using a key that was sent in a confirmation email.
     * @method
     * @name magento#customerAccountManagementV1ActivatePut
     * @param {string} email - 
     * @param {} $body - 
     *
     */
    magento.prototype.customerAccountManagementV1ActivatePut = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/customers/{email}/activate';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        path = path.replace('{email}', parameters['email']);

        if (parameters['email'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: email'));
            return deferred.promise;
        }

        if (parameters['$body'] !== undefined) {
            body = parameters['$body'];
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'PUT',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * Change customer password.
     * @method
     * @name magento#customerAccountManagementV1ChangePasswordByIdPut
     * @param {} $body - 
     *
     */
    magento.prototype.customerAccountManagementV1ChangePasswordByIdPut = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/customers/me/password';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        if (parameters['$body'] !== undefined) {
            body = parameters['$body'];
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'PUT',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * Check if password reset token is valid.
     * @method
     * @name magento#customerAccountManagementV1ValidateResetPasswordLinkTokenGet
     * @param {integer} customerId - 
     * @param {string} resetPasswordLinkToken - 
     *
     */
    magento.prototype.customerAccountManagementV1ValidateResetPasswordLinkTokenGet = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/customers/{customerId}/password/resetLinkToken/{resetPasswordLinkToken}';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        path = path.replace('{customerId}', parameters['customerId']);

        if (parameters['customerId'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: customerId'));
            return deferred.promise;
        }

        path = path.replace('{resetPasswordLinkToken}', parameters['resetPasswordLinkToken']);

        if (parameters['resetPasswordLinkToken'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: resetPasswordLinkToken'));
            return deferred.promise;
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'GET',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * Send an email to the customer with a password reset link.
     * @method
     * @name magento#customerAccountManagementV1InitiatePasswordResetPut
     * @param {} $body - 
     *
     */
    magento.prototype.customerAccountManagementV1InitiatePasswordResetPut = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/customers/password';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        if (parameters['$body'] !== undefined) {
            body = parameters['$body'];
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'PUT',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * Gets the account confirmation status.
     * @method
     * @name magento#customerAccountManagementV1GetConfirmationStatusGet
     * @param {integer} customerId - 
     *
     */
    magento.prototype.customerAccountManagementV1GetConfirmationStatusGet = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/customers/{customerId}/confirm';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        path = path.replace('{customerId}', parameters['customerId']);

        if (parameters['customerId'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: customerId'));
            return deferred.promise;
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'GET',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * Resend confirmation email.
     * @method
     * @name magento#customerAccountManagementV1ResendConfirmationPost
     * @param {} $body - 
     *
     */
    magento.prototype.customerAccountManagementV1ResendConfirmationPost = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/customers/confirm';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        if (parameters['$body'] !== undefined) {
            body = parameters['$body'];
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'POST',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * Validate customer data.
     * @method
     * @name magento#customerAccountManagementV1ValidatePut
     * @param {} $body - 
     *
     */
    magento.prototype.customerAccountManagementV1ValidatePut = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/customers/validate';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        if (parameters['$body'] !== undefined) {
            body = parameters['$body'];
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'PUT',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * Check if customer can be deleted.
     * @method
     * @name magento#customerAccountManagementV1IsReadonlyGet
     * @param {integer} customerId - 
     *
     */
    magento.prototype.customerAccountManagementV1IsReadonlyGet = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/customers/{customerId}/permissions/readonly';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        path = path.replace('{customerId}', parameters['customerId']);

        if (parameters['customerId'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: customerId'));
            return deferred.promise;
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'GET',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * Check if given email is associated with a customer account in given website.
     * @method
     * @name magento#customerAccountManagementV1IsEmailAvailablePost
     * @param {} $body - 
     *
     */
    magento.prototype.customerAccountManagementV1IsEmailAvailablePost = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/customers/isEmailAvailable';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        if (parameters['$body'] !== undefined) {
            body = parameters['$body'];
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'POST',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * Retrieve default billing address for the given customerId.
     * @method
     * @name magento#customerAccountManagementV1GetDefaultBillingAddressGet
     *
     */
    magento.prototype.customerAccountManagementV1GetDefaultBillingAddressGet = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/customers/me/billingAddress';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'GET',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * Retrieve default billing address for the given customerId.
     * @method
     * @name magento#customerAccountManagementV1GetDefaultBillingAddressGet
     * @param {integer} customerId - 
     *
     */
    magento.prototype.customerAccountManagementV1GetDefaultBillingAddressGet = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/customers/{customerId}/billingAddress';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        path = path.replace('{customerId}', parameters['customerId']);

        if (parameters['customerId'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: customerId'));
            return deferred.promise;
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'GET',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * Retrieve default shipping address for the given customerId.
     * @method
     * @name magento#customerAccountManagementV1GetDefaultShippingAddressGet
     *
     */
    magento.prototype.customerAccountManagementV1GetDefaultShippingAddressGet = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/customers/me/shippingAddress';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'GET',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * Retrieve default shipping address for the given customerId.
     * @method
     * @name magento#customerAccountManagementV1GetDefaultShippingAddressGet
     * @param {integer} customerId - 
     *
     */
    magento.prototype.customerAccountManagementV1GetDefaultShippingAddressGet = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/customers/{customerId}/shippingAddress';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        path = path.replace('{customerId}', parameters['customerId']);

        if (parameters['customerId'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: customerId'));
            return deferred.promise;
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'GET',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * Retrieve customer address.
     * @method
     * @name magento#customerAddressRepositoryV1GetByIdGet
     * @param {integer} addressId - 
     *
     */
    magento.prototype.customerAddressRepositoryV1GetByIdGet = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/customers/addresses/{addressId}';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        path = path.replace('{addressId}', parameters['addressId']);

        if (parameters['addressId'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: addressId'));
            return deferred.promise;
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'GET',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * Delete customer address by ID.
     * @method
     * @name magento#customerAddressRepositoryV1DeleteByIdDelete
     * @param {integer} addressId - 
     *
     */
    magento.prototype.customerAddressRepositoryV1DeleteByIdDelete = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/addresses/{addressId}';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        path = path.replace('{addressId}', parameters['addressId']);

        if (parameters['addressId'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: addressId'));
            return deferred.promise;
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'DELETE',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * Retrieve page.
     * @method
     * @name magento#cmsPageRepositoryV1GetByIdGet
     * @param {integer} pageId - 
     *
     */
    magento.prototype.cmsPageRepositoryV1GetByIdGet = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/cmsPage/{pageId}';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        path = path.replace('{pageId}', parameters['pageId']);

        if (parameters['pageId'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: pageId'));
            return deferred.promise;
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'GET',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * Delete page by ID.
     * @method
     * @name magento#cmsPageRepositoryV1DeleteByIdDelete
     * @param {integer} pageId - 
     *
     */
    magento.prototype.cmsPageRepositoryV1DeleteByIdDelete = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/cmsPage/{pageId}';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        path = path.replace('{pageId}', parameters['pageId']);

        if (parameters['pageId'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: pageId'));
            return deferred.promise;
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'DELETE',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * Retrieve pages matching the specified criteria.
     * @method
     * @name magento#cmsPageRepositoryV1GetListGet
     * @param {string} searchCriteria[filterGroups][][filters][][field] - Field
     * @param {string} searchCriteria[filterGroups][][filters][][value] - Value
     * @param {string} searchCriteria[filterGroups][][filters][][conditionType] - Condition type
     * @param {string} searchCriteria[sortOrders][][field] - Sorting field.
     * @param {string} searchCriteria[sortOrders][][direction] - Sorting direction.
     * @param {integer} searchCriteria[pageSize] - Page size.
     * @param {integer} searchCriteria[currentPage] - Current page.
     *
     */
    magento.prototype.cmsPageRepositoryV1GetListGet = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/cmsPage/search';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        if (parameters['searchCriteria[filterGroups][][filters][][field]'] !== undefined) {
            queryParameters['searchCriteria[filterGroups][][filters][][field]'] = parameters['searchCriteria[filterGroups][][filters][][field]'];
        }

        if (parameters['searchCriteria[filterGroups][][filters][][value]'] !== undefined) {
            queryParameters['searchCriteria[filterGroups][][filters][][value]'] = parameters['searchCriteria[filterGroups][][filters][][value]'];
        }

        if (parameters['searchCriteria[filterGroups][][filters][][conditionType]'] !== undefined) {
            queryParameters['searchCriteria[filterGroups][][filters][][conditionType]'] = parameters['searchCriteria[filterGroups][][filters][][conditionType]'];
        }

        if (parameters['searchCriteria[sortOrders][][field]'] !== undefined) {
            queryParameters['searchCriteria[sortOrders][][field]'] = parameters['searchCriteria[sortOrders][][field]'];
        }

        if (parameters['searchCriteria[sortOrders][][direction]'] !== undefined) {
            queryParameters['searchCriteria[sortOrders][][direction]'] = parameters['searchCriteria[sortOrders][][direction]'];
        }

        if (parameters['searchCriteria[pageSize]'] !== undefined) {
            queryParameters['searchCriteria[pageSize]'] = parameters['searchCriteria[pageSize]'];
        }

        if (parameters['searchCriteria[currentPage]'] !== undefined) {
            queryParameters['searchCriteria[currentPage]'] = parameters['searchCriteria[currentPage]'];
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'GET',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * Save page.
     * @method
     * @name magento#cmsPageRepositoryV1SavePost
     * @param {} $body - 
     *
     */
    magento.prototype.cmsPageRepositoryV1SavePost = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/cmsPage';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        if (parameters['$body'] !== undefined) {
            body = parameters['$body'];
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'POST',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * Save page.
     * @method
     * @name magento#cmsPageRepositoryV1SavePut
     * @param {string} id - 
     * @param {} $body - 
     *
     */
    magento.prototype.cmsPageRepositoryV1SavePut = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/cmsPage/{id}';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        path = path.replace('{id}', parameters['id']);

        if (parameters['id'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: id'));
            return deferred.promise;
        }

        if (parameters['$body'] !== undefined) {
            body = parameters['$body'];
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'PUT',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * Retrieve block.
     * @method
     * @name magento#cmsBlockRepositoryV1GetByIdGet
     * @param {integer} blockId - 
     *
     */
    magento.prototype.cmsBlockRepositoryV1GetByIdGet = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/cmsBlock/{blockId}';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        path = path.replace('{blockId}', parameters['blockId']);

        if (parameters['blockId'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: blockId'));
            return deferred.promise;
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'GET',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * Delete block by ID.
     * @method
     * @name magento#cmsBlockRepositoryV1DeleteByIdDelete
     * @param {integer} blockId - 
     *
     */
    magento.prototype.cmsBlockRepositoryV1DeleteByIdDelete = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/cmsBlock/{blockId}';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        path = path.replace('{blockId}', parameters['blockId']);

        if (parameters['blockId'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: blockId'));
            return deferred.promise;
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'DELETE',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * Retrieve blocks matching the specified criteria.
     * @method
     * @name magento#cmsBlockRepositoryV1GetListGet
     * @param {string} searchCriteria[filterGroups][][filters][][field] - Field
     * @param {string} searchCriteria[filterGroups][][filters][][value] - Value
     * @param {string} searchCriteria[filterGroups][][filters][][conditionType] - Condition type
     * @param {string} searchCriteria[sortOrders][][field] - Sorting field.
     * @param {string} searchCriteria[sortOrders][][direction] - Sorting direction.
     * @param {integer} searchCriteria[pageSize] - Page size.
     * @param {integer} searchCriteria[currentPage] - Current page.
     *
     */
    magento.prototype.cmsBlockRepositoryV1GetListGet = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/cmsBlock/search';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        if (parameters['searchCriteria[filterGroups][][filters][][field]'] !== undefined) {
            queryParameters['searchCriteria[filterGroups][][filters][][field]'] = parameters['searchCriteria[filterGroups][][filters][][field]'];
        }

        if (parameters['searchCriteria[filterGroups][][filters][][value]'] !== undefined) {
            queryParameters['searchCriteria[filterGroups][][filters][][value]'] = parameters['searchCriteria[filterGroups][][filters][][value]'];
        }

        if (parameters['searchCriteria[filterGroups][][filters][][conditionType]'] !== undefined) {
            queryParameters['searchCriteria[filterGroups][][filters][][conditionType]'] = parameters['searchCriteria[filterGroups][][filters][][conditionType]'];
        }

        if (parameters['searchCriteria[sortOrders][][field]'] !== undefined) {
            queryParameters['searchCriteria[sortOrders][][field]'] = parameters['searchCriteria[sortOrders][][field]'];
        }

        if (parameters['searchCriteria[sortOrders][][direction]'] !== undefined) {
            queryParameters['searchCriteria[sortOrders][][direction]'] = parameters['searchCriteria[sortOrders][][direction]'];
        }

        if (parameters['searchCriteria[pageSize]'] !== undefined) {
            queryParameters['searchCriteria[pageSize]'] = parameters['searchCriteria[pageSize]'];
        }

        if (parameters['searchCriteria[currentPage]'] !== undefined) {
            queryParameters['searchCriteria[currentPage]'] = parameters['searchCriteria[currentPage]'];
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'GET',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * Save block.
     * @method
     * @name magento#cmsBlockRepositoryV1SavePost
     * @param {} $body - 
     *
     */
    magento.prototype.cmsBlockRepositoryV1SavePost = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/cmsBlock';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        if (parameters['$body'] !== undefined) {
            body = parameters['$body'];
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'POST',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * Save block.
     * @method
     * @name magento#cmsBlockRepositoryV1SavePut
     * @param {string} id - 
     * @param {} $body - 
     *
     */
    magento.prototype.cmsBlockRepositoryV1SavePut = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/cmsBlock/{id}';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        path = path.replace('{id}', parameters['id']);

        if (parameters['id'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: id'));
            return deferred.promise;
        }

        if (parameters['$body'] !== undefined) {
            body = parameters['$body'];
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'PUT',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * Create product
     * @method
     * @name magento#catalogProductRepositoryV1SavePost
     * @param {} $body - 
     *
     */
    magento.prototype.catalogProductRepositoryV1SavePost = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/products';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        if (parameters['$body'] !== undefined) {
            body = parameters['$body'];
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'POST',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * Get product list
     * @method
     * @name magento#catalogProductRepositoryV1GetListGet
     * @param {string} searchCriteria[filterGroups][][filters][][field] - Field
     * @param {string} searchCriteria[filterGroups][][filters][][value] - Value
     * @param {string} searchCriteria[filterGroups][][filters][][conditionType] - Condition type
     * @param {string} searchCriteria[sortOrders][][field] - Sorting field.
     * @param {string} searchCriteria[sortOrders][][direction] - Sorting direction.
     * @param {integer} searchCriteria[pageSize] - Page size.
     * @param {integer} searchCriteria[currentPage] - Current page.
     *
     */
    magento.prototype.catalogProductRepositoryV1GetListGet = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/products';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        if (parameters['searchCriteria[filterGroups][][filters][][field]'] !== undefined) {
            queryParameters['searchCriteria[filterGroups][][filters][][field]'] = parameters['searchCriteria[filterGroups][][filters][][field]'];
        }

        if (parameters['searchCriteria[filterGroups][][filters][][value]'] !== undefined) {
            queryParameters['searchCriteria[filterGroups][][filters][][value]'] = parameters['searchCriteria[filterGroups][][filters][][value]'];
        }

        if (parameters['searchCriteria[filterGroups][][filters][][conditionType]'] !== undefined) {
            queryParameters['searchCriteria[filterGroups][][filters][][conditionType]'] = parameters['searchCriteria[filterGroups][][filters][][conditionType]'];
        }

        if (parameters['searchCriteria[sortOrders][][field]'] !== undefined) {
            queryParameters['searchCriteria[sortOrders][][field]'] = parameters['searchCriteria[sortOrders][][field]'];
        }

        if (parameters['searchCriteria[sortOrders][][direction]'] !== undefined) {
            queryParameters['searchCriteria[sortOrders][][direction]'] = parameters['searchCriteria[sortOrders][][direction]'];
        }

        if (parameters['searchCriteria[pageSize]'] !== undefined) {
            queryParameters['searchCriteria[pageSize]'] = parameters['searchCriteria[pageSize]'];
        }

        if (parameters['searchCriteria[currentPage]'] !== undefined) {
            queryParameters['searchCriteria[currentPage]'] = parameters['searchCriteria[currentPage]'];
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'GET',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * Create product
     * @method
     * @name magento#catalogProductRepositoryV1SavePut
     * @param {string} sku - 
     * @param {} $body - 
     *
     */
    magento.prototype.catalogProductRepositoryV1SavePut = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/products/{sku}';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        path = path.replace('{sku}', parameters['sku']);

        if (parameters['sku'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: sku'));
            return deferred.promise;
        }

        if (parameters['$body'] !== undefined) {
            body = parameters['$body'];
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'PUT',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * 
     * @method
     * @name magento#catalogProductRepositoryV1DeleteByIdDelete
     * @param {string} sku - 
     *
     */
    magento.prototype.catalogProductRepositoryV1DeleteByIdDelete = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/products/{sku}';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        path = path.replace('{sku}', parameters['sku']);

        if (parameters['sku'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: sku'));
            return deferred.promise;
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'DELETE',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * Get info about product by product SKU
     * @method
     * @name magento#catalogProductRepositoryV1GetGet
     * @param {string} sku - 
     * @param {boolean} editMode - 
     * @param {integer} storeId - 
     * @param {boolean} forceReload - 
     *
     */
    magento.prototype.catalogProductRepositoryV1GetGet = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/products/{sku}';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        path = path.replace('{sku}', parameters['sku']);

        if (parameters['sku'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: sku'));
            return deferred.promise;
        }

        if (parameters['editMode'] !== undefined) {
            queryParameters['editMode'] = parameters['editMode'];
        }

        if (parameters['storeId'] !== undefined) {
            queryParameters['storeId'] = parameters['storeId'];
        }

        if (parameters['forceReload'] !== undefined) {
            queryParameters['forceReload'] = parameters['forceReload'];
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'GET',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * Retrieve list of product attribute types
     * @method
     * @name magento#catalogProductAttributeTypesListV1GetItemsGet
     *
     */
    magento.prototype.catalogProductAttributeTypesListV1GetItemsGet = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/products/attributes/types';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'GET',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * Retrieve specific attribute
     * @method
     * @name magento#catalogProductAttributeRepositoryV1GetGet
     * @param {string} attributeCode - 
     *
     */
    magento.prototype.catalogProductAttributeRepositoryV1GetGet = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/products/attributes/{attributeCode}';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        path = path.replace('{attributeCode}', parameters['attributeCode']);

        if (parameters['attributeCode'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: attributeCode'));
            return deferred.promise;
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'GET',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * Save attribute data
     * @method
     * @name magento#catalogProductAttributeRepositoryV1SavePut
     * @param {string} attributeCode - 
     * @param {} $body - 
     *
     */
    magento.prototype.catalogProductAttributeRepositoryV1SavePut = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/products/attributes/{attributeCode}';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        path = path.replace('{attributeCode}', parameters['attributeCode']);

        if (parameters['attributeCode'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: attributeCode'));
            return deferred.promise;
        }

        if (parameters['$body'] !== undefined) {
            body = parameters['$body'];
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'PUT',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * Delete Attribute by id
     * @method
     * @name magento#catalogProductAttributeRepositoryV1DeleteByIdDelete
     * @param {string} attributeCode - 
     *
     */
    magento.prototype.catalogProductAttributeRepositoryV1DeleteByIdDelete = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/products/attributes/{attributeCode}';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        path = path.replace('{attributeCode}', parameters['attributeCode']);

        if (parameters['attributeCode'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: attributeCode'));
            return deferred.promise;
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'DELETE',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * Retrieve all attributes for entity type
     * @method
     * @name magento#catalogProductAttributeRepositoryV1GetListGet
     * @param {string} searchCriteria[filterGroups][][filters][][field] - Field
     * @param {string} searchCriteria[filterGroups][][filters][][value] - Value
     * @param {string} searchCriteria[filterGroups][][filters][][conditionType] - Condition type
     * @param {string} searchCriteria[sortOrders][][field] - Sorting field.
     * @param {string} searchCriteria[sortOrders][][direction] - Sorting direction.
     * @param {integer} searchCriteria[pageSize] - Page size.
     * @param {integer} searchCriteria[currentPage] - Current page.
     *
     */
    magento.prototype.catalogProductAttributeRepositoryV1GetListGet = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/products/attributes';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        if (parameters['searchCriteria[filterGroups][][filters][][field]'] !== undefined) {
            queryParameters['searchCriteria[filterGroups][][filters][][field]'] = parameters['searchCriteria[filterGroups][][filters][][field]'];
        }

        if (parameters['searchCriteria[filterGroups][][filters][][value]'] !== undefined) {
            queryParameters['searchCriteria[filterGroups][][filters][][value]'] = parameters['searchCriteria[filterGroups][][filters][][value]'];
        }

        if (parameters['searchCriteria[filterGroups][][filters][][conditionType]'] !== undefined) {
            queryParameters['searchCriteria[filterGroups][][filters][][conditionType]'] = parameters['searchCriteria[filterGroups][][filters][][conditionType]'];
        }

        if (parameters['searchCriteria[sortOrders][][field]'] !== undefined) {
            queryParameters['searchCriteria[sortOrders][][field]'] = parameters['searchCriteria[sortOrders][][field]'];
        }

        if (parameters['searchCriteria[sortOrders][][direction]'] !== undefined) {
            queryParameters['searchCriteria[sortOrders][][direction]'] = parameters['searchCriteria[sortOrders][][direction]'];
        }

        if (parameters['searchCriteria[pageSize]'] !== undefined) {
            queryParameters['searchCriteria[pageSize]'] = parameters['searchCriteria[pageSize]'];
        }

        if (parameters['searchCriteria[currentPage]'] !== undefined) {
            queryParameters['searchCriteria[currentPage]'] = parameters['searchCriteria[currentPage]'];
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'GET',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * Save attribute data
     * @method
     * @name magento#catalogProductAttributeRepositoryV1SavePost
     * @param {} $body - 
     *
     */
    magento.prototype.catalogProductAttributeRepositoryV1SavePost = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/products/attributes';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        if (parameters['$body'] !== undefined) {
            body = parameters['$body'];
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'POST',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * Retrieve specific attribute
     * @method
     * @name magento#catalogCategoryAttributeRepositoryV1GetGet
     * @param {string} attributeCode - 
     *
     */
    magento.prototype.catalogCategoryAttributeRepositoryV1GetGet = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/categories/attributes/{attributeCode}';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        path = path.replace('{attributeCode}', parameters['attributeCode']);

        if (parameters['attributeCode'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: attributeCode'));
            return deferred.promise;
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'GET',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * Retrieve all attributes for entity type
     * @method
     * @name magento#catalogCategoryAttributeRepositoryV1GetListGet
     * @param {string} searchCriteria[filterGroups][][filters][][field] - Field
     * @param {string} searchCriteria[filterGroups][][filters][][value] - Value
     * @param {string} searchCriteria[filterGroups][][filters][][conditionType] - Condition type
     * @param {string} searchCriteria[sortOrders][][field] - Sorting field.
     * @param {string} searchCriteria[sortOrders][][direction] - Sorting direction.
     * @param {integer} searchCriteria[pageSize] - Page size.
     * @param {integer} searchCriteria[currentPage] - Current page.
     *
     */
    magento.prototype.catalogCategoryAttributeRepositoryV1GetListGet = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/categories/attributes';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        if (parameters['searchCriteria[filterGroups][][filters][][field]'] !== undefined) {
            queryParameters['searchCriteria[filterGroups][][filters][][field]'] = parameters['searchCriteria[filterGroups][][filters][][field]'];
        }

        if (parameters['searchCriteria[filterGroups][][filters][][value]'] !== undefined) {
            queryParameters['searchCriteria[filterGroups][][filters][][value]'] = parameters['searchCriteria[filterGroups][][filters][][value]'];
        }

        if (parameters['searchCriteria[filterGroups][][filters][][conditionType]'] !== undefined) {
            queryParameters['searchCriteria[filterGroups][][filters][][conditionType]'] = parameters['searchCriteria[filterGroups][][filters][][conditionType]'];
        }

        if (parameters['searchCriteria[sortOrders][][field]'] !== undefined) {
            queryParameters['searchCriteria[sortOrders][][field]'] = parameters['searchCriteria[sortOrders][][field]'];
        }

        if (parameters['searchCriteria[sortOrders][][direction]'] !== undefined) {
            queryParameters['searchCriteria[sortOrders][][direction]'] = parameters['searchCriteria[sortOrders][][direction]'];
        }

        if (parameters['searchCriteria[pageSize]'] !== undefined) {
            queryParameters['searchCriteria[pageSize]'] = parameters['searchCriteria[pageSize]'];
        }

        if (parameters['searchCriteria[currentPage]'] !== undefined) {
            queryParameters['searchCriteria[currentPage]'] = parameters['searchCriteria[currentPage]'];
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'GET',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * Retrieve list of attribute options
     * @method
     * @name magento#catalogCategoryAttributeOptionManagementV1GetItemsGet
     * @param {string} attributeCode - 
     *
     */
    magento.prototype.catalogCategoryAttributeOptionManagementV1GetItemsGet = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/categories/attributes/{attributeCode}/options';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        path = path.replace('{attributeCode}', parameters['attributeCode']);

        if (parameters['attributeCode'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: attributeCode'));
            return deferred.promise;
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'GET',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * Retrieve available product types
     * @method
     * @name magento#catalogProductTypeListV1GetProductTypesGet
     *
     */
    magento.prototype.catalogProductTypeListV1GetProductTypesGet = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/products/types';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'GET',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * Retrieve list of Attribute Sets
     * @method
     * @name magento#catalogAttributeSetRepositoryV1GetListGet
     * @param {string} searchCriteria[filterGroups][][filters][][field] - Field
     * @param {string} searchCriteria[filterGroups][][filters][][value] - Value
     * @param {string} searchCriteria[filterGroups][][filters][][conditionType] - Condition type
     * @param {string} searchCriteria[sortOrders][][field] - Sorting field.
     * @param {string} searchCriteria[sortOrders][][direction] - Sorting direction.
     * @param {integer} searchCriteria[pageSize] - Page size.
     * @param {integer} searchCriteria[currentPage] - Current page.
     *
     */
    magento.prototype.catalogAttributeSetRepositoryV1GetListGet = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/products/attribute-sets/sets/list';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        if (parameters['searchCriteria[filterGroups][][filters][][field]'] !== undefined) {
            queryParameters['searchCriteria[filterGroups][][filters][][field]'] = parameters['searchCriteria[filterGroups][][filters][][field]'];
        }

        if (parameters['searchCriteria[filterGroups][][filters][][value]'] !== undefined) {
            queryParameters['searchCriteria[filterGroups][][filters][][value]'] = parameters['searchCriteria[filterGroups][][filters][][value]'];
        }

        if (parameters['searchCriteria[filterGroups][][filters][][conditionType]'] !== undefined) {
            queryParameters['searchCriteria[filterGroups][][filters][][conditionType]'] = parameters['searchCriteria[filterGroups][][filters][][conditionType]'];
        }

        if (parameters['searchCriteria[sortOrders][][field]'] !== undefined) {
            queryParameters['searchCriteria[sortOrders][][field]'] = parameters['searchCriteria[sortOrders][][field]'];
        }

        if (parameters['searchCriteria[sortOrders][][direction]'] !== undefined) {
            queryParameters['searchCriteria[sortOrders][][direction]'] = parameters['searchCriteria[sortOrders][][direction]'];
        }

        if (parameters['searchCriteria[pageSize]'] !== undefined) {
            queryParameters['searchCriteria[pageSize]'] = parameters['searchCriteria[pageSize]'];
        }

        if (parameters['searchCriteria[currentPage]'] !== undefined) {
            queryParameters['searchCriteria[currentPage]'] = parameters['searchCriteria[currentPage]'];
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'GET',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * Retrieve attribute set information based on given ID
     * @method
     * @name magento#catalogAttributeSetRepositoryV1GetGet
     * @param {integer} attributeSetId - 
     *
     */
    magento.prototype.catalogAttributeSetRepositoryV1GetGet = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/products/attribute-sets/{attributeSetId}';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        path = path.replace('{attributeSetId}', parameters['attributeSetId']);

        if (parameters['attributeSetId'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: attributeSetId'));
            return deferred.promise;
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'GET',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * Remove attribute set by given ID
     * @method
     * @name magento#catalogAttributeSetRepositoryV1DeleteByIdDelete
     * @param {integer} attributeSetId - 
     *
     */
    magento.prototype.catalogAttributeSetRepositoryV1DeleteByIdDelete = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/products/attribute-sets/{attributeSetId}';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        path = path.replace('{attributeSetId}', parameters['attributeSetId']);

        if (parameters['attributeSetId'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: attributeSetId'));
            return deferred.promise;
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'DELETE',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * Save attribute set data
     * @method
     * @name magento#catalogAttributeSetRepositoryV1SavePut
     * @param {string} attributeSetId - 
     * @param {} $body - 
     *
     */
    magento.prototype.catalogAttributeSetRepositoryV1SavePut = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/products/attribute-sets/{attributeSetId}';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        path = path.replace('{attributeSetId}', parameters['attributeSetId']);

        if (parameters['attributeSetId'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: attributeSetId'));
            return deferred.promise;
        }

        if (parameters['$body'] !== undefined) {
            body = parameters['$body'];
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'PUT',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * Create attribute set from data
     * @method
     * @name magento#catalogAttributeSetManagementV1CreatePost
     * @param {} $body - 
     *
     */
    magento.prototype.catalogAttributeSetManagementV1CreatePost = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/products/attribute-sets';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        if (parameters['$body'] !== undefined) {
            body = parameters['$body'];
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'POST',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * Retrieve related attributes based on given attribute set ID
     * @method
     * @name magento#catalogProductAttributeManagementV1GetAttributesGet
     * @param {string} attributeSetId - 
     *
     */
    magento.prototype.catalogProductAttributeManagementV1GetAttributesGet = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/products/attribute-sets/{attributeSetId}/attributes';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        path = path.replace('{attributeSetId}', parameters['attributeSetId']);

        if (parameters['attributeSetId'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: attributeSetId'));
            return deferred.promise;
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'GET',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * Assign attribute to attribute set
     * @method
     * @name magento#catalogProductAttributeManagementV1AssignPost
     * @param {} $body - 
     *
     */
    magento.prototype.catalogProductAttributeManagementV1AssignPost = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/products/attribute-sets/attributes';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        if (parameters['$body'] !== undefined) {
            body = parameters['$body'];
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'POST',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * Remove attribute from attribute set
     * @method
     * @name magento#catalogProductAttributeManagementV1UnassignDelete
     * @param {string} attributeSetId - 
     * @param {string} attributeCode - 
     *
     */
    magento.prototype.catalogProductAttributeManagementV1UnassignDelete = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/products/attribute-sets/{attributeSetId}/attributes/{attributeCode}';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        path = path.replace('{attributeSetId}', parameters['attributeSetId']);

        if (parameters['attributeSetId'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: attributeSetId'));
            return deferred.promise;
        }

        path = path.replace('{attributeCode}', parameters['attributeCode']);

        if (parameters['attributeCode'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: attributeCode'));
            return deferred.promise;
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'DELETE',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * Retrieve list of attribute groups
     * @method
     * @name magento#catalogProductAttributeGroupRepositoryV1GetListGet
     * @param {string} searchCriteria[filterGroups][][filters][][field] - Field
     * @param {string} searchCriteria[filterGroups][][filters][][value] - Value
     * @param {string} searchCriteria[filterGroups][][filters][][conditionType] - Condition type
     * @param {string} searchCriteria[sortOrders][][field] - Sorting field.
     * @param {string} searchCriteria[sortOrders][][direction] - Sorting direction.
     * @param {integer} searchCriteria[pageSize] - Page size.
     * @param {integer} searchCriteria[currentPage] - Current page.
     *
     */
    magento.prototype.catalogProductAttributeGroupRepositoryV1GetListGet = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/products/attribute-sets/groups/list';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        if (parameters['searchCriteria[filterGroups][][filters][][field]'] !== undefined) {
            queryParameters['searchCriteria[filterGroups][][filters][][field]'] = parameters['searchCriteria[filterGroups][][filters][][field]'];
        }

        if (parameters['searchCriteria[filterGroups][][filters][][value]'] !== undefined) {
            queryParameters['searchCriteria[filterGroups][][filters][][value]'] = parameters['searchCriteria[filterGroups][][filters][][value]'];
        }

        if (parameters['searchCriteria[filterGroups][][filters][][conditionType]'] !== undefined) {
            queryParameters['searchCriteria[filterGroups][][filters][][conditionType]'] = parameters['searchCriteria[filterGroups][][filters][][conditionType]'];
        }

        if (parameters['searchCriteria[sortOrders][][field]'] !== undefined) {
            queryParameters['searchCriteria[sortOrders][][field]'] = parameters['searchCriteria[sortOrders][][field]'];
        }

        if (parameters['searchCriteria[sortOrders][][direction]'] !== undefined) {
            queryParameters['searchCriteria[sortOrders][][direction]'] = parameters['searchCriteria[sortOrders][][direction]'];
        }

        if (parameters['searchCriteria[pageSize]'] !== undefined) {
            queryParameters['searchCriteria[pageSize]'] = parameters['searchCriteria[pageSize]'];
        }

        if (parameters['searchCriteria[currentPage]'] !== undefined) {
            queryParameters['searchCriteria[currentPage]'] = parameters['searchCriteria[currentPage]'];
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'GET',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * Save attribute group
     * @method
     * @name magento#catalogProductAttributeGroupRepositoryV1SavePost
     * @param {} $body - 
     *
     */
    magento.prototype.catalogProductAttributeGroupRepositoryV1SavePost = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/products/attribute-sets/groups';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        if (parameters['$body'] !== undefined) {
            body = parameters['$body'];
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'POST',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * Save attribute group
     * @method
     * @name magento#catalogProductAttributeGroupRepositoryV1SavePut
     * @param {string} attributeSetId - 
     * @param {} $body - 
     *
     */
    magento.prototype.catalogProductAttributeGroupRepositoryV1SavePut = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/products/attribute-sets/{attributeSetId}/groups';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        path = path.replace('{attributeSetId}', parameters['attributeSetId']);

        if (parameters['attributeSetId'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: attributeSetId'));
            return deferred.promise;
        }

        if (parameters['$body'] !== undefined) {
            body = parameters['$body'];
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'PUT',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * Remove attribute group by id
     * @method
     * @name magento#catalogProductAttributeGroupRepositoryV1DeleteByIdDelete
     * @param {integer} groupId - 
     *
     */
    magento.prototype.catalogProductAttributeGroupRepositoryV1DeleteByIdDelete = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/products/attribute-sets/groups/{groupId}';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        path = path.replace('{groupId}', parameters['groupId']);

        if (parameters['groupId'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: groupId'));
            return deferred.promise;
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'DELETE',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * Retrieve list of attribute options
     * @method
     * @name magento#catalogProductAttributeOptionManagementV1GetItemsGet
     * @param {string} attributeCode - 
     *
     */
    magento.prototype.catalogProductAttributeOptionManagementV1GetItemsGet = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/products/attributes/{attributeCode}/options';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        path = path.replace('{attributeCode}', parameters['attributeCode']);

        if (parameters['attributeCode'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: attributeCode'));
            return deferred.promise;
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'GET',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * Add option to attribute
     * @method
     * @name magento#catalogProductAttributeOptionManagementV1AddPost
     * @param {string} attributeCode - 
     * @param {} $body - 
     *
     */
    magento.prototype.catalogProductAttributeOptionManagementV1AddPost = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/products/attributes/{attributeCode}/options';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        path = path.replace('{attributeCode}', parameters['attributeCode']);

        if (parameters['attributeCode'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: attributeCode'));
            return deferred.promise;
        }

        if (parameters['$body'] !== undefined) {
            body = parameters['$body'];
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'POST',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * Delete option from attribute
     * @method
     * @name magento#catalogProductAttributeOptionManagementV1DeleteDelete
     * @param {string} attributeCode - 
     * @param {string} optionId - 
     *
     */
    magento.prototype.catalogProductAttributeOptionManagementV1DeleteDelete = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/products/attributes/{attributeCode}/options/{optionId}';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        path = path.replace('{attributeCode}', parameters['attributeCode']);

        if (parameters['attributeCode'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: attributeCode'));
            return deferred.promise;
        }

        path = path.replace('{optionId}', parameters['optionId']);

        if (parameters['optionId'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: optionId'));
            return deferred.promise;
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'DELETE',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * Retrieve the list of media attributes (fronted input type is media_image) assigned to the given attribute set.
     * @method
     * @name magento#catalogProductMediaAttributeManagementV1GetListGet
     * @param {string} attributeSetName - 
     *
     */
    magento.prototype.catalogProductMediaAttributeManagementV1GetListGet = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/products/media/types/{attributeSetName}';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        path = path.replace('{attributeSetName}', parameters['attributeSetName']);

        if (parameters['attributeSetName'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: attributeSetName'));
            return deferred.promise;
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'GET',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * Return information about gallery entry
     * @method
     * @name magento#catalogProductAttributeMediaGalleryManagementV1GetGet
     * @param {string} sku - 
     * @param {integer} entryId - 
     *
     */
    magento.prototype.catalogProductAttributeMediaGalleryManagementV1GetGet = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/products/{sku}/media/{entryId}';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        path = path.replace('{sku}', parameters['sku']);

        if (parameters['sku'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: sku'));
            return deferred.promise;
        }

        path = path.replace('{entryId}', parameters['entryId']);

        if (parameters['entryId'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: entryId'));
            return deferred.promise;
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'GET',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * Update gallery entry
     * @method
     * @name magento#catalogProductAttributeMediaGalleryManagementV1UpdatePut
     * @param {string} sku - 
     * @param {string} entryId - 
     * @param {} $body - 
     *
     */
    magento.prototype.catalogProductAttributeMediaGalleryManagementV1UpdatePut = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/products/{sku}/media/{entryId}';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        path = path.replace('{sku}', parameters['sku']);

        if (parameters['sku'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: sku'));
            return deferred.promise;
        }

        path = path.replace('{entryId}', parameters['entryId']);

        if (parameters['entryId'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: entryId'));
            return deferred.promise;
        }

        if (parameters['$body'] !== undefined) {
            body = parameters['$body'];
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'PUT',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * Remove gallery entry
     * @method
     * @name magento#catalogProductAttributeMediaGalleryManagementV1RemoveDelete
     * @param {string} sku - 
     * @param {integer} entryId - 
     *
     */
    magento.prototype.catalogProductAttributeMediaGalleryManagementV1RemoveDelete = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/products/{sku}/media/{entryId}';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        path = path.replace('{sku}', parameters['sku']);

        if (parameters['sku'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: sku'));
            return deferred.promise;
        }

        path = path.replace('{entryId}', parameters['entryId']);

        if (parameters['entryId'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: entryId'));
            return deferred.promise;
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'DELETE',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * Create new gallery entry
     * @method
     * @name magento#catalogProductAttributeMediaGalleryManagementV1CreatePost
     * @param {string} sku - 
     * @param {} $body - 
     *
     */
    magento.prototype.catalogProductAttributeMediaGalleryManagementV1CreatePost = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/products/{sku}/media';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        path = path.replace('{sku}', parameters['sku']);

        if (parameters['sku'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: sku'));
            return deferred.promise;
        }

        if (parameters['$body'] !== undefined) {
            body = parameters['$body'];
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'POST',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * Retrieve the list of gallery entries associated with given product
     * @method
     * @name magento#catalogProductAttributeMediaGalleryManagementV1GetListGet
     * @param {string} sku - 
     *
     */
    magento.prototype.catalogProductAttributeMediaGalleryManagementV1GetListGet = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/products/{sku}/media';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        path = path.replace('{sku}', parameters['sku']);

        if (parameters['sku'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: sku'));
            return deferred.promise;
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'GET',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * Retrieve list of product prices
     * @method
     * @name magento#catalogProductGroupPriceManagementV1GetListGet
     * @param {string} sku - 
     *
     */
    magento.prototype.catalogProductGroupPriceManagementV1GetListGet = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/products/{sku}/group-prices/';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        path = path.replace('{sku}', parameters['sku']);

        if (parameters['sku'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: sku'));
            return deferred.promise;
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'GET',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * Set group price for product
     * @method
     * @name magento#catalogProductGroupPriceManagementV1AddPost
     * @param {string} sku - 
     * @param {integer} customerGroupId - 
     * @param {number} price - 
     *
     */
    magento.prototype.catalogProductGroupPriceManagementV1AddPost = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/products/{sku}/group-prices/{customerGroupId}/price/{price}';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        path = path.replace('{sku}', parameters['sku']);

        if (parameters['sku'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: sku'));
            return deferred.promise;
        }

        path = path.replace('{customerGroupId}', parameters['customerGroupId']);

        if (parameters['customerGroupId'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: customerGroupId'));
            return deferred.promise;
        }

        path = path.replace('{price}', parameters['price']);

        if (parameters['price'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: price'));
            return deferred.promise;
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'POST',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * Remove group price from product
     * @method
     * @name magento#catalogProductGroupPriceManagementV1RemoveDelete
     * @param {string} sku - 
     * @param {integer} customerGroupId - 
     *
     */
    magento.prototype.catalogProductGroupPriceManagementV1RemoveDelete = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/products/{sku}/group-prices/{customerGroupId}/';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        path = path.replace('{sku}', parameters['sku']);

        if (parameters['sku'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: sku'));
            return deferred.promise;
        }

        path = path.replace('{customerGroupId}', parameters['customerGroupId']);

        if (parameters['customerGroupId'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: customerGroupId'));
            return deferred.promise;
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'DELETE',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * Get tier price of product
     * @method
     * @name magento#catalogProductTierPriceManagementV1GetListGet
     * @param {string} sku - 
     * @param {string} customerGroupId - 'all' can be used to specify 'ALL GROUPS'
     *
     */
    magento.prototype.catalogProductTierPriceManagementV1GetListGet = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/products/{sku}/group-prices/{customerGroupId}/tiers';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        path = path.replace('{sku}', parameters['sku']);

        if (parameters['sku'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: sku'));
            return deferred.promise;
        }

        path = path.replace('{customerGroupId}', parameters['customerGroupId']);

        if (parameters['customerGroupId'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: customerGroupId'));
            return deferred.promise;
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'GET',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * Create tier price for product
     * @method
     * @name magento#catalogProductTierPriceManagementV1AddPost
     * @param {string} sku - 
     * @param {string} customerGroupId - 'all' can be used to specify 'ALL GROUPS'
     * @param {number} price - 
     * @param {number} qty - 
     *
     */
    magento.prototype.catalogProductTierPriceManagementV1AddPost = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/products/{sku}/group-prices/{customerGroupId}/tiers/{qty}/price/{price}';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        path = path.replace('{sku}', parameters['sku']);

        if (parameters['sku'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: sku'));
            return deferred.promise;
        }

        path = path.replace('{customerGroupId}', parameters['customerGroupId']);

        if (parameters['customerGroupId'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: customerGroupId'));
            return deferred.promise;
        }

        path = path.replace('{price}', parameters['price']);

        if (parameters['price'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: price'));
            return deferred.promise;
        }

        path = path.replace('{qty}', parameters['qty']);

        if (parameters['qty'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: qty'));
            return deferred.promise;
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'POST',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * Remove tier price from product
     * @method
     * @name magento#catalogProductTierPriceManagementV1RemoveDelete
     * @param {string} sku - 
     * @param {string} customerGroupId - 'all' can be used to specify 'ALL GROUPS'
     * @param {number} qty - 
     *
     */
    magento.prototype.catalogProductTierPriceManagementV1RemoveDelete = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/products/{sku}/group-prices/{customerGroupId}/tiers/{qty}';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        path = path.replace('{sku}', parameters['sku']);

        if (parameters['sku'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: sku'));
            return deferred.promise;
        }

        path = path.replace('{customerGroupId}', parameters['customerGroupId']);

        if (parameters['customerGroupId'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: customerGroupId'));
            return deferred.promise;
        }

        path = path.replace('{qty}', parameters['qty']);

        if (parameters['qty'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: qty'));
            return deferred.promise;
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'DELETE',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * Delete category by identifier
     * @method
     * @name magento#catalogCategoryRepositoryV1DeleteByIdentifierDelete
     * @param {integer} categoryId - 
     *
     */
    magento.prototype.catalogCategoryRepositoryV1DeleteByIdentifierDelete = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/categories/{categoryId}';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        path = path.replace('{categoryId}', parameters['categoryId']);

        if (parameters['categoryId'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: categoryId'));
            return deferred.promise;
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'DELETE',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * Get info about category by category id
     * @method
     * @name magento#catalogCategoryRepositoryV1GetGet
     * @param {integer} categoryId - 
     * @param {integer} storeId - 
     *
     */
    magento.prototype.catalogCategoryRepositoryV1GetGet = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/categories/{categoryId}';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        path = path.replace('{categoryId}', parameters['categoryId']);

        if (parameters['categoryId'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: categoryId'));
            return deferred.promise;
        }

        if (parameters['storeId'] !== undefined) {
            queryParameters['storeId'] = parameters['storeId'];
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'GET',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * Create category service
     * @method
     * @name magento#catalogCategoryRepositoryV1SavePost
     * @param {} $body - 
     *
     */
    magento.prototype.catalogCategoryRepositoryV1SavePost = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/categories';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        if (parameters['$body'] !== undefined) {
            body = parameters['$body'];
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'POST',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * Retrieve list of categories
     * @method
     * @name magento#catalogCategoryManagementV1GetTreeGet
     * @param {integer} rootCategoryId - 
     * @param {integer} depth - 
     *
     */
    magento.prototype.catalogCategoryManagementV1GetTreeGet = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/categories';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        if (parameters['rootCategoryId'] !== undefined) {
            queryParameters['rootCategoryId'] = parameters['rootCategoryId'];
        }

        if (parameters['depth'] !== undefined) {
            queryParameters['depth'] = parameters['depth'];
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'GET',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * Create category service
     * @method
     * @name magento#catalogCategoryRepositoryV1SavePut
     * @param {string} id - 
     * @param {} $body - 
     *
     */
    magento.prototype.catalogCategoryRepositoryV1SavePut = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/categories/{id}';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        path = path.replace('{id}', parameters['id']);

        if (parameters['id'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: id'));
            return deferred.promise;
        }

        if (parameters['$body'] !== undefined) {
            body = parameters['$body'];
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'PUT',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * Move category
     * @method
     * @name magento#catalogCategoryManagementV1MovePut
     * @param {integer} categoryId - 
     * @param {} $body - 
     *
     */
    magento.prototype.catalogCategoryManagementV1MovePut = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/categories/{categoryId}/move';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        path = path.replace('{categoryId}', parameters['categoryId']);

        if (parameters['categoryId'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: categoryId'));
            return deferred.promise;
        }

        if (parameters['$body'] !== undefined) {
            body = parameters['$body'];
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'PUT',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * Get custom option types
     * @method
     * @name magento#catalogProductCustomOptionTypeListV1GetItemsGet
     *
     */
    magento.prototype.catalogProductCustomOptionTypeListV1GetItemsGet = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/products/options/types';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'GET',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * Get the list of custom options for a specific product
     * @method
     * @name magento#catalogProductCustomOptionRepositoryV1GetListGet
     * @param {string} sku - 
     *
     */
    magento.prototype.catalogProductCustomOptionRepositoryV1GetListGet = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/products/{sku}/options';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        path = path.replace('{sku}', parameters['sku']);

        if (parameters['sku'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: sku'));
            return deferred.promise;
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'GET',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * Get custom option for a specific product
     * @method
     * @name magento#catalogProductCustomOptionRepositoryV1GetGet
     * @param {string} sku - 
     * @param {integer} optionId - 
     *
     */
    magento.prototype.catalogProductCustomOptionRepositoryV1GetGet = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/products/{sku}/options/{optionId}';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        path = path.replace('{sku}', parameters['sku']);

        if (parameters['sku'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: sku'));
            return deferred.promise;
        }

        path = path.replace('{optionId}', parameters['optionId']);

        if (parameters['optionId'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: optionId'));
            return deferred.promise;
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'GET',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * 
     * @method
     * @name magento#catalogProductCustomOptionRepositoryV1DeleteByIdentifierDelete
     * @param {string} sku - 
     * @param {integer} optionId - 
     *
     */
    magento.prototype.catalogProductCustomOptionRepositoryV1DeleteByIdentifierDelete = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/products/{sku}/options/{optionId}';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        path = path.replace('{sku}', parameters['sku']);

        if (parameters['sku'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: sku'));
            return deferred.promise;
        }

        path = path.replace('{optionId}', parameters['optionId']);

        if (parameters['optionId'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: optionId'));
            return deferred.promise;
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'DELETE',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * Save custom option
     * @method
     * @name magento#catalogProductCustomOptionRepositoryV1SavePost
     * @param {} $body - 
     *
     */
    magento.prototype.catalogProductCustomOptionRepositoryV1SavePost = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/products/options';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        if (parameters['$body'] !== undefined) {
            body = parameters['$body'];
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'POST',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * Save custom option
     * @method
     * @name magento#catalogProductCustomOptionRepositoryV1SavePut
     * @param {string} optionId - 
     * @param {} $body - 
     *
     */
    magento.prototype.catalogProductCustomOptionRepositoryV1SavePut = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/products/options/{optionId}';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        path = path.replace('{optionId}', parameters['optionId']);

        if (parameters['optionId'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: optionId'));
            return deferred.promise;
        }

        if (parameters['$body'] !== undefined) {
            body = parameters['$body'];
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'PUT',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * Retrieve information about available product link types
     * @method
     * @name magento#catalogProductLinkTypeListV1GetItemsGet
     *
     */
    magento.prototype.catalogProductLinkTypeListV1GetItemsGet = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/products/links/types';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'GET',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * Provide a list of the product link type attributes
     * @method
     * @name magento#catalogProductLinkTypeListV1GetItemAttributesGet
     * @param {string} type - 
     *
     */
    magento.prototype.catalogProductLinkTypeListV1GetItemAttributesGet = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/products/links/{type}/attributes';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        path = path.replace('{type}', parameters['type']);

        if (parameters['type'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: type'));
            return deferred.promise;
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'GET',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * Provide the list of links for a specific product
     * @method
     * @name magento#catalogProductLinkManagementV1GetLinkedItemsByTypeGet
     * @param {string} sku - 
     * @param {string} type - 
     *
     */
    magento.prototype.catalogProductLinkManagementV1GetLinkedItemsByTypeGet = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/products/{sku}/links/{type}';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        path = path.replace('{sku}', parameters['sku']);

        if (parameters['sku'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: sku'));
            return deferred.promise;
        }

        path = path.replace('{type}', parameters['type']);

        if (parameters['type'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: type'));
            return deferred.promise;
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'GET',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * Assign a product link to another product
     * @method
     * @name magento#catalogProductLinkManagementV1SetProductLinksPost
     * @param {string} sku - 
     * @param {} $body - 
     *
     */
    magento.prototype.catalogProductLinkManagementV1SetProductLinksPost = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/products/{sku}/links';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        path = path.replace('{sku}', parameters['sku']);

        if (parameters['sku'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: sku'));
            return deferred.promise;
        }

        if (parameters['$body'] !== undefined) {
            body = parameters['$body'];
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'POST',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * Save product link
     * @method
     * @name magento#catalogProductLinkRepositoryV1SavePut
     * @param {string} sku - 
     * @param {} $body - 
     *
     */
    magento.prototype.catalogProductLinkRepositoryV1SavePut = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/products/{sku}/links';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        path = path.replace('{sku}', parameters['sku']);

        if (parameters['sku'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: sku'));
            return deferred.promise;
        }

        if (parameters['$body'] !== undefined) {
            body = parameters['$body'];
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'PUT',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * 
     * @method
     * @name magento#catalogProductLinkRepositoryV1DeleteByIdDelete
     * @param {string} sku - 
     * @param {string} type - 
     * @param {string} linkedProductSku - 
     *
     */
    magento.prototype.catalogProductLinkRepositoryV1DeleteByIdDelete = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/products/{sku}/links/{type}/{linkedProductSku}';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        path = path.replace('{sku}', parameters['sku']);

        if (parameters['sku'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: sku'));
            return deferred.promise;
        }

        path = path.replace('{type}', parameters['type']);

        if (parameters['type'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: type'));
            return deferred.promise;
        }

        path = path.replace('{linkedProductSku}', parameters['linkedProductSku']);

        if (parameters['linkedProductSku'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: linkedProductSku'));
            return deferred.promise;
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'DELETE',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * Get products assigned to category
     * @method
     * @name magento#catalogCategoryLinkManagementV1GetAssignedProductsGet
     * @param {integer} categoryId - 
     *
     */
    magento.prototype.catalogCategoryLinkManagementV1GetAssignedProductsGet = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/categories/{categoryId}/products';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        path = path.replace('{categoryId}', parameters['categoryId']);

        if (parameters['categoryId'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: categoryId'));
            return deferred.promise;
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'GET',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * Assign a product to the required category
     * @method
     * @name magento#catalogCategoryLinkRepositoryV1SavePost
     * @param {string} categoryId - 
     * @param {} $body - 
     *
     */
    magento.prototype.catalogCategoryLinkRepositoryV1SavePost = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/categories/{categoryId}/products';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        path = path.replace('{categoryId}', parameters['categoryId']);

        if (parameters['categoryId'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: categoryId'));
            return deferred.promise;
        }

        if (parameters['$body'] !== undefined) {
            body = parameters['$body'];
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'POST',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * Assign a product to the required category
     * @method
     * @name magento#catalogCategoryLinkRepositoryV1SavePut
     * @param {string} categoryId - 
     * @param {} $body - 
     *
     */
    magento.prototype.catalogCategoryLinkRepositoryV1SavePut = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/categories/{categoryId}/products';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        path = path.replace('{categoryId}', parameters['categoryId']);

        if (parameters['categoryId'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: categoryId'));
            return deferred.promise;
        }

        if (parameters['$body'] !== undefined) {
            body = parameters['$body'];
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'PUT',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * Remove the product assignment from the category by category id and sku
     * @method
     * @name magento#catalogCategoryLinkRepositoryV1DeleteByIdsDelete
     * @param {string} categoryId - 
     * @param {string} sku - 
     *
     */
    magento.prototype.catalogCategoryLinkRepositoryV1DeleteByIdsDelete = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/categories/{categoryId}/products/{sku}';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        path = path.replace('{categoryId}', parameters['categoryId']);

        if (parameters['categoryId'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: categoryId'));
            return deferred.promise;
        }

        path = path.replace('{sku}', parameters['sku']);

        if (parameters['sku'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: sku'));
            return deferred.promise;
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'DELETE',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * Make Full Text Search and return found Documents
     * @method
     * @name magento#searchV1SearchGet
     * @param {string} searchCriteria[requestName] - 
     * @param {string} searchCriteria[filterGroups][][filters][][field] - Field
     * @param {string} searchCriteria[filterGroups][][filters][][value] - Value
     * @param {string} searchCriteria[filterGroups][][filters][][conditionType] - Condition type
     * @param {string} searchCriteria[sortOrders][][field] - Sorting field.
     * @param {string} searchCriteria[sortOrders][][direction] - Sorting direction.
     * @param {integer} searchCriteria[pageSize] - Page size.
     * @param {integer} searchCriteria[currentPage] - Current page.
     *
     */
    magento.prototype.searchV1SearchGet = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/search';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        if (parameters['searchCriteria[requestName]'] !== undefined) {
            queryParameters['searchCriteria[requestName]'] = parameters['searchCriteria[requestName]'];
        }

        if (parameters['searchCriteria[filterGroups][][filters][][field]'] !== undefined) {
            queryParameters['searchCriteria[filterGroups][][filters][][field]'] = parameters['searchCriteria[filterGroups][][filters][][field]'];
        }

        if (parameters['searchCriteria[filterGroups][][filters][][value]'] !== undefined) {
            queryParameters['searchCriteria[filterGroups][][filters][][value]'] = parameters['searchCriteria[filterGroups][][filters][][value]'];
        }

        if (parameters['searchCriteria[filterGroups][][filters][][conditionType]'] !== undefined) {
            queryParameters['searchCriteria[filterGroups][][filters][][conditionType]'] = parameters['searchCriteria[filterGroups][][filters][][conditionType]'];
        }

        if (parameters['searchCriteria[sortOrders][][field]'] !== undefined) {
            queryParameters['searchCriteria[sortOrders][][field]'] = parameters['searchCriteria[sortOrders][][field]'];
        }

        if (parameters['searchCriteria[sortOrders][][direction]'] !== undefined) {
            queryParameters['searchCriteria[sortOrders][][direction]'] = parameters['searchCriteria[sortOrders][][direction]'];
        }

        if (parameters['searchCriteria[pageSize]'] !== undefined) {
            queryParameters['searchCriteria[pageSize]'] = parameters['searchCriteria[pageSize]'];
        }

        if (parameters['searchCriteria[currentPage]'] !== undefined) {
            queryParameters['searchCriteria[currentPage]'] = parameters['searchCriteria[currentPage]'];
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'GET',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * Enables an administrative user to return information for a specified cart.
     * @method
     * @name magento#quoteCartRepositoryV1GetGet
     * @param {integer} cartId - 
     *
     */
    magento.prototype.quoteCartRepositoryV1GetGet = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/carts/{cartId}';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        path = path.replace('{cartId}', parameters['cartId']);

        if (parameters['cartId'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: cartId'));
            return deferred.promise;
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'GET',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * Assigns a specified customer to a specified shopping cart.
     * @method
     * @name magento#quoteCartManagementV1AssignCustomerPut
     * @param {integer} cartId - The cart ID.
     * @param {} $body - 
     *
     */
    magento.prototype.quoteCartManagementV1AssignCustomerPut = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/carts/{cartId}';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        path = path.replace('{cartId}', parameters['cartId']);

        if (parameters['cartId'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: cartId'));
            return deferred.promise;
        }

        if (parameters['$body'] !== undefined) {
            body = parameters['$body'];
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'PUT',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * Enables administrative users to list carts that match specified search criteria.
     * @method
     * @name magento#quoteCartRepositoryV1GetListGet
     * @param {string} searchCriteria[filterGroups][][filters][][field] - Field
     * @param {string} searchCriteria[filterGroups][][filters][][value] - Value
     * @param {string} searchCriteria[filterGroups][][filters][][conditionType] - Condition type
     * @param {string} searchCriteria[sortOrders][][field] - Sorting field.
     * @param {string} searchCriteria[sortOrders][][direction] - Sorting direction.
     * @param {integer} searchCriteria[pageSize] - Page size.
     * @param {integer} searchCriteria[currentPage] - Current page.
     *
     */
    magento.prototype.quoteCartRepositoryV1GetListGet = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/carts';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        if (parameters['searchCriteria[filterGroups][][filters][][field]'] !== undefined) {
            queryParameters['searchCriteria[filterGroups][][filters][][field]'] = parameters['searchCriteria[filterGroups][][filters][][field]'];
        }

        if (parameters['searchCriteria[filterGroups][][filters][][value]'] !== undefined) {
            queryParameters['searchCriteria[filterGroups][][filters][][value]'] = parameters['searchCriteria[filterGroups][][filters][][value]'];
        }

        if (parameters['searchCriteria[filterGroups][][filters][][conditionType]'] !== undefined) {
            queryParameters['searchCriteria[filterGroups][][filters][][conditionType]'] = parameters['searchCriteria[filterGroups][][filters][][conditionType]'];
        }

        if (parameters['searchCriteria[sortOrders][][field]'] !== undefined) {
            queryParameters['searchCriteria[sortOrders][][field]'] = parameters['searchCriteria[sortOrders][][field]'];
        }

        if (parameters['searchCriteria[sortOrders][][direction]'] !== undefined) {
            queryParameters['searchCriteria[sortOrders][][direction]'] = parameters['searchCriteria[sortOrders][][direction]'];
        }

        if (parameters['searchCriteria[pageSize]'] !== undefined) {
            queryParameters['searchCriteria[pageSize]'] = parameters['searchCriteria[pageSize]'];
        }

        if (parameters['searchCriteria[currentPage]'] !== undefined) {
            queryParameters['searchCriteria[currentPage]'] = parameters['searchCriteria[currentPage]'];
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'GET',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * Creates an empty cart and quote for a guest.
     * @method
     * @name magento#quoteCartManagementV1CreateEmptyCartPost
     *
     */
    magento.prototype.quoteCartManagementV1CreateEmptyCartPost = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/carts/';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'POST',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * Creates an empty cart and quote for a specified customer.
     * @method
     * @name magento#quoteCartManagementV1CreateEmptyCartForCustomerPost
     * @param {integer} customerId - The customer ID.
     *
     */
    magento.prototype.quoteCartManagementV1CreateEmptyCartForCustomerPost = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/customers/{customerId}/carts';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        path = path.replace('{customerId}', parameters['customerId']);

        if (parameters['customerId'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: customerId'));
            return deferred.promise;
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'POST',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * Creates an empty cart and quote for a specified customer.
     * @method
     * @name magento#quoteCartManagementV1CreateEmptyCartForCustomerPost
     *
     */
    magento.prototype.quoteCartManagementV1CreateEmptyCartForCustomerPost = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/carts/mine';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'POST',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * Returns information for the cart for a specified customer.
     * @method
     * @name magento#quoteCartManagementV1GetCartForCustomerGet
     *
     */
    magento.prototype.quoteCartManagementV1GetCartForCustomerGet = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/carts/mine';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'GET',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * Places an order for a specified cart.
     * @method
     * @name magento#quoteCartManagementV1PlaceOrderPut
     * @param {} $body - 
     *
     */
    magento.prototype.quoteCartManagementV1PlaceOrderPut = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/carts/mine/order';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        if (parameters['$body'] !== undefined) {
            body = parameters['$body'];
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'PUT',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * Places an order for a specified cart.
     * @method
     * @name magento#quoteCartManagementV1PlaceOrderPut
     * @param {integer} cartId - The cart ID.
     * @param {} $body - 
     *
     */
    magento.prototype.quoteCartManagementV1PlaceOrderPut = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/carts/{cartId}/order';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        path = path.replace('{cartId}', parameters['cartId']);

        if (parameters['cartId'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: cartId'));
            return deferred.promise;
        }

        if (parameters['$body'] !== undefined) {
            body = parameters['$body'];
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'PUT',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * Enable a guest user to return information for a specified cart.
     * @method
     * @name magento#quoteGuestCartRepositoryV1GetGet
     * @param {string} cartId - 
     *
     */
    magento.prototype.quoteGuestCartRepositoryV1GetGet = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/guest-carts/{cartId}';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        path = path.replace('{cartId}', parameters['cartId']);

        if (parameters['cartId'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: cartId'));
            return deferred.promise;
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'GET',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * Assign a specified customer to a specified shopping cart.
     * @method
     * @name magento#quoteGuestCartManagementV1AssignCustomerPut
     * @param {string} cartId - The cart ID.
     * @param {} $body - 
     *
     */
    magento.prototype.quoteGuestCartManagementV1AssignCustomerPut = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/guest-carts/{cartId}';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        path = path.replace('{cartId}', parameters['cartId']);

        if (parameters['cartId'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: cartId'));
            return deferred.promise;
        }

        if (parameters['$body'] !== undefined) {
            body = parameters['$body'];
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'PUT',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * Enable an customer or guest user to create an empty cart and quote for an anonymous customer.
     * @method
     * @name magento#quoteGuestCartManagementV1CreateEmptyCartPost
     *
     */
    magento.prototype.quoteGuestCartManagementV1CreateEmptyCartPost = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/guest-carts';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'POST',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * Place an order for a specified cart.
     * @method
     * @name magento#quoteGuestCartManagementV1PlaceOrderPut
     * @param {string} cartId - The cart ID.
     * @param {} $body - 
     *
     */
    magento.prototype.quoteGuestCartManagementV1PlaceOrderPut = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/guest-carts/{cartId}/order';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        path = path.replace('{cartId}', parameters['cartId']);

        if (parameters['cartId'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: cartId'));
            return deferred.promise;
        }

        if (parameters['$body'] !== undefined) {
            body = parameters['$body'];
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'PUT',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * Sets the carrier and shipping methods codes for a specified cart.
     * @method
     * @name magento#quoteShippingMethodManagementV1SetPut
     * @param {integer} cartId - The shopping cart ID.
     * @param {} $body - 
     *
     */
    magento.prototype.quoteShippingMethodManagementV1SetPut = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/carts/{cartId}/selected-shipping-method';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        path = path.replace('{cartId}', parameters['cartId']);

        if (parameters['cartId'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: cartId'));
            return deferred.promise;
        }

        if (parameters['$body'] !== undefined) {
            body = parameters['$body'];
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'PUT',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * Returns selected shipping method for a specified quote.
     * @method
     * @name magento#quoteShippingMethodManagementV1GetGet
     * @param {integer} cartId - The shopping cart ID.
     *
     */
    magento.prototype.quoteShippingMethodManagementV1GetGet = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/carts/{cartId}/selected-shipping-method';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        path = path.replace('{cartId}', parameters['cartId']);

        if (parameters['cartId'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: cartId'));
            return deferred.promise;
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'GET',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * Lists applicable shipping methods for a specified quote.
     * @method
     * @name magento#quoteShippingMethodManagementV1GetListGet
     * @param {integer} cartId - The shopping cart ID.
     *
     */
    magento.prototype.quoteShippingMethodManagementV1GetListGet = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/carts/{cartId}/shipping-methods';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        path = path.replace('{cartId}', parameters['cartId']);

        if (parameters['cartId'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: cartId'));
            return deferred.promise;
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'GET',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * Sets the carrier and shipping methods codes for a specified cart.
     * @method
     * @name magento#quoteShippingMethodManagementV1SetPut
     * @param {} $body - 
     *
     */
    magento.prototype.quoteShippingMethodManagementV1SetPut = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/carts/mine/selected-shipping-method';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        if (parameters['$body'] !== undefined) {
            body = parameters['$body'];
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'PUT',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * Returns selected shipping method for a specified quote.
     * @method
     * @name magento#quoteShippingMethodManagementV1GetGet
     *
     */
    magento.prototype.quoteShippingMethodManagementV1GetGet = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/carts/mine/selected-shipping-method';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'GET',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * Lists applicable shipping methods for a specified quote.
     * @method
     * @name magento#quoteShippingMethodManagementV1GetListGet
     *
     */
    magento.prototype.quoteShippingMethodManagementV1GetListGet = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/carts/mine/shipping-methods';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'GET',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * Estimate shipping
     * @method
     * @name magento#quoteShippingMethodManagementV1EstimateByAddressPost
     * @param {} $body - 
     *
     */
    magento.prototype.quoteShippingMethodManagementV1EstimateByAddressPost = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/carts/mine/estimate-shipping-methods';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        if (parameters['$body'] !== undefined) {
            body = parameters['$body'];
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'POST',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * Estimate shipping
     * @method
     * @name magento#quoteShippingMethodManagementV1EstimateByAddressIdPost
     * @param {} $body - 
     *
     */
    magento.prototype.quoteShippingMethodManagementV1EstimateByAddressIdPost = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/carts/mine/estimate-shipping-methods-by-address-id';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        if (parameters['$body'] !== undefined) {
            body = parameters['$body'];
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'POST',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * Set the carrier and shipping methods codes for a specified cart.
     * @method
     * @name magento#quoteGuestShippingMethodManagementV1SetPut
     * @param {string} cartId - The shopping cart ID.
     * @param {} $body - 
     *
     */
    magento.prototype.quoteGuestShippingMethodManagementV1SetPut = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/guest-carts/{cartId}/selected-shipping-method';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        path = path.replace('{cartId}', parameters['cartId']);

        if (parameters['cartId'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: cartId'));
            return deferred.promise;
        }

        if (parameters['$body'] !== undefined) {
            body = parameters['$body'];
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'PUT',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * Return selected shipping method for a specified quote.
     * @method
     * @name magento#quoteGuestShippingMethodManagementV1GetGet
     * @param {string} cartId - The shopping cart ID.
     *
     */
    magento.prototype.quoteGuestShippingMethodManagementV1GetGet = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/guest-carts/{cartId}/selected-shipping-method';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        path = path.replace('{cartId}', parameters['cartId']);

        if (parameters['cartId'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: cartId'));
            return deferred.promise;
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'GET',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * List applicable shipping methods for a specified quote.
     * @method
     * @name magento#quoteGuestShippingMethodManagementV1GetListGet
     * @param {string} cartId - The shopping cart ID.
     *
     */
    magento.prototype.quoteGuestShippingMethodManagementV1GetListGet = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/guest-carts/{cartId}/shipping-methods';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        path = path.replace('{cartId}', parameters['cartId']);

        if (parameters['cartId'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: cartId'));
            return deferred.promise;
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'GET',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * Estimate shipping
     * @method
     * @name magento#quoteGuestShippingMethodManagementV1EstimateByAddressPost
     * @param {string} cartId - The shopping cart ID.
     * @param {} $body - 
     *
     */
    magento.prototype.quoteGuestShippingMethodManagementV1EstimateByAddressPost = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/guest-carts/{cartId}/estimate-shipping-methods';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        path = path.replace('{cartId}', parameters['cartId']);

        if (parameters['cartId'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: cartId'));
            return deferred.promise;
        }

        if (parameters['$body'] !== undefined) {
            body = parameters['$body'];
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'POST',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * Lists items that are assigned to a specified cart.
     * @method
     * @name magento#quoteCartItemRepositoryV1GetListGet
     * @param {integer} cartId - The cart ID.
     *
     */
    magento.prototype.quoteCartItemRepositoryV1GetListGet = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/carts/{cartId}/items';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        path = path.replace('{cartId}', parameters['cartId']);

        if (parameters['cartId'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: cartId'));
            return deferred.promise;
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'GET',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * Adds the specified item to the specified cart.
     * @method
     * @name magento#quoteCartItemRepositoryV1SavePost
     * @param {} $body - 
     *
     */
    magento.prototype.quoteCartItemRepositoryV1SavePost = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/carts/items';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        if (parameters['$body'] !== undefined) {
            body = parameters['$body'];
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'POST',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * Adds the specified item to the specified cart.
     * @method
     * @name magento#quoteCartItemRepositoryV1SavePut
     * @param {string} itemId - 
     * @param {} $body - 
     *
     */
    magento.prototype.quoteCartItemRepositoryV1SavePut = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/carts/items/{itemId}';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        path = path.replace('{itemId}', parameters['itemId']);

        if (parameters['itemId'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: itemId'));
            return deferred.promise;
        }

        if (parameters['$body'] !== undefined) {
            body = parameters['$body'];
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'PUT',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * Removes the specified item from the specified cart.
     * @method
     * @name magento#quoteCartItemRepositoryV1DeleteByIdDelete
     * @param {integer} cartId - The cart ID.
     * @param {integer} itemId - The item ID of the item to be removed.
     *
     */
    magento.prototype.quoteCartItemRepositoryV1DeleteByIdDelete = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/carts/{cartId}/items/{itemId}';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        path = path.replace('{cartId}', parameters['cartId']);

        if (parameters['cartId'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: cartId'));
            return deferred.promise;
        }

        path = path.replace('{itemId}', parameters['itemId']);

        if (parameters['itemId'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: itemId'));
            return deferred.promise;
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'DELETE',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * Lists items that are assigned to a specified cart.
     * @method
     * @name magento#quoteCartItemRepositoryV1GetListGet
     *
     */
    magento.prototype.quoteCartItemRepositoryV1GetListGet = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/carts/mine/items';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'GET',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * Adds the specified item to the specified cart.
     * @method
     * @name magento#quoteCartItemRepositoryV1SavePost
     * @param {} $body - 
     *
     */
    magento.prototype.quoteCartItemRepositoryV1SavePost = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/carts/mine/items';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        if (parameters['$body'] !== undefined) {
            body = parameters['$body'];
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'POST',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * Adds the specified item to the specified cart.
     * @method
     * @name magento#quoteCartItemRepositoryV1SavePut
     * @param {string} itemId - 
     * @param {} $body - 
     *
     */
    magento.prototype.quoteCartItemRepositoryV1SavePut = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/carts/mine/items/{itemId}';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        path = path.replace('{itemId}', parameters['itemId']);

        if (parameters['itemId'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: itemId'));
            return deferred.promise;
        }

        if (parameters['$body'] !== undefined) {
            body = parameters['$body'];
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'PUT',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * Removes the specified item from the specified cart.
     * @method
     * @name magento#quoteCartItemRepositoryV1DeleteByIdDelete
     * @param {integer} itemId - The item ID of the item to be removed.
     *
     */
    magento.prototype.quoteCartItemRepositoryV1DeleteByIdDelete = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/carts/mine/items/{itemId}';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        path = path.replace('{itemId}', parameters['itemId']);

        if (parameters['itemId'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: itemId'));
            return deferred.promise;
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'DELETE',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * List items that are assigned to a specified cart.
     * @method
     * @name magento#quoteGuestCartItemRepositoryV1GetListGet
     * @param {string} cartId - The cart ID.
     *
     */
    magento.prototype.quoteGuestCartItemRepositoryV1GetListGet = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/guest-carts/{cartId}/items';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        path = path.replace('{cartId}', parameters['cartId']);

        if (parameters['cartId'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: cartId'));
            return deferred.promise;
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'GET',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * Add the specified item to the specified cart.
     * @method
     * @name magento#quoteGuestCartItemRepositoryV1SavePost
     * @param {} $body - 
     *
     */
    magento.prototype.quoteGuestCartItemRepositoryV1SavePost = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/guest-carts/items';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        if (parameters['$body'] !== undefined) {
            body = parameters['$body'];
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'POST',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * Add the specified item to the specified cart.
     * @method
     * @name magento#quoteGuestCartItemRepositoryV1SavePut
     * @param {string} itemId - 
     * @param {} $body - 
     *
     */
    magento.prototype.quoteGuestCartItemRepositoryV1SavePut = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/guest-carts/items/{itemId}';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        path = path.replace('{itemId}', parameters['itemId']);

        if (parameters['itemId'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: itemId'));
            return deferred.promise;
        }

        if (parameters['$body'] !== undefined) {
            body = parameters['$body'];
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'PUT',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * Remove the specified item from the specified cart.
     * @method
     * @name magento#quoteGuestCartItemRepositoryV1DeleteByIdDelete
     * @param {string} cartId - The cart ID.
     * @param {integer} itemId - The item ID of the item to be removed.
     *
     */
    magento.prototype.quoteGuestCartItemRepositoryV1DeleteByIdDelete = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/guest-carts/{cartId}/items/{itemId}';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        path = path.replace('{cartId}', parameters['cartId']);

        if (parameters['cartId'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: cartId'));
            return deferred.promise;
        }

        path = path.replace('{itemId}', parameters['itemId']);

        if (parameters['itemId'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: itemId'));
            return deferred.promise;
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'DELETE',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * Returns the payment method for a specified shopping cart.
     * @method
     * @name magento#quotePaymentMethodManagementV1GetGet
     * @param {integer} cartId - The cart ID.
     *
     */
    magento.prototype.quotePaymentMethodManagementV1GetGet = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/carts/{cartId}/selected-payment-method';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        path = path.replace('{cartId}', parameters['cartId']);

        if (parameters['cartId'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: cartId'));
            return deferred.promise;
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'GET',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * Adds a specified payment method to a specified shopping cart.
     * @method
     * @name magento#quotePaymentMethodManagementV1SetPut
     * @param {integer} cartId - The cart ID.
     * @param {} $body - 
     *
     */
    magento.prototype.quotePaymentMethodManagementV1SetPut = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/carts/{cartId}/selected-payment-method';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        path = path.replace('{cartId}', parameters['cartId']);

        if (parameters['cartId'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: cartId'));
            return deferred.promise;
        }

        if (parameters['$body'] !== undefined) {
            body = parameters['$body'];
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'PUT',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * Lists available payment methods for a specified shopping cart.
     * @method
     * @name magento#quotePaymentMethodManagementV1GetListGet
     * @param {integer} cartId - The cart ID.
     *
     */
    magento.prototype.quotePaymentMethodManagementV1GetListGet = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/carts/{cartId}/payment-methods';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        path = path.replace('{cartId}', parameters['cartId']);

        if (parameters['cartId'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: cartId'));
            return deferred.promise;
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'GET',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * Returns the payment method for a specified shopping cart.
     * @method
     * @name magento#quotePaymentMethodManagementV1GetGet
     *
     */
    magento.prototype.quotePaymentMethodManagementV1GetGet = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/carts/mine/selected-payment-method';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'GET',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * Adds a specified payment method to a specified shopping cart.
     * @method
     * @name magento#quotePaymentMethodManagementV1SetPut
     * @param {} $body - 
     *
     */
    magento.prototype.quotePaymentMethodManagementV1SetPut = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/carts/mine/selected-payment-method';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        if (parameters['$body'] !== undefined) {
            body = parameters['$body'];
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'PUT',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * Lists available payment methods for a specified shopping cart.
     * @method
     * @name magento#quotePaymentMethodManagementV1GetListGet
     *
     */
    magento.prototype.quotePaymentMethodManagementV1GetListGet = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/carts/mine/payment-methods';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'GET',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * Return the payment method for a specified shopping cart.
     * @method
     * @name magento#quoteGuestPaymentMethodManagementV1GetGet
     * @param {string} cartId - The cart ID.
     *
     */
    magento.prototype.quoteGuestPaymentMethodManagementV1GetGet = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/guest-carts/{cartId}/selected-payment-method';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        path = path.replace('{cartId}', parameters['cartId']);

        if (parameters['cartId'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: cartId'));
            return deferred.promise;
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'GET',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * Add a specified payment method to a specified shopping cart.
     * @method
     * @name magento#quoteGuestPaymentMethodManagementV1SetPut
     * @param {string} cartId - The cart ID.
     * @param {} $body - 
     *
     */
    magento.prototype.quoteGuestPaymentMethodManagementV1SetPut = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/guest-carts/{cartId}/selected-payment-method';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        path = path.replace('{cartId}', parameters['cartId']);

        if (parameters['cartId'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: cartId'));
            return deferred.promise;
        }

        if (parameters['$body'] !== undefined) {
            body = parameters['$body'];
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'PUT',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * List available payment methods for a specified shopping cart.
     * @method
     * @name magento#quoteGuestPaymentMethodManagementV1GetListGet
     * @param {string} cartId - The cart ID.
     *
     */
    magento.prototype.quoteGuestPaymentMethodManagementV1GetListGet = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/guest-carts/{cartId}/payment-methods';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        path = path.replace('{cartId}', parameters['cartId']);

        if (parameters['cartId'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: cartId'));
            return deferred.promise;
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'GET',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * Returns the billing address for a specified quote.
     * @method
     * @name magento#quoteBillingAddressManagementV1GetGet
     * @param {integer} cartId - The cart ID.
     *
     */
    magento.prototype.quoteBillingAddressManagementV1GetGet = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/carts/{cartId}/billing-address';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        path = path.replace('{cartId}', parameters['cartId']);

        if (parameters['cartId'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: cartId'));
            return deferred.promise;
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'GET',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * Assigns a specified billing address to a specified cart.
     * @method
     * @name magento#quoteBillingAddressManagementV1AssignPost
     * @param {integer} cartId - The cart ID.
     * @param {} $body - 
     *
     */
    magento.prototype.quoteBillingAddressManagementV1AssignPost = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/carts/{cartId}/billing-address';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        path = path.replace('{cartId}', parameters['cartId']);

        if (parameters['cartId'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: cartId'));
            return deferred.promise;
        }

        if (parameters['$body'] !== undefined) {
            body = parameters['$body'];
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'POST',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * Returns the billing address for a specified quote.
     * @method
     * @name magento#quoteBillingAddressManagementV1GetGet
     *
     */
    magento.prototype.quoteBillingAddressManagementV1GetGet = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/carts/mine/billing-address';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'GET',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * Assigns a specified billing address to a specified cart.
     * @method
     * @name magento#quoteBillingAddressManagementV1AssignPost
     * @param {} $body - 
     *
     */
    magento.prototype.quoteBillingAddressManagementV1AssignPost = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/carts/mine/billing-address';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        if (parameters['$body'] !== undefined) {
            body = parameters['$body'];
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'POST',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * Return the billing address for a specified quote.
     * @method
     * @name magento#quoteGuestBillingAddressManagementV1GetGet
     * @param {string} cartId - The cart ID.
     *
     */
    magento.prototype.quoteGuestBillingAddressManagementV1GetGet = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/guest-carts/{cartId}/billing-address';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        path = path.replace('{cartId}', parameters['cartId']);

        if (parameters['cartId'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: cartId'));
            return deferred.promise;
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'GET',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * Assign a specified billing address to a specified cart.
     * @method
     * @name magento#quoteGuestBillingAddressManagementV1AssignPost
     * @param {string} cartId - The cart ID.
     * @param {} $body - 
     *
     */
    magento.prototype.quoteGuestBillingAddressManagementV1AssignPost = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/guest-carts/{cartId}/billing-address';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        path = path.replace('{cartId}', parameters['cartId']);

        if (parameters['cartId'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: cartId'));
            return deferred.promise;
        }

        if (parameters['$body'] !== undefined) {
            body = parameters['$body'];
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'POST',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * Returns information for a coupon in a specified cart.
     * @method
     * @name magento#quoteCouponManagementV1GetGet
     * @param {integer} cartId - The cart ID.
     *
     */
    magento.prototype.quoteCouponManagementV1GetGet = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/carts/{cartId}/coupons';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        path = path.replace('{cartId}', parameters['cartId']);

        if (parameters['cartId'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: cartId'));
            return deferred.promise;
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'GET',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * Deletes a coupon from a specified cart.
     * @method
     * @name magento#quoteCouponManagementV1RemoveDelete
     * @param {integer} cartId - The cart ID.
     *
     */
    magento.prototype.quoteCouponManagementV1RemoveDelete = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/carts/{cartId}/coupons';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        path = path.replace('{cartId}', parameters['cartId']);

        if (parameters['cartId'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: cartId'));
            return deferred.promise;
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'DELETE',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * Adds a coupon by code to a specified cart.
     * @method
     * @name magento#quoteCouponManagementV1SetPut
     * @param {integer} cartId - The cart ID.
     * @param {string} couponCode - The coupon code data.
     *
     */
    magento.prototype.quoteCouponManagementV1SetPut = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/carts/{cartId}/coupons/{couponCode}';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        path = path.replace('{cartId}', parameters['cartId']);

        if (parameters['cartId'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: cartId'));
            return deferred.promise;
        }

        path = path.replace('{couponCode}', parameters['couponCode']);

        if (parameters['couponCode'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: couponCode'));
            return deferred.promise;
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'PUT',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * Returns information for a coupon in a specified cart.
     * @method
     * @name magento#quoteCouponManagementV1GetGet
     *
     */
    magento.prototype.quoteCouponManagementV1GetGet = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/carts/mine/coupons';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'GET',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * Deletes a coupon from a specified cart.
     * @method
     * @name magento#quoteCouponManagementV1RemoveDelete
     *
     */
    magento.prototype.quoteCouponManagementV1RemoveDelete = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/carts/mine/coupons';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'DELETE',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * Adds a coupon by code to a specified cart.
     * @method
     * @name magento#quoteCouponManagementV1SetPut
     * @param {string} couponCode - The coupon code data.
     *
     */
    magento.prototype.quoteCouponManagementV1SetPut = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/carts/mine/coupons/{couponCode}';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        path = path.replace('{couponCode}', parameters['couponCode']);

        if (parameters['couponCode'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: couponCode'));
            return deferred.promise;
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'PUT',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * Return information for a coupon in a specified cart.
     * @method
     * @name magento#quoteGuestCouponManagementV1GetGet
     * @param {string} cartId - The cart ID.
     *
     */
    magento.prototype.quoteGuestCouponManagementV1GetGet = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/guest-carts/{cartId}/coupons';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        path = path.replace('{cartId}', parameters['cartId']);

        if (parameters['cartId'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: cartId'));
            return deferred.promise;
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'GET',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * Delete a coupon from a specified cart.
     * @method
     * @name magento#quoteGuestCouponManagementV1RemoveDelete
     * @param {string} cartId - The cart ID.
     *
     */
    magento.prototype.quoteGuestCouponManagementV1RemoveDelete = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/guest-carts/{cartId}/coupons';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        path = path.replace('{cartId}', parameters['cartId']);

        if (parameters['cartId'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: cartId'));
            return deferred.promise;
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'DELETE',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * Add a coupon by code to a specified cart.
     * @method
     * @name magento#quoteGuestCouponManagementV1SetPut
     * @param {string} cartId - The cart ID.
     * @param {string} couponCode - The coupon code data.
     *
     */
    magento.prototype.quoteGuestCouponManagementV1SetPut = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/guest-carts/{cartId}/coupons/{couponCode}';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        path = path.replace('{cartId}', parameters['cartId']);

        if (parameters['cartId'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: cartId'));
            return deferred.promise;
        }

        path = path.replace('{couponCode}', parameters['couponCode']);

        if (parameters['couponCode'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: couponCode'));
            return deferred.promise;
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'PUT',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * Returns the shipping address for a specified quote.
     * @method
     * @name magento#quoteShippingAddressManagementV1GetGet
     * @param {integer} cartId - The cart ID.
     *
     */
    magento.prototype.quoteShippingAddressManagementV1GetGet = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/carts/{cartId}/shipping-address';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        path = path.replace('{cartId}', parameters['cartId']);

        if (parameters['cartId'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: cartId'));
            return deferred.promise;
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'GET',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * Assigns a specified shipping address to a specified cart.
     * @method
     * @name magento#quoteShippingAddressManagementV1AssignPost
     * @param {integer} cartId - The cart ID.
     * @param {} $body - 
     *
     */
    magento.prototype.quoteShippingAddressManagementV1AssignPost = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/carts/{cartId}/shipping-address';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        path = path.replace('{cartId}', parameters['cartId']);

        if (parameters['cartId'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: cartId'));
            return deferred.promise;
        }

        if (parameters['$body'] !== undefined) {
            body = parameters['$body'];
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'POST',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * Returns the shipping address for a specified quote.
     * @method
     * @name magento#quoteShippingAddressManagementV1GetGet
     *
     */
    magento.prototype.quoteShippingAddressManagementV1GetGet = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/carts/mine/shipping-address';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'GET',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * Assigns a specified shipping address to a specified cart.
     * @method
     * @name magento#quoteShippingAddressManagementV1AssignPost
     * @param {} $body - 
     *
     */
    magento.prototype.quoteShippingAddressManagementV1AssignPost = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/carts/mine/shipping-address';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        if (parameters['$body'] !== undefined) {
            body = parameters['$body'];
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'POST',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * Return the shipping address for a specified quote.
     * @method
     * @name magento#quoteGuestShippingAddressManagementV1GetGet
     * @param {string} cartId - The cart ID.
     *
     */
    magento.prototype.quoteGuestShippingAddressManagementV1GetGet = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/guest-carts/{cartId}/shipping-address';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        path = path.replace('{cartId}', parameters['cartId']);

        if (parameters['cartId'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: cartId'));
            return deferred.promise;
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'GET',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * Assign a specified shipping address to a specified cart.
     * @method
     * @name magento#quoteGuestShippingAddressManagementV1AssignPost
     * @param {string} cartId - The cart ID.
     * @param {} $body - 
     *
     */
    magento.prototype.quoteGuestShippingAddressManagementV1AssignPost = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/guest-carts/{cartId}/shipping-address';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        path = path.replace('{cartId}', parameters['cartId']);

        if (parameters['cartId'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: cartId'));
            return deferred.promise;
        }

        if (parameters['$body'] !== undefined) {
            body = parameters['$body'];
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'POST',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * Returns quote totals data for a specified cart.
     * @method
     * @name magento#quoteCartTotalRepositoryV1GetGet
     * @param {integer} cartId - The cart ID.
     *
     */
    magento.prototype.quoteCartTotalRepositoryV1GetGet = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/carts/{cartId}/totals';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        path = path.replace('{cartId}', parameters['cartId']);

        if (parameters['cartId'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: cartId'));
            return deferred.promise;
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'GET',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * Returns quote totals data for a specified cart.
     * @method
     * @name magento#quoteCartTotalRepositoryV1GetGet
     *
     */
    magento.prototype.quoteCartTotalRepositoryV1GetGet = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/carts/mine/totals';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'GET',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * Set shipping/billing methods and additional data for cart and collect totals for guest.
     * @method
     * @name magento#quoteGuestCartTotalManagementV1CollectTotalsPut
     * @param {string} cartId - The cart ID.
     * @param {} $body - 
     *
     */
    magento.prototype.quoteGuestCartTotalManagementV1CollectTotalsPut = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/guest-carts/{cartId}/collect-totals';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        path = path.replace('{cartId}', parameters['cartId']);

        if (parameters['cartId'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: cartId'));
            return deferred.promise;
        }

        if (parameters['$body'] !== undefined) {
            body = parameters['$body'];
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'PUT',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * Return quote totals data for a specified cart.
     * @method
     * @name magento#quoteGuestCartTotalRepositoryV1GetGet
     * @param {string} cartId - The cart ID.
     *
     */
    magento.prototype.quoteGuestCartTotalRepositoryV1GetGet = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/guest-carts/{cartId}/totals';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        path = path.replace('{cartId}', parameters['cartId']);

        if (parameters['cartId'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: cartId'));
            return deferred.promise;
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'GET',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * Set shipping/billing methods and additional data for cart and collect totals.
     * @method
     * @name magento#quoteCartTotalManagementV1CollectTotalsPut
     * @param {} $body - 
     *
     */
    magento.prototype.quoteCartTotalManagementV1CollectTotalsPut = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/carts/mine/collect-totals';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        if (parameters['$body'] !== undefined) {
            body = parameters['$body'];
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'PUT',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * Lists active checkout agreements.
     * @method
     * @name magento#checkoutAgreementsCheckoutAgreementsRepositoryV1GetListGet
     *
     */
    magento.prototype.checkoutAgreementsCheckoutAgreementsRepositoryV1GetListGet = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/carts/licence';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'GET',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * Add child product to specified Bundle option by product sku
     * @method
     * @name magento#bundleProductLinkManagementV1AddChildByProductSkuPost
     * @param {string} sku - 
     * @param {integer} optionId - 
     * @param {} $body - 
     *
     */
    magento.prototype.bundleProductLinkManagementV1AddChildByProductSkuPost = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/bundle-products/{sku}/links/{optionId}';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        path = path.replace('{sku}', parameters['sku']);

        if (parameters['sku'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: sku'));
            return deferred.promise;
        }

        path = path.replace('{optionId}', parameters['optionId']);

        if (parameters['optionId'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: optionId'));
            return deferred.promise;
        }

        if (parameters['$body'] !== undefined) {
            body = parameters['$body'];
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'POST',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * 
     * @method
     * @name magento#bundleProductLinkManagementV1SaveChildPut
     * @param {string} sku - 
     * @param {string} id - 
     * @param {} $body - 
     *
     */
    magento.prototype.bundleProductLinkManagementV1SaveChildPut = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/bundle-products/{sku}/links/{id}';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        path = path.replace('{sku}', parameters['sku']);

        if (parameters['sku'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: sku'));
            return deferred.promise;
        }

        path = path.replace('{id}', parameters['id']);

        if (parameters['id'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: id'));
            return deferred.promise;
        }

        if (parameters['$body'] !== undefined) {
            body = parameters['$body'];
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'PUT',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * Get all children for Bundle product
     * @method
     * @name magento#bundleProductLinkManagementV1GetChildrenGet
     * @param {string} productSku - 
     * @param {integer} optionId - 
     *
     */
    magento.prototype.bundleProductLinkManagementV1GetChildrenGet = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/bundle-products/{productSku}/children';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        path = path.replace('{productSku}', parameters['productSku']);

        if (parameters['productSku'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: productSku'));
            return deferred.promise;
        }

        if (parameters['optionId'] !== undefined) {
            queryParameters['optionId'] = parameters['optionId'];
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'GET',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * Remove product from Bundle product option
     * @method
     * @name magento#bundleProductLinkManagementV1RemoveChildDelete
     * @param {string} sku - 
     * @param {integer} optionId - 
     * @param {string} childSku - 
     *
     */
    magento.prototype.bundleProductLinkManagementV1RemoveChildDelete = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/bundle-products/{sku}/options/{optionId}/children/{childSku}';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        path = path.replace('{sku}', parameters['sku']);

        if (parameters['sku'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: sku'));
            return deferred.promise;
        }

        path = path.replace('{optionId}', parameters['optionId']);

        if (parameters['optionId'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: optionId'));
            return deferred.promise;
        }

        path = path.replace('{childSku}', parameters['childSku']);

        if (parameters['childSku'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: childSku'));
            return deferred.promise;
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'DELETE',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * Get all options for bundle product
     * @method
     * @name magento#bundleProductOptionRepositoryV1GetListGet
     * @param {string} sku - 
     *
     */
    magento.prototype.bundleProductOptionRepositoryV1GetListGet = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/bundle-products/{sku}/options/all';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        path = path.replace('{sku}', parameters['sku']);

        if (parameters['sku'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: sku'));
            return deferred.promise;
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'GET',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * Get option for bundle product
     * @method
     * @name magento#bundleProductOptionRepositoryV1GetGet
     * @param {string} sku - 
     * @param {integer} optionId - 
     *
     */
    magento.prototype.bundleProductOptionRepositoryV1GetGet = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/bundle-products/{sku}/options/{optionId}';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        path = path.replace('{sku}', parameters['sku']);

        if (parameters['sku'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: sku'));
            return deferred.promise;
        }

        path = path.replace('{optionId}', parameters['optionId']);

        if (parameters['optionId'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: optionId'));
            return deferred.promise;
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'GET',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * Remove bundle option
     * @method
     * @name magento#bundleProductOptionRepositoryV1DeleteByIdDelete
     * @param {string} sku - 
     * @param {integer} optionId - 
     *
     */
    magento.prototype.bundleProductOptionRepositoryV1DeleteByIdDelete = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/bundle-products/{sku}/options/{optionId}';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        path = path.replace('{sku}', parameters['sku']);

        if (parameters['sku'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: sku'));
            return deferred.promise;
        }

        path = path.replace('{optionId}', parameters['optionId']);

        if (parameters['optionId'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: optionId'));
            return deferred.promise;
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'DELETE',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * Get all types for options for bundle products
     * @method
     * @name magento#bundleProductOptionTypeListV1GetItemsGet
     *
     */
    magento.prototype.bundleProductOptionTypeListV1GetItemsGet = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/bundle-products/options/types';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'GET',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * Add new option for bundle product
     * @method
     * @name magento#bundleProductOptionManagementV1SavePost
     * @param {} $body - 
     *
     */
    magento.prototype.bundleProductOptionManagementV1SavePost = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/bundle-products/options/add';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        if (parameters['$body'] !== undefined) {
            body = parameters['$body'];
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'POST',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * Add new option for bundle product
     * @method
     * @name magento#bundleProductOptionManagementV1SavePut
     * @param {string} optionId - 
     * @param {} $body - 
     *
     */
    magento.prototype.bundleProductOptionManagementV1SavePut = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/bundle-products/options/{optionId}';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        path = path.replace('{optionId}', parameters['optionId']);

        if (parameters['optionId'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: optionId'));
            return deferred.promise;
        }

        if (parameters['$body'] !== undefined) {
            body = parameters['$body'];
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'PUT',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * List of links with associated samples
     * @method
     * @name magento#downloadableLinkRepositoryV1GetListGet
     * @param {string} sku - 
     *
     */
    magento.prototype.downloadableLinkRepositoryV1GetListGet = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/products/{sku}/downloadable-links';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        path = path.replace('{sku}', parameters['sku']);

        if (parameters['sku'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: sku'));
            return deferred.promise;
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'GET',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * Update downloadable link of the given product (link type and its resources cannot be changed)
     * @method
     * @name magento#downloadableLinkRepositoryV1SavePost
     * @param {string} sku - 
     * @param {} $body - 
     *
     */
    magento.prototype.downloadableLinkRepositoryV1SavePost = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/products/{sku}/downloadable-links';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        path = path.replace('{sku}', parameters['sku']);

        if (parameters['sku'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: sku'));
            return deferred.promise;
        }

        if (parameters['$body'] !== undefined) {
            body = parameters['$body'];
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'POST',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * Update downloadable link of the given product (link type and its resources cannot be changed)
     * @method
     * @name magento#downloadableLinkRepositoryV1SavePut
     * @param {string} sku - 
     * @param {string} id - 
     * @param {} $body - 
     *
     */
    magento.prototype.downloadableLinkRepositoryV1SavePut = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/products/{sku}/downloadable-links/{id}';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        path = path.replace('{sku}', parameters['sku']);

        if (parameters['sku'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: sku'));
            return deferred.promise;
        }

        path = path.replace('{id}', parameters['id']);

        if (parameters['id'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: id'));
            return deferred.promise;
        }

        if (parameters['$body'] !== undefined) {
            body = parameters['$body'];
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'PUT',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * Delete downloadable link
     * @method
     * @name magento#downloadableLinkRepositoryV1DeleteDelete
     * @param {integer} id - 
     *
     */
    magento.prototype.downloadableLinkRepositoryV1DeleteDelete = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/products/downloadable-links/{id}';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        path = path.replace('{id}', parameters['id']);

        if (parameters['id'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: id'));
            return deferred.promise;
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'DELETE',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * List of samples for downloadable product
     * @method
     * @name magento#downloadableSampleRepositoryV1GetListGet
     * @param {string} sku - 
     *
     */
    magento.prototype.downloadableSampleRepositoryV1GetListGet = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/products/{sku}/downloadable-links/samples';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        path = path.replace('{sku}', parameters['sku']);

        if (parameters['sku'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: sku'));
            return deferred.promise;
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'GET',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * Update downloadable sample of the given product
     * @method
     * @name magento#downloadableSampleRepositoryV1SavePost
     * @param {string} sku - 
     * @param {} $body - 
     *
     */
    magento.prototype.downloadableSampleRepositoryV1SavePost = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/products/{sku}/downloadable-links/samples';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        path = path.replace('{sku}', parameters['sku']);

        if (parameters['sku'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: sku'));
            return deferred.promise;
        }

        if (parameters['$body'] !== undefined) {
            body = parameters['$body'];
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'POST',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * Update downloadable sample of the given product
     * @method
     * @name magento#downloadableSampleRepositoryV1SavePut
     * @param {string} sku - 
     * @param {string} id - 
     * @param {} $body - 
     *
     */
    magento.prototype.downloadableSampleRepositoryV1SavePut = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/products/{sku}/downloadable-links/samples/{id}';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        path = path.replace('{sku}', parameters['sku']);

        if (parameters['sku'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: sku'));
            return deferred.promise;
        }

        path = path.replace('{id}', parameters['id']);

        if (parameters['id'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: id'));
            return deferred.promise;
        }

        if (parameters['$body'] !== undefined) {
            body = parameters['$body'];
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'PUT',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * Delete downloadable sample
     * @method
     * @name magento#downloadableSampleRepositoryV1DeleteDelete
     * @param {integer} id - 
     *
     */
    magento.prototype.downloadableSampleRepositoryV1DeleteDelete = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/products/downloadable-links/samples/{id}';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        path = path.replace('{id}', parameters['id']);

        if (parameters['id'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: id'));
            return deferred.promise;
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'DELETE',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * Loads a specified order.
     * @method
     * @name magento#salesOrderRepositoryV1GetGet
     * @param {integer} id - The order ID.
     *
     */
    magento.prototype.salesOrderRepositoryV1GetGet = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/orders/{id}';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        path = path.replace('{id}', parameters['id']);

        if (parameters['id'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: id'));
            return deferred.promise;
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'GET',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * Lists orders that match specified search criteria.
     * @method
     * @name magento#salesOrderRepositoryV1GetListGet
     * @param {string} criteria[filterGroups][][filters][][field] - Field
     * @param {string} criteria[filterGroups][][filters][][value] - Value
     * @param {string} criteria[filterGroups][][filters][][conditionType] - Condition type
     * @param {string} criteria[sortOrders][][field] - Sorting field.
     * @param {string} criteria[sortOrders][][direction] - Sorting direction.
     * @param {integer} criteria[pageSize] - Page size.
     * @param {integer} criteria[currentPage] - Current page.
     *
     */
    magento.prototype.salesOrderRepositoryV1GetListGet = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/orders';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        if (parameters['criteria[filterGroups][][filters][][field]'] !== undefined) {
            queryParameters['criteria[filterGroups][][filters][][field]'] = parameters['criteria[filterGroups][][filters][][field]'];
        }

        if (parameters['criteria[filterGroups][][filters][][value]'] !== undefined) {
            queryParameters['criteria[filterGroups][][filters][][value]'] = parameters['criteria[filterGroups][][filters][][value]'];
        }

        if (parameters['criteria[filterGroups][][filters][][conditionType]'] !== undefined) {
            queryParameters['criteria[filterGroups][][filters][][conditionType]'] = parameters['criteria[filterGroups][][filters][][conditionType]'];
        }

        if (parameters['criteria[sortOrders][][field]'] !== undefined) {
            queryParameters['criteria[sortOrders][][field]'] = parameters['criteria[sortOrders][][field]'];
        }

        if (parameters['criteria[sortOrders][][direction]'] !== undefined) {
            queryParameters['criteria[sortOrders][][direction]'] = parameters['criteria[sortOrders][][direction]'];
        }

        if (parameters['criteria[pageSize]'] !== undefined) {
            queryParameters['criteria[pageSize]'] = parameters['criteria[pageSize]'];
        }

        if (parameters['criteria[currentPage]'] !== undefined) {
            queryParameters['criteria[currentPage]'] = parameters['criteria[currentPage]'];
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'GET',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * Performs persist operations for a specified order.
     * @method
     * @name magento#salesOrderRepositoryV1SavePut
     * @param {} $body - 
     *
     */
    magento.prototype.salesOrderRepositoryV1SavePut = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/orders/create';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        if (parameters['$body'] !== undefined) {
            body = parameters['$body'];
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'PUT',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * Performs persist operations for a specified order.
     * @method
     * @name magento#salesOrderRepositoryV1SavePost
     * @param {} $body - 
     *
     */
    magento.prototype.salesOrderRepositoryV1SavePost = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/orders/';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        if (parameters['$body'] !== undefined) {
            body = parameters['$body'];
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'POST',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * Gets the status for a specified order.
     * @method
     * @name magento#salesOrderManagementV1GetStatusGet
     * @param {integer} id - The order ID.
     *
     */
    magento.prototype.salesOrderManagementV1GetStatusGet = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/orders/{id}/statuses';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        path = path.replace('{id}', parameters['id']);

        if (parameters['id'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: id'));
            return deferred.promise;
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'GET',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * Cancels a specified order.
     * @method
     * @name magento#salesOrderManagementV1CancelPost
     * @param {integer} id - The order ID.
     *
     */
    magento.prototype.salesOrderManagementV1CancelPost = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/orders/{id}/cancel';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        path = path.replace('{id}', parameters['id']);

        if (parameters['id'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: id'));
            return deferred.promise;
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'POST',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * Emails a user a specified order.
     * @method
     * @name magento#salesOrderManagementV1NotifyPost
     * @param {integer} id - The order ID.
     *
     */
    magento.prototype.salesOrderManagementV1NotifyPost = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/orders/{id}/emails';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        path = path.replace('{id}', parameters['id']);

        if (parameters['id'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: id'));
            return deferred.promise;
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'POST',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * Holds a specified order.
     * @method
     * @name magento#salesOrderManagementV1HoldPost
     * @param {integer} id - The order ID.
     *
     */
    magento.prototype.salesOrderManagementV1HoldPost = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/orders/{id}/hold';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        path = path.replace('{id}', parameters['id']);

        if (parameters['id'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: id'));
            return deferred.promise;
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'POST',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * Releases a specified order from hold status.
     * @method
     * @name magento#salesOrderManagementV1UnHoldPost
     * @param {integer} id - The order ID.
     *
     */
    magento.prototype.salesOrderManagementV1UnHoldPost = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/orders/{id}/unhold';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        path = path.replace('{id}', parameters['id']);

        if (parameters['id'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: id'));
            return deferred.promise;
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'POST',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * Adds a comment to a specified order.
     * @method
     * @name magento#salesOrderManagementV1AddCommentPost
     * @param {integer} id - The order ID.
     * @param {} $body - 
     *
     */
    magento.prototype.salesOrderManagementV1AddCommentPost = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/orders/{id}/comments';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        path = path.replace('{id}', parameters['id']);

        if (parameters['id'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: id'));
            return deferred.promise;
        }

        if (parameters['$body'] !== undefined) {
            body = parameters['$body'];
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'POST',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * Lists comments for a specified order.
     * @method
     * @name magento#salesOrderManagementV1GetCommentsListGet
     * @param {integer} id - The order ID.
     *
     */
    magento.prototype.salesOrderManagementV1GetCommentsListGet = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/orders/{id}/comments';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        path = path.replace('{id}', parameters['id']);

        if (parameters['id'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: id'));
            return deferred.promise;
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'GET',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * Performs persist operations for a specified order address.
     * @method
     * @name magento#salesOrderAddressRepositoryV1SavePut
     * @param {string} parent_id - 
     * @param {} $body - 
     *
     */
    magento.prototype.salesOrderAddressRepositoryV1SavePut = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/orders/{parent_id}';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        path = path.replace('{parent_id}', parameters['parent_id']);

        if (parameters['parent_id'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: parent_id'));
            return deferred.promise;
        }

        if (parameters['$body'] !== undefined) {
            body = parameters['$body'];
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'PUT',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * Loads a specified invoice.
     * @method
     * @name magento#salesInvoiceRepositoryV1GetGet
     * @param {integer} id - The invoice ID.
     *
     */
    magento.prototype.salesInvoiceRepositoryV1GetGet = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/invoices/{id}';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        path = path.replace('{id}', parameters['id']);

        if (parameters['id'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: id'));
            return deferred.promise;
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'GET',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * Lists invoices that match specified search criteria.
     * @method
     * @name magento#salesInvoiceRepositoryV1GetListGet
     * @param {string} criteria[filterGroups][][filters][][field] - Field
     * @param {string} criteria[filterGroups][][filters][][value] - Value
     * @param {string} criteria[filterGroups][][filters][][conditionType] - Condition type
     * @param {string} criteria[sortOrders][][field] - Sorting field.
     * @param {string} criteria[sortOrders][][direction] - Sorting direction.
     * @param {integer} criteria[pageSize] - Page size.
     * @param {integer} criteria[currentPage] - Current page.
     *
     */
    magento.prototype.salesInvoiceRepositoryV1GetListGet = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/invoices';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        if (parameters['criteria[filterGroups][][filters][][field]'] !== undefined) {
            queryParameters['criteria[filterGroups][][filters][][field]'] = parameters['criteria[filterGroups][][filters][][field]'];
        }

        if (parameters['criteria[filterGroups][][filters][][value]'] !== undefined) {
            queryParameters['criteria[filterGroups][][filters][][value]'] = parameters['criteria[filterGroups][][filters][][value]'];
        }

        if (parameters['criteria[filterGroups][][filters][][conditionType]'] !== undefined) {
            queryParameters['criteria[filterGroups][][filters][][conditionType]'] = parameters['criteria[filterGroups][][filters][][conditionType]'];
        }

        if (parameters['criteria[sortOrders][][field]'] !== undefined) {
            queryParameters['criteria[sortOrders][][field]'] = parameters['criteria[sortOrders][][field]'];
        }

        if (parameters['criteria[sortOrders][][direction]'] !== undefined) {
            queryParameters['criteria[sortOrders][][direction]'] = parameters['criteria[sortOrders][][direction]'];
        }

        if (parameters['criteria[pageSize]'] !== undefined) {
            queryParameters['criteria[pageSize]'] = parameters['criteria[pageSize]'];
        }

        if (parameters['criteria[currentPage]'] !== undefined) {
            queryParameters['criteria[currentPage]'] = parameters['criteria[currentPage]'];
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'GET',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * Performs persist operations for a specified invoice.
     * @method
     * @name magento#salesInvoiceRepositoryV1SavePost
     * @param {} $body - 
     *
     */
    magento.prototype.salesInvoiceRepositoryV1SavePost = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/invoices/';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        if (parameters['$body'] !== undefined) {
            body = parameters['$body'];
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'POST',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * Lists comments for a specified invoice.
     * @method
     * @name magento#salesInvoiceManagementV1GetCommentsListGet
     * @param {integer} id - The invoice ID.
     *
     */
    magento.prototype.salesInvoiceManagementV1GetCommentsListGet = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/invoices/{id}/comments';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        path = path.replace('{id}', parameters['id']);

        if (parameters['id'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: id'));
            return deferred.promise;
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'GET',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * Emails a user a specified invoice.
     * @method
     * @name magento#salesInvoiceManagementV1NotifyPost
     * @param {integer} id - The invoice ID.
     *
     */
    magento.prototype.salesInvoiceManagementV1NotifyPost = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/invoices/{id}/emails';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        path = path.replace('{id}', parameters['id']);

        if (parameters['id'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: id'));
            return deferred.promise;
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'POST',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * Voids a specified invoice.
     * @method
     * @name magento#salesInvoiceManagementV1SetVoidPost
     * @param {integer} id - The invoice ID.
     *
     */
    magento.prototype.salesInvoiceManagementV1SetVoidPost = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/invoices/{id}/void';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        path = path.replace('{id}', parameters['id']);

        if (parameters['id'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: id'));
            return deferred.promise;
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'POST',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * Sets invoice capture.
     * @method
     * @name magento#salesInvoiceManagementV1SetCapturePost
     * @param {integer} id - 
     *
     */
    magento.prototype.salesInvoiceManagementV1SetCapturePost = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/invoices/{id}/capture';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        path = path.replace('{id}', parameters['id']);

        if (parameters['id'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: id'));
            return deferred.promise;
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'POST',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * Performs persist operations for a specified invoice comment.
     * @method
     * @name magento#salesInvoiceCommentRepositoryV1SavePost
     * @param {} $body - 
     *
     */
    magento.prototype.salesInvoiceCommentRepositoryV1SavePost = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/invoices/comments';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        if (parameters['$body'] !== undefined) {
            body = parameters['$body'];
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'POST',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * Lists comments for a specified credit memo.
     * @method
     * @name magento#salesCreditmemoManagementV1GetCommentsListGet
     * @param {integer} id - The credit memo ID.
     *
     */
    magento.prototype.salesCreditmemoManagementV1GetCommentsListGet = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/creditmemo/{id}/comments';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        path = path.replace('{id}', parameters['id']);

        if (parameters['id'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: id'));
            return deferred.promise;
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'GET',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * Performs persist operations for a specified entity.
     * @method
     * @name magento#salesCreditmemoCommentRepositoryV1SavePost
     * @param {string} id - 
     * @param {} $body - 
     *
     */
    magento.prototype.salesCreditmemoCommentRepositoryV1SavePost = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/creditmemo/{id}/comments';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        path = path.replace('{id}', parameters['id']);

        if (parameters['id'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: id'));
            return deferred.promise;
        }

        if (parameters['$body'] !== undefined) {
            body = parameters['$body'];
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'POST',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * Cancels a specified credit memo.
     * @method
     * @name magento#salesCreditmemoManagementV1CancelPut
     * @param {integer} id - The credit memo ID.
     *
     */
    magento.prototype.salesCreditmemoManagementV1CancelPut = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/creditmemo/{id}';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        path = path.replace('{id}', parameters['id']);

        if (parameters['id'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: id'));
            return deferred.promise;
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'PUT',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * Loads a specified credit memo.
     * @method
     * @name magento#salesCreditmemoRepositoryV1GetGet
     * @param {integer} id - The credit memo ID.
     *
     */
    magento.prototype.salesCreditmemoRepositoryV1GetGet = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/creditmemo/{id}';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        path = path.replace('{id}', parameters['id']);

        if (parameters['id'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: id'));
            return deferred.promise;
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'GET',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * Emails a user a specified credit memo.
     * @method
     * @name magento#salesCreditmemoManagementV1NotifyPost
     * @param {integer} id - The credit memo ID.
     *
     */
    magento.prototype.salesCreditmemoManagementV1NotifyPost = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/creditmemo/{id}/emails';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        path = path.replace('{id}', parameters['id']);

        if (parameters['id'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: id'));
            return deferred.promise;
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'POST',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * Lists credit memos that match specified search criteria.
     * @method
     * @name magento#salesCreditmemoRepositoryV1GetListGet
     * @param {string} criteria[filterGroups][][filters][][field] - Field
     * @param {string} criteria[filterGroups][][filters][][value] - Value
     * @param {string} criteria[filterGroups][][filters][][conditionType] - Condition type
     * @param {string} criteria[sortOrders][][field] - Sorting field.
     * @param {string} criteria[sortOrders][][direction] - Sorting direction.
     * @param {integer} criteria[pageSize] - Page size.
     * @param {integer} criteria[currentPage] - Current page.
     *
     */
    magento.prototype.salesCreditmemoRepositoryV1GetListGet = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/creditmemos';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        if (parameters['criteria[filterGroups][][filters][][field]'] !== undefined) {
            queryParameters['criteria[filterGroups][][filters][][field]'] = parameters['criteria[filterGroups][][filters][][field]'];
        }

        if (parameters['criteria[filterGroups][][filters][][value]'] !== undefined) {
            queryParameters['criteria[filterGroups][][filters][][value]'] = parameters['criteria[filterGroups][][filters][][value]'];
        }

        if (parameters['criteria[filterGroups][][filters][][conditionType]'] !== undefined) {
            queryParameters['criteria[filterGroups][][filters][][conditionType]'] = parameters['criteria[filterGroups][][filters][][conditionType]'];
        }

        if (parameters['criteria[sortOrders][][field]'] !== undefined) {
            queryParameters['criteria[sortOrders][][field]'] = parameters['criteria[sortOrders][][field]'];
        }

        if (parameters['criteria[sortOrders][][direction]'] !== undefined) {
            queryParameters['criteria[sortOrders][][direction]'] = parameters['criteria[sortOrders][][direction]'];
        }

        if (parameters['criteria[pageSize]'] !== undefined) {
            queryParameters['criteria[pageSize]'] = parameters['criteria[pageSize]'];
        }

        if (parameters['criteria[currentPage]'] !== undefined) {
            queryParameters['criteria[currentPage]'] = parameters['criteria[currentPage]'];
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'GET',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * Performs persist operations for a specified credit memo.
     * @method
     * @name magento#salesCreditmemoRepositoryV1SavePost
     * @param {} $body - 
     *
     */
    magento.prototype.salesCreditmemoRepositoryV1SavePost = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/creditmemo';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        if (parameters['$body'] !== undefined) {
            body = parameters['$body'];
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'POST',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * Loads a specified shipment.
     * @method
     * @name magento#salesShipmentRepositoryV1GetGet
     * @param {integer} id - The shipment ID.
     *
     */
    magento.prototype.salesShipmentRepositoryV1GetGet = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/shipment/{id}';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        path = path.replace('{id}', parameters['id']);

        if (parameters['id'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: id'));
            return deferred.promise;
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'GET',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * Lists shipments that match specified search criteria.
     * @method
     * @name magento#salesShipmentRepositoryV1GetListGet
     * @param {string} criteria[filterGroups][][filters][][field] - Field
     * @param {string} criteria[filterGroups][][filters][][value] - Value
     * @param {string} criteria[filterGroups][][filters][][conditionType] - Condition type
     * @param {string} criteria[sortOrders][][field] - Sorting field.
     * @param {string} criteria[sortOrders][][direction] - Sorting direction.
     * @param {integer} criteria[pageSize] - Page size.
     * @param {integer} criteria[currentPage] - Current page.
     *
     */
    magento.prototype.salesShipmentRepositoryV1GetListGet = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/shipments';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        if (parameters['criteria[filterGroups][][filters][][field]'] !== undefined) {
            queryParameters['criteria[filterGroups][][filters][][field]'] = parameters['criteria[filterGroups][][filters][][field]'];
        }

        if (parameters['criteria[filterGroups][][filters][][value]'] !== undefined) {
            queryParameters['criteria[filterGroups][][filters][][value]'] = parameters['criteria[filterGroups][][filters][][value]'];
        }

        if (parameters['criteria[filterGroups][][filters][][conditionType]'] !== undefined) {
            queryParameters['criteria[filterGroups][][filters][][conditionType]'] = parameters['criteria[filterGroups][][filters][][conditionType]'];
        }

        if (parameters['criteria[sortOrders][][field]'] !== undefined) {
            queryParameters['criteria[sortOrders][][field]'] = parameters['criteria[sortOrders][][field]'];
        }

        if (parameters['criteria[sortOrders][][direction]'] !== undefined) {
            queryParameters['criteria[sortOrders][][direction]'] = parameters['criteria[sortOrders][][direction]'];
        }

        if (parameters['criteria[pageSize]'] !== undefined) {
            queryParameters['criteria[pageSize]'] = parameters['criteria[pageSize]'];
        }

        if (parameters['criteria[currentPage]'] !== undefined) {
            queryParameters['criteria[currentPage]'] = parameters['criteria[currentPage]'];
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'GET',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * Performs persist operations for a specified shipment.
     * @method
     * @name magento#salesShipmentRepositoryV1SavePost
     * @param {} $body - 
     *
     */
    magento.prototype.salesShipmentRepositoryV1SavePost = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/shipment/';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        if (parameters['$body'] !== undefined) {
            body = parameters['$body'];
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'POST',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * Lists comments for a specified shipment.
     * @method
     * @name magento#salesShipmentManagementV1GetCommentsListGet
     * @param {integer} id - The shipment ID.
     *
     */
    magento.prototype.salesShipmentManagementV1GetCommentsListGet = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/shipment/{id}/comments';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        path = path.replace('{id}', parameters['id']);

        if (parameters['id'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: id'));
            return deferred.promise;
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'GET',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * Performs persist operations for a specified shipment comment.
     * @method
     * @name magento#salesShipmentCommentRepositoryV1SavePost
     * @param {string} id - 
     * @param {} $body - 
     *
     */
    magento.prototype.salesShipmentCommentRepositoryV1SavePost = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/shipment/{id}/comments';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        path = path.replace('{id}', parameters['id']);

        if (parameters['id'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: id'));
            return deferred.promise;
        }

        if (parameters['$body'] !== undefined) {
            body = parameters['$body'];
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'POST',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * Emails user a specified shipment.
     * @method
     * @name magento#salesShipmentManagementV1NotifyPost
     * @param {integer} id - The shipment ID.
     *
     */
    magento.prototype.salesShipmentManagementV1NotifyPost = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/shipment/{id}/emails';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        path = path.replace('{id}', parameters['id']);

        if (parameters['id'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: id'));
            return deferred.promise;
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'POST',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * Gets a specified shipment label.
     * @method
     * @name magento#salesShipmentManagementV1GetLabelGet
     * @param {integer} id - The shipment label ID.
     *
     */
    magento.prototype.salesShipmentManagementV1GetLabelGet = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/shipment/{id}/label';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        path = path.replace('{id}', parameters['id']);

        if (parameters['id'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: id'));
            return deferred.promise;
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'GET',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * Performs persist operations for a specified shipment track.
     * @method
     * @name magento#salesShipmentTrackRepositoryV1SavePost
     * @param {} $body - 
     *
     */
    magento.prototype.salesShipmentTrackRepositoryV1SavePost = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/shipment/track';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        if (parameters['$body'] !== undefined) {
            body = parameters['$body'];
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'POST',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * Deletes a specified shipment track by ID.
     * @method
     * @name magento#salesShipmentTrackRepositoryV1DeleteByIdDelete
     * @param {integer} id - The shipment track ID.
     *
     */
    magento.prototype.salesShipmentTrackRepositoryV1DeleteByIdDelete = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/shipment/track/{id}';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        path = path.replace('{id}', parameters['id']);

        if (parameters['id'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: id'));
            return deferred.promise;
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'DELETE',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * Loads a specified transaction.
     * @method
     * @name magento#salesTransactionRepositoryV1GetGet
     * @param {integer} id - The transaction ID.
     *
     */
    magento.prototype.salesTransactionRepositoryV1GetGet = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/transactions/{id}';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        path = path.replace('{id}', parameters['id']);

        if (parameters['id'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: id'));
            return deferred.promise;
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'GET',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * Lists transactions that match specified search criteria.
     * @method
     * @name magento#salesTransactionRepositoryV1GetListGet
     * @param {string} criteria[filterGroups][][filters][][field] - Field
     * @param {string} criteria[filterGroups][][filters][][value] - Value
     * @param {string} criteria[filterGroups][][filters][][conditionType] - Condition type
     * @param {string} criteria[sortOrders][][field] - Sorting field.
     * @param {string} criteria[sortOrders][][direction] - Sorting direction.
     * @param {integer} criteria[pageSize] - Page size.
     * @param {integer} criteria[currentPage] - Current page.
     *
     */
    magento.prototype.salesTransactionRepositoryV1GetListGet = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/transactions';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        if (parameters['criteria[filterGroups][][filters][][field]'] !== undefined) {
            queryParameters['criteria[filterGroups][][filters][][field]'] = parameters['criteria[filterGroups][][filters][][field]'];
        }

        if (parameters['criteria[filterGroups][][filters][][value]'] !== undefined) {
            queryParameters['criteria[filterGroups][][filters][][value]'] = parameters['criteria[filterGroups][][filters][][value]'];
        }

        if (parameters['criteria[filterGroups][][filters][][conditionType]'] !== undefined) {
            queryParameters['criteria[filterGroups][][filters][][conditionType]'] = parameters['criteria[filterGroups][][filters][][conditionType]'];
        }

        if (parameters['criteria[sortOrders][][field]'] !== undefined) {
            queryParameters['criteria[sortOrders][][field]'] = parameters['criteria[sortOrders][][field]'];
        }

        if (parameters['criteria[sortOrders][][direction]'] !== undefined) {
            queryParameters['criteria[sortOrders][][direction]'] = parameters['criteria[sortOrders][][direction]'];
        }

        if (parameters['criteria[pageSize]'] !== undefined) {
            queryParameters['criteria[pageSize]'] = parameters['criteria[pageSize]'];
        }

        if (parameters['criteria[currentPage]'] !== undefined) {
            queryParameters['criteria[currentPage]'] = parameters['criteria[currentPage]'];
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'GET',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * 
     * @method
     * @name magento#catalogInventoryStockRegistryV1GetStockItemBySkuGet
     * @param {string} productSku - 
     * @param {integer} websiteId - 
     *
     */
    magento.prototype.catalogInventoryStockRegistryV1GetStockItemBySkuGet = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/stockItems/{productSku}';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        path = path.replace('{productSku}', parameters['productSku']);

        if (parameters['productSku'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: productSku'));
            return deferred.promise;
        }

        if (parameters['websiteId'] !== undefined) {
            queryParameters['websiteId'] = parameters['websiteId'];
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'GET',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * 
     * @method
     * @name magento#catalogInventoryStockRegistryV1UpdateStockItemBySkuPut
     * @param {string} productSku - 
     * @param {string} itemId - 
     * @param {} $body - 
     *
     */
    magento.prototype.catalogInventoryStockRegistryV1UpdateStockItemBySkuPut = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/products/{productSku}/stockItems/{itemId}';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        path = path.replace('{productSku}', parameters['productSku']);

        if (parameters['productSku'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: productSku'));
            return deferred.promise;
        }

        path = path.replace('{itemId}', parameters['itemId']);

        if (parameters['itemId'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: itemId'));
            return deferred.promise;
        }

        if (parameters['$body'] !== undefined) {
            body = parameters['$body'];
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'PUT',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * Retrieves a list of SKU's with low inventory qty
     * @method
     * @name magento#catalogInventoryStockRegistryV1GetLowStockItemsGet
     * @param {integer} websiteId - 
     * @param {number} qty - 
     * @param {integer} currentPage - 
     * @param {integer} pageSize - 
     *
     */
    magento.prototype.catalogInventoryStockRegistryV1GetLowStockItemsGet = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/stockItems/lowStock/';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        if (parameters['websiteId'] !== undefined) {
            queryParameters['websiteId'] = parameters['websiteId'];
        }

        if (parameters['websiteId'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: websiteId'));
            return deferred.promise;
        }

        if (parameters['qty'] !== undefined) {
            queryParameters['qty'] = parameters['qty'];
        }

        if (parameters['qty'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: qty'));
            return deferred.promise;
        }

        if (parameters['currentPage'] !== undefined) {
            queryParameters['currentPage'] = parameters['currentPage'];
        }

        if (parameters['pageSize'] !== undefined) {
            queryParameters['pageSize'] = parameters['pageSize'];
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'GET',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * 
     * @method
     * @name magento#catalogInventoryStockRegistryV1GetStockStatusBySkuGet
     * @param {string} productSku - 
     * @param {integer} websiteId - 
     *
     */
    magento.prototype.catalogInventoryStockRegistryV1GetStockStatusBySkuGet = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/stockStatuses/{productSku}';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        path = path.replace('{productSku}', parameters['productSku']);

        if (parameters['productSku'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: productSku'));
            return deferred.promise;
        }

        if (parameters['websiteId'] !== undefined) {
            queryParameters['websiteId'] = parameters['websiteId'];
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'GET',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * 
     * @method
     * @name magento#checkoutGuestShippingInformationManagementV1SaveAddressInformationPost
     * @param {string} cartId - 
     * @param {} $body - 
     *
     */
    magento.prototype.checkoutGuestShippingInformationManagementV1SaveAddressInformationPost = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/carts/{cartId}/shipping-information';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        path = path.replace('{cartId}', parameters['cartId']);

        if (parameters['cartId'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: cartId'));
            return deferred.promise;
        }

        if (parameters['$body'] !== undefined) {
            body = parameters['$body'];
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'POST',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * 
     * @method
     * @name magento#checkoutShippingInformationManagementV1SaveAddressInformationPost
     * @param {} $body - 
     *
     */
    magento.prototype.checkoutShippingInformationManagementV1SaveAddressInformationPost = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/carts/mine/shipping-information';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        if (parameters['$body'] !== undefined) {
            body = parameters['$body'];
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'POST',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * Calculate quote totals based on address and shipping method.
     * @method
     * @name magento#checkoutTotalsInformationManagementV1CalculatePost
     * @param {integer} cartId - 
     * @param {} $body - 
     *
     */
    magento.prototype.checkoutTotalsInformationManagementV1CalculatePost = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/carts/{cartId}/totals-information';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        path = path.replace('{cartId}', parameters['cartId']);

        if (parameters['cartId'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: cartId'));
            return deferred.promise;
        }

        if (parameters['$body'] !== undefined) {
            body = parameters['$body'];
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'POST',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * Calculate quote totals based on address and shipping method.
     * @method
     * @name magento#checkoutTotalsInformationManagementV1CalculatePost
     * @param {} $body - 
     *
     */
    magento.prototype.checkoutTotalsInformationManagementV1CalculatePost = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/carts/mine/totals-information';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        if (parameters['$body'] !== undefined) {
            body = parameters['$body'];
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'POST',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * Calculate quote totals based on address and shipping method.
     * @method
     * @name magento#checkoutGuestTotalsInformationManagementV1CalculatePost
     * @param {string} cartId - 
     * @param {} $body - 
     *
     */
    magento.prototype.checkoutGuestTotalsInformationManagementV1CalculatePost = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/guest-carts/{cartId}/totals-information';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        path = path.replace('{cartId}', parameters['cartId']);

        if (parameters['cartId'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: cartId'));
            return deferred.promise;
        }

        if (parameters['$body'] !== undefined) {
            body = parameters['$body'];
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'POST',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * Set payment information and place order for a specified cart.
     * @method
     * @name magento#checkoutGuestPaymentInformationManagementV1SavePaymentInformationAndPlaceOrderPost
     * @param {string} cartId - 
     * @param {} $body - 
     *
     */
    magento.prototype.checkoutGuestPaymentInformationManagementV1SavePaymentInformationAndPlaceOrderPost = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/guest-carts/{cartId}/payment-information';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        path = path.replace('{cartId}', parameters['cartId']);

        if (parameters['cartId'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: cartId'));
            return deferred.promise;
        }

        if (parameters['$body'] !== undefined) {
            body = parameters['$body'];
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'POST',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * Get payment information
     * @method
     * @name magento#checkoutGuestPaymentInformationManagementV1GetPaymentInformationGet
     * @param {string} cartId - 
     *
     */
    magento.prototype.checkoutGuestPaymentInformationManagementV1GetPaymentInformationGet = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/guest-carts/{cartId}/payment-information';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        path = path.replace('{cartId}', parameters['cartId']);

        if (parameters['cartId'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: cartId'));
            return deferred.promise;
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'GET',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * Set payment information for a specified cart.
     * @method
     * @name magento#checkoutGuestPaymentInformationManagementV1SavePaymentInformationPost
     * @param {string} cartId - 
     * @param {} $body - 
     *
     */
    magento.prototype.checkoutGuestPaymentInformationManagementV1SavePaymentInformationPost = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/guest-carts/{cartId}/set-payment-information';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        path = path.replace('{cartId}', parameters['cartId']);

        if (parameters['cartId'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: cartId'));
            return deferred.promise;
        }

        if (parameters['$body'] !== undefined) {
            body = parameters['$body'];
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'POST',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * Set payment information and place order for a specified cart.
     * @method
     * @name magento#checkoutPaymentInformationManagementV1SavePaymentInformationAndPlaceOrderPost
     * @param {} $body - 
     *
     */
    magento.prototype.checkoutPaymentInformationManagementV1SavePaymentInformationAndPlaceOrderPost = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/carts/mine/payment-information';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        if (parameters['$body'] !== undefined) {
            body = parameters['$body'];
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'POST',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * Get payment information
     * @method
     * @name magento#checkoutPaymentInformationManagementV1GetPaymentInformationGet
     *
     */
    magento.prototype.checkoutPaymentInformationManagementV1GetPaymentInformationGet = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/carts/mine/payment-information';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'GET',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * Set payment information for a specified cart.
     * @method
     * @name magento#checkoutPaymentInformationManagementV1SavePaymentInformationPost
     * @param {} $body - 
     *
     */
    magento.prototype.checkoutPaymentInformationManagementV1SavePaymentInformationPost = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/carts/mine/set-payment-information';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        if (parameters['$body'] !== undefined) {
            body = parameters['$body'];
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'POST',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * Create access token for admin given the admin credentials.
     * @method
     * @name magento#integrationAdminTokenServiceV1CreateAdminAccessTokenPost
     * @param {} $body - 
     *
     */
    magento.prototype.integrationAdminTokenServiceV1CreateAdminAccessTokenPost = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/integration/admin/token';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        if (parameters['$body'] !== undefined) {
            body = parameters['$body'];
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'POST',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * Create access token for admin given the customer credentials.
     * @method
     * @name magento#integrationCustomerTokenServiceV1CreateCustomerAccessTokenPost
     * @param {} $body - 
     *
     */
    magento.prototype.integrationCustomerTokenServiceV1CreateCustomerAccessTokenPost = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/integration/customer/token';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        if (parameters['$body'] !== undefined) {
            body = parameters['$body'];
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'POST',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * Get rule by ID.
     * @method
     * @name magento#salesRuleRuleRepositoryV1GetByIdGet
     * @param {integer} ruleId - 
     *
     */
    magento.prototype.salesRuleRuleRepositoryV1GetByIdGet = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/salesRules/{ruleId}';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        path = path.replace('{ruleId}', parameters['ruleId']);

        if (parameters['ruleId'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: ruleId'));
            return deferred.promise;
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'GET',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * Save sales rule.
     * @method
     * @name magento#salesRuleRuleRepositoryV1SavePut
     * @param {string} ruleId - 
     * @param {} $body - 
     *
     */
    magento.prototype.salesRuleRuleRepositoryV1SavePut = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/salesRules/{ruleId}';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        path = path.replace('{ruleId}', parameters['ruleId']);

        if (parameters['ruleId'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: ruleId'));
            return deferred.promise;
        }

        if (parameters['$body'] !== undefined) {
            body = parameters['$body'];
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'PUT',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * Delete rule by ID.
     * @method
     * @name magento#salesRuleRuleRepositoryV1DeleteByIdDelete
     * @param {integer} ruleId - 
     *
     */
    magento.prototype.salesRuleRuleRepositoryV1DeleteByIdDelete = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/salesRules/{ruleId}';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        path = path.replace('{ruleId}', parameters['ruleId']);

        if (parameters['ruleId'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: ruleId'));
            return deferred.promise;
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'DELETE',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * Retrieve sales rules.
     * @method
     * @name magento#salesRuleRuleRepositoryV1GetListGet
     * @param {string} searchCriteria[filterGroups][][filters][][field] - Field
     * @param {string} searchCriteria[filterGroups][][filters][][value] - Value
     * @param {string} searchCriteria[filterGroups][][filters][][conditionType] - Condition type
     * @param {string} searchCriteria[sortOrders][][field] - Sorting field.
     * @param {string} searchCriteria[sortOrders][][direction] - Sorting direction.
     * @param {integer} searchCriteria[pageSize] - Page size.
     * @param {integer} searchCriteria[currentPage] - Current page.
     *
     */
    magento.prototype.salesRuleRuleRepositoryV1GetListGet = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/salesRules/search';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        if (parameters['searchCriteria[filterGroups][][filters][][field]'] !== undefined) {
            queryParameters['searchCriteria[filterGroups][][filters][][field]'] = parameters['searchCriteria[filterGroups][][filters][][field]'];
        }

        if (parameters['searchCriteria[filterGroups][][filters][][value]'] !== undefined) {
            queryParameters['searchCriteria[filterGroups][][filters][][value]'] = parameters['searchCriteria[filterGroups][][filters][][value]'];
        }

        if (parameters['searchCriteria[filterGroups][][filters][][conditionType]'] !== undefined) {
            queryParameters['searchCriteria[filterGroups][][filters][][conditionType]'] = parameters['searchCriteria[filterGroups][][filters][][conditionType]'];
        }

        if (parameters['searchCriteria[sortOrders][][field]'] !== undefined) {
            queryParameters['searchCriteria[sortOrders][][field]'] = parameters['searchCriteria[sortOrders][][field]'];
        }

        if (parameters['searchCriteria[sortOrders][][direction]'] !== undefined) {
            queryParameters['searchCriteria[sortOrders][][direction]'] = parameters['searchCriteria[sortOrders][][direction]'];
        }

        if (parameters['searchCriteria[pageSize]'] !== undefined) {
            queryParameters['searchCriteria[pageSize]'] = parameters['searchCriteria[pageSize]'];
        }

        if (parameters['searchCriteria[currentPage]'] !== undefined) {
            queryParameters['searchCriteria[currentPage]'] = parameters['searchCriteria[currentPage]'];
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'GET',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * Save sales rule.
     * @method
     * @name magento#salesRuleRuleRepositoryV1SavePost
     * @param {} $body - 
     *
     */
    magento.prototype.salesRuleRuleRepositoryV1SavePost = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/salesRules';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        if (parameters['$body'] !== undefined) {
            body = parameters['$body'];
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'POST',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * Get coupon by coupon id.
     * @method
     * @name magento#salesRuleCouponRepositoryV1GetByIdGet
     * @param {integer} couponId - 
     *
     */
    magento.prototype.salesRuleCouponRepositoryV1GetByIdGet = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/coupons/{couponId}';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        path = path.replace('{couponId}', parameters['couponId']);

        if (parameters['couponId'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: couponId'));
            return deferred.promise;
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'GET',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * Save coupon.
     * @method
     * @name magento#salesRuleCouponRepositoryV1SavePut
     * @param {string} couponId - 
     * @param {} $body - 
     *
     */
    magento.prototype.salesRuleCouponRepositoryV1SavePut = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/coupons/{couponId}';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        path = path.replace('{couponId}', parameters['couponId']);

        if (parameters['couponId'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: couponId'));
            return deferred.promise;
        }

        if (parameters['$body'] !== undefined) {
            body = parameters['$body'];
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'PUT',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * Delete coupon by coupon id.
     * @method
     * @name magento#salesRuleCouponRepositoryV1DeleteByIdDelete
     * @param {integer} couponId - 
     *
     */
    magento.prototype.salesRuleCouponRepositoryV1DeleteByIdDelete = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/coupons/{couponId}';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        path = path.replace('{couponId}', parameters['couponId']);

        if (parameters['couponId'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: couponId'));
            return deferred.promise;
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'DELETE',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * Retrieve coupon.
     * @method
     * @name magento#salesRuleCouponRepositoryV1GetListGet
     * @param {string} searchCriteria[filterGroups][][filters][][field] - Field
     * @param {string} searchCriteria[filterGroups][][filters][][value] - Value
     * @param {string} searchCriteria[filterGroups][][filters][][conditionType] - Condition type
     * @param {string} searchCriteria[sortOrders][][field] - Sorting field.
     * @param {string} searchCriteria[sortOrders][][direction] - Sorting direction.
     * @param {integer} searchCriteria[pageSize] - Page size.
     * @param {integer} searchCriteria[currentPage] - Current page.
     *
     */
    magento.prototype.salesRuleCouponRepositoryV1GetListGet = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/coupons/search';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        if (parameters['searchCriteria[filterGroups][][filters][][field]'] !== undefined) {
            queryParameters['searchCriteria[filterGroups][][filters][][field]'] = parameters['searchCriteria[filterGroups][][filters][][field]'];
        }

        if (parameters['searchCriteria[filterGroups][][filters][][value]'] !== undefined) {
            queryParameters['searchCriteria[filterGroups][][filters][][value]'] = parameters['searchCriteria[filterGroups][][filters][][value]'];
        }

        if (parameters['searchCriteria[filterGroups][][filters][][conditionType]'] !== undefined) {
            queryParameters['searchCriteria[filterGroups][][filters][][conditionType]'] = parameters['searchCriteria[filterGroups][][filters][][conditionType]'];
        }

        if (parameters['searchCriteria[sortOrders][][field]'] !== undefined) {
            queryParameters['searchCriteria[sortOrders][][field]'] = parameters['searchCriteria[sortOrders][][field]'];
        }

        if (parameters['searchCriteria[sortOrders][][direction]'] !== undefined) {
            queryParameters['searchCriteria[sortOrders][][direction]'] = parameters['searchCriteria[sortOrders][][direction]'];
        }

        if (parameters['searchCriteria[pageSize]'] !== undefined) {
            queryParameters['searchCriteria[pageSize]'] = parameters['searchCriteria[pageSize]'];
        }

        if (parameters['searchCriteria[currentPage]'] !== undefined) {
            queryParameters['searchCriteria[currentPage]'] = parameters['searchCriteria[currentPage]'];
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'GET',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * Save coupon.
     * @method
     * @name magento#salesRuleCouponRepositoryV1SavePost
     * @param {} $body - 
     *
     */
    magento.prototype.salesRuleCouponRepositoryV1SavePost = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/coupons';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        if (parameters['$body'] !== undefined) {
            body = parameters['$body'];
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'POST',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * Generate coupon for a rule
     * @method
     * @name magento#salesRuleCouponManagementV1GeneratePost
     * @param {} $body - 
     *
     */
    magento.prototype.salesRuleCouponManagementV1GeneratePost = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/coupons/generate';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        if (parameters['$body'] !== undefined) {
            body = parameters['$body'];
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'POST',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * Delete coupon by coupon ids.
     * @method
     * @name magento#salesRuleCouponManagementV1DeleteByIdsPost
     * @param {} $body - 
     *
     */
    magento.prototype.salesRuleCouponManagementV1DeleteByIdsPost = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/coupons/deleteByIds';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        if (parameters['$body'] !== undefined) {
            body = parameters['$body'];
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'POST',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * Delete coupon by coupon codes.
     * @method
     * @name magento#salesRuleCouponManagementV1DeleteByCodesPost
     * @param {} $body - 
     *
     */
    magento.prototype.salesRuleCouponManagementV1DeleteByCodesPost = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/coupons/deleteByCodes';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        if (parameters['$body'] !== undefined) {
            body = parameters['$body'];
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'POST',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * Get all children for Bundle product
     * @method
     * @name magento#configurableProductLinkManagementV1GetChildrenGet
     * @param {string} sku - 
     *
     */
    magento.prototype.configurableProductLinkManagementV1GetChildrenGet = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/configurable-products/{sku}/children';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        path = path.replace('{sku}', parameters['sku']);

        if (parameters['sku'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: sku'));
            return deferred.promise;
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'GET',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * Remove configurable product option
     * @method
     * @name magento#configurableProductLinkManagementV1RemoveChildDelete
     * @param {string} sku - 
     * @param {string} childSku - 
     *
     */
    magento.prototype.configurableProductLinkManagementV1RemoveChildDelete = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/configurable-products/{sku}/children/{childSku}';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        path = path.replace('{sku}', parameters['sku']);

        if (parameters['sku'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: sku'));
            return deferred.promise;
        }

        path = path.replace('{childSku}', parameters['childSku']);

        if (parameters['childSku'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: childSku'));
            return deferred.promise;
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'DELETE',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * 
     * @method
     * @name magento#configurableProductLinkManagementV1AddChildPost
     * @param {string} sku - 
     * @param {} $body - 
     *
     */
    magento.prototype.configurableProductLinkManagementV1AddChildPost = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/configurable-products/{sku}/child';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        path = path.replace('{sku}', parameters['sku']);

        if (parameters['sku'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: sku'));
            return deferred.promise;
        }

        if (parameters['$body'] !== undefined) {
            body = parameters['$body'];
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'POST',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * Generate variation based on same product
     * @method
     * @name magento#configurableProductConfigurableProductManagementV1GenerateVariationPut
     * @param {} $body - 
     *
     */
    magento.prototype.configurableProductConfigurableProductManagementV1GenerateVariationPut = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/configurable-products/variation';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        if (parameters['$body'] !== undefined) {
            body = parameters['$body'];
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'PUT',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * Get option for configurable product
     * @method
     * @name magento#configurableProductOptionRepositoryV1GetGet
     * @param {string} sku - 
     * @param {integer} id - 
     *
     */
    magento.prototype.configurableProductOptionRepositoryV1GetGet = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/configurable-products/{sku}/options/{id}';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        path = path.replace('{sku}', parameters['sku']);

        if (parameters['sku'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: sku'));
            return deferred.promise;
        }

        path = path.replace('{id}', parameters['id']);

        if (parameters['id'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: id'));
            return deferred.promise;
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'GET',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * Save option
     * @method
     * @name magento#configurableProductOptionRepositoryV1SavePut
     * @param {string} sku - 
     * @param {string} id - 
     * @param {} $body - 
     *
     */
    magento.prototype.configurableProductOptionRepositoryV1SavePut = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/configurable-products/{sku}/options/{id}';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        path = path.replace('{sku}', parameters['sku']);

        if (parameters['sku'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: sku'));
            return deferred.promise;
        }

        path = path.replace('{id}', parameters['id']);

        if (parameters['id'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: id'));
            return deferred.promise;
        }

        if (parameters['$body'] !== undefined) {
            body = parameters['$body'];
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'PUT',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * Remove option from configurable product
     * @method
     * @name magento#configurableProductOptionRepositoryV1DeleteByIdDelete
     * @param {string} sku - 
     * @param {integer} id - 
     *
     */
    magento.prototype.configurableProductOptionRepositoryV1DeleteByIdDelete = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/configurable-products/{sku}/options/{id}';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        path = path.replace('{sku}', parameters['sku']);

        if (parameters['sku'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: sku'));
            return deferred.promise;
        }

        path = path.replace('{id}', parameters['id']);

        if (parameters['id'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: id'));
            return deferred.promise;
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'DELETE',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * Get all options for configurable product
     * @method
     * @name magento#configurableProductOptionRepositoryV1GetListGet
     * @param {string} sku - 
     *
     */
    magento.prototype.configurableProductOptionRepositoryV1GetListGet = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/configurable-products/{sku}/options/all';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        path = path.replace('{sku}', parameters['sku']);

        if (parameters['sku'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: sku'));
            return deferred.promise;
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'GET',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * Save option
     * @method
     * @name magento#configurableProductOptionRepositoryV1SavePost
     * @param {string} sku - 
     * @param {} $body - 
     *
     */
    magento.prototype.configurableProductOptionRepositoryV1SavePost = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/configurable-products/{sku}/options';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        path = path.replace('{sku}', parameters['sku']);

        if (parameters['sku'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: sku'));
            return deferred.promise;
        }

        if (parameters['$body'] !== undefined) {
            body = parameters['$body'];
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'POST',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * Create or update tax rate
     * @method
     * @name magento#taxTaxRateRepositoryV1SavePost
     * @param {} $body - 
     *
     */
    magento.prototype.taxTaxRateRepositoryV1SavePost = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/taxRates';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        if (parameters['$body'] !== undefined) {
            body = parameters['$body'];
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'POST',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * Create or update tax rate
     * @method
     * @name magento#taxTaxRateRepositoryV1SavePut
     * @param {} $body - 
     *
     */
    magento.prototype.taxTaxRateRepositoryV1SavePut = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/taxRates';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        if (parameters['$body'] !== undefined) {
            body = parameters['$body'];
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'PUT',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * Get tax rate
     * @method
     * @name magento#taxTaxRateRepositoryV1GetGet
     * @param {integer} rateId - 
     *
     */
    magento.prototype.taxTaxRateRepositoryV1GetGet = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/taxRates/{rateId}';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        path = path.replace('{rateId}', parameters['rateId']);

        if (parameters['rateId'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: rateId'));
            return deferred.promise;
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'GET',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * Delete tax rate
     * @method
     * @name magento#taxTaxRateRepositoryV1DeleteByIdDelete
     * @param {integer} rateId - 
     *
     */
    magento.prototype.taxTaxRateRepositoryV1DeleteByIdDelete = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/taxRates/{rateId}';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        path = path.replace('{rateId}', parameters['rateId']);

        if (parameters['rateId'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: rateId'));
            return deferred.promise;
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'DELETE',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * Search TaxRates
     * @method
     * @name magento#taxTaxRateRepositoryV1GetListGet
     * @param {string} searchCriteria[filterGroups][][filters][][field] - Field
     * @param {string} searchCriteria[filterGroups][][filters][][value] - Value
     * @param {string} searchCriteria[filterGroups][][filters][][conditionType] - Condition type
     * @param {string} searchCriteria[sortOrders][][field] - Sorting field.
     * @param {string} searchCriteria[sortOrders][][direction] - Sorting direction.
     * @param {integer} searchCriteria[pageSize] - Page size.
     * @param {integer} searchCriteria[currentPage] - Current page.
     *
     */
    magento.prototype.taxTaxRateRepositoryV1GetListGet = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/taxRates/search';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        if (parameters['searchCriteria[filterGroups][][filters][][field]'] !== undefined) {
            queryParameters['searchCriteria[filterGroups][][filters][][field]'] = parameters['searchCriteria[filterGroups][][filters][][field]'];
        }

        if (parameters['searchCriteria[filterGroups][][filters][][value]'] !== undefined) {
            queryParameters['searchCriteria[filterGroups][][filters][][value]'] = parameters['searchCriteria[filterGroups][][filters][][value]'];
        }

        if (parameters['searchCriteria[filterGroups][][filters][][conditionType]'] !== undefined) {
            queryParameters['searchCriteria[filterGroups][][filters][][conditionType]'] = parameters['searchCriteria[filterGroups][][filters][][conditionType]'];
        }

        if (parameters['searchCriteria[sortOrders][][field]'] !== undefined) {
            queryParameters['searchCriteria[sortOrders][][field]'] = parameters['searchCriteria[sortOrders][][field]'];
        }

        if (parameters['searchCriteria[sortOrders][][direction]'] !== undefined) {
            queryParameters['searchCriteria[sortOrders][][direction]'] = parameters['searchCriteria[sortOrders][][direction]'];
        }

        if (parameters['searchCriteria[pageSize]'] !== undefined) {
            queryParameters['searchCriteria[pageSize]'] = parameters['searchCriteria[pageSize]'];
        }

        if (parameters['searchCriteria[currentPage]'] !== undefined) {
            queryParameters['searchCriteria[currentPage]'] = parameters['searchCriteria[currentPage]'];
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'GET',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * Save TaxRule
     * @method
     * @name magento#taxTaxRuleRepositoryV1SavePost
     * @param {} $body - 
     *
     */
    magento.prototype.taxTaxRuleRepositoryV1SavePost = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/taxRules';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        if (parameters['$body'] !== undefined) {
            body = parameters['$body'];
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'POST',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * Save TaxRule
     * @method
     * @name magento#taxTaxRuleRepositoryV1SavePut
     * @param {} $body - 
     *
     */
    magento.prototype.taxTaxRuleRepositoryV1SavePut = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/taxRules';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        if (parameters['$body'] !== undefined) {
            body = parameters['$body'];
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'PUT',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * Delete TaxRule
     * @method
     * @name magento#taxTaxRuleRepositoryV1DeleteByIdDelete
     * @param {integer} ruleId - 
     *
     */
    magento.prototype.taxTaxRuleRepositoryV1DeleteByIdDelete = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/taxRules/{ruleId}';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        path = path.replace('{ruleId}', parameters['ruleId']);

        if (parameters['ruleId'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: ruleId'));
            return deferred.promise;
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'DELETE',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * Get TaxRule
     * @method
     * @name magento#taxTaxRuleRepositoryV1GetGet
     * @param {integer} ruleId - 
     *
     */
    magento.prototype.taxTaxRuleRepositoryV1GetGet = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/taxRules/{ruleId}';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        path = path.replace('{ruleId}', parameters['ruleId']);

        if (parameters['ruleId'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: ruleId'));
            return deferred.promise;
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'GET',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * Search TaxRules
     * @method
     * @name magento#taxTaxRuleRepositoryV1GetListGet
     * @param {string} searchCriteria[filterGroups][][filters][][field] - Field
     * @param {string} searchCriteria[filterGroups][][filters][][value] - Value
     * @param {string} searchCriteria[filterGroups][][filters][][conditionType] - Condition type
     * @param {string} searchCriteria[sortOrders][][field] - Sorting field.
     * @param {string} searchCriteria[sortOrders][][direction] - Sorting direction.
     * @param {integer} searchCriteria[pageSize] - Page size.
     * @param {integer} searchCriteria[currentPage] - Current page.
     *
     */
    magento.prototype.taxTaxRuleRepositoryV1GetListGet = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/taxRules/search';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        if (parameters['searchCriteria[filterGroups][][filters][][field]'] !== undefined) {
            queryParameters['searchCriteria[filterGroups][][filters][][field]'] = parameters['searchCriteria[filterGroups][][filters][][field]'];
        }

        if (parameters['searchCriteria[filterGroups][][filters][][value]'] !== undefined) {
            queryParameters['searchCriteria[filterGroups][][filters][][value]'] = parameters['searchCriteria[filterGroups][][filters][][value]'];
        }

        if (parameters['searchCriteria[filterGroups][][filters][][conditionType]'] !== undefined) {
            queryParameters['searchCriteria[filterGroups][][filters][][conditionType]'] = parameters['searchCriteria[filterGroups][][filters][][conditionType]'];
        }

        if (parameters['searchCriteria[sortOrders][][field]'] !== undefined) {
            queryParameters['searchCriteria[sortOrders][][field]'] = parameters['searchCriteria[sortOrders][][field]'];
        }

        if (parameters['searchCriteria[sortOrders][][direction]'] !== undefined) {
            queryParameters['searchCriteria[sortOrders][][direction]'] = parameters['searchCriteria[sortOrders][][direction]'];
        }

        if (parameters['searchCriteria[pageSize]'] !== undefined) {
            queryParameters['searchCriteria[pageSize]'] = parameters['searchCriteria[pageSize]'];
        }

        if (parameters['searchCriteria[currentPage]'] !== undefined) {
            queryParameters['searchCriteria[currentPage]'] = parameters['searchCriteria[currentPage]'];
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'GET',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * Create a Tax Class
     * @method
     * @name magento#taxTaxClassRepositoryV1SavePost
     * @param {} $body - 
     *
     */
    magento.prototype.taxTaxClassRepositoryV1SavePost = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/taxClasses';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        if (parameters['$body'] !== undefined) {
            body = parameters['$body'];
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'POST',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * Get a tax class with the given tax class id.
     * @method
     * @name magento#taxTaxClassRepositoryV1GetGet
     * @param {integer} taxClassId - 
     *
     */
    magento.prototype.taxTaxClassRepositoryV1GetGet = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/taxClasses/{taxClassId}';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        path = path.replace('{taxClassId}', parameters['taxClassId']);

        if (parameters['taxClassId'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: taxClassId'));
            return deferred.promise;
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'GET',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * Delete a tax class with the given tax class id.
     * @method
     * @name magento#taxTaxClassRepositoryV1DeleteByIdDelete
     * @param {integer} taxClassId - 
     *
     */
    magento.prototype.taxTaxClassRepositoryV1DeleteByIdDelete = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/taxClasses/{taxClassId}';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        path = path.replace('{taxClassId}', parameters['taxClassId']);

        if (parameters['taxClassId'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: taxClassId'));
            return deferred.promise;
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'DELETE',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * Create a Tax Class
     * @method
     * @name magento#taxTaxClassRepositoryV1SavePut
     * @param {string} classId - 
     * @param {} $body - 
     *
     */
    magento.prototype.taxTaxClassRepositoryV1SavePut = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/taxClasses/{classId}';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        path = path.replace('{classId}', parameters['classId']);

        if (parameters['classId'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: classId'));
            return deferred.promise;
        }

        if (parameters['$body'] !== undefined) {
            body = parameters['$body'];
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'PUT',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * Retrieve tax classes which match a specific criteria.
     * @method
     * @name magento#taxTaxClassRepositoryV1GetListGet
     * @param {string} searchCriteria[filterGroups][][filters][][field] - Field
     * @param {string} searchCriteria[filterGroups][][filters][][value] - Value
     * @param {string} searchCriteria[filterGroups][][filters][][conditionType] - Condition type
     * @param {string} searchCriteria[sortOrders][][field] - Sorting field.
     * @param {string} searchCriteria[sortOrders][][direction] - Sorting direction.
     * @param {integer} searchCriteria[pageSize] - Page size.
     * @param {integer} searchCriteria[currentPage] - Current page.
     *
     */
    magento.prototype.taxTaxClassRepositoryV1GetListGet = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/taxClasses/search';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        if (parameters['searchCriteria[filterGroups][][filters][][field]'] !== undefined) {
            queryParameters['searchCriteria[filterGroups][][filters][][field]'] = parameters['searchCriteria[filterGroups][][filters][][field]'];
        }

        if (parameters['searchCriteria[filterGroups][][filters][][value]'] !== undefined) {
            queryParameters['searchCriteria[filterGroups][][filters][][value]'] = parameters['searchCriteria[filterGroups][][filters][][value]'];
        }

        if (parameters['searchCriteria[filterGroups][][filters][][conditionType]'] !== undefined) {
            queryParameters['searchCriteria[filterGroups][][filters][][conditionType]'] = parameters['searchCriteria[filterGroups][][filters][][conditionType]'];
        }

        if (parameters['searchCriteria[sortOrders][][field]'] !== undefined) {
            queryParameters['searchCriteria[sortOrders][][field]'] = parameters['searchCriteria[sortOrders][][field]'];
        }

        if (parameters['searchCriteria[sortOrders][][direction]'] !== undefined) {
            queryParameters['searchCriteria[sortOrders][][direction]'] = parameters['searchCriteria[sortOrders][][direction]'];
        }

        if (parameters['searchCriteria[pageSize]'] !== undefined) {
            queryParameters['searchCriteria[pageSize]'] = parameters['searchCriteria[pageSize]'];
        }

        if (parameters['searchCriteria[currentPage]'] !== undefined) {
            queryParameters['searchCriteria[currentPage]'] = parameters['searchCriteria[currentPage]'];
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'GET',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * Return the gift message for a specified order.
     * @method
     * @name magento#giftMessageCartRepositoryV1GetGet
     * @param {integer} cartId - The shopping cart ID.
     *
     */
    magento.prototype.giftMessageCartRepositoryV1GetGet = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/carts/{cartId}/gift-message';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        path = path.replace('{cartId}', parameters['cartId']);

        if (parameters['cartId'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: cartId'));
            return deferred.promise;
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'GET',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * Set the gift message for an entire order.
     * @method
     * @name magento#giftMessageCartRepositoryV1SavePost
     * @param {integer} cartId - The cart ID.
     * @param {} $body - 
     *
     */
    magento.prototype.giftMessageCartRepositoryV1SavePost = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/carts/{cartId}/gift-message';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        path = path.replace('{cartId}', parameters['cartId']);

        if (parameters['cartId'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: cartId'));
            return deferred.promise;
        }

        if (parameters['$body'] !== undefined) {
            body = parameters['$body'];
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'POST',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * Return the gift message for a specified order.
     * @method
     * @name magento#giftMessageCartRepositoryV1GetGet
     *
     */
    magento.prototype.giftMessageCartRepositoryV1GetGet = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/carts/mine/gift-message';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'GET',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * Set the gift message for an entire order.
     * @method
     * @name magento#giftMessageCartRepositoryV1SavePost
     * @param {} $body - 
     *
     */
    magento.prototype.giftMessageCartRepositoryV1SavePost = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/carts/mine/gift-message';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        if (parameters['$body'] !== undefined) {
            body = parameters['$body'];
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'POST',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * Return the gift message for a specified item in a specified shopping cart.
     * @method
     * @name magento#giftMessageItemRepositoryV1GetGet
     * @param {integer} cartId - The shopping cart ID.
     * @param {integer} itemId - The item ID.
     *
     */
    magento.prototype.giftMessageItemRepositoryV1GetGet = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/carts/{cartId}/gift-message/{itemId}';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        path = path.replace('{cartId}', parameters['cartId']);

        if (parameters['cartId'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: cartId'));
            return deferred.promise;
        }

        path = path.replace('{itemId}', parameters['itemId']);

        if (parameters['itemId'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: itemId'));
            return deferred.promise;
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'GET',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * Set the gift message for a specified item in a specified shopping cart.
     * @method
     * @name magento#giftMessageItemRepositoryV1SavePost
     * @param {integer} cartId - The cart ID.
     * @param {integer} itemId - The item ID.
     * @param {} $body - 
     *
     */
    magento.prototype.giftMessageItemRepositoryV1SavePost = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/carts/{cartId}/gift-message/{itemId}';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        path = path.replace('{cartId}', parameters['cartId']);

        if (parameters['cartId'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: cartId'));
            return deferred.promise;
        }

        path = path.replace('{itemId}', parameters['itemId']);

        if (parameters['itemId'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: itemId'));
            return deferred.promise;
        }

        if (parameters['$body'] !== undefined) {
            body = parameters['$body'];
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'POST',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * Return the gift message for a specified item in a specified shopping cart.
     * @method
     * @name magento#giftMessageItemRepositoryV1GetGet
     * @param {integer} itemId - The item ID.
     *
     */
    magento.prototype.giftMessageItemRepositoryV1GetGet = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/carts/mine/gift-message/{itemId}';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        path = path.replace('{itemId}', parameters['itemId']);

        if (parameters['itemId'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: itemId'));
            return deferred.promise;
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'GET',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * Set the gift message for a specified item in a specified shopping cart.
     * @method
     * @name magento#giftMessageItemRepositoryV1SavePost
     * @param {integer} itemId - The item ID.
     * @param {} $body - 
     *
     */
    magento.prototype.giftMessageItemRepositoryV1SavePost = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/carts/mine/gift-message/{itemId}';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        path = path.replace('{itemId}', parameters['itemId']);

        if (parameters['itemId'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: itemId'));
            return deferred.promise;
        }

        if (parameters['$body'] !== undefined) {
            body = parameters['$body'];
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'POST',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * Return the gift message for a specified order.
     * @method
     * @name magento#giftMessageGuestCartRepositoryV1GetGet
     * @param {string} cartId - The shopping cart ID.
     *
     */
    magento.prototype.giftMessageGuestCartRepositoryV1GetGet = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/guest-carts/{cartId}/gift-message';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        path = path.replace('{cartId}', parameters['cartId']);

        if (parameters['cartId'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: cartId'));
            return deferred.promise;
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'GET',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * Set the gift message for an entire order.
     * @method
     * @name magento#giftMessageGuestCartRepositoryV1SavePost
     * @param {string} cartId - The cart ID.
     * @param {} $body - 
     *
     */
    magento.prototype.giftMessageGuestCartRepositoryV1SavePost = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/guest-carts/{cartId}/gift-message';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        path = path.replace('{cartId}', parameters['cartId']);

        if (parameters['cartId'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: cartId'));
            return deferred.promise;
        }

        if (parameters['$body'] !== undefined) {
            body = parameters['$body'];
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'POST',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * Return the gift message for a specified item in a specified shopping cart.
     * @method
     * @name magento#giftMessageGuestItemRepositoryV1GetGet
     * @param {string} cartId - The shopping cart ID.
     * @param {integer} itemId - The item ID.
     *
     */
    magento.prototype.giftMessageGuestItemRepositoryV1GetGet = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/guest-carts/{cartId}/gift-message/{itemId}';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        path = path.replace('{cartId}', parameters['cartId']);

        if (parameters['cartId'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: cartId'));
            return deferred.promise;
        }

        path = path.replace('{itemId}', parameters['itemId']);

        if (parameters['itemId'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: itemId'));
            return deferred.promise;
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'GET',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };
    /**
     * Set the gift message for a specified item in a specified shopping cart.
     * @method
     * @name magento#giftMessageGuestItemRepositoryV1SavePost
     * @param {string} cartId - The cart ID.
     * @param {integer} itemId - The item ID.
     * @param {} $body - 
     *
     */
    magento.prototype.giftMessageGuestItemRepositoryV1SavePost = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = $q.defer();

        var domain = this.domain;
        var path = '/V1/guest-carts/{cartId}/gift-message/{itemId}';

        var body;
        var queryParameters = {};
        var headers = {};
        var form = {};

        path = path.replace('{cartId}', parameters['cartId']);

        if (parameters['cartId'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: cartId'));
            return deferred.promise;
        }

        path = path.replace('{itemId}', parameters['itemId']);

        if (parameters['itemId'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: itemId'));
            return deferred.promise;
        }

        if (parameters['$body'] !== undefined) {
            body = parameters['$body'];
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }

        var req = {
            method: 'POST',
            uri: domain + path,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if (Object.keys(form).length > 0) {
            req.form = form;
        }
        if (typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {

                    }
                }
                if (response.statusCode === 204) {
                    deferred.resolve({
                        response: response
                    });
                } else if (response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({
                        response: response,
                        body: body
                    });
                } else {
                    deferred.reject({
                        response: response,
                        body: body
                    });
                }
            }
        });

        return deferred.promise;
    };

    return magento;
})();

exports.magento = magento;