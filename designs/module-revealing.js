/** REVEALING MODULE PATTERN
 * Revealing Module Pattern - Christian Heilmann
 * His frustations with the standard module pattern
 * - Had to repeat the name of the main object when he wanted to call one public method from another or access public variables.
 * -Module pattern's requirement of having to switch to object literal notation for the things he wished to make public.
 * Result of his efforts
 * - An updated pattern in which he could simply define all functions and variables in the private scope and return an anonymous object with pointers to private functionality he wished to reveal as public.
 */



/** EXAMPLE
 * An example of how to use the revealing module pattern is as follows:
 */

let myRevealingModule = function() {
    
    let privateVar = "Kenny D", publicVar = "What's good";
    
    function privateFunction() {
        console.log(`Name: ${privateVar}`);
    }

    function publicSetName(strName) {
        privateVar = strName;
    }

    function publicGetName() {
        privateFunction();
    }


    // Reveal public pointers to
    // private functions and properties

    return {
        setName: publicSetName,
        greeting: publicVar,
        getName: publicGetName
    }

}();



/** EXAMPLE 2
 * Illustration of the pattern: used to reveal private functions and properties with a more specific naming scheme if you would prefer:
 */

let myRevealingModule2 = function(){
    
    let privateCounter = 0;

    function privateFunction(){
        privateCounter++;
    }

    function publicFunction() {
        // publicIncrement();
        privateCounter;
    }

    function publicIncrement(){
        privateFunction();
    }

    function publicGetCount(){
        return privateCounter;
    }

    // Reveal public pointers to 
    //private functions and properties

    return {
        start: publicFunction,
        increment: publicIncrement,
        count: publicGetCount
    };

}();

/**
 * ADVANTAGES
 * - Allows the syntax of our scripts to be more consistent.
 * - Also, makes it easier to tell at the end of the module which of our functions and variables may be accessed publicly, which eases readability.
 * 
 * DISADVANTAGES
 * - If a private function refers to a public function, that public function can't be overridden if a patch is necessary, because, the private function will continue to refer to the private implementation, and the pattern doesn't apply to public members, only to functions.
 * - Public object members that refer to private variables are also subject to the no-patch rule.
 */




 /**
  * Recreate the basketModule with revealing module pattern
  */

const basketModule = function(){
    
    // private scope
    let basket = [];
    let basketList = [];

    function doSomethingPrivate(){
        //....
        console.log('Am doing something')
    }
    function doSomethingElsePrivate(){
        //...
    }
    // Add items to our basket
    function addItem(values){
        basket.push(values);
    }

    //Get the count of items in the basket
    function getItemCount(){
        return basket.length
    }

    // Get the total value of items in the basket
    function getTotal() {

        let itemCount = this.getItemCount(), total = 0;

        while (itemCount--) {
            total += basket[itemCount].price;
        }

        return total;
    }

    //Get list of items in the basket
    function getItemList(){
        basket.forEach(list => {
            basketList.push(list.item)
        })
        return basketList;
    }

    // Reveal public pointers to
    // private functions and properties 
    return {
        addItem: addItem,
        getItemCount: getItemCount,
        doSomething: doSomethingPrivate,
        getTotal: getTotal,
        getItemList: getItemList
    }
}();


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