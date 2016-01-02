/**
 * @author Krzysztof Winiarski
 * @copyright (c) 2014 Krzysztof Winiarski
 * @license MIT
 */

'use strict';

var E = process.env;

module.exports = {
  connection: {
    database: E.DATABASE_NAME_TEST || 'test_spiral',
    user: E.DATABASE_USERNAME || E.USER,
    password: E.DATABASE_PASSWORD || ''
  },
  options: {
    dialect: 'mysql',
    logging: false
  }
};
