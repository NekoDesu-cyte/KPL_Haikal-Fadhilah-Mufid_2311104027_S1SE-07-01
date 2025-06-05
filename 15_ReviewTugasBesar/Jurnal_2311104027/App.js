const fs = require("fs");
const readline = require("readline");
const crypto = require("crypto");

const DATA_FILE = "data_users.json";

function encryptPassword(pass) {
  return crypto.createHash("sha256").update(pass).digest("hex");
}

// Validasi username dan pw
function isValidInput(user, pass) {
  const asciiOnly = /^[A-Za-z]+$/;
  const uniqueChar = /[!@#$%^&*]/;

  if (!asciiOnly.test(user)) {
    return "Username hanya boleh berisi huruf A-Z atau a-z.";
  }

  if (pass.length < 8 || pass.length > 20) {
    return "Password harus memiliki panjang 8 hingga 20 karakter.";
  }

  if (!uniqueChar.test(pass)) {
    return "Password harus mengandung minimal satu karakter unik (!@#$%^&*).";
  }

  if (pass.toLowerCase().includes(user.toLowerCase())) {
    return "Password tidak boleh mengandung username.";
  }

  return null;
}

// baca data user
function readUserData() {
  if (!fs.existsSync(DATA_FILE)) return [];
  const raw = fs.readFileSync(DATA_FILE);
  return JSON.parse(raw);
}

// nyimpen save user
function storeUser(user, hashedPass) {
  const users = readUserData();
  if (users.find(u => u.username === user)) {
    console.log("Username sudah digunakan. Silakan pilih yang lain.");
    return false;
  }
  users.push({ username: user, password: hashedPass });
  fs.writeFileSync(DATA_FILE, JSON.stringify(users, null, 2));
  return true;
}

// Proses lojinn
function processLogin(user, pass) {
  const users = readUserData();
  const hashed = encryptPassword(pass);
  return users.find((u) => u.username === user && u.password === hashed);
}

// CLI 
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// main menu
function mainMenu() {
  console.log("=== Menu Utama ===");
  console.log("1. Daftar");
  console.log("2. Masuk");
  rl.question("Pilih opsi (1/2): ", (option) => {
    if (option === "1") {
      signUp();
    } else if (option === "2") {
      signIn();
    } else {
      console.log("Opsi tidak dikenali.");
      rl.close();
    }
  });
}

// sign up
function signUp() {
  rl.question("Username: ", (user) => {
    rl.question("Password: ", (pass) => {
      const err = isValidInput(user, pass);
      if (err) {
        console.log("Validasi gagal: " + err);
        rl.close();
        return;
      }

      const hashed = encryptPassword(pass);
      if (storeUser(user, hashed)) {
        console.log("Pendaftaran berhasil!");
      }
      rl.close();
    });
  });
}

// Lojinnn
function signIn() {
  rl.question("Username: ", (user) => {
    rl.question("Password: ", (pass) => {
      const result = processLogin(user, pass);
      if (result) {
        console.log("Selamat datang, " + user + "!");
      } else {
        console.log("Login gagal. Username atau password salah.");
      }
      rl.close();
    });
  });
}

mainMenu();
