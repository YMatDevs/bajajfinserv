

function compute(dataArray) {
  const odd_numbers = [];
  const even_numbers = [];
  const alphabets = [];
  const special_characters = [];
  let sum = 0;
  let concat_string = "";

  dataArray.forEach(item => {
    if (!isNaN(item) && !isNaN(parseFloat(item))) {
      const num = Number(item);
      sum += num;
      if (num % 2 === 0) {
        even_numbers.push(item);
      } else {
        odd_numbers.push(item);
      }
    } 
    else if (/^[a-zA-Z]+$/.test(item)) {
      alphabets.push(item.toUpperCase());
      concat_string += item;
    } 
    else {
      special_characters.push(item);
    }
  });

  const reversed = concat_string.split("").reverse();
  let new_concat_string = "";
  reversed.forEach((ch, i) => {
    new_concat_string += i % 2 === 0 ? ch.toUpperCase() : ch.toLowerCase();
  });

  return {
    odd_numbers,
    even_numbers,
    alphabets,
    special_characters,
    sum: sum.toString(),
    concat_string: new_concat_string
  };
}




export default compute;