'use strict';

/**
 * afterplay service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::afterplay.afterplay');
