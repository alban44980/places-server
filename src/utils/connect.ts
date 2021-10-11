// const fs = require('fs');
// const path = require('path');
// const Sequelize = require('sequelize');
// const db = {};

// const DB_USERNAME = process.env.DB_USERNAME || 'admin2';
// const DB_PASSWORD = process.env.DB_PASSWORD || 'admin2';
// const DB_PORT = process.env.DB_PORT || 3001;

// const sequelize = new Sequelize({
//   database: 'myplaces',
//   username: DB_USERNAME,
//   password: DB_PASSWORD,
//   port: DB_PORT,
//   dialect: 'postgres',
//   logging: false,
// });

// const files = fs.readdirSync(__dirname);

// // eslint-disable-next-line no-restricted-syntax
// for (const file of files) {
//   if (file !== 'connect.ts') {
//     // eslint-disable-next-line import/no-dynamic-require
//     const model = require(path.join(__dirname, file))(
//       sequelize,
//       Sequelize.DataTypes,
//     );
//     db[model.name] = model;
//   }
// }

// // EXAMPLES
// // db.Response.belongsTo(db.User, { as:'evaluator', foreignKey: { allowNull: false, name: 'evaluator_id' },  });

// // db.User.belongsToMany(db.ADDNAMEHERE, { through: 'ADDNAME' });
// // db.ADDNAME.belongsToMany(db.ADDNAME, { through: 'ADDNAME' });

// // db.User.hasMany(db.Following, {
// //   foreignKey: 'user_id',
// // });
// // db.Following.belongsTo(db.User);


// db.sequelize = sequelize;
// db.Sequelize = Sequelize;

// export default db;
