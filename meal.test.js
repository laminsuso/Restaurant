//import the associated models from index.js
const {Meal} = require('./meal')
const {Chef} = require('./chef')
const{Waiter}= require('./waiter')
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
        await Waiter.bulkCreate([{waiter_name: 'James', waiter_salary: 700},
                                {waiter_name: 'Cathy', waiter_salary: 1000},
                                {waiter_name: 'Jimmy', waiter_salary: 800},
                                {waiter_name: 'James', waiter_salary: 700}])
               const testWaiter = await Waiter.findOne({
              where: {
                 waiter_name: 'James'
              }
            });
         expect(testWaiter.waiter_name).toBe('James')
         expect(testWaiter.waiter_salary).toBe(700)
     })

})