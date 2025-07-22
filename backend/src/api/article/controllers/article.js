'use strict';

/**
 *  article controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::article.article', ({ strapi }) => ({
  async count(ctx) {
    const { query } = ctx.request;
    const total = await strapi.db.query('api::article.article').count({ where: query });
    ctx.body = { total };
  }
}));

