class DoorMachine {
    constructor() {
        this.state = "Terkunci";
    }

    kunciPintu() {
        if (this.state === "Terkunci") {
            console.log("Pintu masih terkunci!");
        }
        this.state = "Terkunci";
        console.log("Pintu terkunci");
    }

    bukaPintu() {
        if (this.state === "Terbuka") {
            console.log("Pintu sudah terbuka!");     
        }
        this.state = "Terbuka";
        console.log("Pintu tidak terkunci");
    }
}

const pintu = new DoorMachine();
pintu.bukaPintu(); 
pintu.kunciPintu();
