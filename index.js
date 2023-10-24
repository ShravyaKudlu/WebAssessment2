document.getElementById('checkButton').addEventListener('click', function() {
    var inputNumb = document.getElementById('inputNumb').value;
    var isPalindrome = checkPalindrome(inputNumb);
    displayResult(isPalindrome);
});

function checkPalindrome(num) {
    let reverseNum = 0;
    let temp = num;

    while (temp != 0) {
        let digit = temp % 10;
        reverseNum = reverseNum * 10 + digit;
        temp = Math.floor(temp / 10);
    }

    if(num == reverseNum){
        return true;
    }
    else{
        return false;
    }
}

function displayResult(isPalindrome) {
    var resultElement = document.getElementById('result');
    
    if (isPalindrome) {
        resultElement.textContent = "The input is a palindrome!";
    } else {
        resultElement.textContent = "The input is not a palindrome.";
    }
}
