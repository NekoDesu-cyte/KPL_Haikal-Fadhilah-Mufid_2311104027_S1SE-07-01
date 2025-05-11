const fs = require('fs');

function readJSONCourses() {
    fs.readFile('tp7_2_2311104027.json', 'utf8', (err, data) => {
        if (err) {
            console.error("Gagal membaca file:", err.message);
            return;
        }

        try {
            const { courses } = JSON.parse(data);

            console.log("===== DAFTAR MATA KULIAH =====");
            courses.forEach((mk, i) => {
                console.log(`MK ${i + 1}: ${mk.code} - ${mk.name}`);
            });
            console.log("==============================");
        } catch (parseErr) {
            console.error("Gagal parsing data JSON:", parseErr.message);
        }
    });
}

readJSONCourses();
