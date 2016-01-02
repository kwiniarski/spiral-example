/**
 * @author Krzysztof Winiarski
 * @copyright (c) 2014 Krzysztof Winiarski
 * @license MIT
 */

'use strict';

module.exports = {
  connection: {
    database: 'test_spiral',
    user: process.env.DATABASE_MYSQL_USERNAME || process.env.USER,
    password: process.env.DATABASE_MYSQL_PASSWORD || ''
  },
  options: {
    dialect: 'mysql',
    logging: false
  }
};
