//import the associated models from index.js
const {Meal} = require('./meal')
const {Chef} = require('./chef')
const Waiter = require('./waiter')
const Customer = require('./customer')
const Menu = require('./menu')
const {sequelize} = require('./db')

describe('Restaurant Database', () => {
    beforeAll(async() => {
        await sequelize.sync({force:true})
    })

    test('Has a meal', async() => {
       await Meal.bulkCreate([{breakfast_menu: 'egg muffin', lunch_menu: 'tacos', dinner_menu: 'spaghetti'},
                                {breakfast_menu: 'French toast', lunch_menu: 'French Dip Sandwiches', dinner_menu: 'chicken'}])
              const testMeal = await Meal.findOne({
             where: {
                breakfast_menu: 'egg muffin'
             }
           });
        expect(testMeal.breakfast_menu).toBe('egg muffin')
        expect(testMeal.lunch_menu).toBe('tacos')
        expect(testMeal.dinner_menu).toBe('spaghetti')
    
    })
    test('Has a chef', async() => {
        await Chef.bulkCreate([{chef_name: 'Lamin', chef_speciality: 'Sous-Chef', chef_salary: 8000},
                            {chef_name: 'Crystal', chef_speciality: 'Dessert', chef_salary: 7000},
                            {chef_name: 'Anuja', chef_speciality: 'Entree', chef_salary: 7000},
                            {chef_name: 'Nahima', chef_speciality: 'Sauce', chef_salary: 7000}])
               const testChef = await Chef.findOne({
              where: {
                 chef_name: 'Lamin'
              }
            });
         expect(testChef.chef_name).toBe('Lamin')
         expect(testChef.chef_speciality).toBe('Sous-Chef')
     })

     test('Has a waiter', async() => {
        await Waiter.bulkCreate([{name: 'James', salary: 700},
                                {name: 'Cathy', salary: 1000},
                                {name: 'Jimmy', salary: 800},
                                {name: 'James', salary: 700}])
               const testWaiter = await Waiter.findOne({
              where: {
                 name: 'James'
              }
            });
         expect(testWaiter.name).toBe('James')
         expect(testWaiter.salary).toBe(700)
     })

     test('Has a Customer', async() => {
        await Customer.bulkCreate([{customer_name: 'Anuja', payment_type: 'Card', customer_address: "101 main street", phone_number : 123456789, waiter_id : 1},
                                 {customer_name: 'Crystal', payment_type: 'Card', customer_address: "500 apple aver", phone_number : 659384567, waiter_id : 1},
                                 {customer_name: 'Nahima', payment_type: 'Cash', customer_address: "200 river Rd", phone_number : 987654321, waiter_id : 1},
                                {customer_name: 'Lamin', payment_type: 'Cash', customer_address: "2304 main street", phone_number : 342516789, waiter_id : 2}
                                ])
               const testCustomer = await Customer.findOne({
              where: {
                 customer_name: 'Anuja'
              }
            });
         expect(testCustomer.customer_name).toBe('Anuja')
         expect(testCustomer.payment_type).toBe('Card')
         expect(testCustomer.customer_address).toBe("101 main street")
         expect(testCustomer.phone_number).toBe(123456789)
         expect(testCustomer.waiter_id).toBe(1)
     })

     test('Has a meal', async() => {
        await Menu.bulkCreate([{food_name: 'Eggs', chef_id: 2, price: 2},
        {food_name: 'Pancakes', chef_id: 3, price: 5},
        {food_name:  'Burger', chef_id: 3, price: 6},
        {food_name: 'Fries', chef_id: 2, price: 3},
        {food_name: 'Pasta', chef_id: 1, price: 8},
        {food_name: 'Daquiri', chef_id: 3, price: 6},
        {food_name: 'Steak', chef_id: 4, price: 8},
        {food_name: 'Martini', chef_id: 1, price: 5}])
               const testMenu = await Menu.findOne({
              where: {
                 food_name: 'Eggs'
              }
            });
         expect(testMenu.chef_id).toBe(2)
         expect(testMenu.price).toBe(2)
     
     })

})