/**
 * MEDIATOR design pattern
 * Allows you to create a object(known as the mediator) that encapsulates and control how some set of objects interact with each other 
 * 
 * These objects dont communicate with each other but send their message to the mediator and the mediator decides who the message is delivered to
 */

//  CHAT-ROOM Model
function Member(name) {
    this.name = name;
    this.chatroom = null;
}

Member.prototype = {
    send: function(message, toMember){
        this.chatroom.send(message, this, toMember)
    },
    receive: function(message, fromMember){
        console.log(`${fromMember.name} to ${this.name}: ${message}`)
    }
}

function Chatroom() {
    this.members = {}
}

Chatroom.prototype = {
    addMember = function(member){
        this.members[member.name] = member;
        member.chatroom = this
    },
    send: function(message, fromMember, toMember) {
        toMember.receive(message, fromMember); 
    }
}