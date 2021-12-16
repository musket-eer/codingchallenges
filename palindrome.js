function palindrome(word){
    var reversed = '';
    for (let i = 0; i<=  word.length; i++){
        reversed = word.charAt(i) + reversed
    }
     
    return reversed === word
}