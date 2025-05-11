import { readFile } from 'fs/promises';

async function readJSON() {
    try {
        const data = await readFile('jurnal7_1_2311104027.json', 'utf8');
        const obj = JSON.parse(data);

        console.log(`
===== HASIL DESERIALISASI =====
Nama          : ${obj.firstName} ${obj.lastName}
Jenis Kelamin : ${obj.gender}
Usia          : ${obj.age}
Alamat:
  Jalan       : ${obj.address.streetAddress}
  Kota        : ${obj.address.city}
  Provinsi    : ${obj.address.state}
================================
        `);
    } catch (err) {
        console.error('Gagal membaca file:', err.message);
    }
}

readJSON();
