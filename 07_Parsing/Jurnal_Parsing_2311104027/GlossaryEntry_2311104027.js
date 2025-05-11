import { readFile } from 'fs/promises';

async function readGlossaryJSON() {
    try {
        const data = await readFile('jurnal7_3_2311104027.json', 'utf8');
        const obj = JSON.parse(data);
        const entry = obj.glossary?.GlossDiv?.GlossList?.GlossEntry;

        if (!entry) {
            console.log("Data glossary tidak ditemukan.");
            return;
        }

        console.log(`
===== GLOSSARY ENTRY =====
ID         : ${entry.ID}
SortAs     : ${entry.SortAs}
Term       : ${entry.GlossTerm}
Acronym    : ${entry.Acronym}
Abbrev     : ${entry.Abbrev}
Definition : ${entry.GlossDef?.para}
See Also   : ${(entry.GlossDef?.GlossSeeAlso || []).join(', ')}
GlossSee   : ${entry.GlossSee}
===========================
        `);
    } catch (err) {
        console.error("Gagal membaca file atau memproses data:", err.message);
    }
}

readGlossaryJSON();
