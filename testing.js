await sequelize.sync({force:true})
        //create array of bands
        const arrayOfWaiter = [
                 {name: 'James', salary: 700},
                 {name: 'Cathy', salary: 1000},
                 {name: 'Jimmy', salary: 800},
                 {name: 'James', salary: 700},
        ]
        //create array of customers
        const arrayOfCustomer =[
            {name: 'Anuja', payment_type: 'Card', customer_address: "101 main street", phone_number : 123456789, waiter_id : 1},
            {name: 'Crystal', payment_type: 'Card', customer_address: "500 apple aver", phone_number : 659384567, waiter_id : 1},
            {name: 'Nahima', payment_type: 'Cash', customer_address: "200 river Rd", phone_number : 987654321, waiter_id : 1},
            {name: 'Lamin', payment_type: 'Cash', customer_address: "2304 main street", phone_number : 342516789, waiter_id : 2}
        ]
        //add arrays to database
        await Waiter.bulkCreate(arrayOfWaiter)
        await Customer.bulkCreate(arrayOfCustomer)
    })
    //create instances of Customer Model for testin
    test('Customers have name', async() => {
        //read test instance from db
        const testCustomer = await Customer.findOne({
            where: {name: 'Anuja'}
    });
        expect(testCustomer.name).toBe('Anuja')
    })
    test('Customers have name', async() => {
        //read test instance from db
        const testCustomer = await Customer.findOne({where: {customer_address: '101 main street'}
    });
        expect(testCustomer.customer_address).toBe('101 main street')
    })

const { Association } = require('sequelize/dist')
    ///Crystal test

    //import the associated models from associations.js
const {Menu, MenuItem} = require('./associations')
const {sequelize} = require('./db')
//test menu item database CRUD
describe('Menu Item Database', () => {

    beforeAll(async() => {
        //reset database
        await sequelize.sync({force:true})
        //create array of menu items
        const arrayOfMenuItems = [
            {food_name: 'Eggs', chef_id: '2', price: 2},
            {food_name: 'Pancakes', chef_id: '3', price: 5},
            {food_name:  'Burger', chef_id: '3', price: 6},
            {food_name: 'Fries', chef_id: '2', price: 3},
            {food_name: 'Pasta', chef_id: '1', price: 8},
            {food_name: 'Daquiri', chef_id: '3', price: 6},
            {food_name: 'Steak', chef_id: '4', price: 8},
            {food_name: 'Martini', chef_id: '1', price: 5}
        ]

        //create array of menus
        const arrayOfMenus =[
            {menu_name: 'Breakfast', time_served: 'morning', age_req: false},
            {menu_name: 'Lunch', time_served: 'afternoon', age_req: false},
            {menu_name: 'Dinner', time_served: 'evening', age_req: false},
            {menu_name: 'Dessert', time_served: 'all day', age_req: false},
            {menu_name: 'Mixed Drinks', time_served: 'all day', age_req: true}
            {menu_name: 'Kids Menu', time_served: 'all day', age_req: true}
        ]
        //add arrays to database
        await Menu.bulkCreate(arrayOfMenus)
        await MenuItem.bulkCreate(arrayOfMenuItems)
    })

    //create instances of Musician Model for testin
    test('menus have age requirement', async() => {
        //read test instance from db
        const testMenu = await Menu.findOne({where: {menu_name: 'Breakfast'}});
        expect(testMenu.age_req).toBe(false)
    })
    test('menu has time served', async() => {
        //read test Musician instance from db
        const testMenu = await Menu.findOne({where: {menu_name: 'Mixed Drinks'}});
        expect(testMenu.time_served).toBe('all day')
    })

    test('price of food can be found', async() => {
        //read test Band instance from db
        const testMenuItem = await MenuItem.findOne({where: {food_name: 'Pancakes'}});
        expect(testMenuItem.price).toBe(5)
    })

    test('menus can have many menu items', async()=> {
        //read test menu instance from db
        const testMenu = await Menu.findOne({where: {menu_name: 'Breakfast'}});
        //create 2 test instances of Menu items
        const testMenuItem1 = await MenuItem.findOne({where: {food_name: 'Eggs'}})
        const testMenuItem2 = await MenuItem.findOne({where: {food_name: 'Pancakes'}})

        //add test menu items to test menu
        //magic sequelize add method
        await testMenu.addMenuItem(testMenuItem1)
        await testMenu.addMenuItem(testMenuItem2)
        //retrieve list of musicians in this band
        const MenuItemList = await testMenu.getMenuItems()
        //assert that the list of musicians is length 2
        expect(MenuItemList.length).toBe(2)
        //assert that the 0th index of the array musicianList is an instance of the model Musician
        expect(MenuItemList[0] instanceof MenuItem).toBeTruthy()
        expect(MenuItemList[0].food_name).toMatch('Eggs')

    })

})

///Association
const {sequelize, DataTypes, Model} = require('./db')
//import models
const { MenuItem } = require('./menu-item')
const { Menu } = require('./menu')

//associate models
//adds foreign key to musician table connecting a menu item instance to a specific menu
MenuItem.belongsTo(Menu)
//gives us sequelize methods for a one to many relationship
Menu.hasMany(MenuItem)

//export models with added associations
module.exports = {Menu, MenuItem, sequelize}

