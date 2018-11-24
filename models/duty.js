/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('duty', {
    ID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    TypeID: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    ReqAmount: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    FromDate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    ToDate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    PityPoints: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '0'
    }
  }, {
    tableName: 'duty'
  });
};
