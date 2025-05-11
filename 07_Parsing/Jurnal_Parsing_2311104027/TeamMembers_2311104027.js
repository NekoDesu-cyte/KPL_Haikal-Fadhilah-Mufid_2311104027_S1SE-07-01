    import { readFile } from 'fs/promises';

    async function readTeamMembers() {
        try {
            const data = await readFile('jurnal7_2_2311104027.json', 'utf8');
            const { members } = JSON.parse(data);

            console.log("===== DAFTAR ANGGOTA TIM =====");
            for (const m of members) {
                console.log(`- ${m.nim} | ${m.firstName} ${m.lastName} | ${m.age} tahun | ${m.gender}`);
            }
            console.log("================================");
        } catch (err) {
            console.error("Gagal membaca file:", err.message);
        }
    }

    readTeamMembers();
