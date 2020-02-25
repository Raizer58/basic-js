class VigenereCipheringMachine {
  constructor (typeMachine) {
      if (typeMachine == false){
          this.typeMachine = "reverse";

          this.encrypt = function (message, key) {

            if (key && message){
              let cipherPhrase = "";
              message = message.toUpperCase();
              key = key.toUpperCase();
              
              while(message.length > key.length){
                key = key.concat(key);
              };
              
              for (let i=0; message.length>=i; i++){
                
                if(message.charCodeAt(i) > 64 && message.charCodeAt(i) < 91){
                  cipherPhrase += String.fromCharCode(65+(message.charCodeAt(i) + key.charCodeAt(i) - 130)%26)
                }
                else {
                  cipherPhrase += message.charAt(i);
                  key = key.split("");
                  key.splice(i,0," ");
                  key = key.join("");
                };
              };

              return cipherPhrase.split('').reverse().join('');
            }
            else {
              throw "Error"
            };
          };
        
          this.decrypt = function (encryptedMessage, key) {
            if (key && encryptedMessage){
              let cipherPhrase = "";
              encryptedMessage = encryptedMessage.toUpperCase();
              key = key.toUpperCase();
              
              while(encryptedMessage.length > key.length){
                key = key.concat(key);
              };
              
              for (let i=0; encryptedMessage.length>=i; i++){
                
                if(encryptedMessage.charCodeAt(i) > 64 && encryptedMessage.charCodeAt(i) < 91){
                  cipherPhrase += String.fromCharCode(65+Math.abs(encryptedMessage.charCodeAt(i) + 26 - key.charCodeAt(i))%26);
                }
                else {
                  cipherPhrase += encryptedMessage.charAt(i);
                  key = key.split("");
                  key.splice(i,0," ");
                  key = key.join("");
                };
              };

              return cipherPhrase.split('').reverse().join('');
            }
            else {
              throw "Error"
            };
          };
      }

      else {
          this.typeMachine = "direct";

          this.encrypt = function (message, key) {
            if (key && message){
              let cipherPhrase = "";
              message = message.toUpperCase();
              key = key.toUpperCase();
              
              while(message.length > key.length){
                key = key.concat(key);
              };
              
              for (let i=0; message.length>=i; i++){
                
                if(message.charCodeAt(i) > 64 && message.charCodeAt(i) < 91){
                  cipherPhrase += String.fromCharCode(65+(message.charCodeAt(i) + key.charCodeAt(i) - 130)%26)
                }
                else {
                  cipherPhrase += message.charAt(i);
                  key = key.split("");
                  key.splice(i,0," ");
                  key = key.join("");
                };
              };

              return cipherPhrase;
            }
            else {
              throw "Error"
            };
          };
        
          this.decrypt = function (encryptedMessage, key) {
            if (key && encryptedMessage){
              let cipherPhrase = "";
              encryptedMessage = encryptedMessage.toUpperCase();
              key = key.toUpperCase();
              
              while(encryptedMessage.length > key.length){
                key = key.concat(key);
              };
              
              for (let i=0; encryptedMessage.length>=i; i++){
                
                if(encryptedMessage.charCodeAt(i) > 64 && encryptedMessage.charCodeAt(i) < 91){               
                  cipherPhrase += String.fromCharCode(65+Math.abs(encryptedMessage.charCodeAt(i) + 26 - key.charCodeAt(i))%26);
                }
                else {
                  cipherPhrase += encryptedMessage.charAt(i);
                  key = key.split("");
                  key.splice(i,0," ");
                  key = key.join("");
                };
              };

              return cipherPhrase;
            }
            else {
              throw "Error"
            };
          };
      }
  };
}

module.exports = VigenereCipheringMachine;
