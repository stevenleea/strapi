'use strict';

/**
 * foreplay service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::foreplay.foreplay');
