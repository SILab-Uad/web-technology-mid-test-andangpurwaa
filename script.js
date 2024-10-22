// TODO: Create the password generation logic
document.getElementById('generateBtn').addEventListener('click', function() {
    const length = document.getElementById('length').value;
    const includeUppercase = document.getElementById('includeUppercase').checked;
    const includeLowercase = document.getElementById('includeLowercase').checked;
    const includeNumbers = document.getElementById('includeNumbers').checked;
    const includeSpecialChars = document.getElementById('includeSpecialChars').checked;

    // Character sets
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const specialChars = "!@#$%^&*()";

    let characterSet = "";
    
    // TODO: Build the character set based on selected criteria
    if (includeUppercase) characterSet += uppercase;
    if (includeLowercase) characterSet += lowercase;
    if (includeNumbers) characterSet += numbers;
    if (includeSpecialChars) characterSet += specialChars;

    // Ensure at least one option is selected
    if (characterSet === "") {
        alert("Please select at least one criteria.");
        return;
    }

    // Generate password
    let password = "";
    for (let i = 0; i < length; i++) {
        password += characterSet.charAt(Math.floor(Math.random() * characterSet.length));
    }

    // TODO: Display the generated password
    document.getElementById('passwordOutput').textContent = password;
});

// TODO: Implement copy to clipboard functionality
document.getElementById('copyBtn').addEventListener('click', function() {
    const password = document.getElementById('passwordOutput').textContent;
    if (password) {
        navigator.clipboard.writeText(password).then(() => {
            alert("Password copied to clipboard!");
        });
    }
});