module.exports = function(sequelize, DataTypes) {
  var Users = sequelize.define("Users", {
    // Giving the Users model a name of type STRING
    name: DataTypes.STRING
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
