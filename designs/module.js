/**
 * The Module Pattern
 * Is based in part on object literals
 */

// var myModule = {
//     myProperty: "someValue",

//     //object literals can contain properties and methods.
//     //e.g. we can define a further object for module configuration:
//     myConfig: {
//         useCaching: true,
//         language: "en"
//     },

//     // a very basic method
//     myMethod: function() {
//         console.log("Where in the world is Micheal Jackson today");
//     },

//     // output a value based on the current configuration
//     myMethod2: function() {
//         console.log(`Caching is ${(this.myConfig.useCaching) ? "enabled" : "disabled"}`);
//     },

//     // override the current configuration
//     myMethod3: function(newConfig) {
//         if(typeof newConfig === "object") {
//             this.myConfig = newConfig;
//             console.log(this.myConfig.language);
//         }
//     }
// }

// myModule.myMethod()
// myModule.myMethod2()
// myModule.myMethod3({
//     useCaching: false,
//     language: "fr"
// });
// myModule.myMethod2()


/**
 * JS Module Pattern
 * it encapsulates "privacy" state and organisation using closures.
 * It provides a way of wrapping a mix of public and private methods and variables, protecting pieces from leaking into the global scope and accidentally colliding with another developer's interface.
 * With this pattern, only a public API is returned, keeping everything else within the closure private
 * Within the Module pattern, variables or methods declared are only available inside the module itself, thanks to closure. Variables or methods defined within the returning object, however, are available to everyone.
 * Looks like an IIFE, but returns an object.
 */




/** EXAMPLE 1
 * an Implementation of the Module pattern by creating a module that is self-contained.
 */

var testModule = (function() {
    var counter = 0;
    return {
        incrementCounter: function(){
            return ++counter;
        },
        resetCounter: function(){
            console.log(`Counter value prior to reset: ${counter}`);
            counter = 0;
        }
    };
})();

//Here, other parts of the code are unable to directly read the value of our increment
// Counter() or resetCounter(). The counter variable is actually fully shielded from our
// global scope so it acts just like a private variable would—its existence is limited to
// within the module’s closure so that the only code able to access its scope, are our two
// functions. Our methods are effectively namespaced so in the test section of our code,
// we need to prefix any calls with the name of the module (e.g., testModule).




/** TEMPLATE
 * a simple template for module pattern, that covers namespacing, public, and private variables:
 */

 let myNamespace = (function(){

    // A private counter variable
    let myPrivateVar = 0;

    //A private function which logs any arguments
    let myPrivateMethod = function(foo) {
        console.log(foo);
    }

    return {
        
        // A public variable
        myPublicVar: 'foo',
        
        //A public function utilizing privates
        myPublicFunction: function(bar) {

            // Increment our private counter
            myPrivateVar++;

            // Call our private method using bar
            myPrivateMethod(bar);
        }
    }
 })();


/** EXAMPLE 2
 * A shopping basket implemented using module pattern
 * The module itself is completely self-contained in a global variable called basketModule.
 * The basket array in the module is kept private, so other parts of our application are unable to diretly read it. It only exists with the module's closure, so the only methods able to access it are those with access to its scope(i.e., addItem(), getItem() etc.).
 */

const basketModule = (function(){
    
    // privates
    let basket = [];
    let basketList = [];

    function doSomethingPrivate(){
        //....
        console.log('Am doing something')
    }
    function doSomethingElsePrivate(){
        //...
    }

    //Return an object exposed to the public
    return {
        
        // Add items to our basket
        addItem: function(values){
            basket.push(values);
        },

        //Get the count of items in the basket
        getItemCount: function(){
            return basket.length
        },

        // Public alias to a private function
        doSomething: doSomethingPrivate,

        // Get the total value of items in the basket
        getTotal: function() {

            let itemCount = this.getItemCount(), total = 0;

            while (itemCount--) {
                total += basket[itemCount].price;
            }

            return total;
        },

        //Get list of items in the basket
        getItemList: function(){
            basket.forEach(list => {
                basketList.push(list.item)
            })
            return basketList;
        },
        
        //Get Basket content
        getBasket: function(){
            return basket;
        }
    }
})();


// basketModule returns an object with a public API we can use.
basketModule.addItem({
    item: 'bread',
    price: 550
});

basketModule.addItem({
    item: 'milk',
    price: 100
})
basketModule.addItem({
    item: 'eggs',
    price: 100
})

// However, the following will not work:

// Outputs: undefined
// This is because the basket itself is not exposed as a part of our
// the public API
//console.log( basketModule.basket );

// This also won't work as it only exists within the scope of our
// basketModule closure, but not the returned public object
//console.log( basket );

