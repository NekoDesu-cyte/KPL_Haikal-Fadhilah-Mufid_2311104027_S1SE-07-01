class PosisiKarakterGame {
    constructor() {
        this.state = "Berdiri";
    }

    transition(tombol) {
        const transisi = {
            "Berdiri": { "TombolS": "Jongkok", "TombolW": "Terbang" },
            "Jongkok": { "TombolS": "Tengkurap", "TombolW": "Berdiri" },
            "Tengkurap": { "TombolW": "Jongkok" },
            "Terbang": { "TombolX": "Berdiri" }
        };

        if (transisi[this.state] && transisi[this.state][tombol]) {
            this.state = transisi[this.state][tombol];
            console.log(`Karakter sekarang dalam posisi: ${this.state}`);
        } else {
            console.log(`Dari ${this.state} dengan ${tombol} tidak valid.`);
        }
    }
}

const karakter = new PosisiKarakterGame();

karakter.transition("TombolS");
karakter.transition("TombolS");
karakter.transition("TombolW");
karakter.transition("TombolW");
karakter.transition("TombolW");
karakter.transition("TombolX");
karakter.transition("TombolS");
karakter.transition("TombolX");