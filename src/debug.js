/* eslint-disable no-param-reassign */
const clearArr = (arr) => {
  arr.length = 0;
  return arr
};
console.log(clearArr([1,2,3]))

const getFirstItem = (array) => {
   
  return array[0]
};
array = ['monkey','snail','pig']

console.log(getFirstItem(array))
console.log(array)
module.exports = {
  clearArr,
  getFirstItem,
}
