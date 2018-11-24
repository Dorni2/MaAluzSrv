/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('duty_to_user', {
    UserID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    DutyId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    }
  }, {
    tableName: 'duty_to_user'
  });
};
