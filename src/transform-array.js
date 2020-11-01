const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error();
  }
  
  let result = [];

  arr.forEach(item=>{
    result.push(item);
  });

  result.forEach((element, index) => {
    element == "--discard-prev" && index == 0
      ? result.splice(index, 1, "--delete--")
      : element == "--discard-prev" && index != 0
      ? result.splice(index - 1, 2, "--delete--")
      : result;
    element == "--discard-next" && index == result.length - 1
      ? result.splice(index, 1, "--delete--")
      : element == "--discard-next" && index != result.length - 1
      ? result.splice(index, 2, "--delete--")
      : result;
    element == "--double-prev" && index == 0
      ? result.splice(index, 1, "--delete--")
      : element == "--double-prev" && index != 0
      ? result.splice(index, 1, result[index - 1])
      : result;
    element == "--double-next" && index == result.length - 1
      ? result.splice(index, 1, "--delete--")
      : element == "--double-next" && index != result.length - 1
      ? result.splice(index, 1, result[index + 1])
      : result;
  });

  const final = result.filter((element) => element != "--delete--");
  return final;
};
