function checkForSpam(message) {
    // Mesajı küçük harfe çevirerek yasaklı kelimeleri kontrol et
    const lowerCaseMessage = message.toLowerCase();
    
    // Eğer mesajda "spam" veya "sale" varsa true döndür
    if (lowerCaseMessage.includes("spam") || lowerCaseMessage.includes("sale")) {
        return true;
    }

    // Eğer yasaklı kelimeler yoksa false döndür
    return false;
}
console.log(checkForSpam("Latest technology news")); // false
console.log(checkForSpam("JavaScript weekly newsletter")); // false
console.log(checkForSpam("Get best sale offers now!")); // true
console.log(checkForSpam("Amazing SalE, only tonight!")); // true
console.log(checkForSpam("Trust me, this is not a spam message")); // true
console.log(checkForSpam("Get rid of sPaM emails. Our book in on sale!")); // true
console.log(checkForSpam("[SPAM] How to earn fast money?")); // true


