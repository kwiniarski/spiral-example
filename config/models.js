/**
 * @author Krzysztof Winiarski
 * @copyright (c) 2014 Krzysztof Winiarski
 * @license MIT
 */

'use strict';

var E = process.env;

module.exports = {
  connection: {
    database: 'test_spiral',
    user: E.DATABASE_MYSQL_USERNAME || E.USER,
    password: E.DATABASE_MYSQL_PASSWORD || ''
  },
  options: {
    dialect: 'mysql',
    logging: false
  }
};
