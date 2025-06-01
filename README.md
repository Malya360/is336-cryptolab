# is336-cryptolab
CryptoLab: Interactive Cryptography Demonstrator
# CryptoLab: Interactive Cryptography Demonstrator

**CryptoLab** is an educational web application designed to provide users with an interactive way to explore fundamental cryptographic concepts. Currently, it features two main modules:

1. **SHA-256 Hash Function Demonstrator:**  
   Allows users to input any data and instantly see its corresponding SHA-256 hash. This module visually emphasizes key properties of hash functions, such as their one-way nature, deterministic output, and the avalanche effect.

2. **RSA Conceptual Demonstrator:**  
   Provides a simplified, illustrative walkthrough of asymmetric encryption principles using the concept of public and private key pairs. Users can generate conceptual keys, "encrypt" a message, and then "decrypt" it.

**Important Disclaimer:** The RSA module in CryptoLab is purely **conceptual and educational**. It does **not** perform actual mathematical RSA encryption and is **not secure for any real-world use**. Its purpose is solely to explain the *idea* behind public/private key cryptography. The SHA-256 hashing uses the standard algorithm via CryptoJS.

Deployed Application: [**Link to your deployed CryptoLab**](https://your-cryptolab.netlify.app) *(replace with your deployment link)*

## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Setup and Usage](#setup-and-usage)
- [Learning Objectives](#learning-objectives)
- [Screenshots (Optional)](#screenshots-optional)
- [Future Enhancements (Optional)](#future-enhancements-optional)
- [Author](#author)
- [License](#license)

## Features
- **Interactive Tabs:** Clean separation of modules for Hashing and Conceptual RSA.
- **SHA-256 Hashing:**
  - Input any text data.
  - Instantly generate and display its 256-bit SHA hash (in hexadecimal).
  - Demonstrates one-way property and avalanche effect.
- **Conceptual RSA Demonstration:**
  - Generate conceptual Public and Private key "placeholders".
  - "Encrypt" a message using the conceptual Public Key (e.g., string reversal).
  - "Decrypt" the message using the conceptual Private Key.
  - Highlights the asymmetric nature of public/private keys.
- **Input Validation:** Prevents empty data processing.
- **Modern & Clean UI:** Tech-inspired design, easy to use.
- **Responsive Design:** Adapts to various screen sizes.
- **Font Awesome Icons:** Visual cues for enhanced user experience.
- **Educational Focus:** Clear descriptions and disclaimers regarding security limitations.

## Technologies Used
- **Frontend:**
  - HTML5
  - CSS3 (Flexbox, Grid, custom styling)
  - JavaScript (ES6+) for logic and interactivity
- **Cryptography Library:**
  - [CryptoJS](https://cryptojs.gitbook.io) for SHA-256 Hashing (via CDN)
- **Icons:**
  - [Font Awesome](https://fontawesome.com/) (via CDN)
- **Fonts:**
  - [Google Fonts](https://fonts.google.com/) (e.g., Rajdhani, Roboto Mono)
- **Development Tools:**
  - Visual Studio Code (or preferred editor)
  - Browser Developer Tools
- **Version Control:**
  - Git & GitHub
- **Deployment:**
  - [Netlify](https://www.netlify.com/) / [GitHub Pages](https://pages.github.com/)

## Project Structure
is336-cryptolab/
├── index.html
├── css/
│ └── style.css
├── js/
│ └── script.js
└── README.md


## Setup and Usage
1. Clone this repository:
   ```bash
   git clone https://github.com/yourusername/cryptolab.git
cd cryptolab
