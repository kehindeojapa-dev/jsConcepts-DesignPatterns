/**
 * Observer dp;
 * one to many dependency relationship
 * from one object(known as subject) to many objects(known as observers); 
 * this observers can be functions which watch the subject and wait for a signal/trigger from the subject before they run
 * Very useful for creating event-handling system.
 */


function Subject() {
    //Keep track of all observers
    this.observers = []//array of observer functions
}

Subject.prototype = {
    //fn is an observer function 
    subscribe: function(fn) {
        //fn wants to subscribe to the subject, when the subjects send a signal/trigger: i want to be aware.
        this.observers.push(fn)
    },
    unsubscribe: function(fnToRemove) {
        //this fn doesn't want to listen to any trigger/signal from the subject anymore.
        this.observers = this.observers.filter(fn => {
            if(fn != fnToRemove){
                return fn;
            }
        })
    },
    fire: function() {
        //this notify every observer function subscribed to the subject.
        this.observers.forEach(fn => {
            fn.call();
        })
    }
}

const subject = new Subject();

function obs1() {
    console.log("observer1 firing")
} 
function obs2() {
    console.log("observer2 firing")
} 
function obs3() {
    console.log("observer3 firing")
} 

subject.subscribe(obs1);
subject.subscribe(obs2);
subject.subscribe(obs3);
subject.unsubscribe(obs1);
subject.fire();