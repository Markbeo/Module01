let str = prompt("Mời nhập vào chuỗi");
let char = prompt("Mời nhập vào ký tự muốn đếm");
let count = 0;
function countChar(str, char) {
  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) {
      count++;
    }
  }
  return count;
}
let result = countChar(str, char);
alert(`Ký tự ${char} xuất hiện ${result} lần`);
