const {sequelize, DataTypes, Model} = require('./db')
//import models
const {Menu } = require('./menu')
const {Meal} = require('./meal')
const {Chef} = require('./chef')
const {Customer} = require('./customer')
const {Waiter} = require('./waiter')

//associate models
//adds foreign key to musician table connecting a menu item instance to a specific menu
Menu.belongsTo(Meal)
//gives us sequelize methods for a one to many relationship
Meal.hasMany(Menu)

Customer.belongsTo(Waiter)
Waiter.hasMany(Customer)

Menu.belongsTo(Chef)
Chef.hasMany(Menu)

Customer.belongsTo(Waiter)
Waiter.hasMany(Customer)

// Order.belongsTo(Customer)
// Customer.hasMany(Order)

//export models with added associations
module.exports = {Menu, Meal, Chef, Customer, Waiter,sequelize}