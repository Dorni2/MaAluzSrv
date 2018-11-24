/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('trade', {
    ID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    SourceUserID: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    DestinationUserID: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    DutyID: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    IsAccepted: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    IsAdminAccepted: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    }
  }, {
    tableName: 'trade'
  });
};
