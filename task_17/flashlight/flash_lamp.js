class FlashLamp {
    status
    battery

    constructor(status, battery) {
        this.status = status;
        this.battery = battery;
    }

    setBattery(battery) {
        this.battery = battery;
    }
    getBatteryInfo() {
        return this.battery.getEnergy();
    }
    light() {
        if(this.status) {
            alert("Lightning")
        }
        else {
            alert("Not lightning");
        }
    }
    turnOn() {
        this.status = true;
    }
    turnOff() {
        this.status = false;
    }
}

let battery = new Battery();
battery.getEnergy(10);

let flashLamp = new FlashLamp();
flashLamp.setBattery(battery);

document.write("Battery info:" + flashLamp.getBatteryInfo() + "<br/>");
flashLamp.light();

document.write("Turn on<br/>")
flashLamp.turnOn();
flashLamp.light();
document.write("Battery info:" + flashLamp.getBatteryInfo() + "<br/>");

document.write("Turn off<br/>")
flashLamp.turnOff();
flashLamp.light();