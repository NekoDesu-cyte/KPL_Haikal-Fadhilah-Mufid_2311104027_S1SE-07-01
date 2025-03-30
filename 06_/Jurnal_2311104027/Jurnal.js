const crypto = require("crypto");

class VideoTube {
    constructor(title) {
        if (typeof title !== "string" || title.length === 0 || title.length > 200) {
            throw new Error("Judul tidak boleh kosong dan maksimal 200 karakter.");
        }
        this.id = crypto.randomInt(10000, 99999);
        this.title = title;
        this.playCount = 0;
    }

    increaseViews(count) {
        if (typeof count !== "number" || count < 1 || count > 25000000) {
            throw new Error("Jumlah views tidak valid (1 - 25 juta).");
        }
        this.playCount += count;
    }

    showDetails() {
        console.log("Video ID:", this.id);
        console.log("Judul:", this.title);
        console.log("Views:", this.playCount);
    }
}

class UserTube {
    constructor(username) {
        if (typeof username !== "string" || username.length === 0 || username.length > 100) {
            throw new Error("Username tidak boleh kosong dan maksimal 100 karakter.");
        }
        this.id = crypto.randomInt(10000, 99999);
        this.username = username;
        this.videos = [];
    }

    addVideo(video) {
        if (!(video instanceof VideoTube)) {
            throw new Error("Hanya bisa menambahkan instance VideoTube.");
        }
        if (video.playCount >= Number.MAX_SAFE_INTEGER) {
            throw new Error("Play count melebihi batas.");
        }
        this.videos.push(video);
    }

    getTotalViews() {
        let total = 0;
        for (let i = 0; i < this.videos.length; i++) {
            total += this.videos[i].playCount;
        }
        return total;
    }

    showAllVideos() {
        console.log("Username:", this.username);
        console.log("Daftar video:");
        for (let i = 0; i < Math.min(this.videos.length, 8); i++) {
            console.log(`- ${this.videos[i].title} (${this.videos[i].playCount} views)`);
        }
    }
}

try {
    const user = new UserTube("Haikal Fadhilah Mufid");

    const vid1 = new VideoTube("Review Film A oleh Haikal Fadhilah Mufid");
    const vid2 = new VideoTube("Review Film B oleh Haikal Fadhilah Mufid");
    const vid3 = new VideoTube("Review Film C oleh Haikal Fadhilah Mufid");

    vid1.increaseViews(100);
    vid2.increaseViews(200);
    vid3.increaseViews(300);

    user.addVideo(vid1);
    user.addVideo(vid2);
    user.addVideo(vid3);

    user.showAllVideos();
    console.log("Total Views:", user.getTotalViews());
} catch (error) {
    console.log("Error:", error.message);
}
