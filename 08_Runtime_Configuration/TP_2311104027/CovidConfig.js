const fs = require('fs');

class CovidConfig {
  constructor(configFile = 'covid_config.json') {
    this.configFile = configFile;
    this.defaultConfig = {
      satuan_suhu: 'celcius',
      batas_hari_deman: 2,
      pesan_ditolak: 'Maaf, Anda tidak diizinkan masuk ke dalam gedung.',
      pesan_diterima: 'Selamat datang, Anda boleh masuk.'
    };
    this.config = this.loadConfig();
  }

  loadConfig() {
    if (fs.existsSync(this.configFile)) {
      const rawData = fs.readFileSync(this.configFile);
      return JSON.parse(rawData);
    } else {
      this.saveConfig(this.defaultConfig);
      return this.defaultConfig;
    }
  }

  saveConfig(config) {
    fs.writeFileSync(this.configFile, JSON.stringify(config, null, 2));
  }

  getConfig() {
    return this.config;  // Metode ini mengembalikan konfigurasi
  }
}

module.exports = CovidConfig;
