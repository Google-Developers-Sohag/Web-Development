const Vector = {
    x: 0,
    y: 0,
    z: 0,
}

const Wheel = {
    id: '',
    type: ''
}

const Gallon = {
    liters: 0
}

const Car = {
    model: '',
    speed: 0,
    weight: 0,
    wheels: [],
    addWheel: (wheel, position) => {
        console.log("Added Wheel " + wheel.id + " w/ type " + wheel.type + "at" + " (" + position.x + ", " + position.y + ", " + position.z + ")");
    },
    startEngine: () => {
        return "Engine started";
    },
    refillTank: function (gallons) {
        if (!(gallons instanceof Gallon)) {
            throw Error("A gallon must be specified !");
        }
        console.log("Filling the tank with " + gallons.liters);
    },
    accelerate: function (speed) {
        console.log("Accelerating with " + speed);
        return speed;
    },
    brake: function (power) {

    }
}

/* create four wheels */
const wheel_1 = Object.create(Wheel);
wheel_1.id = 'Front 1';
const position = Object.create(Vector);
position.x = 5;
position.y = 0;
position.z = 8;

const wheel_2 = Object.create(Wheel);


/* inheritance and overriding methods */
const ford = Object.create(Car);
ford.accelerate = function(speed) {
    console.log("This is ford, accelerating with more speed : " + (Car.accelerate(speed) + 100));
}
ford.startEngine = function startEngine() {
    console.log(Car.startEngine());
}
ford.addWheel = function(wheel, position) {
    ford.wheels.push(wheel);
    Car.addWheel(wheel, position);
}
ford.addWheel(wheel_1, position);
console.log(ford.wheels[0].id);
ford.startEngine();
ford.accelerate(200);

/* another way of achieving the same results, but here this is not a compelete inhrtance */
const Mustang = {
    model: Car.model + 'Mustang',
    startEngine: () => {
        console.log(Mustang.model + " " + Car.startEngine());
    },
    accelerate: function(speed) {
        console.log("This is Mustang, accelerating with more speed : " + (Car.accelerate(speed) + 250));
    }
}
const mustang = Object.create(Mustang);
mustang.startEngine();
mustang.accelerate(100);


function Vehicle() {
    // this : marks a constructor
    this.model = '';
    this.name = '';
    this.wheels = [];
}
console.log(Vehicle.prototype);

const myCar = new Vehicle();
myCar.name = 'myCar';
// add a new property to the prototype object (parent object)
myCar.weight = 300;
console.log(myCar.weight);

// add a new property to the car object.
myCar.Gallon = "liters";
console.log(myCar.Gallon);

// add some wheels 
for (var i = 0; i < 4; i++) {
    myCar.wheels[i] = Object.create(Wheel);
    myCar.wheels[i].id = "Front_" + i;
}

console.log(myCar.wheels[2].id);
