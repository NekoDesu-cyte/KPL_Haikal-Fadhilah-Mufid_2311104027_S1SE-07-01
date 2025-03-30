import crypto from "crypto";

class VideoTube {
    constructor(title) {
        if (typeof title !== "string" || title.length === 0 || title.length > 100) {
            throw new Error("Judul tidak boleh kosong dan maksimal 100 karakter.");
        }
        
        this.id = crypto.randomInt(10000, 99999);
        this.title = title;
        this.views = 0;
    }

    addViews(count) {
        if (typeof count !== "number" || count < 1 || count > 10000000) {
            throw new Error("Jumlah views tidak valid (1 - 10.000.000).");
        }
        
        if (this.views + count > Number.MAX_SAFE_INTEGER) {
            throw new Error("Total views melebihi batas yang diizinkan.");
        }
        
        this.views += count;
    }

    displayDetails() {
        console.log(`Video ID: ${this.id}, Judul: ${this.title}, Total Views: ${this.views}`);
    }
}

try {
    const video = new VideoTube("Panduan Konsep Design By Contract - Haikal Fadhilah Mufid");
    video.addViews(5000000); 
    video.displayDetails(); 
} catch (error) {
    console.error("Terjadi kesalahan:", error.message);
}