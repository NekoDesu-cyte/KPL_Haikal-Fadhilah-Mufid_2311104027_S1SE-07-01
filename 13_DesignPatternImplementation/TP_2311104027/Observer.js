// Notifier class to manage event subscriptions
class Notifier {
    constructor() {
        this.subscribers = {};
    }

    on(event, handler) {
        if (!this.subscribers[event]) {
            this.subscribers[event] = [];
        }
        this.subscribers[event].push(handler);
    }

    trigger(event, payload) {
        if (this.subscribers[event]) {
            this.subscribers[event].forEach(fn => fn(payload));
        }
    }
}

// TextEditor class that fires events
class TextEditor {
    constructor() {
        this.notifier = new Notifier();
        this.currentFile = null;
    }

    openFile(filename) {
        this.currentFile = { name: filename };
        this.notifier.trigger("fileOpened", this.currentFile.name);
    }

    saveFile() {
        if (this.currentFile) {
            this.notifier.trigger("fileSaved", this.currentFile.name);
        }
    }
}

// Logger class (simulates logging)
class ConsoleLogger {
    constructor(messageTemplate) {
        this.messageTemplate = messageTemplate;
    }

    log(filename) {
        console.log(this.messageTemplate.replace("%s", filename));
    }
}

// Email simulator (shows output in terminal only)
class EmailSimulator {
    constructor(recipient, messageTemplate) {
        this.recipient = recipient;
        this.messageTemplate = messageTemplate;
    }

    send(filename) {
        const message = this.messageTemplate.replace("%s", filename);
        console.log(`(Simulasi Kirim Email ke ${this.recipient}) => ${message}`);
    }
}

// Setup
const editor = new TextEditor();

const logger = new ConsoleLogger("LOG: File '%s' telah dibuka.");
const email = new EmailSimulator("admin@example.com", "PERINGATAN: File '%s' telah disimpan!");

editor.notifier.on("fileOpened", logger.log.bind(logger));
editor.notifier.on("fileSaved", email.send.bind(email));

// Simulasi penggunaan
editor.openFile("laporan_keuangan.pdf");
editor.saveFile();
