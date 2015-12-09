/*jshint -W069 */
/**
 * 
 * @class Magento
 * @param {(string|object)} [domainOrOptions] - The project domain or options object. If object, see the object's optional properties.
 * @param {string} [domainOrOptions.domain] - The project domain
 * @param {object} [domainOrOptions.token] - auth token - object with value property and optional headerOrQueryName and isQuery properties
 */
var Magento = (function() {
    'use strict';

    var request = require('request');
    var Q = require('q');

    function Magento(options) {
        var domain = (typeof options === 'object') ? options.domain : options;
        this.domain = domain ? domain : 'http://example.com/rest/default';
        if (this.domain.length === 0) {
            throw new Error('Domain parameter must be specified as a string.');
        }
    }

    /**
     * Retrieve list of all stores
     * @method storeStoreRepositoryV1GetListGet
     * @name Magento#storeStoreRepositoryV1GetListGet
     *
     */
    Magento.prototype.storeStoreRepositoryV1GetListGet = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method storeGroupRepositoryV1GetListGet
     * @name Magento#storeGroupRepositoryV1GetListGet
     *
     */
    Magento.prototype.storeGroupRepositoryV1GetListGet = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method storeWebsiteRepositoryV1GetListGet
     * @name Magento#storeWebsiteRepositoryV1GetListGet
     *
     */
    Magento.prototype.storeWebsiteRepositoryV1GetListGet = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method storeStoreConfigManagerV1GetStoreConfigsGet
     * @name Magento#storeStoreConfigManagerV1GetStoreConfigsGet
     * @param {array} storeCodes - 
     *
     */
    Magento.prototype.storeStoreConfigManagerV1GetStoreConfigsGet = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method directoryCurrencyInformationAcquirerV1GetCurrencyInfoGet
     * @name Magento#directoryCurrencyInformationAcquirerV1GetCurrencyInfoGet
     *
     */
    Magento.prototype.directoryCurrencyInformationAcquirerV1GetCurrencyInfoGet = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method directoryCountryInformationAcquirerV1GetCountriesInfoGet
     * @name Magento#directoryCountryInformationAcquirerV1GetCountriesInfoGet
     *
     */
    Magento.prototype.directoryCountryInformationAcquirerV1GetCountriesInfoGet = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method directoryCountryInformationAcquirerV1GetCountryInfoGet
     * @name Magento#directoryCountryInformationAcquirerV1GetCountryInfoGet
     * @param {string} countryId - 
     *
     */
    Magento.prototype.directoryCountryInformationAcquirerV1GetCountryInfoGet = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method backendModuleServiceV1GetModulesGet
     * @name Magento#backendModuleServiceV1GetModulesGet
     *
     */
    Magento.prototype.backendModuleServiceV1GetModulesGet = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method eavAttributeSetRepositoryV1GetListGet
     * @name Magento#eavAttributeSetRepositoryV1GetListGet
     * @param {string} searchCriteria[filterGroups][][filters][][field] - Field
     * @param {string} searchCriteria[filterGroups][][filters][][value] - Value
     * @param {string} searchCriteria[filterGroups][][filters][][conditionType] - Condition type
     * @param {string} searchCriteria[sortOrders][][field] - Sorting field.
     * @param {string} searchCriteria[sortOrders][][direction] - Sorting direction.
     * @param {integer} searchCriteria[pageSize] - Page size.
     * @param {integer} searchCriteria[currentPage] - Current page.
     *
     */
    Magento.prototype.eavAttributeSetRepositoryV1GetListGet = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method eavAttributeSetRepositoryV1GetGet
     * @name Magento#eavAttributeSetRepositoryV1GetGet
     * @param {integer} attributeSetId - 
     *
     */
    Magento.prototype.eavAttributeSetRepositoryV1GetGet = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method eavAttributeSetRepositoryV1DeleteByIdDelete
     * @name Magento#eavAttributeSetRepositoryV1DeleteByIdDelete
     * @param {integer} attributeSetId - 
     *
     */
    Magento.prototype.eavAttributeSetRepositoryV1DeleteByIdDelete = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method eavAttributeSetRepositoryV1SavePut
     * @name Magento#eavAttributeSetRepositoryV1SavePut
     * @param {string} attributeSetId - 
     * @param {} $body - 
     *
     */
    Magento.prototype.eavAttributeSetRepositoryV1SavePut = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method eavAttributeSetManagementV1CreatePost
     * @name Magento#eavAttributeSetManagementV1CreatePost
     * @param {} $body - 
     *
     */
    Magento.prototype.eavAttributeSetManagementV1CreatePost = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method customerGroupRepositoryV1GetByIdGet
     * @name Magento#customerGroupRepositoryV1GetByIdGet
     * @param {integer} id - 
     *
     */
    Magento.prototype.customerGroupRepositoryV1GetByIdGet = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method customerGroupRepositoryV1SavePut
     * @name Magento#customerGroupRepositoryV1SavePut
     * @param {string} id - 
     * @param {} $body - 
     *
     */
    Magento.prototype.customerGroupRepositoryV1SavePut = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method customerGroupRepositoryV1DeleteByIdDelete
     * @name Magento#customerGroupRepositoryV1DeleteByIdDelete
     * @param {integer} id - 
     *
     */
    Magento.prototype.customerGroupRepositoryV1DeleteByIdDelete = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method customerGroupRepositoryV1GetListGet
     * @name Magento#customerGroupRepositoryV1GetListGet
     * @param {string} searchCriteria[filterGroups][][filters][][field] - Field
     * @param {string} searchCriteria[filterGroups][][filters][][value] - Value
     * @param {string} searchCriteria[filterGroups][][filters][][conditionType] - Condition type
     * @param {string} searchCriteria[sortOrders][][field] - Sorting field.
     * @param {string} searchCriteria[sortOrders][][direction] - Sorting direction.
     * @param {integer} searchCriteria[pageSize] - Page size.
     * @param {integer} searchCriteria[currentPage] - Current page.
     *
     */
    Magento.prototype.customerGroupRepositoryV1GetListGet = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method customerGroupRepositoryV1SavePost
     * @name Magento#customerGroupRepositoryV1SavePost
     * @param {} $body - 
     *
     */
    Magento.prototype.customerGroupRepositoryV1SavePost = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method customerGroupManagementV1GetDefaultGroupGet
     * @name Magento#customerGroupManagementV1GetDefaultGroupGet
     * @param {integer} storeId - 
     *
     */
    Magento.prototype.customerGroupManagementV1GetDefaultGroupGet = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method customerGroupManagementV1GetDefaultGroupGet
     * @name Magento#customerGroupManagementV1GetDefaultGroupGet
     * @param {integer} storeId - 
     *
     */
    Magento.prototype.customerGroupManagementV1GetDefaultGroupGet = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method customerGroupManagementV1IsReadonlyGet
     * @name Magento#customerGroupManagementV1IsReadonlyGet
     * @param {integer} id - 
     *
     */
    Magento.prototype.customerGroupManagementV1IsReadonlyGet = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method customerCustomerMetadataV1GetAttributeMetadataGet
     * @name Magento#customerCustomerMetadataV1GetAttributeMetadataGet
     * @param {string} attributeCode - 
     *
     */
    Magento.prototype.customerCustomerMetadataV1GetAttributeMetadataGet = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method customerCustomerMetadataV1GetAttributesGet
     * @name Magento#customerCustomerMetadataV1GetAttributesGet
     * @param {string} formCode - 
     *
     */
    Magento.prototype.customerCustomerMetadataV1GetAttributesGet = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method customerCustomerMetadataV1GetAllAttributesMetadataGet
     * @name Magento#customerCustomerMetadataV1GetAllAttributesMetadataGet
     *
     */
    Magento.prototype.customerCustomerMetadataV1GetAllAttributesMetadataGet = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method customerCustomerMetadataV1GetCustomAttributesMetadataGet
     * @name Magento#customerCustomerMetadataV1GetCustomAttributesMetadataGet
     * @param {string} dataInterfaceName - 
     *
     */
    Magento.prototype.customerCustomerMetadataV1GetCustomAttributesMetadataGet = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method customerAddressMetadataV1GetAttributeMetadataGet
     * @name Magento#customerAddressMetadataV1GetAttributeMetadataGet
     * @param {string} attributeCode - 
     *
     */
    Magento.prototype.customerAddressMetadataV1GetAttributeMetadataGet = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method customerAddressMetadataV1GetAttributesGet
     * @name Magento#customerAddressMetadataV1GetAttributesGet
     * @param {string} formCode - 
     *
     */
    Magento.prototype.customerAddressMetadataV1GetAttributesGet = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method customerAddressMetadataV1GetAllAttributesMetadataGet
     * @name Magento#customerAddressMetadataV1GetAllAttributesMetadataGet
     *
     */
    Magento.prototype.customerAddressMetadataV1GetAllAttributesMetadataGet = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method customerAddressMetadataV1GetCustomAttributesMetadataGet
     * @name Magento#customerAddressMetadataV1GetCustomAttributesMetadataGet
     * @param {string} dataInterfaceName - 
     *
     */
    Magento.prototype.customerAddressMetadataV1GetCustomAttributesMetadataGet = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method customerCustomerRepositoryV1GetByIdGet
     * @name Magento#customerCustomerRepositoryV1GetByIdGet
     * @param {integer} customerId - 
     *
     */
    Magento.prototype.customerCustomerRepositoryV1GetByIdGet = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method customerCustomerRepositoryV1DeleteByIdDelete
     * @name Magento#customerCustomerRepositoryV1DeleteByIdDelete
     * @param {integer} customerId - 
     *
     */
    Magento.prototype.customerCustomerRepositoryV1DeleteByIdDelete = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method customerCustomerRepositoryV1SavePut
     * @name Magento#customerCustomerRepositoryV1SavePut
     * @param {string} id - 
     * @param {} $body - 
     *
     */
    Magento.prototype.customerCustomerRepositoryV1SavePut = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method customerCustomerRepositoryV1SavePut
     * @name Magento#customerCustomerRepositoryV1SavePut
     * @param {} $body - 
     *
     */
    Magento.prototype.customerCustomerRepositoryV1SavePut = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method customerCustomerRepositoryV1GetByIdGet
     * @name Magento#customerCustomerRepositoryV1GetByIdGet
     *
     */
    Magento.prototype.customerCustomerRepositoryV1GetByIdGet = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method customerCustomerRepositoryV1GetListGet
     * @name Magento#customerCustomerRepositoryV1GetListGet
     * @param {string} searchCriteria[filterGroups][][filters][][field] - Field
     * @param {string} searchCriteria[filterGroups][][filters][][value] - Value
     * @param {string} searchCriteria[filterGroups][][filters][][conditionType] - Condition type
     * @param {string} searchCriteria[sortOrders][][field] - Sorting field.
     * @param {string} searchCriteria[sortOrders][][direction] - Sorting direction.
     * @param {integer} searchCriteria[pageSize] - Page size.
     * @param {integer} searchCriteria[currentPage] - Current page.
     *
     */
    Magento.prototype.customerCustomerRepositoryV1GetListGet = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method customerAccountManagementV1CreateAccountPost
     * @name Magento#customerAccountManagementV1CreateAccountPost
     * @param {} $body - 
     *
     */
    Magento.prototype.customerAccountManagementV1CreateAccountPost = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method customerAccountManagementV1ActivateByIdPut
     * @name Magento#customerAccountManagementV1ActivateByIdPut
     * @param {} $body - 
     *
     */
    Magento.prototype.customerAccountManagementV1ActivateByIdPut = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method customerAccountManagementV1ActivatePut
     * @name Magento#customerAccountManagementV1ActivatePut
     * @param {string} email - 
     * @param {} $body - 
     *
     */
    Magento.prototype.customerAccountManagementV1ActivatePut = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method customerAccountManagementV1ChangePasswordByIdPut
     * @name Magento#customerAccountManagementV1ChangePasswordByIdPut
     * @param {} $body - 
     *
     */
    Magento.prototype.customerAccountManagementV1ChangePasswordByIdPut = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method customerAccountManagementV1ValidateResetPasswordLinkTokenGet
     * @name Magento#customerAccountManagementV1ValidateResetPasswordLinkTokenGet
     * @param {integer} customerId - 
     * @param {string} resetPasswordLinkToken - 
     *
     */
    Magento.prototype.customerAccountManagementV1ValidateResetPasswordLinkTokenGet = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method customerAccountManagementV1InitiatePasswordResetPut
     * @name Magento#customerAccountManagementV1InitiatePasswordResetPut
     * @param {} $body - 
     *
     */
    Magento.prototype.customerAccountManagementV1InitiatePasswordResetPut = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method customerAccountManagementV1GetConfirmationStatusGet
     * @name Magento#customerAccountManagementV1GetConfirmationStatusGet
     * @param {integer} customerId - 
     *
     */
    Magento.prototype.customerAccountManagementV1GetConfirmationStatusGet = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method customerAccountManagementV1ResendConfirmationPost
     * @name Magento#customerAccountManagementV1ResendConfirmationPost
     * @param {} $body - 
     *
     */
    Magento.prototype.customerAccountManagementV1ResendConfirmationPost = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method customerAccountManagementV1ValidatePut
     * @name Magento#customerAccountManagementV1ValidatePut
     * @param {} $body - 
     *
     */
    Magento.prototype.customerAccountManagementV1ValidatePut = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method customerAccountManagementV1IsReadonlyGet
     * @name Magento#customerAccountManagementV1IsReadonlyGet
     * @param {integer} customerId - 
     *
     */
    Magento.prototype.customerAccountManagementV1IsReadonlyGet = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method customerAccountManagementV1IsEmailAvailablePost
     * @name Magento#customerAccountManagementV1IsEmailAvailablePost
     * @param {} $body - 
     *
     */
    Magento.prototype.customerAccountManagementV1IsEmailAvailablePost = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method customerAccountManagementV1GetDefaultBillingAddressGet
     * @name Magento#customerAccountManagementV1GetDefaultBillingAddressGet
     *
     */
    Magento.prototype.customerAccountManagementV1GetDefaultBillingAddressGet = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method customerAccountManagementV1GetDefaultBillingAddressGet
     * @name Magento#customerAccountManagementV1GetDefaultBillingAddressGet
     * @param {integer} customerId - 
     *
     */
    Magento.prototype.customerAccountManagementV1GetDefaultBillingAddressGet = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method customerAccountManagementV1GetDefaultShippingAddressGet
     * @name Magento#customerAccountManagementV1GetDefaultShippingAddressGet
     *
     */
    Magento.prototype.customerAccountManagementV1GetDefaultShippingAddressGet = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method customerAccountManagementV1GetDefaultShippingAddressGet
     * @name Magento#customerAccountManagementV1GetDefaultShippingAddressGet
     * @param {integer} customerId - 
     *
     */
    Magento.prototype.customerAccountManagementV1GetDefaultShippingAddressGet = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method customerAddressRepositoryV1GetByIdGet
     * @name Magento#customerAddressRepositoryV1GetByIdGet
     * @param {integer} addressId - 
     *
     */
    Magento.prototype.customerAddressRepositoryV1GetByIdGet = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method customerAddressRepositoryV1DeleteByIdDelete
     * @name Magento#customerAddressRepositoryV1DeleteByIdDelete
     * @param {integer} addressId - 
     *
     */
    Magento.prototype.customerAddressRepositoryV1DeleteByIdDelete = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method cmsPageRepositoryV1GetByIdGet
     * @name Magento#cmsPageRepositoryV1GetByIdGet
     * @param {integer} pageId - 
     *
     */
    Magento.prototype.cmsPageRepositoryV1GetByIdGet = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method cmsPageRepositoryV1DeleteByIdDelete
     * @name Magento#cmsPageRepositoryV1DeleteByIdDelete
     * @param {integer} pageId - 
     *
     */
    Magento.prototype.cmsPageRepositoryV1DeleteByIdDelete = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method cmsPageRepositoryV1GetListGet
     * @name Magento#cmsPageRepositoryV1GetListGet
     * @param {string} searchCriteria[filterGroups][][filters][][field] - Field
     * @param {string} searchCriteria[filterGroups][][filters][][value] - Value
     * @param {string} searchCriteria[filterGroups][][filters][][conditionType] - Condition type
     * @param {string} searchCriteria[sortOrders][][field] - Sorting field.
     * @param {string} searchCriteria[sortOrders][][direction] - Sorting direction.
     * @param {integer} searchCriteria[pageSize] - Page size.
     * @param {integer} searchCriteria[currentPage] - Current page.
     *
     */
    Magento.prototype.cmsPageRepositoryV1GetListGet = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method cmsPageRepositoryV1SavePost
     * @name Magento#cmsPageRepositoryV1SavePost
     * @param {} $body - 
     *
     */
    Magento.prototype.cmsPageRepositoryV1SavePost = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method cmsPageRepositoryV1SavePut
     * @name Magento#cmsPageRepositoryV1SavePut
     * @param {string} id - 
     * @param {} $body - 
     *
     */
    Magento.prototype.cmsPageRepositoryV1SavePut = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method cmsBlockRepositoryV1GetByIdGet
     * @name Magento#cmsBlockRepositoryV1GetByIdGet
     * @param {integer} blockId - 
     *
     */
    Magento.prototype.cmsBlockRepositoryV1GetByIdGet = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method cmsBlockRepositoryV1DeleteByIdDelete
     * @name Magento#cmsBlockRepositoryV1DeleteByIdDelete
     * @param {integer} blockId - 
     *
     */
    Magento.prototype.cmsBlockRepositoryV1DeleteByIdDelete = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method cmsBlockRepositoryV1GetListGet
     * @name Magento#cmsBlockRepositoryV1GetListGet
     * @param {string} searchCriteria[filterGroups][][filters][][field] - Field
     * @param {string} searchCriteria[filterGroups][][filters][][value] - Value
     * @param {string} searchCriteria[filterGroups][][filters][][conditionType] - Condition type
     * @param {string} searchCriteria[sortOrders][][field] - Sorting field.
     * @param {string} searchCriteria[sortOrders][][direction] - Sorting direction.
     * @param {integer} searchCriteria[pageSize] - Page size.
     * @param {integer} searchCriteria[currentPage] - Current page.
     *
     */
    Magento.prototype.cmsBlockRepositoryV1GetListGet = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method cmsBlockRepositoryV1SavePost
     * @name Magento#cmsBlockRepositoryV1SavePost
     * @param {} $body - 
     *
     */
    Magento.prototype.cmsBlockRepositoryV1SavePost = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method cmsBlockRepositoryV1SavePut
     * @name Magento#cmsBlockRepositoryV1SavePut
     * @param {string} id - 
     * @param {} $body - 
     *
     */
    Magento.prototype.cmsBlockRepositoryV1SavePut = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method catalogProductRepositoryV1SavePost
     * @name Magento#catalogProductRepositoryV1SavePost
     * @param {} $body - 
     *
     */
    Magento.prototype.catalogProductRepositoryV1SavePost = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method catalogProductRepositoryV1GetListGet
     * @name Magento#catalogProductRepositoryV1GetListGet
     * @param {string} searchCriteria[filterGroups][][filters][][field] - Field
     * @param {string} searchCriteria[filterGroups][][filters][][value] - Value
     * @param {string} searchCriteria[filterGroups][][filters][][conditionType] - Condition type
     * @param {string} searchCriteria[sortOrders][][field] - Sorting field.
     * @param {string} searchCriteria[sortOrders][][direction] - Sorting direction.
     * @param {integer} searchCriteria[pageSize] - Page size.
     * @param {integer} searchCriteria[currentPage] - Current page.
     *
     */
    Magento.prototype.catalogProductRepositoryV1GetListGet = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method catalogProductRepositoryV1SavePut
     * @name Magento#catalogProductRepositoryV1SavePut
     * @param {string} sku - 
     * @param {} $body - 
     *
     */
    Magento.prototype.catalogProductRepositoryV1SavePut = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method catalogProductRepositoryV1DeleteByIdDelete
     * @name Magento#catalogProductRepositoryV1DeleteByIdDelete
     * @param {string} sku - 
     *
     */
    Magento.prototype.catalogProductRepositoryV1DeleteByIdDelete = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method catalogProductRepositoryV1GetGet
     * @name Magento#catalogProductRepositoryV1GetGet
     * @param {string} sku - 
     * @param {boolean} editMode - 
     * @param {integer} storeId - 
     * @param {boolean} forceReload - 
     *
     */
    Magento.prototype.catalogProductRepositoryV1GetGet = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method catalogProductAttributeTypesListV1GetItemsGet
     * @name Magento#catalogProductAttributeTypesListV1GetItemsGet
     *
     */
    Magento.prototype.catalogProductAttributeTypesListV1GetItemsGet = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method catalogProductAttributeRepositoryV1GetGet
     * @name Magento#catalogProductAttributeRepositoryV1GetGet
     * @param {string} attributeCode - 
     *
     */
    Magento.prototype.catalogProductAttributeRepositoryV1GetGet = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method catalogProductAttributeRepositoryV1SavePut
     * @name Magento#catalogProductAttributeRepositoryV1SavePut
     * @param {string} attributeCode - 
     * @param {} $body - 
     *
     */
    Magento.prototype.catalogProductAttributeRepositoryV1SavePut = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method catalogProductAttributeRepositoryV1DeleteByIdDelete
     * @name Magento#catalogProductAttributeRepositoryV1DeleteByIdDelete
     * @param {string} attributeCode - 
     *
     */
    Magento.prototype.catalogProductAttributeRepositoryV1DeleteByIdDelete = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method catalogProductAttributeRepositoryV1GetListGet
     * @name Magento#catalogProductAttributeRepositoryV1GetListGet
     * @param {string} searchCriteria[filterGroups][][filters][][field] - Field
     * @param {string} searchCriteria[filterGroups][][filters][][value] - Value
     * @param {string} searchCriteria[filterGroups][][filters][][conditionType] - Condition type
     * @param {string} searchCriteria[sortOrders][][field] - Sorting field.
     * @param {string} searchCriteria[sortOrders][][direction] - Sorting direction.
     * @param {integer} searchCriteria[pageSize] - Page size.
     * @param {integer} searchCriteria[currentPage] - Current page.
     *
     */
    Magento.prototype.catalogProductAttributeRepositoryV1GetListGet = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method catalogProductAttributeRepositoryV1SavePost
     * @name Magento#catalogProductAttributeRepositoryV1SavePost
     * @param {} $body - 
     *
     */
    Magento.prototype.catalogProductAttributeRepositoryV1SavePost = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method catalogCategoryAttributeRepositoryV1GetGet
     * @name Magento#catalogCategoryAttributeRepositoryV1GetGet
     * @param {string} attributeCode - 
     *
     */
    Magento.prototype.catalogCategoryAttributeRepositoryV1GetGet = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method catalogCategoryAttributeRepositoryV1GetListGet
     * @name Magento#catalogCategoryAttributeRepositoryV1GetListGet
     * @param {string} searchCriteria[filterGroups][][filters][][field] - Field
     * @param {string} searchCriteria[filterGroups][][filters][][value] - Value
     * @param {string} searchCriteria[filterGroups][][filters][][conditionType] - Condition type
     * @param {string} searchCriteria[sortOrders][][field] - Sorting field.
     * @param {string} searchCriteria[sortOrders][][direction] - Sorting direction.
     * @param {integer} searchCriteria[pageSize] - Page size.
     * @param {integer} searchCriteria[currentPage] - Current page.
     *
     */
    Magento.prototype.catalogCategoryAttributeRepositoryV1GetListGet = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method catalogCategoryAttributeOptionManagementV1GetItemsGet
     * @name Magento#catalogCategoryAttributeOptionManagementV1GetItemsGet
     * @param {string} attributeCode - 
     *
     */
    Magento.prototype.catalogCategoryAttributeOptionManagementV1GetItemsGet = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method catalogProductTypeListV1GetProductTypesGet
     * @name Magento#catalogProductTypeListV1GetProductTypesGet
     *
     */
    Magento.prototype.catalogProductTypeListV1GetProductTypesGet = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method catalogAttributeSetRepositoryV1GetListGet
     * @name Magento#catalogAttributeSetRepositoryV1GetListGet
     * @param {string} searchCriteria[filterGroups][][filters][][field] - Field
     * @param {string} searchCriteria[filterGroups][][filters][][value] - Value
     * @param {string} searchCriteria[filterGroups][][filters][][conditionType] - Condition type
     * @param {string} searchCriteria[sortOrders][][field] - Sorting field.
     * @param {string} searchCriteria[sortOrders][][direction] - Sorting direction.
     * @param {integer} searchCriteria[pageSize] - Page size.
     * @param {integer} searchCriteria[currentPage] - Current page.
     *
     */
    Magento.prototype.catalogAttributeSetRepositoryV1GetListGet = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method catalogAttributeSetRepositoryV1GetGet
     * @name Magento#catalogAttributeSetRepositoryV1GetGet
     * @param {integer} attributeSetId - 
     *
     */
    Magento.prototype.catalogAttributeSetRepositoryV1GetGet = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method catalogAttributeSetRepositoryV1DeleteByIdDelete
     * @name Magento#catalogAttributeSetRepositoryV1DeleteByIdDelete
     * @param {integer} attributeSetId - 
     *
     */
    Magento.prototype.catalogAttributeSetRepositoryV1DeleteByIdDelete = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method catalogAttributeSetRepositoryV1SavePut
     * @name Magento#catalogAttributeSetRepositoryV1SavePut
     * @param {string} attributeSetId - 
     * @param {} $body - 
     *
     */
    Magento.prototype.catalogAttributeSetRepositoryV1SavePut = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method catalogAttributeSetManagementV1CreatePost
     * @name Magento#catalogAttributeSetManagementV1CreatePost
     * @param {} $body - 
     *
     */
    Magento.prototype.catalogAttributeSetManagementV1CreatePost = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method catalogProductAttributeManagementV1GetAttributesGet
     * @name Magento#catalogProductAttributeManagementV1GetAttributesGet
     * @param {string} attributeSetId - 
     *
     */
    Magento.prototype.catalogProductAttributeManagementV1GetAttributesGet = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method catalogProductAttributeManagementV1AssignPost
     * @name Magento#catalogProductAttributeManagementV1AssignPost
     * @param {} $body - 
     *
     */
    Magento.prototype.catalogProductAttributeManagementV1AssignPost = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method catalogProductAttributeManagementV1UnassignDelete
     * @name Magento#catalogProductAttributeManagementV1UnassignDelete
     * @param {string} attributeSetId - 
     * @param {string} attributeCode - 
     *
     */
    Magento.prototype.catalogProductAttributeManagementV1UnassignDelete = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method catalogProductAttributeGroupRepositoryV1GetListGet
     * @name Magento#catalogProductAttributeGroupRepositoryV1GetListGet
     * @param {string} searchCriteria[filterGroups][][filters][][field] - Field
     * @param {string} searchCriteria[filterGroups][][filters][][value] - Value
     * @param {string} searchCriteria[filterGroups][][filters][][conditionType] - Condition type
     * @param {string} searchCriteria[sortOrders][][field] - Sorting field.
     * @param {string} searchCriteria[sortOrders][][direction] - Sorting direction.
     * @param {integer} searchCriteria[pageSize] - Page size.
     * @param {integer} searchCriteria[currentPage] - Current page.
     *
     */
    Magento.prototype.catalogProductAttributeGroupRepositoryV1GetListGet = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method catalogProductAttributeGroupRepositoryV1SavePost
     * @name Magento#catalogProductAttributeGroupRepositoryV1SavePost
     * @param {} $body - 
     *
     */
    Magento.prototype.catalogProductAttributeGroupRepositoryV1SavePost = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method catalogProductAttributeGroupRepositoryV1SavePut
     * @name Magento#catalogProductAttributeGroupRepositoryV1SavePut
     * @param {string} attributeSetId - 
     * @param {} $body - 
     *
     */
    Magento.prototype.catalogProductAttributeGroupRepositoryV1SavePut = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method catalogProductAttributeGroupRepositoryV1DeleteByIdDelete
     * @name Magento#catalogProductAttributeGroupRepositoryV1DeleteByIdDelete
     * @param {integer} groupId - 
     *
     */
    Magento.prototype.catalogProductAttributeGroupRepositoryV1DeleteByIdDelete = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method catalogProductAttributeOptionManagementV1GetItemsGet
     * @name Magento#catalogProductAttributeOptionManagementV1GetItemsGet
     * @param {string} attributeCode - 
     *
     */
    Magento.prototype.catalogProductAttributeOptionManagementV1GetItemsGet = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method catalogProductAttributeOptionManagementV1AddPost
     * @name Magento#catalogProductAttributeOptionManagementV1AddPost
     * @param {string} attributeCode - 
     * @param {} $body - 
     *
     */
    Magento.prototype.catalogProductAttributeOptionManagementV1AddPost = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method catalogProductAttributeOptionManagementV1DeleteDelete
     * @name Magento#catalogProductAttributeOptionManagementV1DeleteDelete
     * @param {string} attributeCode - 
     * @param {string} optionId - 
     *
     */
    Magento.prototype.catalogProductAttributeOptionManagementV1DeleteDelete = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method catalogProductMediaAttributeManagementV1GetListGet
     * @name Magento#catalogProductMediaAttributeManagementV1GetListGet
     * @param {string} attributeSetName - 
     *
     */
    Magento.prototype.catalogProductMediaAttributeManagementV1GetListGet = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method catalogProductAttributeMediaGalleryManagementV1GetGet
     * @name Magento#catalogProductAttributeMediaGalleryManagementV1GetGet
     * @param {string} sku - 
     * @param {integer} entryId - 
     *
     */
    Magento.prototype.catalogProductAttributeMediaGalleryManagementV1GetGet = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method catalogProductAttributeMediaGalleryManagementV1UpdatePut
     * @name Magento#catalogProductAttributeMediaGalleryManagementV1UpdatePut
     * @param {string} sku - 
     * @param {string} entryId - 
     * @param {} $body - 
     *
     */
    Magento.prototype.catalogProductAttributeMediaGalleryManagementV1UpdatePut = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method catalogProductAttributeMediaGalleryManagementV1RemoveDelete
     * @name Magento#catalogProductAttributeMediaGalleryManagementV1RemoveDelete
     * @param {string} sku - 
     * @param {integer} entryId - 
     *
     */
    Magento.prototype.catalogProductAttributeMediaGalleryManagementV1RemoveDelete = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method catalogProductAttributeMediaGalleryManagementV1CreatePost
     * @name Magento#catalogProductAttributeMediaGalleryManagementV1CreatePost
     * @param {string} sku - 
     * @param {} $body - 
     *
     */
    Magento.prototype.catalogProductAttributeMediaGalleryManagementV1CreatePost = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method catalogProductAttributeMediaGalleryManagementV1GetListGet
     * @name Magento#catalogProductAttributeMediaGalleryManagementV1GetListGet
     * @param {string} sku - 
     *
     */
    Magento.prototype.catalogProductAttributeMediaGalleryManagementV1GetListGet = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method catalogProductGroupPriceManagementV1GetListGet
     * @name Magento#catalogProductGroupPriceManagementV1GetListGet
     * @param {string} sku - 
     *
     */
    Magento.prototype.catalogProductGroupPriceManagementV1GetListGet = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method catalogProductGroupPriceManagementV1AddPost
     * @name Magento#catalogProductGroupPriceManagementV1AddPost
     * @param {string} sku - 
     * @param {integer} customerGroupId - 
     * @param {number} price - 
     *
     */
    Magento.prototype.catalogProductGroupPriceManagementV1AddPost = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method catalogProductGroupPriceManagementV1RemoveDelete
     * @name Magento#catalogProductGroupPriceManagementV1RemoveDelete
     * @param {string} sku - 
     * @param {integer} customerGroupId - 
     *
     */
    Magento.prototype.catalogProductGroupPriceManagementV1RemoveDelete = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method catalogProductTierPriceManagementV1GetListGet
     * @name Magento#catalogProductTierPriceManagementV1GetListGet
     * @param {string} sku - 
     * @param {string} customerGroupId - 'all' can be used to specify 'ALL GROUPS'
     *
     */
    Magento.prototype.catalogProductTierPriceManagementV1GetListGet = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method catalogProductTierPriceManagementV1AddPost
     * @name Magento#catalogProductTierPriceManagementV1AddPost
     * @param {string} sku - 
     * @param {string} customerGroupId - 'all' can be used to specify 'ALL GROUPS'
     * @param {number} price - 
     * @param {number} qty - 
     *
     */
    Magento.prototype.catalogProductTierPriceManagementV1AddPost = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method catalogProductTierPriceManagementV1RemoveDelete
     * @name Magento#catalogProductTierPriceManagementV1RemoveDelete
     * @param {string} sku - 
     * @param {string} customerGroupId - 'all' can be used to specify 'ALL GROUPS'
     * @param {number} qty - 
     *
     */
    Magento.prototype.catalogProductTierPriceManagementV1RemoveDelete = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method catalogCategoryRepositoryV1DeleteByIdentifierDelete
     * @name Magento#catalogCategoryRepositoryV1DeleteByIdentifierDelete
     * @param {integer} categoryId - 
     *
     */
    Magento.prototype.catalogCategoryRepositoryV1DeleteByIdentifierDelete = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method catalogCategoryRepositoryV1GetGet
     * @name Magento#catalogCategoryRepositoryV1GetGet
     * @param {integer} categoryId - 
     * @param {integer} storeId - 
     *
     */
    Magento.prototype.catalogCategoryRepositoryV1GetGet = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method catalogCategoryRepositoryV1SavePost
     * @name Magento#catalogCategoryRepositoryV1SavePost
     * @param {} $body - 
     *
     */
    Magento.prototype.catalogCategoryRepositoryV1SavePost = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method catalogCategoryManagementV1GetTreeGet
     * @name Magento#catalogCategoryManagementV1GetTreeGet
     * @param {integer} rootCategoryId - 
     * @param {integer} depth - 
     *
     */
    Magento.prototype.catalogCategoryManagementV1GetTreeGet = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method catalogCategoryRepositoryV1SavePut
     * @name Magento#catalogCategoryRepositoryV1SavePut
     * @param {string} id - 
     * @param {} $body - 
     *
     */
    Magento.prototype.catalogCategoryRepositoryV1SavePut = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method catalogCategoryManagementV1MovePut
     * @name Magento#catalogCategoryManagementV1MovePut
     * @param {integer} categoryId - 
     * @param {} $body - 
     *
     */
    Magento.prototype.catalogCategoryManagementV1MovePut = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method catalogProductCustomOptionTypeListV1GetItemsGet
     * @name Magento#catalogProductCustomOptionTypeListV1GetItemsGet
     *
     */
    Magento.prototype.catalogProductCustomOptionTypeListV1GetItemsGet = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method catalogProductCustomOptionRepositoryV1GetListGet
     * @name Magento#catalogProductCustomOptionRepositoryV1GetListGet
     * @param {string} sku - 
     *
     */
    Magento.prototype.catalogProductCustomOptionRepositoryV1GetListGet = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method catalogProductCustomOptionRepositoryV1GetGet
     * @name Magento#catalogProductCustomOptionRepositoryV1GetGet
     * @param {string} sku - 
     * @param {integer} optionId - 
     *
     */
    Magento.prototype.catalogProductCustomOptionRepositoryV1GetGet = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method catalogProductCustomOptionRepositoryV1DeleteByIdentifierDelete
     * @name Magento#catalogProductCustomOptionRepositoryV1DeleteByIdentifierDelete
     * @param {string} sku - 
     * @param {integer} optionId - 
     *
     */
    Magento.prototype.catalogProductCustomOptionRepositoryV1DeleteByIdentifierDelete = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method catalogProductCustomOptionRepositoryV1SavePost
     * @name Magento#catalogProductCustomOptionRepositoryV1SavePost
     * @param {} $body - 
     *
     */
    Magento.prototype.catalogProductCustomOptionRepositoryV1SavePost = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method catalogProductCustomOptionRepositoryV1SavePut
     * @name Magento#catalogProductCustomOptionRepositoryV1SavePut
     * @param {string} optionId - 
     * @param {} $body - 
     *
     */
    Magento.prototype.catalogProductCustomOptionRepositoryV1SavePut = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method catalogProductLinkTypeListV1GetItemsGet
     * @name Magento#catalogProductLinkTypeListV1GetItemsGet
     *
     */
    Magento.prototype.catalogProductLinkTypeListV1GetItemsGet = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method catalogProductLinkTypeListV1GetItemAttributesGet
     * @name Magento#catalogProductLinkTypeListV1GetItemAttributesGet
     * @param {string} type - 
     *
     */
    Magento.prototype.catalogProductLinkTypeListV1GetItemAttributesGet = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method catalogProductLinkManagementV1GetLinkedItemsByTypeGet
     * @name Magento#catalogProductLinkManagementV1GetLinkedItemsByTypeGet
     * @param {string} sku - 
     * @param {string} type - 
     *
     */
    Magento.prototype.catalogProductLinkManagementV1GetLinkedItemsByTypeGet = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method catalogProductLinkManagementV1SetProductLinksPost
     * @name Magento#catalogProductLinkManagementV1SetProductLinksPost
     * @param {string} sku - 
     * @param {} $body - 
     *
     */
    Magento.prototype.catalogProductLinkManagementV1SetProductLinksPost = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method catalogProductLinkRepositoryV1SavePut
     * @name Magento#catalogProductLinkRepositoryV1SavePut
     * @param {string} sku - 
     * @param {} $body - 
     *
     */
    Magento.prototype.catalogProductLinkRepositoryV1SavePut = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method catalogProductLinkRepositoryV1DeleteByIdDelete
     * @name Magento#catalogProductLinkRepositoryV1DeleteByIdDelete
     * @param {string} sku - 
     * @param {string} type - 
     * @param {string} linkedProductSku - 
     *
     */
    Magento.prototype.catalogProductLinkRepositoryV1DeleteByIdDelete = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method catalogCategoryLinkManagementV1GetAssignedProductsGet
     * @name Magento#catalogCategoryLinkManagementV1GetAssignedProductsGet
     * @param {integer} categoryId - 
     *
     */
    Magento.prototype.catalogCategoryLinkManagementV1GetAssignedProductsGet = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method catalogCategoryLinkRepositoryV1SavePost
     * @name Magento#catalogCategoryLinkRepositoryV1SavePost
     * @param {string} categoryId - 
     * @param {} $body - 
     *
     */
    Magento.prototype.catalogCategoryLinkRepositoryV1SavePost = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method catalogCategoryLinkRepositoryV1SavePut
     * @name Magento#catalogCategoryLinkRepositoryV1SavePut
     * @param {string} categoryId - 
     * @param {} $body - 
     *
     */
    Magento.prototype.catalogCategoryLinkRepositoryV1SavePut = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method catalogCategoryLinkRepositoryV1DeleteByIdsDelete
     * @name Magento#catalogCategoryLinkRepositoryV1DeleteByIdsDelete
     * @param {string} categoryId - 
     * @param {string} sku - 
     *
     */
    Magento.prototype.catalogCategoryLinkRepositoryV1DeleteByIdsDelete = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method searchV1SearchGet
     * @name Magento#searchV1SearchGet
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
    Magento.prototype.searchV1SearchGet = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method quoteCartRepositoryV1GetGet
     * @name Magento#quoteCartRepositoryV1GetGet
     * @param {integer} cartId - 
     *
     */
    Magento.prototype.quoteCartRepositoryV1GetGet = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method quoteCartManagementV1AssignCustomerPut
     * @name Magento#quoteCartManagementV1AssignCustomerPut
     * @param {integer} cartId - The cart ID.
     * @param {} $body - 
     *
     */
    Magento.prototype.quoteCartManagementV1AssignCustomerPut = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method quoteCartRepositoryV1GetListGet
     * @name Magento#quoteCartRepositoryV1GetListGet
     * @param {string} searchCriteria[filterGroups][][filters][][field] - Field
     * @param {string} searchCriteria[filterGroups][][filters][][value] - Value
     * @param {string} searchCriteria[filterGroups][][filters][][conditionType] - Condition type
     * @param {string} searchCriteria[sortOrders][][field] - Sorting field.
     * @param {string} searchCriteria[sortOrders][][direction] - Sorting direction.
     * @param {integer} searchCriteria[pageSize] - Page size.
     * @param {integer} searchCriteria[currentPage] - Current page.
     *
     */
    Magento.prototype.quoteCartRepositoryV1GetListGet = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method quoteCartManagementV1CreateEmptyCartPost
     * @name Magento#quoteCartManagementV1CreateEmptyCartPost
     *
     */
    Magento.prototype.quoteCartManagementV1CreateEmptyCartPost = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method quoteCartManagementV1CreateEmptyCartForCustomerPost
     * @name Magento#quoteCartManagementV1CreateEmptyCartForCustomerPost
     * @param {integer} customerId - The customer ID.
     *
     */
    Magento.prototype.quoteCartManagementV1CreateEmptyCartForCustomerPost = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method quoteCartManagementV1CreateEmptyCartForCustomerPost
     * @name Magento#quoteCartManagementV1CreateEmptyCartForCustomerPost
     *
     */
    Magento.prototype.quoteCartManagementV1CreateEmptyCartForCustomerPost = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method quoteCartManagementV1GetCartForCustomerGet
     * @name Magento#quoteCartManagementV1GetCartForCustomerGet
     *
     */
    Magento.prototype.quoteCartManagementV1GetCartForCustomerGet = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method quoteCartManagementV1PlaceOrderPut
     * @name Magento#quoteCartManagementV1PlaceOrderPut
     * @param {} $body - 
     *
     */
    Magento.prototype.quoteCartManagementV1PlaceOrderPut = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method quoteCartManagementV1PlaceOrderPut
     * @name Magento#quoteCartManagementV1PlaceOrderPut
     * @param {integer} cartId - The cart ID.
     * @param {} $body - 
     *
     */
    Magento.prototype.quoteCartManagementV1PlaceOrderPut = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method quoteGuestCartRepositoryV1GetGet
     * @name Magento#quoteGuestCartRepositoryV1GetGet
     * @param {string} cartId - 
     *
     */
    Magento.prototype.quoteGuestCartRepositoryV1GetGet = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method quoteGuestCartManagementV1AssignCustomerPut
     * @name Magento#quoteGuestCartManagementV1AssignCustomerPut
     * @param {string} cartId - The cart ID.
     * @param {} $body - 
     *
     */
    Magento.prototype.quoteGuestCartManagementV1AssignCustomerPut = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method quoteGuestCartManagementV1CreateEmptyCartPost
     * @name Magento#quoteGuestCartManagementV1CreateEmptyCartPost
     *
     */
    Magento.prototype.quoteGuestCartManagementV1CreateEmptyCartPost = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method quoteGuestCartManagementV1PlaceOrderPut
     * @name Magento#quoteGuestCartManagementV1PlaceOrderPut
     * @param {string} cartId - The cart ID.
     * @param {} $body - 
     *
     */
    Magento.prototype.quoteGuestCartManagementV1PlaceOrderPut = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method quoteShippingMethodManagementV1SetPut
     * @name Magento#quoteShippingMethodManagementV1SetPut
     * @param {integer} cartId - The shopping cart ID.
     * @param {} $body - 
     *
     */
    Magento.prototype.quoteShippingMethodManagementV1SetPut = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method quoteShippingMethodManagementV1GetGet
     * @name Magento#quoteShippingMethodManagementV1GetGet
     * @param {integer} cartId - The shopping cart ID.
     *
     */
    Magento.prototype.quoteShippingMethodManagementV1GetGet = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method quoteShippingMethodManagementV1GetListGet
     * @name Magento#quoteShippingMethodManagementV1GetListGet
     * @param {integer} cartId - The shopping cart ID.
     *
     */
    Magento.prototype.quoteShippingMethodManagementV1GetListGet = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method quoteShippingMethodManagementV1SetPut
     * @name Magento#quoteShippingMethodManagementV1SetPut
     * @param {} $body - 
     *
     */
    Magento.prototype.quoteShippingMethodManagementV1SetPut = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method quoteShippingMethodManagementV1GetGet
     * @name Magento#quoteShippingMethodManagementV1GetGet
     *
     */
    Magento.prototype.quoteShippingMethodManagementV1GetGet = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method quoteShippingMethodManagementV1GetListGet
     * @name Magento#quoteShippingMethodManagementV1GetListGet
     *
     */
    Magento.prototype.quoteShippingMethodManagementV1GetListGet = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method quoteShippingMethodManagementV1EstimateByAddressPost
     * @name Magento#quoteShippingMethodManagementV1EstimateByAddressPost
     * @param {} $body - 
     *
     */
    Magento.prototype.quoteShippingMethodManagementV1EstimateByAddressPost = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method quoteShippingMethodManagementV1EstimateByAddressIdPost
     * @name Magento#quoteShippingMethodManagementV1EstimateByAddressIdPost
     * @param {} $body - 
     *
     */
    Magento.prototype.quoteShippingMethodManagementV1EstimateByAddressIdPost = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method quoteGuestShippingMethodManagementV1SetPut
     * @name Magento#quoteGuestShippingMethodManagementV1SetPut
     * @param {string} cartId - The shopping cart ID.
     * @param {} $body - 
     *
     */
    Magento.prototype.quoteGuestShippingMethodManagementV1SetPut = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method quoteGuestShippingMethodManagementV1GetGet
     * @name Magento#quoteGuestShippingMethodManagementV1GetGet
     * @param {string} cartId - The shopping cart ID.
     *
     */
    Magento.prototype.quoteGuestShippingMethodManagementV1GetGet = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method quoteGuestShippingMethodManagementV1GetListGet
     * @name Magento#quoteGuestShippingMethodManagementV1GetListGet
     * @param {string} cartId - The shopping cart ID.
     *
     */
    Magento.prototype.quoteGuestShippingMethodManagementV1GetListGet = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method quoteGuestShippingMethodManagementV1EstimateByAddressPost
     * @name Magento#quoteGuestShippingMethodManagementV1EstimateByAddressPost
     * @param {string} cartId - The shopping cart ID.
     * @param {} $body - 
     *
     */
    Magento.prototype.quoteGuestShippingMethodManagementV1EstimateByAddressPost = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method quoteCartItemRepositoryV1GetListGet
     * @name Magento#quoteCartItemRepositoryV1GetListGet
     * @param {integer} cartId - The cart ID.
     *
     */
    Magento.prototype.quoteCartItemRepositoryV1GetListGet = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method quoteCartItemRepositoryV1SavePost
     * @name Magento#quoteCartItemRepositoryV1SavePost
     * @param {} $body - 
     *
     */
    Magento.prototype.quoteCartItemRepositoryV1SavePost = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method quoteCartItemRepositoryV1SavePut
     * @name Magento#quoteCartItemRepositoryV1SavePut
     * @param {string} itemId - 
     * @param {} $body - 
     *
     */
    Magento.prototype.quoteCartItemRepositoryV1SavePut = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method quoteCartItemRepositoryV1DeleteByIdDelete
     * @name Magento#quoteCartItemRepositoryV1DeleteByIdDelete
     * @param {integer} cartId - The cart ID.
     * @param {integer} itemId - The item ID of the item to be removed.
     *
     */
    Magento.prototype.quoteCartItemRepositoryV1DeleteByIdDelete = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method quoteCartItemRepositoryV1GetListGet
     * @name Magento#quoteCartItemRepositoryV1GetListGet
     *
     */
    Magento.prototype.quoteCartItemRepositoryV1GetListGet = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method quoteCartItemRepositoryV1SavePost
     * @name Magento#quoteCartItemRepositoryV1SavePost
     * @param {} $body - 
     *
     */
    Magento.prototype.quoteCartItemRepositoryV1SavePost = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method quoteCartItemRepositoryV1SavePut
     * @name Magento#quoteCartItemRepositoryV1SavePut
     * @param {string} itemId - 
     * @param {} $body - 
     *
     */
    Magento.prototype.quoteCartItemRepositoryV1SavePut = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method quoteCartItemRepositoryV1DeleteByIdDelete
     * @name Magento#quoteCartItemRepositoryV1DeleteByIdDelete
     * @param {integer} itemId - The item ID of the item to be removed.
     *
     */
    Magento.prototype.quoteCartItemRepositoryV1DeleteByIdDelete = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method quoteGuestCartItemRepositoryV1GetListGet
     * @name Magento#quoteGuestCartItemRepositoryV1GetListGet
     * @param {string} cartId - The cart ID.
     *
     */
    Magento.prototype.quoteGuestCartItemRepositoryV1GetListGet = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method quoteGuestCartItemRepositoryV1SavePost
     * @name Magento#quoteGuestCartItemRepositoryV1SavePost
     * @param {} $body - 
     *
     */
    Magento.prototype.quoteGuestCartItemRepositoryV1SavePost = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method quoteGuestCartItemRepositoryV1SavePut
     * @name Magento#quoteGuestCartItemRepositoryV1SavePut
     * @param {string} itemId - 
     * @param {} $body - 
     *
     */
    Magento.prototype.quoteGuestCartItemRepositoryV1SavePut = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method quoteGuestCartItemRepositoryV1DeleteByIdDelete
     * @name Magento#quoteGuestCartItemRepositoryV1DeleteByIdDelete
     * @param {string} cartId - The cart ID.
     * @param {integer} itemId - The item ID of the item to be removed.
     *
     */
    Magento.prototype.quoteGuestCartItemRepositoryV1DeleteByIdDelete = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method quotePaymentMethodManagementV1GetGet
     * @name Magento#quotePaymentMethodManagementV1GetGet
     * @param {integer} cartId - The cart ID.
     *
     */
    Magento.prototype.quotePaymentMethodManagementV1GetGet = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method quotePaymentMethodManagementV1SetPut
     * @name Magento#quotePaymentMethodManagementV1SetPut
     * @param {integer} cartId - The cart ID.
     * @param {} $body - 
     *
     */
    Magento.prototype.quotePaymentMethodManagementV1SetPut = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method quotePaymentMethodManagementV1GetListGet
     * @name Magento#quotePaymentMethodManagementV1GetListGet
     * @param {integer} cartId - The cart ID.
     *
     */
    Magento.prototype.quotePaymentMethodManagementV1GetListGet = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method quotePaymentMethodManagementV1GetGet
     * @name Magento#quotePaymentMethodManagementV1GetGet
     *
     */
    Magento.prototype.quotePaymentMethodManagementV1GetGet = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method quotePaymentMethodManagementV1SetPut
     * @name Magento#quotePaymentMethodManagementV1SetPut
     * @param {} $body - 
     *
     */
    Magento.prototype.quotePaymentMethodManagementV1SetPut = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method quotePaymentMethodManagementV1GetListGet
     * @name Magento#quotePaymentMethodManagementV1GetListGet
     *
     */
    Magento.prototype.quotePaymentMethodManagementV1GetListGet = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method quoteGuestPaymentMethodManagementV1GetGet
     * @name Magento#quoteGuestPaymentMethodManagementV1GetGet
     * @param {string} cartId - The cart ID.
     *
     */
    Magento.prototype.quoteGuestPaymentMethodManagementV1GetGet = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method quoteGuestPaymentMethodManagementV1SetPut
     * @name Magento#quoteGuestPaymentMethodManagementV1SetPut
     * @param {string} cartId - The cart ID.
     * @param {} $body - 
     *
     */
    Magento.prototype.quoteGuestPaymentMethodManagementV1SetPut = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method quoteGuestPaymentMethodManagementV1GetListGet
     * @name Magento#quoteGuestPaymentMethodManagementV1GetListGet
     * @param {string} cartId - The cart ID.
     *
     */
    Magento.prototype.quoteGuestPaymentMethodManagementV1GetListGet = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method quoteBillingAddressManagementV1GetGet
     * @name Magento#quoteBillingAddressManagementV1GetGet
     * @param {integer} cartId - The cart ID.
     *
     */
    Magento.prototype.quoteBillingAddressManagementV1GetGet = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method quoteBillingAddressManagementV1AssignPost
     * @name Magento#quoteBillingAddressManagementV1AssignPost
     * @param {integer} cartId - The cart ID.
     * @param {} $body - 
     *
     */
    Magento.prototype.quoteBillingAddressManagementV1AssignPost = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method quoteBillingAddressManagementV1GetGet
     * @name Magento#quoteBillingAddressManagementV1GetGet
     *
     */
    Magento.prototype.quoteBillingAddressManagementV1GetGet = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method quoteBillingAddressManagementV1AssignPost
     * @name Magento#quoteBillingAddressManagementV1AssignPost
     * @param {} $body - 
     *
     */
    Magento.prototype.quoteBillingAddressManagementV1AssignPost = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method quoteGuestBillingAddressManagementV1GetGet
     * @name Magento#quoteGuestBillingAddressManagementV1GetGet
     * @param {string} cartId - The cart ID.
     *
     */
    Magento.prototype.quoteGuestBillingAddressManagementV1GetGet = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method quoteGuestBillingAddressManagementV1AssignPost
     * @name Magento#quoteGuestBillingAddressManagementV1AssignPost
     * @param {string} cartId - The cart ID.
     * @param {} $body - 
     *
     */
    Magento.prototype.quoteGuestBillingAddressManagementV1AssignPost = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method quoteCouponManagementV1GetGet
     * @name Magento#quoteCouponManagementV1GetGet
     * @param {integer} cartId - The cart ID.
     *
     */
    Magento.prototype.quoteCouponManagementV1GetGet = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method quoteCouponManagementV1RemoveDelete
     * @name Magento#quoteCouponManagementV1RemoveDelete
     * @param {integer} cartId - The cart ID.
     *
     */
    Magento.prototype.quoteCouponManagementV1RemoveDelete = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method quoteCouponManagementV1SetPut
     * @name Magento#quoteCouponManagementV1SetPut
     * @param {integer} cartId - The cart ID.
     * @param {string} couponCode - The coupon code data.
     *
     */
    Magento.prototype.quoteCouponManagementV1SetPut = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method quoteCouponManagementV1GetGet
     * @name Magento#quoteCouponManagementV1GetGet
     *
     */
    Magento.prototype.quoteCouponManagementV1GetGet = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method quoteCouponManagementV1RemoveDelete
     * @name Magento#quoteCouponManagementV1RemoveDelete
     *
     */
    Magento.prototype.quoteCouponManagementV1RemoveDelete = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method quoteCouponManagementV1SetPut
     * @name Magento#quoteCouponManagementV1SetPut
     * @param {string} couponCode - The coupon code data.
     *
     */
    Magento.prototype.quoteCouponManagementV1SetPut = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method quoteGuestCouponManagementV1GetGet
     * @name Magento#quoteGuestCouponManagementV1GetGet
     * @param {string} cartId - The cart ID.
     *
     */
    Magento.prototype.quoteGuestCouponManagementV1GetGet = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method quoteGuestCouponManagementV1RemoveDelete
     * @name Magento#quoteGuestCouponManagementV1RemoveDelete
     * @param {string} cartId - The cart ID.
     *
     */
    Magento.prototype.quoteGuestCouponManagementV1RemoveDelete = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method quoteGuestCouponManagementV1SetPut
     * @name Magento#quoteGuestCouponManagementV1SetPut
     * @param {string} cartId - The cart ID.
     * @param {string} couponCode - The coupon code data.
     *
     */
    Magento.prototype.quoteGuestCouponManagementV1SetPut = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method quoteShippingAddressManagementV1GetGet
     * @name Magento#quoteShippingAddressManagementV1GetGet
     * @param {integer} cartId - The cart ID.
     *
     */
    Magento.prototype.quoteShippingAddressManagementV1GetGet = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method quoteShippingAddressManagementV1AssignPost
     * @name Magento#quoteShippingAddressManagementV1AssignPost
     * @param {integer} cartId - The cart ID.
     * @param {} $body - 
     *
     */
    Magento.prototype.quoteShippingAddressManagementV1AssignPost = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method quoteShippingAddressManagementV1GetGet
     * @name Magento#quoteShippingAddressManagementV1GetGet
     *
     */
    Magento.prototype.quoteShippingAddressManagementV1GetGet = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method quoteShippingAddressManagementV1AssignPost
     * @name Magento#quoteShippingAddressManagementV1AssignPost
     * @param {} $body - 
     *
     */
    Magento.prototype.quoteShippingAddressManagementV1AssignPost = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method quoteGuestShippingAddressManagementV1GetGet
     * @name Magento#quoteGuestShippingAddressManagementV1GetGet
     * @param {string} cartId - The cart ID.
     *
     */
    Magento.prototype.quoteGuestShippingAddressManagementV1GetGet = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method quoteGuestShippingAddressManagementV1AssignPost
     * @name Magento#quoteGuestShippingAddressManagementV1AssignPost
     * @param {string} cartId - The cart ID.
     * @param {} $body - 
     *
     */
    Magento.prototype.quoteGuestShippingAddressManagementV1AssignPost = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method quoteCartTotalRepositoryV1GetGet
     * @name Magento#quoteCartTotalRepositoryV1GetGet
     * @param {integer} cartId - The cart ID.
     *
     */
    Magento.prototype.quoteCartTotalRepositoryV1GetGet = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method quoteCartTotalRepositoryV1GetGet
     * @name Magento#quoteCartTotalRepositoryV1GetGet
     *
     */
    Magento.prototype.quoteCartTotalRepositoryV1GetGet = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method quoteGuestCartTotalManagementV1CollectTotalsPut
     * @name Magento#quoteGuestCartTotalManagementV1CollectTotalsPut
     * @param {string} cartId - The cart ID.
     * @param {} $body - 
     *
     */
    Magento.prototype.quoteGuestCartTotalManagementV1CollectTotalsPut = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method quoteGuestCartTotalRepositoryV1GetGet
     * @name Magento#quoteGuestCartTotalRepositoryV1GetGet
     * @param {string} cartId - The cart ID.
     *
     */
    Magento.prototype.quoteGuestCartTotalRepositoryV1GetGet = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method quoteCartTotalManagementV1CollectTotalsPut
     * @name Magento#quoteCartTotalManagementV1CollectTotalsPut
     * @param {} $body - 
     *
     */
    Magento.prototype.quoteCartTotalManagementV1CollectTotalsPut = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method checkoutAgreementsCheckoutAgreementsRepositoryV1GetListGet
     * @name Magento#checkoutAgreementsCheckoutAgreementsRepositoryV1GetListGet
     *
     */
    Magento.prototype.checkoutAgreementsCheckoutAgreementsRepositoryV1GetListGet = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method bundleProductLinkManagementV1AddChildByProductSkuPost
     * @name Magento#bundleProductLinkManagementV1AddChildByProductSkuPost
     * @param {string} sku - 
     * @param {integer} optionId - 
     * @param {} $body - 
     *
     */
    Magento.prototype.bundleProductLinkManagementV1AddChildByProductSkuPost = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method bundleProductLinkManagementV1SaveChildPut
     * @name Magento#bundleProductLinkManagementV1SaveChildPut
     * @param {string} sku - 
     * @param {string} id - 
     * @param {} $body - 
     *
     */
    Magento.prototype.bundleProductLinkManagementV1SaveChildPut = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method bundleProductLinkManagementV1GetChildrenGet
     * @name Magento#bundleProductLinkManagementV1GetChildrenGet
     * @param {string} productSku - 
     * @param {integer} optionId - 
     *
     */
    Magento.prototype.bundleProductLinkManagementV1GetChildrenGet = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method bundleProductLinkManagementV1RemoveChildDelete
     * @name Magento#bundleProductLinkManagementV1RemoveChildDelete
     * @param {string} sku - 
     * @param {integer} optionId - 
     * @param {string} childSku - 
     *
     */
    Magento.prototype.bundleProductLinkManagementV1RemoveChildDelete = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method bundleProductOptionRepositoryV1GetListGet
     * @name Magento#bundleProductOptionRepositoryV1GetListGet
     * @param {string} sku - 
     *
     */
    Magento.prototype.bundleProductOptionRepositoryV1GetListGet = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method bundleProductOptionRepositoryV1GetGet
     * @name Magento#bundleProductOptionRepositoryV1GetGet
     * @param {string} sku - 
     * @param {integer} optionId - 
     *
     */
    Magento.prototype.bundleProductOptionRepositoryV1GetGet = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method bundleProductOptionRepositoryV1DeleteByIdDelete
     * @name Magento#bundleProductOptionRepositoryV1DeleteByIdDelete
     * @param {string} sku - 
     * @param {integer} optionId - 
     *
     */
    Magento.prototype.bundleProductOptionRepositoryV1DeleteByIdDelete = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method bundleProductOptionTypeListV1GetItemsGet
     * @name Magento#bundleProductOptionTypeListV1GetItemsGet
     *
     */
    Magento.prototype.bundleProductOptionTypeListV1GetItemsGet = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method bundleProductOptionManagementV1SavePost
     * @name Magento#bundleProductOptionManagementV1SavePost
     * @param {} $body - 
     *
     */
    Magento.prototype.bundleProductOptionManagementV1SavePost = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method bundleProductOptionManagementV1SavePut
     * @name Magento#bundleProductOptionManagementV1SavePut
     * @param {string} optionId - 
     * @param {} $body - 
     *
     */
    Magento.prototype.bundleProductOptionManagementV1SavePut = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method downloadableLinkRepositoryV1GetListGet
     * @name Magento#downloadableLinkRepositoryV1GetListGet
     * @param {string} sku - 
     *
     */
    Magento.prototype.downloadableLinkRepositoryV1GetListGet = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method downloadableLinkRepositoryV1SavePost
     * @name Magento#downloadableLinkRepositoryV1SavePost
     * @param {string} sku - 
     * @param {} $body - 
     *
     */
    Magento.prototype.downloadableLinkRepositoryV1SavePost = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method downloadableLinkRepositoryV1SavePut
     * @name Magento#downloadableLinkRepositoryV1SavePut
     * @param {string} sku - 
     * @param {string} id - 
     * @param {} $body - 
     *
     */
    Magento.prototype.downloadableLinkRepositoryV1SavePut = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method downloadableLinkRepositoryV1DeleteDelete
     * @name Magento#downloadableLinkRepositoryV1DeleteDelete
     * @param {integer} id - 
     *
     */
    Magento.prototype.downloadableLinkRepositoryV1DeleteDelete = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method downloadableSampleRepositoryV1GetListGet
     * @name Magento#downloadableSampleRepositoryV1GetListGet
     * @param {string} sku - 
     *
     */
    Magento.prototype.downloadableSampleRepositoryV1GetListGet = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method downloadableSampleRepositoryV1SavePost
     * @name Magento#downloadableSampleRepositoryV1SavePost
     * @param {string} sku - 
     * @param {} $body - 
     *
     */
    Magento.prototype.downloadableSampleRepositoryV1SavePost = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method downloadableSampleRepositoryV1SavePut
     * @name Magento#downloadableSampleRepositoryV1SavePut
     * @param {string} sku - 
     * @param {string} id - 
     * @param {} $body - 
     *
     */
    Magento.prototype.downloadableSampleRepositoryV1SavePut = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method downloadableSampleRepositoryV1DeleteDelete
     * @name Magento#downloadableSampleRepositoryV1DeleteDelete
     * @param {integer} id - 
     *
     */
    Magento.prototype.downloadableSampleRepositoryV1DeleteDelete = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method salesOrderRepositoryV1GetGet
     * @name Magento#salesOrderRepositoryV1GetGet
     * @param {integer} id - The order ID.
     *
     */
    Magento.prototype.salesOrderRepositoryV1GetGet = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method salesOrderRepositoryV1GetListGet
     * @name Magento#salesOrderRepositoryV1GetListGet
     * @param {string} criteria[filterGroups][][filters][][field] - Field
     * @param {string} criteria[filterGroups][][filters][][value] - Value
     * @param {string} criteria[filterGroups][][filters][][conditionType] - Condition type
     * @param {string} criteria[sortOrders][][field] - Sorting field.
     * @param {string} criteria[sortOrders][][direction] - Sorting direction.
     * @param {integer} criteria[pageSize] - Page size.
     * @param {integer} criteria[currentPage] - Current page.
     *
     */
    Magento.prototype.salesOrderRepositoryV1GetListGet = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method salesOrderRepositoryV1SavePut
     * @name Magento#salesOrderRepositoryV1SavePut
     * @param {} $body - 
     *
     */
    Magento.prototype.salesOrderRepositoryV1SavePut = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method salesOrderRepositoryV1SavePost
     * @name Magento#salesOrderRepositoryV1SavePost
     * @param {} $body - 
     *
     */
    Magento.prototype.salesOrderRepositoryV1SavePost = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method salesOrderManagementV1GetStatusGet
     * @name Magento#salesOrderManagementV1GetStatusGet
     * @param {integer} id - The order ID.
     *
     */
    Magento.prototype.salesOrderManagementV1GetStatusGet = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method salesOrderManagementV1CancelPost
     * @name Magento#salesOrderManagementV1CancelPost
     * @param {integer} id - The order ID.
     *
     */
    Magento.prototype.salesOrderManagementV1CancelPost = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method salesOrderManagementV1NotifyPost
     * @name Magento#salesOrderManagementV1NotifyPost
     * @param {integer} id - The order ID.
     *
     */
    Magento.prototype.salesOrderManagementV1NotifyPost = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method salesOrderManagementV1HoldPost
     * @name Magento#salesOrderManagementV1HoldPost
     * @param {integer} id - The order ID.
     *
     */
    Magento.prototype.salesOrderManagementV1HoldPost = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method salesOrderManagementV1UnHoldPost
     * @name Magento#salesOrderManagementV1UnHoldPost
     * @param {integer} id - The order ID.
     *
     */
    Magento.prototype.salesOrderManagementV1UnHoldPost = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method salesOrderManagementV1AddCommentPost
     * @name Magento#salesOrderManagementV1AddCommentPost
     * @param {integer} id - The order ID.
     * @param {} $body - 
     *
     */
    Magento.prototype.salesOrderManagementV1AddCommentPost = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method salesOrderManagementV1GetCommentsListGet
     * @name Magento#salesOrderManagementV1GetCommentsListGet
     * @param {integer} id - The order ID.
     *
     */
    Magento.prototype.salesOrderManagementV1GetCommentsListGet = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method salesOrderAddressRepositoryV1SavePut
     * @name Magento#salesOrderAddressRepositoryV1SavePut
     * @param {string} parent_id - 
     * @param {} $body - 
     *
     */
    Magento.prototype.salesOrderAddressRepositoryV1SavePut = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method salesInvoiceRepositoryV1GetGet
     * @name Magento#salesInvoiceRepositoryV1GetGet
     * @param {integer} id - The invoice ID.
     *
     */
    Magento.prototype.salesInvoiceRepositoryV1GetGet = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method salesInvoiceRepositoryV1GetListGet
     * @name Magento#salesInvoiceRepositoryV1GetListGet
     * @param {string} criteria[filterGroups][][filters][][field] - Field
     * @param {string} criteria[filterGroups][][filters][][value] - Value
     * @param {string} criteria[filterGroups][][filters][][conditionType] - Condition type
     * @param {string} criteria[sortOrders][][field] - Sorting field.
     * @param {string} criteria[sortOrders][][direction] - Sorting direction.
     * @param {integer} criteria[pageSize] - Page size.
     * @param {integer} criteria[currentPage] - Current page.
     *
     */
    Magento.prototype.salesInvoiceRepositoryV1GetListGet = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method salesInvoiceRepositoryV1SavePost
     * @name Magento#salesInvoiceRepositoryV1SavePost
     * @param {} $body - 
     *
     */
    Magento.prototype.salesInvoiceRepositoryV1SavePost = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method salesInvoiceManagementV1GetCommentsListGet
     * @name Magento#salesInvoiceManagementV1GetCommentsListGet
     * @param {integer} id - The invoice ID.
     *
     */
    Magento.prototype.salesInvoiceManagementV1GetCommentsListGet = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method salesInvoiceManagementV1NotifyPost
     * @name Magento#salesInvoiceManagementV1NotifyPost
     * @param {integer} id - The invoice ID.
     *
     */
    Magento.prototype.salesInvoiceManagementV1NotifyPost = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method salesInvoiceManagementV1SetVoidPost
     * @name Magento#salesInvoiceManagementV1SetVoidPost
     * @param {integer} id - The invoice ID.
     *
     */
    Magento.prototype.salesInvoiceManagementV1SetVoidPost = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method salesInvoiceManagementV1SetCapturePost
     * @name Magento#salesInvoiceManagementV1SetCapturePost
     * @param {integer} id - 
     *
     */
    Magento.prototype.salesInvoiceManagementV1SetCapturePost = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method salesInvoiceCommentRepositoryV1SavePost
     * @name Magento#salesInvoiceCommentRepositoryV1SavePost
     * @param {} $body - 
     *
     */
    Magento.prototype.salesInvoiceCommentRepositoryV1SavePost = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method salesCreditmemoManagementV1GetCommentsListGet
     * @name Magento#salesCreditmemoManagementV1GetCommentsListGet
     * @param {integer} id - The credit memo ID.
     *
     */
    Magento.prototype.salesCreditmemoManagementV1GetCommentsListGet = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method salesCreditmemoCommentRepositoryV1SavePost
     * @name Magento#salesCreditmemoCommentRepositoryV1SavePost
     * @param {string} id - 
     * @param {} $body - 
     *
     */
    Magento.prototype.salesCreditmemoCommentRepositoryV1SavePost = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method salesCreditmemoManagementV1CancelPut
     * @name Magento#salesCreditmemoManagementV1CancelPut
     * @param {integer} id - The credit memo ID.
     *
     */
    Magento.prototype.salesCreditmemoManagementV1CancelPut = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method salesCreditmemoRepositoryV1GetGet
     * @name Magento#salesCreditmemoRepositoryV1GetGet
     * @param {integer} id - The credit memo ID.
     *
     */
    Magento.prototype.salesCreditmemoRepositoryV1GetGet = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method salesCreditmemoManagementV1NotifyPost
     * @name Magento#salesCreditmemoManagementV1NotifyPost
     * @param {integer} id - The credit memo ID.
     *
     */
    Magento.prototype.salesCreditmemoManagementV1NotifyPost = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method salesCreditmemoRepositoryV1GetListGet
     * @name Magento#salesCreditmemoRepositoryV1GetListGet
     * @param {string} criteria[filterGroups][][filters][][field] - Field
     * @param {string} criteria[filterGroups][][filters][][value] - Value
     * @param {string} criteria[filterGroups][][filters][][conditionType] - Condition type
     * @param {string} criteria[sortOrders][][field] - Sorting field.
     * @param {string} criteria[sortOrders][][direction] - Sorting direction.
     * @param {integer} criteria[pageSize] - Page size.
     * @param {integer} criteria[currentPage] - Current page.
     *
     */
    Magento.prototype.salesCreditmemoRepositoryV1GetListGet = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method salesCreditmemoRepositoryV1SavePost
     * @name Magento#salesCreditmemoRepositoryV1SavePost
     * @param {} $body - 
     *
     */
    Magento.prototype.salesCreditmemoRepositoryV1SavePost = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method salesShipmentRepositoryV1GetGet
     * @name Magento#salesShipmentRepositoryV1GetGet
     * @param {integer} id - The shipment ID.
     *
     */
    Magento.prototype.salesShipmentRepositoryV1GetGet = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method salesShipmentRepositoryV1GetListGet
     * @name Magento#salesShipmentRepositoryV1GetListGet
     * @param {string} criteria[filterGroups][][filters][][field] - Field
     * @param {string} criteria[filterGroups][][filters][][value] - Value
     * @param {string} criteria[filterGroups][][filters][][conditionType] - Condition type
     * @param {string} criteria[sortOrders][][field] - Sorting field.
     * @param {string} criteria[sortOrders][][direction] - Sorting direction.
     * @param {integer} criteria[pageSize] - Page size.
     * @param {integer} criteria[currentPage] - Current page.
     *
     */
    Magento.prototype.salesShipmentRepositoryV1GetListGet = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method salesShipmentRepositoryV1SavePost
     * @name Magento#salesShipmentRepositoryV1SavePost
     * @param {} $body - 
     *
     */
    Magento.prototype.salesShipmentRepositoryV1SavePost = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method salesShipmentManagementV1GetCommentsListGet
     * @name Magento#salesShipmentManagementV1GetCommentsListGet
     * @param {integer} id - The shipment ID.
     *
     */
    Magento.prototype.salesShipmentManagementV1GetCommentsListGet = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method salesShipmentCommentRepositoryV1SavePost
     * @name Magento#salesShipmentCommentRepositoryV1SavePost
     * @param {string} id - 
     * @param {} $body - 
     *
     */
    Magento.prototype.salesShipmentCommentRepositoryV1SavePost = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method salesShipmentManagementV1NotifyPost
     * @name Magento#salesShipmentManagementV1NotifyPost
     * @param {integer} id - The shipment ID.
     *
     */
    Magento.prototype.salesShipmentManagementV1NotifyPost = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method salesShipmentManagementV1GetLabelGet
     * @name Magento#salesShipmentManagementV1GetLabelGet
     * @param {integer} id - The shipment label ID.
     *
     */
    Magento.prototype.salesShipmentManagementV1GetLabelGet = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method salesShipmentTrackRepositoryV1SavePost
     * @name Magento#salesShipmentTrackRepositoryV1SavePost
     * @param {} $body - 
     *
     */
    Magento.prototype.salesShipmentTrackRepositoryV1SavePost = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method salesShipmentTrackRepositoryV1DeleteByIdDelete
     * @name Magento#salesShipmentTrackRepositoryV1DeleteByIdDelete
     * @param {integer} id - The shipment track ID.
     *
     */
    Magento.prototype.salesShipmentTrackRepositoryV1DeleteByIdDelete = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method salesTransactionRepositoryV1GetGet
     * @name Magento#salesTransactionRepositoryV1GetGet
     * @param {integer} id - The transaction ID.
     *
     */
    Magento.prototype.salesTransactionRepositoryV1GetGet = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method salesTransactionRepositoryV1GetListGet
     * @name Magento#salesTransactionRepositoryV1GetListGet
     * @param {string} criteria[filterGroups][][filters][][field] - Field
     * @param {string} criteria[filterGroups][][filters][][value] - Value
     * @param {string} criteria[filterGroups][][filters][][conditionType] - Condition type
     * @param {string} criteria[sortOrders][][field] - Sorting field.
     * @param {string} criteria[sortOrders][][direction] - Sorting direction.
     * @param {integer} criteria[pageSize] - Page size.
     * @param {integer} criteria[currentPage] - Current page.
     *
     */
    Magento.prototype.salesTransactionRepositoryV1GetListGet = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method catalogInventoryStockRegistryV1GetStockItemBySkuGet
     * @name Magento#catalogInventoryStockRegistryV1GetStockItemBySkuGet
     * @param {string} productSku - 
     * @param {integer} websiteId - 
     *
     */
    Magento.prototype.catalogInventoryStockRegistryV1GetStockItemBySkuGet = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method catalogInventoryStockRegistryV1UpdateStockItemBySkuPut
     * @name Magento#catalogInventoryStockRegistryV1UpdateStockItemBySkuPut
     * @param {string} productSku - 
     * @param {string} itemId - 
     * @param {} $body - 
     *
     */
    Magento.prototype.catalogInventoryStockRegistryV1UpdateStockItemBySkuPut = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method catalogInventoryStockRegistryV1GetLowStockItemsGet
     * @name Magento#catalogInventoryStockRegistryV1GetLowStockItemsGet
     * @param {integer} websiteId - 
     * @param {number} qty - 
     * @param {integer} currentPage - 
     * @param {integer} pageSize - 
     *
     */
    Magento.prototype.catalogInventoryStockRegistryV1GetLowStockItemsGet = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method catalogInventoryStockRegistryV1GetStockStatusBySkuGet
     * @name Magento#catalogInventoryStockRegistryV1GetStockStatusBySkuGet
     * @param {string} productSku - 
     * @param {integer} websiteId - 
     *
     */
    Magento.prototype.catalogInventoryStockRegistryV1GetStockStatusBySkuGet = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method checkoutGuestShippingInformationManagementV1SaveAddressInformationPost
     * @name Magento#checkoutGuestShippingInformationManagementV1SaveAddressInformationPost
     * @param {string} cartId - 
     * @param {} $body - 
     *
     */
    Magento.prototype.checkoutGuestShippingInformationManagementV1SaveAddressInformationPost = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method checkoutShippingInformationManagementV1SaveAddressInformationPost
     * @name Magento#checkoutShippingInformationManagementV1SaveAddressInformationPost
     * @param {} $body - 
     *
     */
    Magento.prototype.checkoutShippingInformationManagementV1SaveAddressInformationPost = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method checkoutTotalsInformationManagementV1CalculatePost
     * @name Magento#checkoutTotalsInformationManagementV1CalculatePost
     * @param {integer} cartId - 
     * @param {} $body - 
     *
     */
    Magento.prototype.checkoutTotalsInformationManagementV1CalculatePost = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method checkoutTotalsInformationManagementV1CalculatePost
     * @name Magento#checkoutTotalsInformationManagementV1CalculatePost
     * @param {} $body - 
     *
     */
    Magento.prototype.checkoutTotalsInformationManagementV1CalculatePost = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method checkoutGuestTotalsInformationManagementV1CalculatePost
     * @name Magento#checkoutGuestTotalsInformationManagementV1CalculatePost
     * @param {string} cartId - 
     * @param {} $body - 
     *
     */
    Magento.prototype.checkoutGuestTotalsInformationManagementV1CalculatePost = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method checkoutGuestPaymentInformationManagementV1SavePaymentInformationAndPlaceOrderPost
     * @name Magento#checkoutGuestPaymentInformationManagementV1SavePaymentInformationAndPlaceOrderPost
     * @param {string} cartId - 
     * @param {} $body - 
     *
     */
    Magento.prototype.checkoutGuestPaymentInformationManagementV1SavePaymentInformationAndPlaceOrderPost = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method checkoutGuestPaymentInformationManagementV1GetPaymentInformationGet
     * @name Magento#checkoutGuestPaymentInformationManagementV1GetPaymentInformationGet
     * @param {string} cartId - 
     *
     */
    Magento.prototype.checkoutGuestPaymentInformationManagementV1GetPaymentInformationGet = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method checkoutGuestPaymentInformationManagementV1SavePaymentInformationPost
     * @name Magento#checkoutGuestPaymentInformationManagementV1SavePaymentInformationPost
     * @param {string} cartId - 
     * @param {} $body - 
     *
     */
    Magento.prototype.checkoutGuestPaymentInformationManagementV1SavePaymentInformationPost = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method checkoutPaymentInformationManagementV1SavePaymentInformationAndPlaceOrderPost
     * @name Magento#checkoutPaymentInformationManagementV1SavePaymentInformationAndPlaceOrderPost
     * @param {} $body - 
     *
     */
    Magento.prototype.checkoutPaymentInformationManagementV1SavePaymentInformationAndPlaceOrderPost = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method checkoutPaymentInformationManagementV1GetPaymentInformationGet
     * @name Magento#checkoutPaymentInformationManagementV1GetPaymentInformationGet
     *
     */
    Magento.prototype.checkoutPaymentInformationManagementV1GetPaymentInformationGet = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method checkoutPaymentInformationManagementV1SavePaymentInformationPost
     * @name Magento#checkoutPaymentInformationManagementV1SavePaymentInformationPost
     * @param {} $body - 
     *
     */
    Magento.prototype.checkoutPaymentInformationManagementV1SavePaymentInformationPost = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method integrationAdminTokenServiceV1CreateAdminAccessTokenPost
     * @name Magento#integrationAdminTokenServiceV1CreateAdminAccessTokenPost
     * @param {} $body - 
     *
     */
    Magento.prototype.integrationAdminTokenServiceV1CreateAdminAccessTokenPost = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method integrationCustomerTokenServiceV1CreateCustomerAccessTokenPost
     * @name Magento#integrationCustomerTokenServiceV1CreateCustomerAccessTokenPost
     * @param {} $body - 
     *
     */
    Magento.prototype.integrationCustomerTokenServiceV1CreateCustomerAccessTokenPost = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method salesRuleRuleRepositoryV1GetByIdGet
     * @name Magento#salesRuleRuleRepositoryV1GetByIdGet
     * @param {integer} ruleId - 
     *
     */
    Magento.prototype.salesRuleRuleRepositoryV1GetByIdGet = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method salesRuleRuleRepositoryV1SavePut
     * @name Magento#salesRuleRuleRepositoryV1SavePut
     * @param {string} ruleId - 
     * @param {} $body - 
     *
     */
    Magento.prototype.salesRuleRuleRepositoryV1SavePut = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method salesRuleRuleRepositoryV1DeleteByIdDelete
     * @name Magento#salesRuleRuleRepositoryV1DeleteByIdDelete
     * @param {integer} ruleId - 
     *
     */
    Magento.prototype.salesRuleRuleRepositoryV1DeleteByIdDelete = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method salesRuleRuleRepositoryV1GetListGet
     * @name Magento#salesRuleRuleRepositoryV1GetListGet
     * @param {string} searchCriteria[filterGroups][][filters][][field] - Field
     * @param {string} searchCriteria[filterGroups][][filters][][value] - Value
     * @param {string} searchCriteria[filterGroups][][filters][][conditionType] - Condition type
     * @param {string} searchCriteria[sortOrders][][field] - Sorting field.
     * @param {string} searchCriteria[sortOrders][][direction] - Sorting direction.
     * @param {integer} searchCriteria[pageSize] - Page size.
     * @param {integer} searchCriteria[currentPage] - Current page.
     *
     */
    Magento.prototype.salesRuleRuleRepositoryV1GetListGet = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method salesRuleRuleRepositoryV1SavePost
     * @name Magento#salesRuleRuleRepositoryV1SavePost
     * @param {} $body - 
     *
     */
    Magento.prototype.salesRuleRuleRepositoryV1SavePost = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method salesRuleCouponRepositoryV1GetByIdGet
     * @name Magento#salesRuleCouponRepositoryV1GetByIdGet
     * @param {integer} couponId - 
     *
     */
    Magento.prototype.salesRuleCouponRepositoryV1GetByIdGet = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method salesRuleCouponRepositoryV1SavePut
     * @name Magento#salesRuleCouponRepositoryV1SavePut
     * @param {string} couponId - 
     * @param {} $body - 
     *
     */
    Magento.prototype.salesRuleCouponRepositoryV1SavePut = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method salesRuleCouponRepositoryV1DeleteByIdDelete
     * @name Magento#salesRuleCouponRepositoryV1DeleteByIdDelete
     * @param {integer} couponId - 
     *
     */
    Magento.prototype.salesRuleCouponRepositoryV1DeleteByIdDelete = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method salesRuleCouponRepositoryV1GetListGet
     * @name Magento#salesRuleCouponRepositoryV1GetListGet
     * @param {string} searchCriteria[filterGroups][][filters][][field] - Field
     * @param {string} searchCriteria[filterGroups][][filters][][value] - Value
     * @param {string} searchCriteria[filterGroups][][filters][][conditionType] - Condition type
     * @param {string} searchCriteria[sortOrders][][field] - Sorting field.
     * @param {string} searchCriteria[sortOrders][][direction] - Sorting direction.
     * @param {integer} searchCriteria[pageSize] - Page size.
     * @param {integer} searchCriteria[currentPage] - Current page.
     *
     */
    Magento.prototype.salesRuleCouponRepositoryV1GetListGet = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method salesRuleCouponRepositoryV1SavePost
     * @name Magento#salesRuleCouponRepositoryV1SavePost
     * @param {} $body - 
     *
     */
    Magento.prototype.salesRuleCouponRepositoryV1SavePost = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method salesRuleCouponManagementV1GeneratePost
     * @name Magento#salesRuleCouponManagementV1GeneratePost
     * @param {} $body - 
     *
     */
    Magento.prototype.salesRuleCouponManagementV1GeneratePost = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method salesRuleCouponManagementV1DeleteByIdsPost
     * @name Magento#salesRuleCouponManagementV1DeleteByIdsPost
     * @param {} $body - 
     *
     */
    Magento.prototype.salesRuleCouponManagementV1DeleteByIdsPost = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method salesRuleCouponManagementV1DeleteByCodesPost
     * @name Magento#salesRuleCouponManagementV1DeleteByCodesPost
     * @param {} $body - 
     *
     */
    Magento.prototype.salesRuleCouponManagementV1DeleteByCodesPost = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method configurableProductLinkManagementV1GetChildrenGet
     * @name Magento#configurableProductLinkManagementV1GetChildrenGet
     * @param {string} sku - 
     *
     */
    Magento.prototype.configurableProductLinkManagementV1GetChildrenGet = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method configurableProductLinkManagementV1RemoveChildDelete
     * @name Magento#configurableProductLinkManagementV1RemoveChildDelete
     * @param {string} sku - 
     * @param {string} childSku - 
     *
     */
    Magento.prototype.configurableProductLinkManagementV1RemoveChildDelete = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method configurableProductLinkManagementV1AddChildPost
     * @name Magento#configurableProductLinkManagementV1AddChildPost
     * @param {string} sku - 
     * @param {} $body - 
     *
     */
    Magento.prototype.configurableProductLinkManagementV1AddChildPost = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method configurableProductConfigurableProductManagementV1GenerateVariationPut
     * @name Magento#configurableProductConfigurableProductManagementV1GenerateVariationPut
     * @param {} $body - 
     *
     */
    Magento.prototype.configurableProductConfigurableProductManagementV1GenerateVariationPut = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method configurableProductOptionRepositoryV1GetGet
     * @name Magento#configurableProductOptionRepositoryV1GetGet
     * @param {string} sku - 
     * @param {integer} id - 
     *
     */
    Magento.prototype.configurableProductOptionRepositoryV1GetGet = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method configurableProductOptionRepositoryV1SavePut
     * @name Magento#configurableProductOptionRepositoryV1SavePut
     * @param {string} sku - 
     * @param {string} id - 
     * @param {} $body - 
     *
     */
    Magento.prototype.configurableProductOptionRepositoryV1SavePut = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method configurableProductOptionRepositoryV1DeleteByIdDelete
     * @name Magento#configurableProductOptionRepositoryV1DeleteByIdDelete
     * @param {string} sku - 
     * @param {integer} id - 
     *
     */
    Magento.prototype.configurableProductOptionRepositoryV1DeleteByIdDelete = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method configurableProductOptionRepositoryV1GetListGet
     * @name Magento#configurableProductOptionRepositoryV1GetListGet
     * @param {string} sku - 
     *
     */
    Magento.prototype.configurableProductOptionRepositoryV1GetListGet = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method configurableProductOptionRepositoryV1SavePost
     * @name Magento#configurableProductOptionRepositoryV1SavePost
     * @param {string} sku - 
     * @param {} $body - 
     *
     */
    Magento.prototype.configurableProductOptionRepositoryV1SavePost = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method taxTaxRateRepositoryV1SavePost
     * @name Magento#taxTaxRateRepositoryV1SavePost
     * @param {} $body - 
     *
     */
    Magento.prototype.taxTaxRateRepositoryV1SavePost = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method taxTaxRateRepositoryV1SavePut
     * @name Magento#taxTaxRateRepositoryV1SavePut
     * @param {} $body - 
     *
     */
    Magento.prototype.taxTaxRateRepositoryV1SavePut = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method taxTaxRateRepositoryV1GetGet
     * @name Magento#taxTaxRateRepositoryV1GetGet
     * @param {integer} rateId - 
     *
     */
    Magento.prototype.taxTaxRateRepositoryV1GetGet = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method taxTaxRateRepositoryV1DeleteByIdDelete
     * @name Magento#taxTaxRateRepositoryV1DeleteByIdDelete
     * @param {integer} rateId - 
     *
     */
    Magento.prototype.taxTaxRateRepositoryV1DeleteByIdDelete = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method taxTaxRateRepositoryV1GetListGet
     * @name Magento#taxTaxRateRepositoryV1GetListGet
     * @param {string} searchCriteria[filterGroups][][filters][][field] - Field
     * @param {string} searchCriteria[filterGroups][][filters][][value] - Value
     * @param {string} searchCriteria[filterGroups][][filters][][conditionType] - Condition type
     * @param {string} searchCriteria[sortOrders][][field] - Sorting field.
     * @param {string} searchCriteria[sortOrders][][direction] - Sorting direction.
     * @param {integer} searchCriteria[pageSize] - Page size.
     * @param {integer} searchCriteria[currentPage] - Current page.
     *
     */
    Magento.prototype.taxTaxRateRepositoryV1GetListGet = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method taxTaxRuleRepositoryV1SavePost
     * @name Magento#taxTaxRuleRepositoryV1SavePost
     * @param {} $body - 
     *
     */
    Magento.prototype.taxTaxRuleRepositoryV1SavePost = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method taxTaxRuleRepositoryV1SavePut
     * @name Magento#taxTaxRuleRepositoryV1SavePut
     * @param {} $body - 
     *
     */
    Magento.prototype.taxTaxRuleRepositoryV1SavePut = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method taxTaxRuleRepositoryV1DeleteByIdDelete
     * @name Magento#taxTaxRuleRepositoryV1DeleteByIdDelete
     * @param {integer} ruleId - 
     *
     */
    Magento.prototype.taxTaxRuleRepositoryV1DeleteByIdDelete = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method taxTaxRuleRepositoryV1GetGet
     * @name Magento#taxTaxRuleRepositoryV1GetGet
     * @param {integer} ruleId - 
     *
     */
    Magento.prototype.taxTaxRuleRepositoryV1GetGet = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method taxTaxRuleRepositoryV1GetListGet
     * @name Magento#taxTaxRuleRepositoryV1GetListGet
     * @param {string} searchCriteria[filterGroups][][filters][][field] - Field
     * @param {string} searchCriteria[filterGroups][][filters][][value] - Value
     * @param {string} searchCriteria[filterGroups][][filters][][conditionType] - Condition type
     * @param {string} searchCriteria[sortOrders][][field] - Sorting field.
     * @param {string} searchCriteria[sortOrders][][direction] - Sorting direction.
     * @param {integer} searchCriteria[pageSize] - Page size.
     * @param {integer} searchCriteria[currentPage] - Current page.
     *
     */
    Magento.prototype.taxTaxRuleRepositoryV1GetListGet = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method taxTaxClassRepositoryV1SavePost
     * @name Magento#taxTaxClassRepositoryV1SavePost
     * @param {} $body - 
     *
     */
    Magento.prototype.taxTaxClassRepositoryV1SavePost = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method taxTaxClassRepositoryV1GetGet
     * @name Magento#taxTaxClassRepositoryV1GetGet
     * @param {integer} taxClassId - 
     *
     */
    Magento.prototype.taxTaxClassRepositoryV1GetGet = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method taxTaxClassRepositoryV1DeleteByIdDelete
     * @name Magento#taxTaxClassRepositoryV1DeleteByIdDelete
     * @param {integer} taxClassId - 
     *
     */
    Magento.prototype.taxTaxClassRepositoryV1DeleteByIdDelete = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method taxTaxClassRepositoryV1SavePut
     * @name Magento#taxTaxClassRepositoryV1SavePut
     * @param {string} classId - 
     * @param {} $body - 
     *
     */
    Magento.prototype.taxTaxClassRepositoryV1SavePut = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method taxTaxClassRepositoryV1GetListGet
     * @name Magento#taxTaxClassRepositoryV1GetListGet
     * @param {string} searchCriteria[filterGroups][][filters][][field] - Field
     * @param {string} searchCriteria[filterGroups][][filters][][value] - Value
     * @param {string} searchCriteria[filterGroups][][filters][][conditionType] - Condition type
     * @param {string} searchCriteria[sortOrders][][field] - Sorting field.
     * @param {string} searchCriteria[sortOrders][][direction] - Sorting direction.
     * @param {integer} searchCriteria[pageSize] - Page size.
     * @param {integer} searchCriteria[currentPage] - Current page.
     *
     */
    Magento.prototype.taxTaxClassRepositoryV1GetListGet = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method giftMessageCartRepositoryV1GetGet
     * @name Magento#giftMessageCartRepositoryV1GetGet
     * @param {integer} cartId - The shopping cart ID.
     *
     */
    Magento.prototype.giftMessageCartRepositoryV1GetGet = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method giftMessageCartRepositoryV1SavePost
     * @name Magento#giftMessageCartRepositoryV1SavePost
     * @param {integer} cartId - The cart ID.
     * @param {} $body - 
     *
     */
    Magento.prototype.giftMessageCartRepositoryV1SavePost = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method giftMessageCartRepositoryV1GetGet
     * @name Magento#giftMessageCartRepositoryV1GetGet
     *
     */
    Magento.prototype.giftMessageCartRepositoryV1GetGet = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method giftMessageCartRepositoryV1SavePost
     * @name Magento#giftMessageCartRepositoryV1SavePost
     * @param {} $body - 
     *
     */
    Magento.prototype.giftMessageCartRepositoryV1SavePost = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method giftMessageItemRepositoryV1GetGet
     * @name Magento#giftMessageItemRepositoryV1GetGet
     * @param {integer} cartId - The shopping cart ID.
     * @param {integer} itemId - The item ID.
     *
     */
    Magento.prototype.giftMessageItemRepositoryV1GetGet = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method giftMessageItemRepositoryV1SavePost
     * @name Magento#giftMessageItemRepositoryV1SavePost
     * @param {integer} cartId - The cart ID.
     * @param {integer} itemId - The item ID.
     * @param {} $body - 
     *
     */
    Magento.prototype.giftMessageItemRepositoryV1SavePost = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method giftMessageItemRepositoryV1GetGet
     * @name Magento#giftMessageItemRepositoryV1GetGet
     * @param {integer} itemId - The item ID.
     *
     */
    Magento.prototype.giftMessageItemRepositoryV1GetGet = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method giftMessageItemRepositoryV1SavePost
     * @name Magento#giftMessageItemRepositoryV1SavePost
     * @param {integer} itemId - The item ID.
     * @param {} $body - 
     *
     */
    Magento.prototype.giftMessageItemRepositoryV1SavePost = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method giftMessageGuestCartRepositoryV1GetGet
     * @name Magento#giftMessageGuestCartRepositoryV1GetGet
     * @param {string} cartId - The shopping cart ID.
     *
     */
    Magento.prototype.giftMessageGuestCartRepositoryV1GetGet = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method giftMessageGuestCartRepositoryV1SavePost
     * @name Magento#giftMessageGuestCartRepositoryV1SavePost
     * @param {string} cartId - The cart ID.
     * @param {} $body - 
     *
     */
    Magento.prototype.giftMessageGuestCartRepositoryV1SavePost = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method giftMessageGuestItemRepositoryV1GetGet
     * @name Magento#giftMessageGuestItemRepositoryV1GetGet
     * @param {string} cartId - The shopping cart ID.
     * @param {integer} itemId - The item ID.
     *
     */
    Magento.prototype.giftMessageGuestItemRepositoryV1GetGet = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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
     * @method giftMessageGuestItemRepositoryV1SavePost
     * @name Magento#giftMessageGuestItemRepositoryV1SavePost
     * @param {string} cartId - The cart ID.
     * @param {integer} itemId - The item ID.
     * @param {} $body - 
     *
     */
    Magento.prototype.giftMessageGuestItemRepositoryV1SavePost = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        var deferred = Q.defer();

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

    return Magento;
})();

exports.Magento = Magento;