// Mảng chứa các chuỗi
let array = [
  "apple pie",
  "banana split",
  "cherry tart",
  "apple cake",
  "pineapple",
];

let search = prompt("Mời bạn nhập chuỗi tìm kiếm:");

function findElements(array, search) {
  let result = array.filter((item) => item.includes(search));

  if (result.length > 0) {
    console.log(`Các phần tử trong mảng có chứa chuỗi "${search}" là:`);
    result.forEach((item) => console.log(item));
  } else {
    console.log(`Không có phần tử nào trong mảng có chứa chuỗi "${search}".`);
  }
}
