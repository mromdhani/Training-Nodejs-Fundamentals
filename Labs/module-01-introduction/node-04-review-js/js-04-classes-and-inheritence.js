class Animal {
    constructor(name) {
        this.name = name;
    }
    speak() {
        console.log(`${this.name} makes a noise`);
    }
}
class Hippo extends Animal {
    speak() {
        super.speak();
        console.log(`${this.name} roars.`);
    }
}
let hippo = new Hippo('Bertha');
hippo.speak(); // Bertha makes a noise. 
               // Bertha roars.
