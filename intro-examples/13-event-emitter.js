const EventEmitter = require("events");

//custom ->extend class
//emit event =>create instance

const customEmitter = new EventEmitter();

//events on:listen for an event ; emit:emit an event
customEmitter.on('response', (name,id) => {
    console.log("Data received", name, id);
}) //name of event is response

customEmitter.on('response', () => {
    console.log("Many logics for the same event are allowed, but the order matters");
}) //name of event is response


customEmitter.emit('response','John',34)