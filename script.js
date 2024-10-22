// script.js

// Fungsi untuk menghasilkan password, sesuai dengan yang digunakan di test.js
function generatePassword(length, options) {
    const { includeUppercase, includeLowercase, includeNumbers, includeSpecialChars } = options;

    // Set karakter
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const specialChars = "!@#$%^&*()";

    let characterSet = "";
    if (includeUppercase) characterSet += uppercase;
    if (includeLowercase) characterSet += lowercase;
    if (includeNumbers) characterSet += numbers;
    if (includeSpecialChars) characterSet += specialChars;

    // Pastikan setidaknya satu jenis karakter dipilih
    if (characterSet === "") {
        throw new Error("At least one character type must be selected.");
    }

    // Membuat password
    let password = "";
    for (let i = 0; i < length; i++) {
        password += characterSet.charAt(Math.floor(Math.random() * characterSet.length));
    }

    return password;
}

// Jika di lingkungan browser, tambahkan event listener ke DOM
if (typeof document !== 'undefined') {
    document.getElementById('generateBtn').addEventListener('click', function() {
        const length = parseInt(document.getElementById('length').value, 10);
        const includeUppercase = document.getElementById('includeUppercase').checked;
        const includeLowercase = document.getElementById('includeLowercase').checked;
        const includeNumbers = document.getElementById('includeNumbers').checked;
        const includeSpecialChars = document.getElementById('includeSpecialChars').checked;

        const password = generatePassword(length, {
            includeUppercase,
            includeLowercase,
            includeNumbers,
            includeSpecialChars
        });

        document.getElementById('passwordOutput').textContent = password;
    });

    document.getElementById('copyBtn').addEventListener('click', function() {
        const password = document.getElementById('passwordOutput').textContent;
        if (password) {
            navigator.clipboard.writeText(password).then(() => {
                alert("Password disalin ke clipboard!");
            });
        }
    });
}

// Ekspor fungsi generatePassword agar dapat diakses oleh Node.js untuk keperluan testing
module.exports = { generatePassword };