// confirm("Mày chắc chưa");
/* Hiển thị ở màn hình console
console.log(...) */
// const PI = 3.14; // Khai báo hằng: các biến ko thể thay đổi giá trị
//Từ giờ chỉ dùng let để khai báo biến vì ko bị hoisting giống như var

// Kiểm tra kiểu dữ liệu
// c = 10;
// let name = "Hồ Xuân Hùng";
// let address = "Hà Nội";
// let city = "Hồ Chí Minh";
// let check = false
// console.log("Kiểu dữ liệu:", typeof c);
// console.log("Kiểu dữ liệu:", typeof name);
// console.log("Kiểu dữ liệu:", typeof check);

//Nhận xét: JS ko phải là ngôn ngữ chặt chẽ (weak typing)

//Kiểu dữ liệu của biến phụ thuộc hoàn toàn vào giá trị tại 1 thời điểm cụ thể

//Toán tử toán học: + - * / %

//Toán tử logic (so sánh): <; >; >=; <=; ==(so sánh mỗi giá trị); ===(so sánh cả giá trị và kiểu dữ liệu); !(Phủ định);

//Toán tử logic: &&, ||, !

let name = "Nguyễn Tùng Nam";
let weight = 72;
let height = 1.72;
let sex = "male";
let address = "Hà Nội";
let BMI = weight / (height * height);
let phoneNumber = "0123456789";
alert("Tên của bạn là" + name);
alert("Chiều cao của bạn là" + height + "m");
alert("Cân nặng của bạn là" + weight + "kg");
alert("Số điện thoại của bạn là" + phoneNumber);
alert("Chỉ số BMI của bạn là" + BMI);

console.log("Tên của bạn là" + name);
console.log("Chiều cao của bạn là" + height + "m");
console.log("Cân nặng của bạn là" + weight + "kg");
console.log("Số điện thoại của bạn là" + phoneNumber);
console.log("Quê của bạn là thành phố" + address);
console.log("Giới tính của bạn là" + sex);
console.log("Chỉ số BMI của bạn là" + BMI);

/*Các hàm dựng sẵn
1/Window: - Alert
- Confirm
- Prompt
2/ Console: - log
- warn
- error
*/
