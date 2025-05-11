const readline = require('readline');
const CovidConfig = require('./CovidConfig');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const configInstance = new CovidConfig();
const config = configInstance.getConfig();

rl.question(`Masukkan suhu tubuh Anda (${config.satuan_suhu}): `, (suhuInput) => {
  const suhu = parseFloat(suhuInput);

  rl.question('Sudah berapa hari Anda mengalami demam? ', (hariInput) => {
    const hari = parseInt(hariInput);
    let suhuNormal = false;

    // Validasi suhu normal dalam celcius
    if (config.satuan_suhu === 'celcius') {
      suhuNormal = suhu >= 36.5 && suhu <= 37.5;
    }

    const demamLama = hari > config.batas_hari_deman;

    if (suhuNormal && !demamLama) {
      console.log(config.pesan_diterima);
    } else {
      console.log(config.pesan_ditolak);
    }

    rl.close();
  });
});
