import readline from "readline";
import { stdin as input, stdout as output } from "process";

const rl = readline.createInterface({ input, output });

function tanya(pertanyaan) {
    return new Promise((resolve) => {
        rl.question(pertanyaan, (jawaban) => {
            resolve(jawaban);
        });
    });
}

async function mulai() {
    console.log("=== Formulir Biodata Mahasiswa ===");

    const nama = await tanya("1. Siapa nama kamu? ");
    const jurusan = await tanya("2. Jurusan kamu? ");
    const universitas = await tanya("3. Universitas kamu? ");
    const umur = await tanya("4. Umur kamu? ");

    console.log("\n=== Ringkasan Biodata ===");
    console.log(`Halo, ${nama}!`);
    console.log(`Jurusan: ${jurusan}`);
    console.log(`Universitas: ${universitas}`);
    console.log(`Umur: ${umur} tahun`);

    rl.close();
}

mulai();
