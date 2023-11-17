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
    var resultElement = document.getElementById('result2');
    
    if (isPalindrome) {
        resultElement.textContent = "The input is a palindrome!";
    } else {
        resultElement.textContent = "The input is not a palindrome.";
    }
}

document.getElementById('reverseButton').addEventListener('click', function() {
    var inputString = document.getElementById('inputString').value;
    var reversedString = reverseString(inputString);
    document.getElementById('result1').textContent = reversedString;
});

function reverseString(str) {
    let strRev = "";
    for(let x=str.length-1;x>=0;x--){
        strRev = strRev + str[x];
    }
    return strRev;
}

document.getElementById('calculateButton').addEventListener('click', function() {
    var subtotal = parseFloat(document.getElementById('subtotal').value);
    var tipPercentage = parseFloat(document.getElementById('tipPercentage').value);
    var totalAmount = calculateTotal(subtotal, tipPercentage);
    document.getElementById('totalAmount').textContent = "Total Amount: $" + totalAmount.toFixed(2);
});

function calculateTotal(subtotal, tipPercentage) {
    var tipAmount = (subtotal * tipPercentage) / 100;
    return subtotal + tipAmount;
}
