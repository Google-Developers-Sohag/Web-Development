/**
 * Document Object Model (DOM) tutorial.
 * 
 * @description shows how to instantiate dynamic object literals and iterate over them.
 * @author pavl_g.
 */
// filling the object w/ some properties and functions
const employee = {
    data: data = {
        id: 234144,
        name: "Mark",
        work: "Electrical Engineer",
    },
    role: "Circuit Architecture"
};

// retrieving data using the subscript notation, remember how json and hashmaps work
const employeeName = employee['data']['name'];

// retrieving data using the dot notation
const id = employee.data.id;

// retrieving data using the subscript notation
const work = employee['data'].work;

// now print in these data 
alert("Name : " + employeeName + "\n" +
      "ID : " + id + "\n" +
      "Work : " + work + "\n");


// filling an object literall dynamically

// creates an empty object literal
const person = {};

person.name = prompt("Please enter your name : ", "");
person['age'] = prompt("Please enter your age : ", "");

const children = ['first', 'second', 'third', 'forth'];
for (var i = 0; i < 4; i++) {
    children[i] = prompt("Please enter your child number "+ i, "");
}
person['children'] = children;

// dynamic iteration over members

// first way using a for-Each legacy style
for (var property in person) {
    console.log(person[property]);
}

// using functional programming
Object.keys(person).forEach(element =>{
    console.log(person[element]);
});

// using a regular for loop
for (var i = 0; i < Object.keys(person).length; i++) {
    console.log(person[Object.keys(person)[i]]);
}

// outputing the values directly
// using a regular for loop
for (var i = 0; i < Object.values(person).length; i++) {
    console.log(Object.values(person)[i]);
}

// overriding methods and injecting actions for event listeners
const GeomagneticListener = {
    UPDATE_MAX: 10,
    LifeCycle: {
        onStart: function onStart(){
            throw Error("Hasn't been instantiated yet !");
        },
        onStop: function onStop() {
            throw Error("Hasn't been instantiated yet !");
        },
        onDestroy: function onDestroy() {
            throw Error("Hasn't been instantiated yet !");
        }
    },
    SensorListeners: {
        onDeviceOrientationChanged: function update(x, y) {
            throw Error("Hasn't been instantiated yet !");
        }
    },
    Values: {
        x: 0,
        y: 0
    }
}

// now let's override some methods and inject our actions into the object literals
GeomagneticListener.LifeCycle.onStart = function onStart() {
    console.log("Sensor Starts !");
}
GeomagneticListener.LifeCycle.onStop = function onStop() {
    console.log("Sensor Stops collecting data, re-initializing now !");
}
GeomagneticListener.SensorListeners.onDeviceOrientationChanged = function update(x, y) {
    console.log("Sensor values = " + "("+x + "," + y+ ")");
}

class Example {

    static main(args) {
        GeomagneticListener.LifeCycle.onStart();
        // update the data each 10 secs
        setInterval(this.#updateSensor, 10000);
    }
    /**
     * Updates the sensor's data with the convenient values of x and y.
     */
    static #updateSensor() {
        if (GeomagneticListener.Values.x > GeomagneticListener.UPDATE_MAX) {
            GeomagneticListener.Values.x = 0;
            GeomagneticListener.LifeCycle.onStop();
        }
        if (GeomagneticListener.Values.y > GeomagneticListener.UPDATE_MAX) {
            GeomagneticListener.Values.y = 0;
            GeomagneticListener.LifeCycle.onStop();
        }

        GeomagneticListener.Values.x += 10;
        GeomagneticListener.Values.y += 5;
        

        GeomagneticListener.SensorListeners.onDeviceOrientationChanged(GeomagneticListener.Values.x,
            GeomagneticListener.Values.y);
    }
}

Example.main(0);