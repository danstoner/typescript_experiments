class Car {
    // Properties
    private _make!: string;
    private _color!: string;
    private _doors!: number;


    // Constructor
    constructor(make: string, color: string, doors = 4) {
        this.make = make;
        this.color = color;
        this.doors = doors;
    }

    // Accessors
    get make() {
        return this._make
    }
    set make(make) {
        this._make = make;
    }

    get color() {
        return 'The color of the car is ' + this._color;
    }
    set color(color) {
        this._color = color;
    }

    get doors() {
        return this._doors;
    }
    set doors(doors) {
        if ((doors % 2) === 0) {
            this._doors = doors;
        } else {
            throw new Error('Doors must be an even number. no hatchbacks!');
        }
    }

    // Methods
    accelerate(speed: number): string {
        return `${this.worker()} is accelerating to ${speed} MPH.`
    }
    brake(): string {
        return `${this.worker()} is braking with the standard braking system.`
    }
    turn(direction: 'left' | 'right'): string {
        return `${this.worker()} is turning ${direction}`;
    }
    // This function performs work for the other method functions
    worker(): string {
        return this.make;
    }
}

// let hatchback = new Car("Honda", "yellow", 3);
let beetle = new Car("VW", "white", 2);

console.log(beetle.doors);
console.log(beetle.turn("left"));
