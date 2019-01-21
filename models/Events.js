module.exports = function(sequelize, DataTypes) {
  var Events = sequelize.define("Events", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    startDate : {
      type: DataTypes.DATE,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    startTime : {
      type: DataTypes.DATE,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    endTime : {
      type: DataTypes.DATE,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
      len: [1]
    }
  });

  Events.associate = function(models) {
    // We're saying that a Events should belong to a User
    // A Events can't be created without an User due to the foreign key constraint
    Events.belongsTo(models.Users, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Events;
};
