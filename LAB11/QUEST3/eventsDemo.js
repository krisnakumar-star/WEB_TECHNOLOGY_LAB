
// Import events module
const EventEmitter = require('events');

// Create event emitter object
const eventEmitter = new EventEmitter();

// Listener 1
eventEmitter.on('greet', (name) => {
    console.log(`Hello ${name}!`);
});

// Listener 2
eventEmitter.on('greet', (name) => {
    console.log(`Welcome ${name} to Node.js events.`);
});

// Trigger event
eventEmitter.emit('greet', 'Krishna');

// Custom event with data
eventEmitter.on('dataEvent', (data) => {
    console.log('Received data:', data);
});

// Emit data event
eventEmitter.emit('dataEvent', { id: 1, message: "Event Driven Programming" });
