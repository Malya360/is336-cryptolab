document.addEventListener('DOMContentLoaded', () => {
    const tabLinks = document.querySelectorAll('.tab-link');
    const tabContents = document.querySelectorAll('.tab-content');

    // Tab navigation
    tabLinks.forEach(link => {
        link.addEventListener('click', () => {
            const targetTab = link.dataset.tab;

            tabLinks.forEach(tl => tl.classList.remove('active'));
            link.classList.add('active');

            tabContents.forEach(tc => {
                if (tc.id === targetTab) {
                    tc.classList.add('active');
                } else {
                    tc.classList.remove('active');
                }
            });
        });
    });

    // --- Hash Function Tab ---
    const hashInput = document.getElementById('hash-input');
    const generateHashBtn = document.getElementById('generateHashBtn');
    const hashOutput = document.getElementById('hash-output');
    const hashError = document.getElementById('hash-error');

    generateHashBtn.addEventListener('click', () => {
        const data = hashInput.value;
        hashError.textContent = ''; // Clear previous error

        if (!data.trim()) {
            hashError.textContent = 'Input data cannot be empty.';
            hashInput.focus();
            hashOutput.textContent = '';
            return;
        }

        try {
            const originalIconClass = generateHashBtn.querySelector('i').className;
            generateHashBtn.querySelector('i').className = 'fas fa-spinner fa-spin';
            generateHashBtn.disabled = true;

            setTimeout(() => { // Simulate processing delay
                const hashedData = CryptoJS.SHA256(data).toString(CryptoJS.enc.Hex);
                hashOutput.textContent = hashedData;
                generateHashBtn.querySelector('i').className = originalIconClass;
                generateHashBtn.disabled = false;
            }, 500);
        } catch (e) {
            hashError.textContent = 'Error generating hash. Ensure CryptoJS is loaded.';
            console.error("Hashing error:", e);
            generateHashBtn.disabled = false; // Re-enable on error
        }
    });

    // --- RSA (Conceptual) Tab ---
    const generateRSAKeysBtn = document.getElementById('generateRSAKeysBtn');
    const rsaPublicKeyDisplay = document.getElementById('rsa-public-key');
    const rsaPrivateKeyDisplay = document.getElementById('rsa-private-key');
    const rsaKeyError = document.getElementById('rsa-key-error');

    const rsaMessageInput = document.getElementById('rsa-message-input');
    const rsaEncryptBtn = document.getElementById('rsaEncryptBtn');
    const rsaDecryptBtn = document.getElementById('rsaDecryptBtn');
    const rsaProcessedOutput = document.getElementById('rsa-processed-output');
    const rsaMessageError = document.getElementById('rsa-message-error');

    let conceptualPublicKey = null;
    let conceptualPrivateKey = null;
    let conceptualEncryptedMessage = null; // Store for decryption

    generateRSAKeysBtn.addEventListener('click', () => {
        rsaKeyError.textContent = '';
        // Simple placeholders for conceptual demonstration
        conceptualPublicKey = "CONCEPT_PK_" + Math.floor(Math.random() * 100000 + 10000);
        conceptualPrivateKey = "CONCEPT_SK_" + Math.floor(Math.random() * 100000 + 10000);

        const originalIconClass = generateRSAKeysBtn.querySelector('i').className;
        generateRSAKeysBtn.querySelector('i').className = 'fas fa-spinner fa-spin';
        generateRSAKeysBtn.disabled = true;

        setTimeout(() => { // Simulate key gen
            rsaPublicKeyDisplay.textContent = conceptualPublicKey;
            rsaPrivateKeyDisplay.textContent = conceptualPrivateKey;
            rsaKeyError.textContent = ''; // Clear error if keys generated
            generateRSAKeysBtn.querySelector('i').className = originalIconClass;
            generateRSAKeysBtn.disabled = false;
        }, 500);
    });

    function rsaConceptualProcess(mode) {
        rsaMessageError.textContent = ''; // Clear previous error
        rsaProcessedOutput.textContent = ''; // Clear output

        if (!conceptualPublicKey || !conceptualPrivateKey) {
            rsaMessageError.textContent = 'Please generate key pair first.';
            // Optionally, focus on key gen button or show error near keys
            rsaKeyError.textContent = 'Keys not generated.';
            return;
        }

        const message = rsaMessageInput.value;

        if (mode === 'encrypt') {
            if (!message.trim()) {
                rsaMessageError.textContent = 'Message to encrypt cannot be empty.';
                rsaMessageInput.focus();
                return;
            }
            // Conceptual "encryption" - e.g., reverse the string and add a prefix
            conceptualEncryptedMessage = `[ENCRYPTED_WITH_${conceptualPublicKey}]:${message.split("").reverse().join("")}`;
            rsaProcessedOutput.textContent = conceptualEncryptedMessage;
        } else if (mode === 'decrypt') {
            if (!conceptualEncryptedMessage) { // Ensure there's something "encrypted" to decrypt
                rsaMessageError.textContent = 'Please encrypt a message first for conceptual decryption.';
                 rsaMessageInput.focus();
                return;
            }
            // Conceptual "decryption" - e.g., reverse the "encrypted" string after removing prefix
            // This assumes conceptualEncryptedMessage is what we just "encrypted"
            const prefix = `[ENCRYPTED_WITH_${conceptualPublicKey}]:`;
            if (conceptualEncryptedMessage.startsWith(prefix)) {
                const originalReversed = conceptualEncryptedMessage.substring(prefix.length);
                const decryptedMessage = originalReversed.split("").reverse().join("");
                rsaProcessedOutput.textContent = decryptedMessage;
            } else {
                 rsaMessageError.textContent = 'Cannot decrypt this message conceptually (format mismatch).';
            }
        }
    }
    
    function simulateButtonProcessing(button, callback) {
        const originalIconClass = button.querySelector('i').className;
        button.querySelector('i').className = 'fas fa-spinner fa-spin';
        button.disabled = true;
        // Disable other RSA process button
        (button.id === 'rsaEncryptBtn' ? rsaDecryptBtn : rsaEncryptBtn).disabled = true;

        setTimeout(() => {
            callback();
            button.querySelector('i').className = originalIconClass;
            button.disabled = false;
            (button.id === 'rsaEncryptBtn' ? rsaDecryptBtn : rsaEncryptBtn).disabled = false;
        }, 500);
    }


    rsaEncryptBtn.addEventListener('click', () => {
        simulateButtonProcessing(rsaEncryptBtn, () => rsaConceptualProcess('encrypt'));
    });

    rsaDecryptBtn.addEventListener('click', () => {
         simulateButtonProcessing(rsaDecryptBtn, () => rsaConceptualProcess('decrypt'));
    });

    // Activate the first tab by default
    tabLinks[0].click();
});