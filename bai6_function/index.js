function capitalizeFirstLetter(str) {
  return str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

let sentence = "học it khó vãi đạn";

let result = capitalizeFirstLetter(sentence);
console.log(result);
