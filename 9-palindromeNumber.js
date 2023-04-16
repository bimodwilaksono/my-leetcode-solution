function palindromeNumber(num) {
    const myFunc = (num) => Number(num);
    let numArr = Array.from(String(num), myFunc);
    for (let i = 0, j = numArr.length - 1; i < numArr.length / 2; i++, j--) {
        if (numArr[i] !== numArr[j]) return false;
    }
    return true;
}

console.log(palindromeNumber(121)); // true
console.log(palindromeNumber(-121)); // false
