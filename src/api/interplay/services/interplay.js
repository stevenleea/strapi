'use strict';

/**
 * interplay service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::interplay.interplay');
