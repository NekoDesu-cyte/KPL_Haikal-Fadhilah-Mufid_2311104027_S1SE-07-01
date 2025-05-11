const readline = require("readline");
const BankTransferConfig = require("./BankTransferConfig");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

class BankTransferApp {
  constructor() {
    this.configObj = new BankTransferConfig();
    this.config = this.configObj.getConfig();
    this.lang = this.config.lang;
  }

  start() {
    this.askAmount();
  }

  askAmount() {
    const promptText = this.lang === "id"
      ? "Masukkan jumlah uang yang akan di-transfer: "
      : "Please insert the amount of money to transfer: ";

    rl.question(promptText, (amountInput) => this.processAmount(amountInput));
  }

  processAmount(amountInput) {
    const amount = parseInt(amountInput);
    const fee = this.calculateFee(amount);
    const total = amount + fee;

    this.showTransferDetails(fee, total);
    this.askMethodChoice();
  }

  calculateFee(amount) {
    const threshold = this.config.transfer.threshold;
    const lowFee = this.config.transfer.low_fee;
    const highFee = this.config.transfer.high_fee;
    return amount <= threshold ? lowFee : highFee;
  }

  showTransferDetails(fee, total) {
    if (this.lang === "id") {
      console.log(`Biaya transfer = ${fee}`);
      console.log(`Total biaya = ${total}`);
    } else {
      console.log(`Transfer fee = ${fee}`);
      console.log(`Total amount = ${total}`);
    }
  }

  askMethodChoice() {
    const methodPrompt = this.lang === "id" ? "Pilih metode transfer:" : "Select transfer method:";
    console.log(methodPrompt);
    this.config.methods.forEach((method, index) => {
      console.log(`${index + 1}. ${method}`);
    });

    rl.question("> ", (methodChoice) => this.askConfirmation(methodChoice));
  }

  askConfirmation(methodChoice) {
    const confirmationKey = this.lang === "id"
      ? this.config.confirmation.id
      : this.config.confirmation.en;

    const confirmPrompt = this.lang === "id"
      ? `Ketik "${confirmationKey}" untuk mengkonfirmasi transaksi: `
      : `Please type "${confirmationKey}" to confirm the transaction: `;

    rl.question(confirmPrompt, (confirmInput) => {
      this.confirmTransaction(confirmInput, confirmationKey);
    });
  }

  confirmTransaction(confirmInput, confirmationKey) {
    if (confirmInput.toLowerCase() === confirmationKey.toLowerCase()) {
      console.log(this.lang === "id" ? "Proses transfer berhasil" : "The transfer is completed");
    } else {
      console.log(this.lang === "id" ? "Transfer dibatalkan" : "Transfer is cancelled");
    }
    rl.close();
  }
}

const app = new BankTransferApp();
app.start();
