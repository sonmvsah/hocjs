/**
 * Check xem chuỗi có phải chuỗi đối xứng hay không
 * checkString("acbecba") = true
 * checkString("abe") = false
 * up
 */

const string1 = "abcecba";
const string2 = "abc";

function checkString(str) {
    var newArr = [];
    for (var i in str) {
        newArr.unshift(str[i]);
        var b = newArr.join("");
    }
    if (b === str) {
        return true;
    }
    return false;
}
console.log(checkString(string1));
console.log(checkString(string2));