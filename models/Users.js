module.exports = function(sequelize, DataTypes) {
  var Users = sequelize.define("Users", {
    // Giving the Users model a name of type STRING
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      },
      unique: true
    },
    password: {
      type: DataTypes.TEXT,
      allowNull: false,
      len: [1]
    }
  });

  Users.associate = function(models) {
    // Associating Users with Posts
    // When an Users is deleted, also delete any associated Posts
    Users.hasMany(models.Events, {
      onDelete: "cascade"
    });
  };

  return Users;
};
