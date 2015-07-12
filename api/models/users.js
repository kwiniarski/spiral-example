/**
 * @author Krzysztof Winiarski
 * @copyright (c) 2014 Krzysztof Winiarski
 * @license MIT
 */

'use strict';

module.exports = function (sequelize, Sequelize) {

  var user;

  user = sequelize.define('users', {
    name: Sequelize.STRING,
    email: {
      type: Sequelize.STRING,
      validate: {
        isEmail: true
      }
    },
    avatar: {
      type: Sequelize.STRING,
      allowNull: true
    }
  }, {
    classMethods: {
      associations: [
        {
          type: 'belongsToMany',
          model: 'roles',
          options: {
            through: 'user_roles'
          }
        }
      ]
    }
  });

  return user;

};
