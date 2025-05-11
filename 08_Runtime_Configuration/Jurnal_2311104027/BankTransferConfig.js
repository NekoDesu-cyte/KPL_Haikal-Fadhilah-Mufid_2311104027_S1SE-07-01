const fs = require("fs");

class BankTransferConfig {
  constructor() {
    this.configFile = "bank_transfer_config.json";
    this.defaultConfig = this.createDefaultConfig();
    this.config = this.initializeConfig();
  }

  createDefaultConfig() {
    return {
      lang: "en",
      transfer: {
        threshold: 25000000,
        low_fee: 6500,
        high_fee: 15000
      },
      methods: ["RTO (real-time)", "SKN", "RTGS", "BI FAST"],
      confirmation: {
        en: "yes",
        id: "ya"
      }
    };
  }

  initializeConfig() {
    if (this.isConfigFileExists()) {
      const configData = this.readConfigFile();
      return JSON.parse(configData);
    } else {
      this.saveConfigFile(this.defaultConfig);
      return this.defaultConfig;
    }
  }

  isConfigFileExists() {
    return fs.existsSync(this.configFile);
  }

  readConfigFile() {
    return fs.readFileSync(this.configFile);
  }

  saveConfigFile(config) {
    fs.writeFileSync(this.configFile, JSON.stringify(config, null, 2));
  }

  getConfig() {
    return this.config;
  }
}

module.exports = BankTransferConfig;
