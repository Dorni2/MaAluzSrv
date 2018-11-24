/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('request', {
    userID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    DutyID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    IsValid: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    IsAccepted: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    }
  }, {
    tableName: 'request'
  });
};
