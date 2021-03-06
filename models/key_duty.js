/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('key_duty', {
    ID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    Type: {
      type: DataTypes.STRING(45),
      allowNull: false
    }
  }, {
    tableName: 'key_duty'
  });
};
