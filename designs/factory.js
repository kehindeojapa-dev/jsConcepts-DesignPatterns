/** FACTORY PATTERN
 * A creational pattern concerned with the notion of creating objects.
 * It doesn't explicitly require the use of a constructor. Instead, a Factory can provide a generic interface for creating objects, where we can specify the type of factory object we wish to be created.
 */




/** EXAMPLE
 * Shows logic of using constructor pattern to define cars and demonstraes how a vehicle factory may be implemented using the Factory pattern:
 */



//Types.js - Constructors used behind the scenes

// A constructor for defining new cars
function Car(options) {

    //some defaults
    this.doors = options.doors || 4;
    this.state = options.state || "brand new";
    this.color = options.color || "silver";

}

// A constructor for defining new trucks
function Truck(options) {

    //some defaults
    this.state = options.state || "used";
    this.wheelsize = options.wheelsize || "large";
    this.color = options.color || "blue"
}


//FactoryExample.js

//Define a skeleton vehicle factory
function VehicleFactory(){}

//Define the prototypes and utilities for this factory

//Our default vehicleClass is Car
VehicleFactory.prototype.vehicleClass = Car;

//Our factory method for creating new Vehicle instances
VehicleFactory.prototype.createVehicle = function(options) {

    if(options.vehicleType === "car") {
        this.vehicleClass = Car;
    } else {
        this.vehicleClass = Truck;
    }

    return new this.vehicleClass(options);

};

//Create an instance of our factory that makes cars
let carFactory = new VehicleFactory();
let car = carFactory.createVehicle({
    vehicleType: 'car',
    color: 'yellowss',
    doors: '4'
});

// Subclass VehicleFactory to create a factory
// class that builds Trucks
function TruckFactory(){}
TruckFactory.prototype = new VehicleFactory();
TruckFactory.prototype.vehicleClass = Truck;

let truckFactory = new TruckFactory();
let myBigTruck = truckFactory.createVehicle({
    state: 'omg, so bad',
    color: 'pink',
    wheelsize: 'so big'
});



/**
 * WHEN TO USE
 * - When our object or component setup involves a high level of complexity.
 * - When we need to easily generate different instances of objects depending on the environment we are in.
 * - when we're working with small objects or components that share the same properties.
 * - When composing objects with instance of other objects that need only satisfy an API contract(a.k.a., duck typing to work). This is useful for decoupling.
 * 
 * 
 * WHEN NOT TO USE
 * - If providing an interface for object creation is not a design goal for the library or framework we are writing. 
 * It is better to stick to explicit constructors to avoid the unnecessary overhead.
 */


/**
 * DEVSAGE - FACTORY PATTERN
 */

 //Creational category(object creation mechanism for reusability)
 // A factory is an n object that can create different types of object.

 //Object for creating employees(developers and tester)

 function Developer(name){
     this.name = name;
     this.type = "Developer"
 }

 function Tester(name){
     this.name = name;
     this.type = "Tester"
 }

 // Create employee factory
 function EmployeeFactory(){
     this.create = (name, type) => {
         switch(type){
             case 1:
                 return new Developer(name);
                 break;
             case 2:
                 return new Tester(name);
         }
     }
 }

 const employeeFactory = new EmployeeFactory();

 const employees = [];
 employees.push(employeeFactory.create('Dave', 1));
 employees.push(employeeFactory.create('Lang', 2));

 function print(){
     console.log(`My name is ${this.name}, i am a ${this.type}`)
 }

 employees.forEach(emp => {
     print.call(emp)
 })

