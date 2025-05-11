const fs = require('fs');

class DataMahasiswa2311104027 {
    static ReadJSON() {
        fs.readFile('tp7_1_2311104027.json', 'utf8', (err, data) => {
            if (err) {
                console.error("Gagal membaca file:", err.message);
                return;
            }

            try {
                const obj = JSON.parse(data);
                const { depan, belakang } = obj.nama;
                const { nim, fakultas } = obj;

                console.log(`Nama ${depan} ${belakang} dengan NIM ${nim} dari Fakultas ${fakultas}`);
            } catch (parseErr) {
                console.error("Gagal parsing JSON:", parseErr.message);
            }
        });
    }
}

DataMahasiswa2311104027.ReadJSON();