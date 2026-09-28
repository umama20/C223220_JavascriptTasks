function isPalindrome(str) 
{
    let phrase = "";

    for (let i = 0; i < str.length; i++) {
        let ch = str[i].toLowerCase();

        if ((ch >= 'a' && ch <= 'z') || (ch >= '0' && ch <= '9')) {
            phrase += ch;
        }
    }
    let reverse = "";

    for (let i = phrase.length - 1; i >= 0; i--) {
        reverse += phrase[i];
    }
    return phrase == reverse;
}
console.log(isPalindrome("racecar"));