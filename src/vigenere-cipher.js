class VigenereCipheringMachine {
    constructor(isDirect = true) {
      this.isDirect = isDirect;
      this.alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    }
  
    encrypt(msg, key) {
      this.checkError(msg, key);
  
      return this.algorithm(msg.toUpperCase(), key.toUpperCase());
    }
  
    decrypt(msg, key) {
      this.checkError(msg, key);
  
      return this.algorithm(msg.toUpperCase(), key.toUpperCase(), true);
    }
  
    checkError(msg, key) {
      if (!msg || !key) {
        throw Error;
      }
    }
  
    algorithm(msg, key, isDecrypt = false) {
      const { alphabet, isDirect } = this;
      const alphabetLength = alphabet.length;
      const result = [];
  
      for (let i = 0; i < msg.length; i++) {
        const currentChar = msg.charAt(i);
        const indexedChar = alphabet.indexOf(key.charAt(i % key.length));
        const correctIndexChar = isDecrypt ?
          alphabet.indexOf(currentChar) - indexedChar + alphabetLength :
          alphabet.indexOf(currentChar) + indexedChar;
  
        if (alphabet.includes(currentChar)) {
          result.push(alphabet.charAt(correctIndexChar % alphabetLength));
        } else {
          result.push(currentChar);
          msg = msg.slice(0, i) + msg.slice(i + 1);
          i--;
        }
      }
  
      return isDirect ? result.join('') : result.reverse().join('');
    }
  }
  
  module.exports = VigenereCipheringMachine;
